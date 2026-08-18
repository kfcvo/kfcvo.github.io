import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { standardCases } from "../../data";

export default function AiWorksPage() {
  const projects = Object.entries(standardCases).filter(([, item]) => item.kind === "ai");
  return (
    <main className="work-index-page" id="top">
      <SiteNav />
      <section className="ai-index-section" aria-labelledby="ai-heading">
        <header>
          <p className="eyebrow">WORK ARCHIVE / 03</p>
          <h1 id="ai-heading">AI & Emerging Tech</h1>
          <p>从求职信息判断到区块链交易，用可操作原型理解技术如何服务真实任务。</p>
        </header>
        <div className="ai-index-grid">
          {projects.map(([slug, project], index) => (
            <Link href={`/works/ai/${slug}`} key={slug}>
              <div className="ai-index-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{project.status}</small>
              </div>
              {project.heroImage && (
                <div className="ai-index-preview">
                  <Image src={project.heroImage} alt={`${project.title} 项目界面`} width={1280} height={800} unoptimized />
                </div>
              )}
              <div className="ai-index-copy">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>
              <b>VIEW CASE & DEMO ↗</b>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
