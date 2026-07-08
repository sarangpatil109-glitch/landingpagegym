import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log("========== CASHFREE CHECKOUT API INITIALIZED ==========");
  
  try {
    console.log("STEP 1: Initializing Variables");
    console.log("SITE_URL =", process.env.NEXT_PUBLIC_SITE_URL);
    console.log("NODE_ENV =", process.env.NODE_ENV);

    const appId = process.env.NEXT_PUBLIC_CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

    console.log("STEP 2: Validating App ID and Secret Key");
    if (!appId || !secretKey) {
      console.error("ERROR: Missing Cashfree environment variables.");
      return NextResponse.json(
        { 
          success: false,
          step: "validation-app-keys",
          message: "Payment gateway is not configured on the server. App ID or Secret Key missing.",
          siteUrl: process.env.NEXT_PUBLIC_SITE_URL
        }, 
        { status: 500 }
      );
    }

    console.log("STEP 3: Validating SITE_URL existence");
    if (!SITE_URL) {
      console.error("ERROR: NEXT_PUBLIC_SITE_URL environment variable is missing or undefined.");
      return NextResponse.json(
        { 
          success: false,
          step: "validation-site-url-exists",
          message: "Server Configuration Error: NEXT_PUBLIC_SITE_URL is not set.",
          siteUrl: process.env.NEXT_PUBLIC_SITE_URL
        }, 
        { status: 500 }
      );
    }

    console.log("STEP 4: Determining Environment (Sandbox vs Prod)");
    const isSandbox = appId.includes('TEST') || appId.includes('sandbox') || process.env.NODE_ENV !== 'production';
    const cashfreeApiUrl = isSandbox 
      ? 'https://sandbox.cashfree.com/pg/orders' 
      : 'https://api.cashfree.com/pg/orders';

    console.log("STEP 5: Validating SITE_URL format for Production");
    if (!isSandbox) {
      if (!SITE_URL.startsWith('https://') || SITE_URL.includes('localhost')) {
        console.error(`ERROR: Invalid NEXT_PUBLIC_SITE_URL (${SITE_URL}). Cashfree Production requires HTTPS.`);
        return NextResponse.json(
          { 
            success: false,
            step: "validation-site-url-format",
            message: "Cashfree Production requires a valid HTTPS URL (NEXT_PUBLIC_SITE_URL). Localhost is not allowed.",
            siteUrl: process.env.NEXT_PUBLIC_SITE_URL
          }, 
          { status: 400 }
        );
      }
    } else {
      if (!SITE_URL.startsWith('https://') || SITE_URL.includes('localhost')) {
        console.warn(`WARNING: You are using ${SITE_URL}. Cashfree Production requires HTTPS. Localhost is permitted in Sandbox, but some Cashfree features may still reject HTTP.`);
      }
    }
      
    console.log("STEP 6: Generating Order ID and Payload");
    console.log(`Environment: ${isSandbox ? 'SANDBOX' : 'PRODUCTION'}`);
    console.log(`API URL: ${cashfreeApiUrl}`);

    const orderId = `ORDER_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    console.log(`Generated Order ID: ${orderId}`);

    const return_url = `${SITE_URL}/thank-you?order_id={order_id}`;
    console.log("RETURN_URL:", return_url);

    const orderPayload = {
      order_id: orderId,
      order_amount: 1499.00,
      order_currency: "INR",
      customer_details: {
        customer_id: `CUST_${Date.now()}`,
        customer_phone: "9999999999", // placeholder
        customer_email: "customer@example.com"
      },
      order_meta: {
        return_url: return_url,
      }
    };

    console.log("STEP 7: Calling Cashfree API");
    console.log("Sending payload to Cashfree:", JSON.stringify(orderPayload, null, 2));

    const response = await fetch(cashfreeApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': appId,
        'x-client-secret': secretKey,
        'x-api-version': '2023-08-01'
      },
      body: JSON.stringify(orderPayload)
    });

    console.log("STEP 8: Parsing Cashfree API Response");
    const data = await response.json();
    console.log("Cashfree API Response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error("Cashfree API Error:", data.message || "Unknown error");
      return NextResponse.json(
        { 
          success: false,
          step: "cashfree-api-error",
          message: data.message || "Failed to create order via Cashfree API",
          siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
          apiResponse: data
        }, 
        { status: response.status }
      );
    }

    if (!data.payment_session_id) {
      console.error("Error: payment_session_id is missing from response");
      return NextResponse.json(
        { 
          success: false,
          step: "cashfree-missing-session-id",
          message: "Invalid response from payment gateway. payment_session_id missing.",
          siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
          apiResponse: data
        }, 
        { status: 500 }
      );
    }

    console.log("STEP 9: Returning Success");
    console.log(`Successfully created session: ${data.payment_session_id}`);
    
    return NextResponse.json({ 
      success: true,
      payment_session_id: data.payment_session_id,
      order_id: orderId 
    });

  } catch (error) {
    console.error("========== FATAL CHECKOUT API ERROR ==========");
    console.error(error);
    return NextResponse.json(
      { 
        success: false,
        message: error.message,
        stack: error.stack,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL
      }, 
      { status: 500 }
    );
  }
}
