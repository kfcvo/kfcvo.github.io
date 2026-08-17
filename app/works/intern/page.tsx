import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";

const internships = [
  {
    index: "01",
    company: "中关村科金",
    role: "产品经理（AI / 区块链方向）",
    period: "2026.05 — 2026.08",
    eyebrow: "ENTERPRISE AI × BLOCKCHAIN",
    background: "企业级大模型及智能交互解决方案服务商",
    title: "轻量化“区块链 + AI”企业级存证与侵权追踪平台",
    summary: "负责企业级文件存证与 AI 侵权追踪平台的需求分析、方案设计和 MVP 交付，支持 SaaS 及私有化部署。",
    facts: ["10+ 模块 PRD", "Demo → MVP / 1 个月", "SaaS & 私有化"],
    tone: "mint",
    star: {
      Situation: "企业文件跨机构流转中存在泄密、举证困难和侵权识别成本高等问题；长文档直接调用 LLM 还容易产生幻觉、特征遗漏与证据定位困难。",
      Task: "参与规划“本地摘要存证—双链核验—AI 侵权追踪”完整业务链路，并负责平台需求分析、方案设计与 MVP 交付。",
      Action: "协同架构团队完成司法链与公链的双链存证方案；设计“短文档直连模型、复杂案件 RAG 限域检索”的分级策略，并用 Claim Graph、JSON Schema 与证据卡片提升结论可追溯性。独立输出 10+ 模块 PRD、流程图及交互规范，协调研发、设计和测试处理需求变更。",
      Result: "1 个月内推动产品由 Demo 迭代至 MVP，并完成内部评审与种子客户验收，形成支持 SaaS 与私有化部署的企业级解决方案。",
    },
  },
  {
    index: "02",
    company: "北京华清飞扬网络股份有限公司",
    role: "游戏产品运营",
    period: "2024.12 — 2025.04",
    eyebrow: "GLOBAL GAME OPERATIONS",
    background: "全球化游戏研发与发行公司，主要覆盖 SLG、RPG 等品类",
    title: "海外 Roguelike 射击塔防 RPG 从 0 到 1 付费测试",
    summary: "参与一款海外割草 Roguelike 射击塔防 RPG 手游从 0 到 1 的付费测试全流程运营。",
    facts: ["购买转化 +12%", "内容制作 4h → 1.5h", "200+ 用户反馈"],
    tone: "sky",
    star: {
      Situation: "付费测试初期，用户主动充值意愿不足，海外社群宣发需求高频且内容生产耗时；同时玩家反馈分散，早期流失原因难以定位。",
      Task: "围绕商业化转化、AIGC 内容效率和海外用户洞察，参与产品从 0 到 1 付费测试的全流程运营。",
      Action: "搭建“商店曝光—关卡通关—付费触发”转化漏斗并设计场景化触发机制；构建结构化 Prompt 模板、视觉素材库与内容 SOP；搭建 Discord 社群，并用 Python 深度分析 200+ 条玩家反馈。",
      Result: "核心礼包购买转化率提升约 12%；单篇内容制作周期由 4 小时压缩至 1.5 小时并产出 20+ 篇海外宣发内容；推动优化新手引导、难度曲线与资源投放，将付费卡点后移至高粘性周期。",
    },
  },
];

function CompanyVisual({ item }: { item: (typeof internships)[number] }) {
  return (
    <div className={`project-visual company-visual company-visual-${item.tone}`} aria-label={`${item.company}公司与项目信息`}>
      <span className="visual-index">INTERNSHIP / {item.index}</span>
      <div className="company-card">
        <p className="eyebrow">INTERNSHIP COMPANY</p>
        <h2>{item.company}</h2>
        <div className="company-role"><span>{item.role}</span><span>{item.period}</span></div>
        <dl className="company-context">
          <div><dt>公司背景 / COMPANY</dt><dd>{item.background}</dd></div>
          <div><dt>核心项目 / CORE PROJECT</dt><dd>{item.summary}</dd></div>
        </dl>
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
