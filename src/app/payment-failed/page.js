"use client";

import { motion } from 'framer-motion';
import { XCircle, RefreshCw, MessageCircle, Home } from 'lucide-react';
import styles from '../page.module.css';
import Link from 'next/link';

export default function PaymentFailed() {
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
            background: 'linear-gradient(145deg, rgba(239, 68, 68, 0.05) 0%, rgba(0,0,0,0.5) 100%)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            padding: '4rem 2rem', 
            borderRadius: '24px',
            maxWidth: '600px',
            width: '100%',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
            style={{ display: 'inline-flex', background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}
          >
            <XCircle size={72} color="#ef4444" />
          </motion.div>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Payment Failed</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 2.5rem' }}>
            We couldn't process your payment. This could be due to a network issue, insufficient funds, or a bank decline. Please try again.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '350px', margin: '0 auto' }}>
            <Link href="/#pricing" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1.125rem', padding: '1rem', background: '#ef4444' }}>
              <RefreshCw size={20} />
              Retry Payment
            </Link>
            
            <a href="https://wa.me/917559368068" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1rem', background: '#25D366', color: 'white', border: 'none' }}>
              <MessageCircle size={18} />
              Contact WhatsApp Support
            </a>
          </div>
          
          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Home size={16} />
              Return to Homepage
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
