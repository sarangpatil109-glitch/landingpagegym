"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Users, Globe, Smartphone, Shield, Clock, TrendingUp, Link, SmartphoneNfc, LayoutDashboard, SunMoon, Rocket, XCircle, RefreshCw, Headset, Download, CreditCard, MessageCircle, BarChart3, Cloud, Lock, Infinity, QrCode, PlayCircle, LockKeyhole } from 'lucide-react';
import styles from './page.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/917559368068?text=Hi%20GymOS%20Team!%20I%20am%20interested%20in%20purchasing%20GymOS.%20Please%20share%20a%20demo." target="_blank" rel="noopener noreferrer" className={styles.floatingWhatsapp} aria-label="WhatsApp Sales">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.1 2.9C18.6.4 15.3-.9 11.8-.9 5.3-.9 0 4.4 0 10.9c0 2.2.6 4.3 1.6 6.1L.1 23.9l7.1-1.9c1.8.9 3.8 1.4 5.8 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.7-8.7zm-9.3 20.3c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8 1 1-3.7-.2-.4c-1-1.6-1.5-3.5-1.5-5.4 0-5.5 4.5-10 10.1-10 2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1-.1 5.4-4.6 9.9-10 10.1z"></path><path d="M17.4 14.1c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-1-1-1.2-1.4-1.4-1.7-.2-.3 0-.4.1-.6.1-.1.3-.3.5-.5.2-.2.3-.3.4-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.1 3.2 1.3 3.4.2.3 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.6.8.3 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.4-.3-.7-.5z"></path></svg>
        <span className={styles.whatsappTooltip}>Need Help?<br/>Chat with Sales Executive</span>
      </a>

      {/* Navbar */}
      <nav className={`${styles.glass} container`} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>Gym<span className="gradient-text-primary">OS</span></div>
        <a href="https://wa.me/917559368068?text=Hi%20GymOS%20Team!%20I%20am%20interested%20in%20purchasing%20GymOS.%20Please%20share%20a%20demo." target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Chat with Sales Executive">
          💬 Chat with Sales Executive
        </a>
      </nav>

      {/* SECTION 1 - HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className="container">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              🚀 India's First Gym Software That Automatically Creates a <span className="gradient-text-primary">Personal Website</span> for Every Member in Just 3 Seconds.
            </motion.h1>
            
            <motion.p className={styles.heroSubtitle} variants={fadeUp} style={{ fontSize: '1.35rem' }}>
              Manage attendance, memberships, payments, trainers, WhatsApp reminders and automatically generate a beautiful personal website for every gym member.
              <br/><br/>
              <span style={{ color: 'white', fontWeight: 600 }}>No coding. No technical knowledge. Everything in one software.</span>
            </motion.p>

            <motion.div variants={fadeUp} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 2.5rem', borderRadius: '16px', display: 'inline-block', marginBottom: '2.5rem', textAlign: 'left', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <div style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.875rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', letterSpacing: '0.05em' }}>
                <span className={styles.spin} style={{ display: 'inline-block' }}>🔥</span> LAUNCH OFFER
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem' }}>₹1499 <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontWeight: 500 }}>ONE-TIME PAYMENT</span></div>
              <div style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: 600 }}>NO MONTHLY CHARGES</div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.95rem', fontWeight: 500 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="#25D366" /> Personal Website for Every Member</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="#25D366" /> Automatic WhatsApp Reminders</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="#25D366" /> Free Installation</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="#25D366" /> 1 Year Free Support</div>
              </div>
            </motion.div>
            
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <a href="https://wa.me/917559368068?text=Hi%20GymOS%20Team!%20I%20am%20interested%20in%20purchasing%20GymOS.%20Please%20share%20a%20demo." target="_blank" rel="noopener noreferrer" className={`btn-primary ${styles.glowCta}`} style={{ padding: '1.25rem 2.5rem', fontSize: '1.25rem' }}>
                💬 Chat with Sales Executive
              </a>
              <a href="https://maingymsoftwere.vercel.app/dashboard" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <PlayCircle size={24} /> Watch Live Demo
              </a>
            </motion.div>
            
            <motion.div variants={fadeUp} style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <div style={{ display: 'flex' }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-main)' }}>Trusted by 500+ Gyms across India</span>
            </motion.div>
          </motion.div>
          
          {/* SECTION 2 - HERO VISUAL */}
          <motion.div 
            className={styles.mockupContainer}
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            style={{ marginTop: '5rem', display: 'flex', padding: 0, background: 'transparent', border: 'none', boxShadow: 'none' }}
          >
            {/* Dashboard Mockup (Left) */}
            <div style={{ flex: 1, background: '#121212', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.6)', zIndex: 1, position: 'relative', height: '600px', display: 'flex' }}>
              {/* Sidebar */}
              <div style={{ width: '220px', background: '#0a0a0a', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem' }}>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '2.5rem' }}>Gym<span className="gradient-text-primary">OS</span></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(37,99,235,0.15)', color: '#60a5fa', borderRadius: '8px', fontWeight: 600 }}><LayoutDashboard size={18}/> Dashboard</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: '#888', fontWeight: 500 }}><Users size={18}/> Members</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: '#888', fontWeight: 500 }}><CreditCard size={18}/> Payments</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: '#888', fontWeight: 500 }}><Globe size={18}/> Websites</div>
                </div>
              </div>
              {/* Main Content */}
              <div style={{ flex: 1, padding: '2.5rem', background: 'linear-gradient(135deg, #161616 0%, #111 100%)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 600 }}>Overview</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                  <div style={{ background: '#1c1c1c', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Members</p>
                    <p style={{ fontSize: '2rem', fontWeight: 700 }}>482</p>
                  </div>
                  <div style={{ background: '#1c1c1c', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Active Websites</p>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: '#25D366' }}>482</p>
                  </div>
                  <div style={{ background: '#1c1c1c', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Today's Revenue</p>
                    <p style={{ fontSize: '2rem', fontWeight: 700 }}>₹24,500</p>
                  </div>
                </div>
                <div style={{ background: '#1c1c1c', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BarChart3 size={48} color="#333" />
                </div>
              </div>
            </div>
            
            {/* Phone Mockup (Right/Overlapping) */}
            <div className={styles.bounce} style={{ position: 'absolute', right: '-20px', top: '10%', width: '300px', height: '620px', background: '#000', borderRadius: '40px', border: '10px solid #222', zIndex: 10, boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 40px rgba(37,99,235,0.3)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '130px', height: '30px', background: '#222', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', zIndex: 20 }}></div>
              <div style={{ width: '100%', height: '100%', padding: '3.5rem 1.5rem 1.5rem', background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #fff' }}>
                    <span style={{ fontSize: '2rem' }}>🧑</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Vikram Singh</h3>
                  <div style={{ display: 'inline-block', background: 'rgba(37,99,235,0.2)', color: '#60a5fa', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600, marginTop: '0.5rem' }}>PRO MEMBERSHIP</div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ color: '#a1a1aa', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Attendance</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#25D366' }}>85%</p>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ color: '#a1a1aa', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Expires In</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>42<span style={{ fontSize: '0.875rem', fontWeight: 400 }}>d</span></p>
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>Access Card</p>
                    <p style={{ fontSize: '0.75rem', color: '#888' }}>Scan at reception</p>
                  </div>
                  <QrCode size={40} color="#fff" />
                </div>

                <div style={{ background: 'rgba(37,99,235,0.1)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(37,99,235,0.2)' }}>
                  <p style={{ color: '#60a5fa', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.25rem' }}>TODAY'S WORKOUT</p>
                  <p style={{ fontWeight: 700, fontSize: '1rem' }}>Chest & Triceps Focus</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW CRM SECTION */}
      <section className={styles.section} style={{ background: 'rgba(255,255,255,0.01)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>Everything Your Gym Needs — <span className="gradient-text-primary">In One Software</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
              One-time payment of ₹1499. No monthly charges. Everything included.
            </p>
          </motion.div>

          <div className={styles.crmGrid}>
            {[
              {
                icon: <Users size={20} />, title: 'Member Management',
                items: ['Register unlimited members', 'Attendance', 'Membership expiry', 'Profile management']
              },
              {
                icon: <CreditCard size={20} />, title: 'Payment Management',
                items: ['Payment tracking', 'Pending payments', 'Renewals', 'Payment history']
              },
              {
                icon: <Smartphone size={20} />, title: 'WhatsApp Automation',
                items: ['Expiry reminders', 'Payment reminders', 'Instant communication']
              },
              {
                icon: <Globe size={20} />, title: 'Personal Website For Every Member', featured: true,
                items: ['Automatically generated in 3 seconds', 'Unique profile link', 'Attendance & Membership status', 'Workout plan & Shareable profile']
              },
              {
                icon: <BarChart3 size={20} />, title: 'Dashboard & Reports',
                items: ['Daily stats', 'Revenue', 'Member analytics', 'Growth reports']
              },
              {
                icon: <Users size={20} />, title: 'Trainer Management',
                items: ['Assign trainers', 'Workout plans', 'Progress tracking']
              },
              {
                icon: <Clock size={20} />, title: 'Membership Management',
                items: ['Renewals', 'Expiry alerts', 'Package management']
              },
              {
                icon: <Infinity size={20} />, title: 'Unlimited Everything',
                items: ['Unlimited members & websites', 'Free updates & installation', '1 year support']
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${styles.crmCard} ${card.featured ? styles.crmCardFeatured : ''}`}
              >
                <div className={styles.crmHeader}>
                  <div className={styles.crmIcon}>{card.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{card.title}</h3>
                </div>
                <ul className={styles.crmList}>
                  {card.items.map((item, idx) => (
                    <li key={idx}><CheckCircle size={16} color="rgba(255,255,255,0.3)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span>{item}</span></li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            style={{ textAlign: 'center', marginTop: '2rem' }}
          >
            <div style={{ color: '#f59e0b', fontSize: '1.5rem', letterSpacing: '0.25rem', marginBottom: '0.5rem' }}>★★★★★</div>
            <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Trusted by Growing Gyms Across India</div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - MEMBER WEBSITE SECTION */}
      <section id="usp" className={`${styles.section} ${styles.uspSection}`} style={{ background: 'var(--bg-dark)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <motion.h2 
            className={styles.sectionTitle} 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ marginBottom: '1.5rem' }}
          >
            <span className="gradient-text-primary">Every Gym Member</span> Gets Their Own Personal Website Automatically
          </motion.h2>
          <motion.p 
            style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            Simply add a member and GymOS instantly creates a beautiful website for them in just 3 seconds.
            <br/><span style={{ color: '#e4e4e7', fontWeight: 600 }}>No coding. No designer. No extra work.</span>
          </motion.p>
          
          <div className={styles.stepperContainer}>
            <motion.div className={styles.stepCard} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ background: 'rgba(37,99,235,0.2)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>1</div>
              <span>Add Member Details in GymOS</span>
            </motion.div>
            <motion.div className={styles.stepArrow} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>↓</motion.div>
            
            <motion.div className={styles.stepCard} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ background: 'rgba(37,99,235,0.05)', borderColor: 'rgba(37,99,235,0.3)' }}>
              <div style={{ background: '#2563eb', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><Zap size={20}/></div>
              <span style={{ color: '#60a5fa' }}>Website Generated Automatically (3 Secs)</span>
            </motion.div>
            <motion.div className={styles.stepArrow} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>↓</motion.div>
            
            <motion.div className={styles.stepCard} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <div style={{ background: 'rgba(37,211,102,0.2)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}><MessageCircle size={20}/></div>
              <span>Share Link via WhatsApp instantly</span>
            </motion.div>
            <motion.div className={styles.stepArrow} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>↓</motion.div>
            
            <motion.div className={styles.stepCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} style={{ justifyContent: 'center', padding: '2rem' }}>
              <Smartphone size={32} color="#fff" style={{ marginRight: '1rem' }} />
              <span style={{ fontSize: '1.5rem' }}>Member Opens Personal Website 🎉</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHY GYM OWNERS LOVE GYMOS */}
      <section className={styles.section} style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Gym Owners <span className="gradient-text-primary">Love GymOS</span></h2>
          <div className={styles.featuresGrid}>
            {[
              { icon: '⚡', title: 'Website in 3 Seconds', desc: 'Instant profile generation for everyone.' },
              { icon: '📲', title: 'WhatsApp Reminders', desc: 'Automated expiry and payment alerts.' },
              { icon: '📈', title: 'Track Attendance', desc: 'Scan and track daily walk-ins easily.' },
              { icon: '💳', title: 'Payment Management', desc: 'Track pending fees and cashflows.' },
              { icon: '👨‍🏫', title: 'Trainer Management', desc: 'Assign trainers and monitor sessions.' },
              { icon: '📊', title: 'Reports & Analytics', desc: 'Deep dive into gym performance.' },
              { icon: '📦', title: 'Inventory Management', desc: 'Track supplements and equipment.' },
              { icon: '👥', title: 'Unlimited Members', desc: 'Scale without paying extra.' }
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                className={styles.featureCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.2) 100%)', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)', opacity: 0, transition: 'opacity 0.3s' }} className="hover-glow-bar"></div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feat.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>{feat.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - COMPARISON TABLE */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why GymOS is <span className="gradient-text-primary">Better</span></h2>
          <div className={styles.comparisonGrid}>
            {/* Bad Card */}
            <motion.div 
              className={`${styles.compareCard} ${styles.compareCardBad}`}
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ opacity: 0.6 }}
            >
              <h3 className={styles.compareTitle} style={{ color: '#ef4444' }}>Other Gym Software</h3>
              <ul className={`${styles.compareList} ${styles.bad}`}>
                <li><XCircle size={24} color="#ef4444" style={{ flexShrink: 0 }} /> <span>₹999–2999 Monthly</span></li>
                <li><XCircle size={24} color="#ef4444" style={{ flexShrink: 0 }} /> <span>No Member Website</span></li>
                <li><XCircle size={24} color="#ef4444" style={{ flexShrink: 0 }} /> <span>Manual Reminders</span></li>
                <li><XCircle size={24} color="#ef4444" style={{ flexShrink: 0 }} /> <span>Basic Features</span></li>
                <li><XCircle size={24} color="#ef4444" style={{ flexShrink: 0 }} /> <span>Separate Apps</span></li>
              </ul>
            </motion.div>
            
            {/* Good Card */}
            <motion.div 
              className={`${styles.compareCard} ${styles.compareCardGood}`}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ transform: 'scale(1.05)', zIndex: 10, background: '#111', borderColor: 'rgba(37,99,235,0.5)', boxShadow: '0 20px 50px rgba(37,99,235,0.2)' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}></div>
              <h3 className={styles.compareTitle} style={{ color: '#fff', fontSize: '2.5rem' }}>GymOS</h3>
              <ul className={`${styles.compareList} ${styles.good}`} style={{ fontSize: '1.25rem' }}>
                <li><CheckCircle size={28} color="#3b82f6" style={{ flexShrink: 0 }} /> <span style={{ fontWeight: 800 }}>₹1499 One-Time</span></li>
                <li><CheckCircle size={28} color="#3b82f6" style={{ flexShrink: 0 }} /> <span>Personal Website for Every Member</span></li>
                <li><CheckCircle size={28} color="#3b82f6" style={{ flexShrink: 0 }} /> <span>Automatic WhatsApp Reminders</span></li>
                <li><CheckCircle size={28} color="#3b82f6" style={{ flexShrink: 0 }} /> <span>Complete Gym Management</span></li>
                <li><CheckCircle size={28} color="#3b82f6" style={{ flexShrink: 0 }} /> <span>Everything in One Platform</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - SOCIAL PROOF */}
      <section className={styles.section} style={{ background: 'rgba(37,99,235,0.05)', borderTop: '1px solid rgba(37,99,235,0.1)', borderBottom: '1px solid rgba(37,99,235,0.1)' }}>
        <div className="container">
          <div className={styles.statsGrid}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={styles.statItem}>
              <h3 style={{ fontSize: '4rem' }}>500+</h3>
              <p style={{ fontSize: '1.25rem', color: '#fff' }}>Gyms</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className={styles.statItem}>
              <h3 style={{ fontSize: '4rem' }}>10000+</h3>
              <p style={{ fontSize: '1.25rem', color: '#fff' }}>Members Managed</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className={styles.statItem}>
              <h3 style={{ fontSize: '4rem' }}>99.9%</h3>
              <p style={{ fontSize: '1.25rem', color: '#fff' }}>Uptime</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className={styles.statItem}>
              <h3 style={{ fontSize: '4rem' }}>24×7</h3>
              <p style={{ fontSize: '1.25rem', color: '#fff' }}>Support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - TRUST SECTION */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}><LockKeyhole size={40} color="#3b82f6" style={{ margin: '0 auto 1rem' }} /> <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Secure</h4></div>
            <div className={styles.trustCard}><Download size={40} color="#3b82f6" style={{ margin: '0 auto 1rem' }} /> <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Free Installation</h4></div>
            <div className={styles.trustCard}><Infinity size={40} color="#3b82f6" style={{ margin: '0 auto 1rem' }} /> <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Lifetime Software Access</h4></div>
            <div className={styles.trustCard}><Headset size={40} color="#3b82f6" style={{ margin: '0 auto 1rem' }} /> <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>WhatsApp Support</h4></div>
            <div className={styles.trustCard}><XCircle size={40} color="#ef4444" style={{ margin: '0 auto 1rem' }} /> <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>No Monthly Charges</h4></div>
            <div className={styles.trustCard}><RefreshCw size={40} color="#3b82f6" style={{ margin: '0 auto 1rem' }} /> <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>1 Year Updates Included</h4></div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - PRICING */}
      <section id="pricing" className={styles.section} style={{ background: 'radial-gradient(circle at center, rgba(37,99,235,0.1) 0%, var(--bg-dark) 50%)' }}>
        <div className="container">
          <motion.div 
            className={styles.pricingCard}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ boxShadow: '0 0 0 1px rgba(37,99,235,0.2), 0 30px 60px rgba(0,0,0,0.5)', maxWidth: '600px' }}
          >
            <div style={{ display: 'inline-block', background: 'rgba(239,68,68,0.1)', color: '#ef4444', padding: '0.5rem 1.5rem', borderRadius: '99px', fontWeight: 800, fontSize: '0.875rem', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              LAUNCH OFFER
            </div>
            
            <div className={styles.price} style={{ fontSize: '5rem' }}>
              ₹1499
              <span className={styles.strikePrice} style={{ marginLeft: '1rem', fontSize: '2rem' }}>₹4999</span>
            </div>
            
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', fontWeight: 700 }}>One-Time Payment</h2>
            <p style={{ color: '#a1a1aa', fontWeight: 600, letterSpacing: '0.05em' }}>NO MONTHLY CHARGES EVER</p>
            
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '2rem 0' }}></div>
            
            <ul className={styles.featuresList} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.125rem' }}>
              {[
                'Unlimited Members', 'Unlimited Personal Websites', 'Attendance', 'Payments', 'Trainer Panel', 'Lead Management', 'WhatsApp Automation', 'Reports', 'Inventory', 'Member Login', 'Website Generator'
              ].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
                  <CheckCircle size={20} color="#25D366" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 500 }}>{feat}</span>
                </li>
              ))}
            </ul>
            
            <div style={{ marginTop: '3rem' }}>
              <a 
                href="https://wa.me/917559368068?text=Hi%20GymOS%20Team!%20I%20am%20interested%20in%20purchasing%20GymOS.%20Please%20share%20a%20demo."
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary ${styles.glowCta}`} 
                style={{ display: 'block', width: '100%', fontSize: '1.25rem', padding: '1.25rem', border: 'none', textAlign: 'center', fontWeight: 700 }}
              >
                💬 Chat with Sales Executive
              </a>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.125rem' }}>Need Help?</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Our Sales Executive will personally explain every feature before you purchase.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Average Response Time: <span style={{ fontWeight: 700, color: '#25D366' }}>Under 5 Minutes</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 - FAQ */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.faqSection}>
            <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', fontFamily: 'var(--font-heading)' }}>Frequently Asked Questions</h3>
            <div className={styles.faqGrid}>
              {[
                { q: 'Why only ₹1499?', a: 'We believe premium software should be accessible to every gym owner. By offering a one-time price, we empower gym owners to grow without worrying about recurring overhead.' },
                { q: 'Are there monthly charges?', a: 'No! The ₹1499 is a strict one-time payment for lifetime access to the software. There are absolutely no hidden subscription fees.' },
                { q: 'How are member websites created?', a: 'It is entirely automatic. The moment you register a member in your GymOS dashboard, the system provisions a unique web URL and generates their profile in 3 seconds.' },
                { q: 'Will you install it?', a: 'Yes! Our support team will guide you through the initial setup and installation completely free of charge.' },
                { q: 'Can I use my own domain?', a: 'Yes, GymOS can be linked to your own custom domain so your members see your brand name in the URL.' },
                { q: 'How does WhatsApp reminder work?', a: 'GymOS automatically detects memberships expiring soon or pending payments, and triggers a personalized WhatsApp message to the member without any manual intervention.' },
                { q: 'Can I manage multiple branches?', a: 'Yes, you can scale your operations and manage multiple gym branches from a single unified admin dashboard.' }
              ].map((faq, i) => (
                <div key={i} className={styles.faqCard} style={{ background: 'rgba(255,255,255,0.02)', transition: 'transform 0.3s' }}>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--primary)' }}>{faq.q}</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 - FINAL CTA */}
      <section className={styles.section} style={{ background: 'linear-gradient(180deg, var(--bg-dark) 0%, rgba(37,99,235,0.1) 100%)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingBottom: '6rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to Digitize Your Gym?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ fontSize: '1.35rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Join hundreds of gym owners who are saving hours every week with GymOS.
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem 2rem', borderRadius: '99px', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <span style={{ color: '#ef4444', fontWeight: 800, marginRight: '0.75rem', letterSpacing: '0.05em' }}>LAUNCH OFFER</span>
            <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>₹1499 One-Time Only • <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>No Monthly Charges</span></span>
          </motion.div>
          <br/>
          <motion.a 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            href="https://wa.me/917559368068?text=Hi%20GymOS%20Team!%20I%20am%20interested%20in%20purchasing%20GymOS.%20Please%20share%20a%20demo." target="_blank" rel="noopener noreferrer" className={`btn-primary ${styles.glowCta}`} style={{ display: 'inline-flex', padding: '1.5rem 3.5rem', fontSize: '1.35rem', marginBottom: '1.5rem', fontWeight: 700 }}>
            💬 Chat with Sales Executive
          </motion.a>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Average Response Time: <span style={{ color: '#25D366', fontWeight: 700 }}>Under 5 Minutes</span></motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0 2rem', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '1rem' }}>Gym<span className="gradient-text-primary">OS</span></div>
          <p style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} GymOS. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
