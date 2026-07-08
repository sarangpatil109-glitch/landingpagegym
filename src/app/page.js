"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Users, Globe, Smartphone, Shield, Clock, TrendingUp, Link, SmartphoneNfc, LayoutDashboard, SunMoon, Rocket, XCircle, RefreshCw, Headset, Download, CreditCard, MessageCircle, BarChart3, Cloud, Lock, Infinity } from 'lucide-react';
import styles from './page.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const trustItems = [
  { icon: <Globe size={18} color="#3b82f6" />, text: 'Personal Website in 3 Seconds' },
  { icon: <MessageCircle size={18} color="#25D366" />, text: 'Automatic WhatsApp Reminders' },
  { icon: <CreditCard size={18} color="#3b82f6" />, text: '₹1499 One-Time Payment' },
  { icon: <XCircle size={18} color="#ef4444" />, text: 'No Monthly Charges' },
  { icon: <Users size={18} color="#3b82f6" />, text: 'Unlimited Members' },
  { icon: <Infinity size={18} color="#3b82f6" />, text: 'Unlimited Personal Websites' },
  { icon: <BarChart3 size={18} color="#3b82f6" />, text: 'Smart Analytics' },
  { icon: <Smartphone size={18} color="#3b82f6" />, text: 'Mobile Friendly' },
  { icon: <Cloud size={18} color="#3b82f6" />, text: 'Cloud Based' },
  { icon: <Lock size={18} color="#3b82f6" />, text: 'Secure Data' },
];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/917559368068" target="_blank" rel="noopener noreferrer" className={`${styles.floatingWhatsapp} ${styles.bounce}`} aria-label="💬 WhatsApp Sales">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.1 2.9C18.6.4 15.3-.9 11.8-.9 5.3-.9 0 4.4 0 10.9c0 2.2.6 4.3 1.6 6.1L.1 23.9l7.1-1.9c1.8.9 3.8 1.4 5.8 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.7-8.7zm-9.3 20.3c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8 1 1-3.7-.2-.4c-1-1.6-1.5-3.5-1.5-5.4 0-5.5 4.5-10 10.1-10 2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1-.1 5.4-4.6 9.9-10 10.1z"></path><path d="M17.4 14.1c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-1-1-1.2-1.4-1.4-1.7-.2-.3 0-.4.1-.6.1-.1.3-.3.5-.5.2-.2.3-.3.4-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.1 3.2 1.3 3.4.2.3 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.6.8.3 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.4-.3-.7-.5z"></path></svg>
      </a>

      {/* Navbar */}
      <nav className={`${styles.glass} container`} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>Gym<span className="gradient-text-primary">OS</span></div>
        <a href="https://wa.me/917559368068?text=Hi%20GymOS%20Team!%20I%20am%20interested%20in%20purchasing%20GymOS.%20Please%20share%20a%20demo." target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Chat with Sales Executive">
          💬 Chat with Sales Executive
        </a>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className="container">
          <motion.a 
            href="#usp"
            className={styles.announcementBadge}
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.badgePill}>
              <div className={styles.badgeNew}>
                <Rocket size={12} /> NEW
              </div>
              <span className={styles.badgeText}>Every Gym Member Gets Their Own Personal Website Automatically in Just 3 Seconds</span>
            </div>
            <div className={styles.badgeCaption}>Unlimited Websites • One Click • No Coding • FREE Included</div>
          </motion.a>

          <motion.h1 
            className={styles.heroTitle}
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
          >
            Turn Your Gym Into a <br/>
            <span className="gradient-text-primary">Premium Digital Brand</span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
          >
            India's Smartest Gym Management Software that automatically creates a personal website for every gym member in just 3 seconds.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '16px', display: 'inline-block', marginBottom: '2rem', textAlign: 'left' }}
          >
            <div style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              🔥 LAUNCH OFFER
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem' }}>₹1499 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>One-Time Payment</span></div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>No Monthly Charges Ever</div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="#25D366" /> Unlimited Member Websites</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="#25D366" /> WhatsApp Automation</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="#25D366" /> 1 Year FREE Support</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className={styles.heroCta}
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
          >
            <a href="https://maingymsoftwere.vercel.app/dashboard" target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="Watch GymOS Demo">Watch Demo</a>
            <a href="https://wa.me/917559368068?text=Hi%20GymOS%20Team!%20I%20am%20interested%20in%20purchasing%20GymOS.%20Please%20share%20a%20demo." target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Chat with Sales Executive" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              💬 Chat with Sales Executive <ArrowRight size={18} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '4rem' }}
          >
            <div style={{ display: 'flex' }}>
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>Trusted by 500+ Gyms in India</span>
          </motion.div>
          
          <motion.div 
            className={styles.mockupContainer}
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
          >
            {/* Main Dashboard Mockup */}
            <div style={{ background: '#111', borderRadius: '12px', padding: '1rem', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Globe size={48} color="#2563eb" style={{ opacity: 0.5 }} />
              <span style={{ marginLeft: '1rem', color: '#666', fontWeight: 500 }}>Dashboard Mockup</span>
            </div>
            
            {/* Floating Elements */}
            <div className={`${styles.floatingPhone} ${styles.floating}`} style={{ background: '#000', height: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
              <div style={{ width: '40%', height: '4px', background: '#333', borderRadius: '4px', marginBottom: '1rem' }}></div>
              <Image src="https://via.placeholder.com/200x380/000/fff?text=Member+Website" alt="Member Website Preview" width={200} height={380} unoptimized style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>

            <div className={`${styles.badge} ${styles.badge1} ${styles.floating}`} style={{ animationDelay: '0s' }}>
              <CheckCircle size={16} color="#25D366" /> Website Created
            </div>
            <div className={`${styles.badge} ${styles.badge2} ${styles.floating}`} style={{ animationDelay: '2s' }}>
              <CheckCircle size={16} color="#25D366" /> WhatsApp Sent
            </div>
            <div className={`${styles.badge} ${styles.badge3} ${styles.floating}`} style={{ animationDelay: '4s' }}>
              <CheckCircle size={16} color="#25D366" /> Payment Received
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Trust Bar Section */}
      <section className={styles.trustBarSection}>
        <div className={styles.marquee}>
          {[...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className={styles.trustItem}>
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* Trust Numbers */}
      <section className={styles.section} style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <motion.div 
            className={styles.statsGrid}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            {[
              { num: '10+', text: 'Hours Saved Weekly' },
              { num: '∞', text: 'Unlimited Members' },
              { num: '∞', text: 'Personal Websites' },
              { num: '24/7', text: 'WhatsApp Reminders' }
            ].map((stat, i) => (
              <motion.div key={i} className={styles.statItem} variants={fadeUp}>
                <h3>{stat.num}</h3>
                <p>{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Big USP */}
      <section id="usp" className={`${styles.section} ${styles.uspSection}`}>
        <div className="container">
          <div className={styles.uspGrid}>
            <motion.div 
              className={styles.uspContent}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <h2><span className="gradient-text-primary">Every Member</span> Gets Their Own Personal Website</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                When you add a member, GymOS instantly generates a beautiful profile for them within 3 seconds. No extra work. No coding.
              </p>
              
              <div className={styles.uspFlow}>
                <div className={styles.flowStep} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Users color="#60a5fa" /> <span style={{ fontWeight: 600 }}>1. You add a member</span>
                </div>
                <div className={styles.flowArrow}>↓</div>
                <div className={styles.flowStep} style={{ display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid var(--primary)', background: 'rgba(37,99,235,0.1)' }}>
                  <Zap color="#60a5fa" /> <span style={{ fontWeight: 600 }}>2. Website created in 3 seconds</span>
                </div>
                <div className={styles.flowArrow}>↓</div>
                <div className={styles.flowStep} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Link color="#60a5fa" /> <span style={{ fontWeight: 600 }}>yourgym.com/member/john</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ position: 'relative' }}
            >
              <div style={{ width: '320px', height: '650px', background: '#000', borderRadius: '40px', border: '8px solid #222', margin: '0 auto', overflow: 'hidden', position: 'relative', boxShadow: '0 30px 60px rgba(37,99,235,0.2)' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '25px', background: '#222', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', zIndex: 10 }}></div>
                <div style={{ padding: '2rem 1rem', height: '100%', background: 'linear-gradient(180deg, #111 0%, #000 100%)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#333', margin: '0 auto 1rem' }}></div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>John Doe</h3>
                    <p style={{ color: '#60a5fa', fontSize: '0.875rem' }}>Pro Membership</p>
                  </div>
                  <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className={styles.glass} style={{ padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
                      <p style={{ fontSize: '2rem', fontWeight: 700 }}>24</p>
                      <p style={{ fontSize: '0.75rem', color: '#888' }}>Days Left</p>
                    </div>
                    <div className={styles.glass} style={{ padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
                      <p style={{ fontSize: '2rem', fontWeight: 700 }}>85%</p>
                      <p style={{ fontSize: '0.75rem', color: '#888' }}>Attendance</p>
                    </div>
                  </div>
                  <div className={styles.glass} style={{ marginTop: '1rem', padding: '1rem', borderRadius: '12px' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#aaa' }}>Today's Plan</h4>
                    <p style={{ fontWeight: 600 }}>Chest & Triceps</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Everything You Need <br/><span className="gradient-text-primary">In One Place</span></h2>
          <div className={styles.featuresGrid}>
            {[
              { icon: <Users />, title: 'Member Management', desc: 'Complete CRM to manage your members easily.' },
              { icon: <Clock />, title: 'Attendance', desc: 'Track daily attendance effortlessly.' },
              { icon: <TrendingUp />, title: 'Payments', desc: 'Never miss a payment with automated tracking.' },
              { icon: <SmartphoneNfc />, title: 'WhatsApp Automation', desc: 'Automatic reminders for renewals and birthdays.' },
              { icon: <Globe />, title: 'Member Website', desc: 'Personal digital profile for every member.' },
              { icon: <LayoutDashboard />, title: 'Reports & Analytics', desc: 'Deep insights into your gym\'s performance.' },
              { icon: <Shield />, title: 'Role Management', desc: 'Trainer panels and staff permissions.' },
              { icon: <SunMoon />, title: 'Dark Mode', desc: 'Beautiful dark interface that is easy on the eyes.' }
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.featureIcon}>{feat.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{feat.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>Why Gym Owners Are <br/><span className="gradient-text-primary">Switching to GymOS</span></h2>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>Stop paying monthly forever.</p>
          
          <div className={styles.comparisonGrid}>
            {/* Bad Card */}
            <motion.div 
              className={`${styles.compareCard} ${styles.compareCardBad}`}
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <h3 className={styles.compareTitle} style={{ color: '#ef4444' }}>Other Gym Software</h3>
              <ul className={`${styles.compareList} ${styles.bad}`}>
                {[
                  'Monthly Charges ₹999–₹2999',
                  'No Personal Website',
                  'Manual WhatsApp Messages',
                  'Manual Attendance',
                  'Manual Payment Follow-ups',
                  'No Lead CRM',
                  'Limited Features',
                  'Extra Charges for Updates',
                  'Basic Reports'
                ].map((item, i) => (
                  <li key={i}><XCircle size={24} color="#ef4444" style={{ flexShrink: 0 }} /> <span>{item}</span></li>
                ))}
              </ul>
            </motion.div>
            
            {/* Good Card */}
            <motion.div 
              className={`${styles.compareCard} ${styles.compareCardGood}`}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className={styles.compareTitle} style={{ color: '#60a5fa' }}>GymOS</h3>
              <ul className={`${styles.compareList} ${styles.good}`}>
                {[
                  '₹1499 One-Time Payment',
                  'Personal Website for Every Member',
                  'Automatic WhatsApp Reminders',
                  'Smart Attendance',
                  'Payment Tracking',
                  'Complete Lead CRM',
                  'Trainer Management',
                  'Inventory Management',
                  'Analytics Dashboard',
                  '1 Year FREE Updates',
                  '1 Year FREE Support'
                ].map((item, i) => (
                  <li key={i}><CheckCircle size={24} color="#3b82f6" style={{ flexShrink: 0 }} /> <span>{item}</span></li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className={styles.highlightBadge}
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
          >
            <span>🔥 Save Thousands Every Year</span>
          </motion.div>

          {/* Included Features Highlight */}
          <motion.div 
            className={styles.includedSection}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Everything Included</h3>
            <div className={styles.includedGrid}>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}><Users size={28} /></div>
                <span>Unlimited Members</span>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}><Globe size={28} /></div>
                <span>Unlimited Personal Websites</span>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}><CreditCard size={28} /></div>
                <span>No Monthly Charges</span>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}><Download size={28} /></div>
                <span>Free Installation</span>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}><RefreshCw size={28} /></div>
                <span>1 Year FREE Updates</span>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}><Headset size={28} /></div>
                <span>1 Year FREE Support</span>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedIcon}><Infinity size={28} /></div>
                <span>Lifetime Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={styles.section} style={{ background: 'radial-gradient(circle at center, rgba(37,99,235,0.1) 0%, var(--bg-dark) 50%)' }}>
        <div className="container">
          <div className={styles.pricingCard}>
            <div style={{ display: 'inline-block', background: 'rgba(37,99,235,0.2)', color: '#60a5fa', padding: '0.5rem 1rem', borderRadius: '99px', fontWeight: 700, fontSize: '0.875rem', marginBottom: '1rem' }}>
              LAUNCH OFFER
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>One Time Payment</h2>
            <p style={{ color: 'var(--text-muted)' }}>No monthly charges. Ever.</p>
            
            <div className={styles.price}>
              ₹1,499
              <span className={styles.strikePrice} style={{ marginLeft: '1rem' }}>₹4,999</span>
            </div>
            
            <ul className={styles.featuresList}>
              {[
                'Unlimited Members',
                'Unlimited Personal Websites',
                'Free Installation',
                '1 Year Free Support',
                '1 Year Software Updates',
                'No Monthly Charges'
              ].map((feat, i) => (
                <li key={i}>
                  <CheckCircle size={20} color="#25D366" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://wa.me/917559368068?text=Hi%20GymOS%20Team!%20I%20am%20interested%20in%20purchasing%20GymOS.%20Please%20share%20a%20demo."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary" 
              style={{ display: 'block', width: '100%', fontSize: '1.125rem', padding: '1rem', border: 'none', textAlign: 'center' }}
            >
              💬 Chat with Sales Executive
            </a>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Interested in GymOS?</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Our Sales Executive will personally guide you through the software, answer all your questions and help you get started.
              </p>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)' }}>Launch Price: ₹1499 One-Time Only</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1.5rem', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Shield size={20} color="#25D366" />
              <span style={{ fontWeight: 600 }}>7-Day Money Back Guarantee.</span> 
              <span style={{ color: 'var(--text-muted)' }}>No hidden fees.</span>
            </div>
          </div>

          <div className={styles.faqSection}>
            <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', marginTop: '4rem', fontFamily: 'var(--font-heading)' }}>Frequently Asked Questions</h3>
            <div className={styles.faqGrid}>
              {[
                { q: 'Are there really no monthly charges?', a: 'Yes! You pay a flat ₹1499 once, and you get lifetime access to the software. No hidden subscription fees.' },
                { q: 'How does the free website generation work?', a: 'When you add a new member to the CRM, GymOS automatically builds a mobile-optimized webpage with their membership details in just 3 seconds.' },
                { q: 'What happens after 1 year of free updates?', a: 'You can continue using your version of GymOS forever. If you want the latest new features and priority support for another year, there is an optional low-cost renewal.' }
              ].map((faq, i) => (
                <div key={i} className={styles.faqCard}>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary)' }}>{faq.q}</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Sales Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>Need Help Before Purchasing?</h2>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>Talk directly with our Sales Executive.</p>
          
          <div className={styles.featuresGrid}>
            {[
              { icon: '🎥', title: 'Live Demo', desc: 'See the complete software before purchasing.' },
              { icon: '💬', title: 'Instant WhatsApp Support', desc: 'Get all your questions answered.' },
              { icon: '⚙', title: 'Free Installation', desc: 'We will help you install GymOS.' },
              { icon: '💰', title: 'Only ₹1499 One-Time', desc: 'No Monthly Charges.' }
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feat.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{feat.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="https://wa.me/917559368068?text=Hi%20GymOS%20Team!%20I%20am%20interested%20in%20purchasing%20GymOS.%20Please%20share%20a%20demo." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', padding: '1rem 2rem', fontSize: '1.125rem' }}>💬 Chat with Sales Executive</a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.section} style={{ background: 'linear-gradient(180deg, var(--bg-dark) 0%, rgba(37,99,235,0.1) 100%)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingBottom: '6rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to Digitize Your Gym?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
            Join hundreds of gym owners using GymOS to manage members, attendance, payments, trainers, inventory, reports and automatic member websites.
          </p>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1.5rem', borderRadius: '99px', marginBottom: '2rem' }}>
            <span style={{ color: '#ef4444', fontWeight: 700, marginRight: '0.5rem' }}>Launch Offer</span>
            <span style={{ fontWeight: 600 }}>₹1499 One-Time Payment</span>
          </div>
          <br/>
          <a href="https://wa.me/917559368068?text=Hi%20GymOS%20Team!%20I%20am%20interested%20in%20purchasing%20GymOS.%20Please%20share%20a%20demo." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', padding: '1rem 3rem', fontSize: '1.25rem', marginBottom: '1rem' }}>💬 Chat with Sales Executive</a>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Average Response Time: <span style={{ color: '#25D366', fontWeight: 600 }}>Under 5 Minutes</span></p>
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
