import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "./components/SiteNav";

const practices = [
  {
    number: "01",
    title: "Intern",
    subtitle: "产品策略与体验设计",
    text: "从真实问题出发，完成研究、定义、优先级判断与交付闭环。",
    href: "/works/intern",
    tone: "mint",
  },
  {
    number: "02",
    title: "Project",
    subtitle: "复杂系统与技术理解",
    text: "在 AI、区块链与业务目标之间，建立团队都能理解的产品语言。",
    href: "/works/projects",
    tone: "sky",
  },
  {
    number: "03",
    title: "AI Exploration",
    subtitle: "AI 原型与快速验证",
    text: "把日常观察做成轻量工具，用原型尽早验证价值与体验。",
    href: "/works/ai",
    tone: "lime",
  },
];

export default function Home() {
  return (
    <main className="home-page home-compact" id="top">
      <SiteNav />

      <section className="home-hero" aria-label="个人作品集主视觉">
        <div className="hero-copy hero-copy-minimal">
          <p className="eyebrow"><span className="status-dot" /> PRODUCT MANAGER · AI BUILDER</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#practice">查看作品分类 <span>↓</span></a>
            <Link className="text-link" href="/about">了解我的经历 ↗</Link>
          </div>
          <div className="hero-meta">
            <span>BASED IN SINGAPORE / BEIJING</span>
            <span>NTU · BLOCKCHAIN TECHNOLOGY</span>
          </div>
        </div>

        <div className="hero-gallery" aria-label="个人视觉拼贴">
          <div className="hero-tile tile-photo">
            <Image src="/home-collage.png" alt="陈知雨的生活与创作拼贴" width={934} height={524} priority unoptimized />
          </div>
          <div className="hero-tile tile-bloom"><i /><i /><i /><b>CURIOUS<br />BY NATURE</b></div>
          <div className="hero-tile tile-note"><small>MY APPROACH</small><p>Observe deeply.<br />Frame clearly.<br />Build thoughtfully.</p></div>
          <div className="hero-tile tile-grid"><span>✦</span><span>◌</span><span>⌁</span><span>＋</span></div>
          <p className="gallery-caption">A COLLECTION OF SYSTEMS, STORIES & SMALL OBSERVATIONS.</p>
        </div>
      </section>

      <section className="practice-section" id="practice" aria-label="作品分类">
        <div className="section-heading section-heading-minimal">
          <p className="eyebrow">WORK ARCHIVE</p>
        </div>
        <div className="folder-grid">
          {practices.map((practice) => (
            <Link className={`folder-card folder-${practice.tone}`} href={practice.href} key={practice.number}>
              <div className="folder-sheet">
                <small>{practice.subtitle}</small>
                <p>{practice.text}</p>
              </div>
              <div className="folder-front">
                <span>{practice.number}</span>
                <h2>{practice.title}</h2>
                <i>↗</i>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
