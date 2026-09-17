import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const subjects = [
  { icon: '📚', title: 'الدروس المنظمة', text: 'مسار واضح يساعد طلابك على التقدم خطوة بخطوة.' },
  { icon: '🧠', title: 'تعلم أعمق', text: 'موارد وأنشطة مصممة لترسيخ الفهم لا الحفظ فقط.' },
  { icon: '✨', title: 'تجربة بسيطة', text: 'كل ما تحتاجه في مساحة هادئة وسهلة الاستخدام.' },
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="أثر - الصفحة الرئيسية">
          <span className="brand-mark">أ</span>
          <span>أثر</span>
        </a>
        <nav aria-label="التنقل الرئيسي">
          <a href="#about">عن المنصة</a>
          <a href="#features">المزايا</a>
          <a href="#contact">تواصل معنا</a>
        </nav>
        <a className="nav-cta" href="#start">ابدأ الآن</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> مساحة تعليمية تنمو معك</p>
            <h1>اترك <em>أثرًا</em><br />في كل درس.</h1>
            <p className="hero-text">منصة تعليمية مرنة تجمع الدروس والموارد والأنشطة في مكان واحد، لتمنح المعلم مساحة أكبر لصناعة تعلم لا يُنسى.</p>
            <div className="hero-actions" id="start">
              <a className="primary-btn" href="#features">اكتشف المساحة <span>←</span></a>
              <a className="text-btn" href="#about">تعرّف على أثر <span>↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="رسم توضيحي لمساحة تعليمية">
            <div className="sun" />
            <div className="card card-back" />
            <div className="card card-main">
              <div className="card-top"><span className="dot" /><span>درس اليوم</span><span className="more">•••</span></div>
              <div className="lesson-title">الفضول<br /><strong>بوابة المعرفة</strong></div>
              <div className="progress"><span /></div>
              <small>التقدم في الدرس <b>72%</b></small>
            </div>
            <div className="leaf leaf-one">✦</div><div className="leaf leaf-two">✦</div>
          </div>
        </section>

        <section className="intro" id="about">
          <p className="section-label">لماذا أثر؟</p>
          <h2>لأن التعليم الجيد<br /><span>يترك أثرًا يدوم.</span></h2>
          <p className="intro-text">صُممت أثر لتكون امتدادًا لطريقتك في التعليم؛ هادئة، واضحة، ومليئة بالإمكانات.</p>
        </section>

        <section className="features" id="features">
          {subjects.map((item) => <article className="feature" key={item.title}><div className="feature-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p><a href="#start" aria-label={`اعرف المزيد عن ${item.title}`}>اعرف المزيد <span>↗</span></a></article>)}
        </section>
      </main>

      <footer id="contact"><span>أثر © 2026</span><span>صُممت للمعلمين الذين يصنعون فرقًا.</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
