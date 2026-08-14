import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";

const internships = [
  {
    index: "01",
    company: "中关村科金",
    role: "区块链产品经理",
    period: "2026.05 — 至今",
    eyebrow: "ENTERPRISE AI × BLOCKCHAIN",
    title: "企业级存证与侵权追踪平台",
    summary: "在隐私、公信力与交付周期的多重约束下，将区块链与 AI 能力整理成一条可信、可执行的企业产品链路。",
    facts: ["10+ 模块 PRD", "Demo → MVP / 1 个月", "Token 成本 -60%+"],
    outputs: [
      ["10+", "模块 PRD 与交互规范"],
      ["1 个月", "Demo 推进至 MVP"],
      ["-60%+", "累计 Token 成本"],
    ],
    tone: "mint",
    star: {
      Situation: "企业关键文件跨机构流转时，存在敏感信息泄露、举证困难和二次改写难识别等问题；通用大模型在长文档分析中也容易出现证据定位错误。",
      Task: "参与定义隐私友好的企业存证与侵权追踪平台，把区块链、AI 与合规约束翻译成用户可理解、团队可交付的产品流程。",
      Action: "独立完成 10+ 模块 PRD 与交互规范，梳理本地摘要、双链核验、Evidence Card 与 Claim Graph；推动限域 RAG、Validator 自动重试和 50+ 案例 Golden 测试集。",
      Result: "支持产品在一个月内由 Demo 迭代至 MVP，并通过内部评审与种子客户验收；复杂分析场景累计 Token 成本下降 60%+。",
    },
  },
  {
    index: "02",
    company: "北京华清飞扬网络股份有限公司",
    role: "游戏产品运营",
    period: "2024.12 — 2025.04",
    eyebrow: "GLOBAL GAME OPERATIONS",
    title: "海外游戏从 0 到 1 付费测试",
    summary: "用转化漏斗、AIGC 内容工作流和 200+ 条玩家反馈，找到影响商业化与新手体验的关键节点。",
    facts: ["购买转化 +12%", "内容制作 4h → 1.5h", "200+ 用户反馈"],
    outputs: [
      ["+12%", "核心礼包购买转化"],
      ["1.5h", "单篇内容制作周期"],
      ["200+", "海外玩家反馈分析"],
    ],
    tone: "sky",
    star: {
      Situation: "海外 Roguelike 游戏付费测试初期，商店曝光到购买之间存在明显断点，同时社群反馈分散、宣发内容生产成本高。",
      Task: "定位商业化与早期体验中的关键问题，建立能够快速验证付费触发、内容效率与用户反馈的运营方法。",
      Action: "搭建商店曝光—关卡通关—付费触发漏斗，调整礼包出现时机；建立 AIGC Prompt 与审核 SOP，并使用 Python 分析 200+ 条 Discord 玩家反馈。",
      Result: "核心礼包购买转化率提升约 12%，单篇内容制作时间由 4 小时缩短至 1.5 小时，并推动新手引导、难度曲线与资源节奏优化。",
    },
  },
];

function CompanyVisual({ item }: { item: (typeof internships)[number] }) {
  return (
    <div className={`project-visual company-visual company-visual-${item.tone}`} aria-label={`${item.company}主要产出`}>
      <span className="visual-index">INTERNSHIP / {item.index}</span>
      <div className="company-card">
        <p className="eyebrow">INTERNSHIP COMPANY</p>
        <h2>{item.company}</h2>
        <div className="company-role"><span>{item.role}</span><span>{item.period}</span></div>
        <p className="output-label">主要产出 / KEY OUTPUTS</p>
        <div className="output-grid">
          {item.outputs.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}
        </div>
      </div>
    </div>
  );
}

export default function InternWorksPage() {
  return (
    <main className="work-index-page" id="top">
      <SiteNav />
      <section className="featured-section work-index-section" aria-labelledby="intern-heading">
        <div className="featured-intro">
          <p className="eyebrow">WORK ARCHIVE / 01</p>
          <h1 id="intern-heading">Intern</h1>
          <p>两段真实业务环境中的产品实践：从复杂系统定义，到商业化与用户洞察。</p>
        </div>
        <div className="featured-list">
          {internships.map((item) => (
            <article className="featured-project internship-project" key={item.index}>
              <CompanyVisual item={item} />
              <div className="featured-copy">
                <p className="eyebrow">{item.eyebrow}</p>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <ul>{item.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                <div className="inline-accordion" aria-label={`${item.company} STAR 项目复盘`}>
                  {Object.entries(item.star).map(([label, body], index) => (
                    <details key={label} open={index === 0}>
                      <summary><b>{label[0]}</b><span>{label}</span><i>＋</i></summary>
                      <p>{body}</p>
                    </details>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
