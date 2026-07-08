"use client";

import { motion } from 'framer-motion';
import { CheckCircle, Download, MessageCircle, FileText } from 'lucide-react';
import styles from '../page.module.css';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className={styles.main} style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <div className={styles.heroBackground}></div>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ type: "spring", bounce: 0.5 }}
          style={{ 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid var(--border-color)', 
            padding: '4rem', 
            borderRadius: '24px',
            maxWidth: '600px',
            margin: '0 auto',
            backdropFilter: 'blur(20px)'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <CheckCircle size={80} color="#25D366" style={{ margin: '0 auto 1.5rem' }} />
          </motion.div>
          
          <h1 className={styles.heroTitle} style={{ fontSize: '3rem', marginBottom: '1rem' }}>Payment Successful!</h1>
          <p className={styles.heroSubtitle} style={{ marginBottom: '3rem' }}>
            Welcome to the GymOS family. Your account is ready to be set up.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1.125rem' }}>
              <Download size={20} />
              Download GymOS Software
            </button>
            <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1.125rem' }}>
              <FileText size={20} />
              View Installation Guide
            </button>
            <a href="https://wa.me/917559368068" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ background: '#25D366', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1.125rem' }}>
              <MessageCircle size={20} />
              WhatsApp Support
            </a>
          </div>
          
          <div style={{ marginTop: '3rem' }}>
            <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}>
              Return to Homepage
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
