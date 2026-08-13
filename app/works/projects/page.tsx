import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { standardCases } from "../../data";

export default function ProjectsPage() {
  const project = standardCases["moodmate-ai"];
  return (
    <main className="work-index-page" id="top">
      <SiteNav />
      <section className="featured-section work-index-section" aria-labelledby="project-heading">
        <div className="featured-intro">
          <p className="eyebrow">WORK ARCHIVE / 02</p>
          <h1 id="project-heading">Project</h1>
          <p>从调研、定位到原型落地，记录一段完整的产品探索。</p>
        </div>
        <div className="featured-list">
          <article className="featured-project project-category-case">
            <div className="project-visual project-visual-mood" aria-hidden="true">
              <span className="visual-index">PROJECT / 01</span>
              <div className="mood-ui">
                <div className="mood-orbit"><span>今天，想先聊聊什么？</span><i>☺</i></div>
                <div className="mood-days"><b>M</b><b>T</b><b className="active">W</b><b>T</b><b>F</b></div>
                <p>emotion, gently understood.</p>
              </div>
            </div>
            <div className="featured-copy">
              <p className="eyebrow">{project.eyebrow}</p>
              <h2>{project.title} 情绪陪伴系统</h2>
              <p>{project.summary}</p>
              <ul>{project.metadata.slice(2).map(([, value]) => <li key={value}>{value}</li>)}</ul>
              <div className="inline-accordion" aria-label="MoodMate 项目过程">
                {project.sections.map((section, index) => (
                  <details key={section.title} open={index === 0}>
                    <summary><b>{String(index + 1).padStart(2, "0")}</b><span>{section.title.replace(/^\d+ \/ /, "")}</span><i>＋</i></summary>
                    <p>{section.body}</p>
                  </details>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
