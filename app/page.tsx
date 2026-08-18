import Link from "next/link";
import { HomeCollage } from "./components/HomeCollage";
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
    title: "AI & Tech",
    subtitle: "AI 工具与新技术原型",
    text: "把真实问题转化为可体验的 AI 工具与区块链实验。",
    href: "/works/ai",
    tone: "lime",
  },
];

export default function Home() {
  return (
    <main className="home-page home-compact" id="top">
      <SiteNav />

      <HomeCollage />

      <section className="practice-section" id="practice" aria-label="作品分类">
        <div className="section-heading section-heading-minimal">
          <p className="eyebrow">WORK EXPERIENCE</p>
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
