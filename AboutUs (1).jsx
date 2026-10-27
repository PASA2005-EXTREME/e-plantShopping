import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container" style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>About Paradise Nursery</h1>
        <p style={styles.tagline}>Rooted in passion. Growing with purpose.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>Our Story</h2>
        <p style={styles.text}>
          Paradise Nursery was founded in 2010 by a small group of plant enthusiasts
          who believed that every home deserves a touch of nature. What started as a
          weekend market stall has grown into a beloved destination for houseplant
          lovers across the country.
        </p>
        <p style={styles.text}>
          We source our plants from sustainable growers who share our commitment to
          ethical, eco-friendly practices. Every plant that leaves our nursery is
          healthy, well-cared-for, and ready to thrive in its new home.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.text}>
          We believe plants improve wellbeing — scientifically and spiritually. Our
          mission is to make the joy of plants accessible to everyone, whether
          you're a seasoned collector or just getting your first succulent.
        </p>
      </div>

      <div style={styles.valuesGrid}>
        {values.map((v) => (
          <div key={v.title} style={styles.valueCard}>
            <span style={styles.valueIcon}>{v.icon}</span>
            <h3 style={styles.valueTitle}>{v.title}</h3>
            <p style={styles.valueText}>{v.desc}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>Visit Us</h2>
        <p style={styles.text}>
          📍 42 Greenhouse Lane, Green Valley, CA 94102<br />
          📞 (800) 555-PLANT<br />
          📧 hello@paradisenursery.com<br />
          🕐 Mon–Sat: 9am–6pm &nbsp;|&nbsp; Sun: 10am–4pm
        </p>
      </div>
    </div>
  );
}

const values = [
  { icon: '🌱', title: 'Sustainability', desc: 'We partner with growers who prioritize the planet.' },
  { icon: '💚', title: 'Community', desc: 'Plants bring people together — we celebrate that.' },
  { icon: '🔬', title: 'Expertise', desc: 'Our team are certified horticulturists and plant lovers.' },
  { icon: '📦', title: 'Quality', desc: 'Every plant is inspected before it ships to you.' },
];

const styles = {
  container: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '40px 24px',
    fontFamily: "'Segoe UI', sans-serif",
    color: '#1a2e1a',
  },
  hero: {
    textAlign: 'center',
    padding: '48px 0 32px',
    borderBottom: '2px solid #c8e6c9',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.6rem',
    fontWeight: 700,
    color: '#2e7d32',
    margin: '0 0 12px',
  },
  tagline: {
    fontSize: '1.2rem',
    color: '#558b2f',
    fontStyle: 'italic',
    margin: 0,
  },
  section: {
    marginBottom: '40px',
  },
  heading: {
    fontSize: '1.6rem',
    fontWeight: 600,
    color: '#2e7d32',
    marginBottom: '12px',
  },
  text: {
    fontSize: '1.05rem',
    lineHeight: 1.75,
    color: '#3a3a3a',
    marginBottom: '12px',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    margin: '40px 0',
  },
  valueCard: {
    background: '#f1f8e9',
    borderRadius: '12px',
    padding: '24px 16px',
    textAlign: 'center',
    border: '1px solid #c8e6c9',
  },
  valueIcon: { fontSize: '2rem' },
  valueTitle: {
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#2e7d32',
    margin: '10px 0 6px',
  },
  valueText: {
    fontSize: '0.9rem',
    color: '#4a4a4a',
    lineHeight: 1.5,
    margin: 0,
  },
};

export default AboutUs;
