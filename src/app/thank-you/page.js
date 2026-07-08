"use client";

import { motion } from 'framer-motion';
import { CheckCircle, Download, MessageCircle, FileText, LayoutDashboard, Mail, Copy, SmartphoneNfc } from 'lucide-react';
import styles from '../page.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ThankYou() {
  const [txnId, setTxnId] = useState('');

  useEffect(() => {
    setTxnId(`TXN-${Math.floor(100000 + Math.random() * 900000)}`);
  }, []);

  return (
    <main className={styles.main} style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <div className={styles.heroBackground}></div>
      
      {/* Navbar Minimal */}
      <nav className={`${styles.glass}`} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '1rem 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>Gym<span className="gradient-text-primary">OS</span></Link>
      </nav>

      <div className="container" style={{ textAlign: 'center', padding: '8rem 1rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }} 
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(145deg, rgba(37,99,235,0.05) 0%, rgba(0,0,0,0.5) 100%)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            padding: '3rem 2rem', 
            borderRadius: '24px',
            maxWidth: '700px',
            width: '100%',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 10 }}
            style={{ display: 'inline-flex', background: 'rgba(37, 211, 102, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}
          >
            <CheckCircle size={64} color="#25D366" />
          </motion.div>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Payment Successful!</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '2rem' }}>
            Thank you for purchasing GymOS. Your order has been confirmed.
          </p>

          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', marginBottom: '3rem', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>Order Details</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Plan</span>
              <span style={{ fontWeight: 600 }}>GymOS Lifetime</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Amount Paid</span>
              <span style={{ fontWeight: 600 }}>₹1,499.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Transaction ID</span>
              <span style={{ fontWeight: 600, color: 'var(--primary)', fontFamily: 'monospace' }}>{txnId}</span>
            </div>
          </div>

          <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Next Steps</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>1</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Access Your Dashboard</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Log in to your admin panel to start setting up your gym.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>2</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Add Your First Member</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>See the magic happen when their website is generated in 3 seconds.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>3</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Connect WhatsApp (Optional)</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Link your number in settings to enable automated reminders.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px', margin: '0 auto' }}>
            <a href="https://maingymsoftwere.vercel.app/dashboard" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1.125rem', padding: '1rem' }}>
              <LayoutDashboard size={20} />
              Go to Dashboard
            </a>
            <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1rem' }}>
              <Download size={18} />
              Download Invoice
            </button>
          </div>
          
        </motion.div>

        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}
        >
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Need Help?</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href="https://wa.me/917559368068" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '99px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <MessageCircle size={20} />
              WhatsApp Support (7559368068)
            </a>
            <a href="mailto:support@gymos.com" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '99px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
              <Mail size={20} />
              Email Support
            </a>
          </div>
          <Link href="/" style={{ marginTop: '1rem', color: 'var(--text-muted)', textDecoration: 'underline' }}>
            Return to Homepage
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
