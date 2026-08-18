import Image from "next/image";
import { type StandardCase } from "../data";
import { ExperienceDemo } from "./ExperienceDemo";

function CaseHeroVisual({ data }: { data: StandardCase }) {
  return (
    <div className={`case-hero-visual case-hero-${data.kind}`} aria-hidden="true">
      <div className="case-window">
        <div className="case-window-top"><i /><i /><i /><span>{data.eyebrow}</span></div>
        {data.heroImage ? (
          <Image className="case-product-shot" src={data.heroImage} alt="" width={1677} height={965} priority unoptimized />
        ) : data.kind === "project" ? (
          <div className="mood-dashboard">
            <div className="mood-greeting"><small>GOOD EVENING</small><strong>How are you, really?</strong><p>Take a quiet moment for yourself.</p></div>
            <div className="mood-pulse"><i>☺</i><span>CALM</span></div>
            <div className="mood-calendar"><b>M</b><b>T</b><b className="selected">W</b><b>T</b><b>F</b><b>S</b><b>S</b></div>
          </div>
        ) : (
          <div className="ai-dashboard">
            <div className="ai-command"><span>ASK / BUILD / EXPLORE</span><strong>{data.title}</strong></div>
            <div className="ai-signal"><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="ai-output"><span>PROTOTYPE NOTE</span><p>{data.summary}</p></div>
          </div>
        )}
      </div>
      <p>PRODUCT SYSTEM / INTERACTION STUDY</p>
    </div>
  );
}

export function StandardCaseStudy({ data, slug }: { data: StandardCase; slug: string }) {
  const hasDemo = slug === "company-info-check" || slug === "chainbank";
  return (
    <article className="case-study">
      <header className="case-hero">
        <div className="case-title">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p className="case-summary">{data.summary}</p>
          <div className="case-tags">{data.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {(hasDemo || data.links?.length) && (
            <div className="case-actions">
              {hasDemo && <a href="#interactive-demo">TRY INTERACTIVE DEMO ↓</a>}
              {data.links?.map((link) => <a href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label}</a>)}
            </div>
          )}
        </div>
        <CaseHeroVisual data={data} />
      </header>

      {hasDemo && (
        <section className="case-demo-section" id="interactive-demo">
          <header>
            <p className="eyebrow">INTERACTIVE RECONSTRUCTION</p>
            <h2>{slug === "chainbank" ? "体验一次测试网交易路径" : "从划选公司到投递判断"}</h2>
            <p>{slug === "chainbank" ? "使用固定测试数据重建原始核心流程，不连接钱包，也不会发起真实链上交易。" : "点击不同公司，观察浏览器上下文如何被整理为可扫描、可核验的公司报告。"}</p>
          </header>
          <ExperienceDemo slug={slug} />
        </section>
      )}

      <section className="case-overview">
        <div className="overview-meta">
          {data.metadata.map(([label, value]) => (
            <div key={label}><span>{label}</span><p>{value}</p></div>
          ))}
        </div>
        <div className="overview-role">
          <p className="eyebrow">MY CONTRIBUTION</p>
          <h2>{data.contribution}</h2>
        </div>
      </section>

      <section className="case-chapters" aria-label="项目过程">
        {data.sections.map((section, index) => (
          <article key={section.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{section.title.replace(/^\d+ \/ /, "")}</h2><p>{section.body}</p></div>
          </article>
        ))}
      </section>

      {slug === "chainbank" && (
        <section className="case-archive-gallery" aria-label="ChainBank 原始项目截图">
          <header><p className="eyebrow">ORIGINAL PROTOTYPE / 2026</p><h2>保留历史实现，重建可体验的叙事。</h2></header>
          <figure><Image src="/ai/chainbank-transfer.png" alt="ChainBank 原始转账页面" width={984} height={1400} unoptimized /><figcaption>TRANSFER MONEY / ORIGINAL SCREEN</figcaption></figure>
          <figure><Image src="/ai/chainbank-deposit.png" alt="ChainBank 原始存款页面" width={984} height={1214} unoptimized /><figcaption>DEPOSIT MONEY / ORIGINAL SCREEN</figcaption></figure>
        </section>
      )}

      <footer className="case-closing">
        <p className="eyebrow">END OF CASE</p>
        <h2>清晰不是减少复杂度，<br />而是让复杂度可被理解。</h2>
      </footer>
    </article>
  );
}
