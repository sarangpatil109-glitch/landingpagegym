import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log("========== CASHFREE CHECKOUT API INITIALIZED ==========");
  
  try {
    const appId = process.env.NEXT_PUBLIC_CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    if (!appId || !secretKey) {
      console.error("ERROR: Missing Cashfree environment variables.");
      return NextResponse.json(
        { error: "Payment gateway is not configured on the server." }, 
        { status: 500 }
      );
    }

    // Determine environment (Sandbox vs Prod)
    const isSandbox = appId.includes('TEST') || appId.includes('sandbox') || process.env.NODE_ENV !== 'production';
    const cashfreeApiUrl = isSandbox 
      ? 'https://sandbox.cashfree.com/pg/orders' 
      : 'https://api.cashfree.com/pg/orders';
      
    console.log(`Environment: ${isSandbox ? 'SANDBOX' : 'PRODUCTION'}`);
    console.log(`API URL: ${cashfreeApiUrl}`);

    const orderId = `ORDER_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    console.log(`Generated Order ID: ${orderId}`);

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
        return_url: `${siteUrl}/thank-you?order_id={order_id}`,
      }
    };

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

    const data = await response.json();
    console.log("Cashfree API Response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error("Cashfree API Error:", data.message || "Unknown error");
      return NextResponse.json({ error: data.message || "Failed to create order" }, { status: response.status });
    }

    if (!data.payment_session_id) {
      console.error("Error: payment_session_id is missing from response");
      return NextResponse.json({ error: "Invalid response from payment gateway" }, { status: 500 });
    }

    console.log(`Successfully created session: ${data.payment_session_id}`);
    
    return NextResponse.json({ 
      payment_session_id: data.payment_session_id,
      order_id: orderId 
    });

  } catch (error) {
    console.error("Internal Server Error in checkout route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" }, 
      { status: 500 }
    );
  }
}
