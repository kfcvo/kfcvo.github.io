import Image from "next/image";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

const capabilities = [
  ["01", "Product", "用户研究、需求定义、产品规划、PRD、跨团队协作"],
  ["02", "Technology", "AI 产品、RAG、区块链、数据分析、前端原型"],
  ["03", "Creative", "信息架构、交互设计、视觉叙事、AIGC 工作流"],
];

const portraitPanels = [
  { className: "stack-graduation", src: "/about-graduation.jpg", width: 1280, height: 1920, alt: "陈知雨毕业照" },
  { className: "stack-changi", src: "/about-changi.jpg", width: 1350, height: 1800, alt: "陈知雨在樟宜村的照片" },
  { className: "stack-egypt", src: "/about-egypt.jpg", width: 1312, height: 1800, alt: "陈知雨在埃及主题场景的照片" },
];

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <SiteNav />
      <section className="about-hero">
        <div className="about-title">
          <p className="eyebrow">ABOUT / 陈知雨</p>
          <h1>陈知雨</h1>
          <p className="about-name-en">CHEN ZHIYU · ZHIRAIN</p>
        </div>
        <figure className="about-portrait">
          <div className="portrait-stack" aria-label="陈知雨的毕业与旅行照片组合">
            {portraitPanels.map((panel) => (
              <button className={`portrait-card ${panel.className}`} key={panel.src} type="button" aria-label={`将${panel.alt}移到前面`}>
                <Image src={panel.src} alt="" width={panel.width} height={panel.height} priority unoptimized />
              </button>
            ))}
          </div>
          <figcaption><span>CHEN ZHIYU</span><span>SINGAPORE / BEIJING</span></figcaption>
        </figure>
      </section>

      <section className="about-manifesto">
        <p className="eyebrow">A NOTE ON MY PRACTICE</p>
      </section>

      <section className="about-journey" aria-labelledby="journey-heading">
        <div className="section-heading">
          <p className="eyebrow">EDUCATION</p>
          <h2 id="journey-heading">Learning journey</h2>
        </div>
        <div className="timeline">
          <article><time>2025.08 — 2026.12</time><span>01</span><div><h3>南洋理工大学</h3><p>区块链技术 · 硕士</p></div></article>
          <article><time>2021.09 — 2025.06</time><span>02</span><div><h3>中国传媒大学</h3><p>数字媒体技术 · 本科</p></div></article>
        </div>
      </section>

      <section className="capability-section" aria-labelledby="capability-heading">
        <div className="section-heading">
          <p className="eyebrow">CAPABILITIES</p>
          <h2 id="capability-heading">What I bring</h2>
        </div>
        <div className="capability-list">
          {capabilities.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
