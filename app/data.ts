export type WorkCategory = {
  id: string;
  index: string;
  title: string;
  count: string;
  note: string;
  items: Array<{
    index: string;
    title: string;
    meta: string;
    href: string;
    placeholder?: boolean;
  }>;
};

export const workCategories: WorkCategory[] = [
  {
    id: "intern",
    index: "01",
    title: "INTERN",
    count: "2 experiences",
    note: "从产品定义到交付验证",
    items: [
      {
        index: "01",
        title: "中关村科金",
        meta: "区块链产品经理",
        href: "/works/intern/zhongguancun-kejin",
      },
      {
        index: "02",
        title: "华清飞扬",
        meta: "游戏产品运营",
        href: "/works/intern/huaqing-feiyang",
      },
    ],
  },
  {
    id: "projects",
    index: "02",
    title: "PROJECTS",
    count: "1 featured project",
    note: "产品、研究与团队协作",
    items: [
      {
        index: "01",
        title: "轻叙 AI 情绪伴侣",
        meta: "高校情绪陪伴小程序",
        href: "/works/projects/moodmate-ai",
      },
    ],
  },
  {
    id: "ai",
    index: "03",
    title: "AI & EMERGING TECH",
    count: "2 experiments",
    note: "从 AI 工具到区块链原型",
    items: [
      {
        index: "01",
        title: "CompanyInfoCheck",
        meta: "校招公司背调助手",
        href: "/works/ai/company-info-check",
      },
      {
        index: "02",
        title: "ChainBank",
        meta: "区块链银行交易原型",
        href: "/works/ai/chainbank",
      },
    ],
  },
  {
    id: "design",
    index: "04",
    title: "DESIGN",
    count: "2 archives",
    note: "编辑设计与视觉物料",
    items: [
      {
        index: "01",
        title: "Wechat Editorial",
        meta: "公众号排版",
        href: "/works/design/editorial",
      },
      {
        index: "02",
        title: "Posters & Materials",
        meta: "海报及相关物料",
        href: "/works/design/posters",
      },
    ],
  },
];

export type StarItem = {
  number: string;
  title: string;
  outcome: string;
  visual: string;
  visualNote: string;
  tags: string[];
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
};

export type InternCase = {
  company: string;
  role: string;
  period: string;
  sector: string;
  background: string;
  summary: string;
  works: StarItem[];
};

export const internCases: Record<string, InternCase> = {
  "zhongguancun-kejin": {
    company: "中关村科金",
    role: "产品经理（AI / 区块链方向）",
    period: "2026.05 — 2026.08",
    sector: "ENTERPRISE AI × BLOCKCHAIN",
    background: "企业级大模型及智能交互解决方案服务商",
    summary:
      "负责轻量化“区块链 + AI”企业级存证与侵权追踪平台的需求分析、方案设计和 MVP 交付，支持 SaaS 及私有化部署。",
    works: [
      {
        number: "01",
        title: "企业级存证工作台",
        outcome: "把跨机构流转中的举证、隐私与侵权识别问题收拢成一条可执行产品链路。",
        visual: "Evidence workspace",
        visualNote: "工作台界面 / 信息架构图待替换",
        tags: ["Product Definition", "User Flow", "PRD"],
        star: {
          situation:
            "企业关键文件在跨机构流转时存在泄密、举证困难和侵权识别成本高等问题。",
          task:
            "参与规划“本地摘要存证—双链核验—AI 侵权追踪”完整业务链路，并负责平台需求分析与方案设计。",
          action:
            "将需求拆解为本地摘要、双链印证、核验与 AI 侵权追踪等模块；协同架构团队明确产品边界，并将交互和异常状态沉淀为产品规范。",
          result:
            "形成可评审的工作台方案与模块化需求，为支持 SaaS 与私有化部署的 MVP 建立统一产品结构。",
        },
      },
      {
        number: "02",
        title: "隐私友好的双链核验",
        outcome: "在不上传商业机密明文的前提下兼顾司法公信力与公开链防篡改能力。",
        visual: "Dual-chain flow",
        visualNote: "双链交互流程图待替换",
        tags: ["Blockchain", "Privacy", "Architecture"],
        star: {
          situation:
            "企业需要可信存证，但敏感文件不能直接暴露；单一链路也难同时覆盖司法背书与公开可验证性。",
          task:
            "参与存证核验链路设计，帮助团队把技术约束翻译为用户可理解、可操作的产品流程。",
          action:
            "设计本地 Hash 与摘要存证逻辑，并协同架构团队完成司法链与公链的双链存证方案、状态反馈和失败处理。",
          result:
            "完成兼顾隐私与公信力的核心链路设计，为后续界面原型和接口协作提供依据。",
        },
      },
      {
        number: "03",
        title: "AI 专利 / 侵权追踪",
        outcome: "用分级处理、RAG 限域检索与结构化证据卡片降低幻觉、特征遗漏和证据定位困难。",
        visual: "Evidence card",
        visualNote: "Evidence Card / Claim Graph 截图待替换",
        tags: ["RAG", "Evaluation", "AI Product"],
        star: {
          situation:
            "通用 LLM 在复杂长文档分析中容易出现特征遗漏、页码错乱与证据不可追溯。",
          task:
            "参与制定更稳定的侵权分析方案，并建立能够验证抽取与检索质量的评估方法。",
          action:
            "设计“短文档直连模型、复杂案件 RAG 限域检索”的分级策略，并通过 Claim Graph、JSON Schema 和证据卡片提升结论可追溯性。",
          result:
            "让分析结论能够关联具体主张、结构化字段与原文证据位置，提升复杂案件结果的可解释性与复核效率。",
        },
      },
      {
        number: "04",
        title: "需求管理与 MVP 交付",
        outcome: "独立完成 10+ 模块 PRD 与交互规范，支持产品一个月内完成 Demo 到 MVP。",
        visual: "Delivery board",
        visualNote: "里程碑 / PRD 页面待替换",
        tags: ["Delivery", "Cross-functional", "Validation"],
        star: {
          situation:
            "项目周期紧，且区块链、AI、前后端和 UI 多角色之间存在高频需求变化。",
          task:
            "建立清晰的需求口径与变更机制，保障核心范围按期进入可验收状态。",
          action:
            "独立输出 10+ 模块 PRD、流程图及交互规范，协调研发、设计和测试处理需求变更，并维护优先级与验收标准。",
          result:
            "项目在一个月内完成 Demo 到 MVP 的迭代，并通过内部评审与种子客户验收。",
        },
      },
    ],
  },
  "huaqing-feiyang": {
    company: "北京华清飞扬网络股份有限公司",
    role: "游戏产品运营",
    period: "2024.12 — 2025.04",
    sector: "GLOBAL GAME OPERATIONS",
    background: "全球化游戏研发与发行公司，主要覆盖 SLG、RPG 等品类",
    summary:
      "参与一款海外割草 Roguelike 射击塔防 RPG 手游从 0 到 1 的付费测试全流程运营。",
    works: [
      {
        number: "01",
        title: "商业化触发优化",
        outcome: "围绕用户决策路径重设计付费触发，使核心礼包购买转化率提升约 12%。",
        visual: "Conversion funnel",
        visualNote: "转化漏斗 / 触发路径待替换",
        tags: ["Monetization", "Funnel", "Game Ops"],
        star: {
          situation:
            "测试阶段用户主动进入商店并完成充值的意愿不足，核心礼包曝光与购买之间存在明显断点。",
          task:
            "定位转化卡点，并设计更贴近游戏场景的付费触发方式。",
          action:
            "搭建“商店曝光—关卡通关—付费触发”转化漏斗，协助定位礼包购买路径中的卡点；结合关键关卡和资源缺口设计场景化付费触发机制，缩短用户决策路径。",
          result: "方案上线后，核心礼包购买转化率提升约 12%。",
        },
      },
      {
        number: "02",
        title: "AIGC 内容生产 SOP",
        outcome: "将单篇海外宣发内容制作周期从 4 小时缩短至 1.5 小时。",
        visual: "Content pipeline",
        visualNote: "Prompt 模板 / 内容样例待替换",
        tags: ["AIGC", "Workflow", "Content"],
        star: {
          situation:
            "海外社群预热期需要持续产出高频内容，传统制作流程耗时且风格难统一。",
          task:
            "搭建能够被团队复用的 AIGC 素材生产流程。",
          action:
            "主导引入 AIGC 工具，构建结构化 Prompt 模板、视觉素材库和审核步骤，将创作方法沉淀为可复用 SOP。",
          result:
            "单篇内容制作时间由 4 小时降至 1.5 小时，并在预热期产出 20+ 篇海外宣发内容。",
        },
      },
      {
        number: "03",
        title: "海外社群用户洞察",
        outcome: "从 200+ 条玩家反馈中定位难度曲线与资源节奏问题，推动新手体验优化。",
        visual: "Feedback clusters",
        visualNote: "反馈聚类 / 节奏对比图待替换",
        tags: ["Discord", "Python", "User Insight"],
        star: {
          situation:
            "海外测试用户在早期出现非正常流失，但零散反馈难以直接支持产品判断。",
          task:
            "建立社群反馈收集与分析方法，找出影响前期体验的主要问题。",
          action:
            "搭建 Discord 海外社群架构，并使用 Python 深度分析 200+ 条反馈，定位“主线难度曲线陡峭”与“前期资源投放不足”两类问题，输出产品优化方案与数值迭代文档。",
          result:
            "推动优化新手引导、难度曲线与资源投放，在保障次日留存率的同时将付费卡点后移至更高粘性阶段。",
        },
      },
    ],
  },
};

export type StandardCase = {
  kind: "project" | "ai";
  title: string;
  eyebrow: string;
  status: string;
  heroImage?: string;
  summary: string;
  metadata: Array<[string, string]>;
  contribution: string;
  sections: Array<{ title: string; body: string }>;
  tags: string[];
  links?: Array<{ label: string; href: string }>;
  placeholder?: boolean;
};

export const standardCases: Record<string, StandardCase> = {
  "moodmate-ai": {
    kind: "project",
    title: "轻叙 AI 情绪伴侣",
    eyebrow: "CAMPUS AI EMOTIONAL COMPANION",
    status: "MVP COMPLETED / THIRD PRIZE",
    heroImage: "/projects/qingxu-ui.png",
    summary:
      "面向高校学生的“零社交压力”AI 情绪伴侣，通过差异化 Agent、情绪—行为归因日历与轻量化自我观察，降低学生表达和求助的心理门槛。",
    metadata: [
      ["Period", "2023.12 — 2024.06"],
      ["Role", "项目负责人 / 产品统筹"],
      ["Research", "300+ 样本 / 60% 隐私顾虑"],
      ["Outcome", "MVP 落地 / 大赛三等奖"],
    ],
    contribution:
      "作为项目负责人，统筹推进高校 AI 情绪伴侣小程序从 0 到 1 的产品落地，负责用户研究、产品定位、功能规划、Agent 策略与 Uniapp MVP 开发协作。",
    sections: [
      {
        title: "01 / Background",
        body: "高校学生面临学业、人际和就业等多重压力，但传统心理咨询存在预约成本、表达负担与隐私顾虑。300+ 样本调研显示，60% 的学生会因隐私担忧拒绝人工心理咨询；真正的产品机会不是替代专业治疗，而是在情绪出现的当下提供一个更容易开始的轻量入口。",
      },
      {
        title: "02 / Product positioning",
        body: "团队将产品定义为“零社交压力情绪疏导”：不要求用户暴露身份，不制造被评判感，以情绪自测、低门槛记录和 AI 对话承接即时情绪需求。产品边界聚焦陪伴、自我觉察和日常疏导，不把 AI 包装成专业心理医生。",
      },
      {
        title: "03 / Agent strategy",
        body: "针对用户既可能“只想被听见”，也可能“希望得到行动建议”的差异化诉求，构建倾听型与指导型两类 Agent。基于 Few-Shot 与 RAG 调试 System Prompt，约束回应语气、建议颗粒度与知识范围，让陪伴更自然，也让指导更具上下文依据。",
      },
      {
        title: "04 / Product structure",
        body: "围绕“感知—表达—理解—回看”设计产品结构：通过情绪自测和标签记录当下状态，以 AI 流式对话承接表达，再用情绪日记、对话历史和“情绪—行为归因日历”帮助用户观察长期变化。可视化面板将每日情绪、AI 对话与评估结果汇总为可回顾的个人记录。",
      },
      {
        title: "05 / MVP & outcome",
        body: "最终基于 Uniapp + LLM API 完成包含流式对话、情绪记录、对话历史与可视化面板的 MVP，验证高校情绪陪伴场景的产品与技术可行性，并获得大赛三等奖。后续迭代重点将放在危机干预边界、专业内容审核和长期使用效果验证。",
      },
    ],
    tags: ["0→1 Product", "User Research", "Few-Shot", "RAG", "Uniapp", "LLM API"],
  },
  "next-project": {
    kind: "project",
    title: "Next Project",
    eyebrow: "PROJECT PLACEHOLDER",
    status: "CONTENT TO REPLACE",
    summary: "这里保留给你的第二个正式项目。当前文字用于验证页面密度、排版层级和移动端阅读体验。",
    metadata: [
      ["Period", "20XX.XX — 20XX.XX"],
      ["Role", "你的角色"],
      ["Team", "团队规模"],
      ["Outcome", "项目结果"],
    ],
    contribution: "请在这里替换为你最重要的 2—3 项贡献，优先说明你的判断、行动和带来的变化。",
    sections: [
      { title: "01 / Background", body: "项目背景待替换：它为谁解决什么问题，为什么值得做。" },
      { title: "02 / Process", body: "产品过程待替换：调研、定义、设计、协作与迭代。" },
      { title: "03 / Outcome", body: "项目结果待替换：数据、交付物、验证与复盘。" },
    ],
    tags: ["Replace", "With", "Your Content"],
    placeholder: true,
  },
  "company-info-check": {
    kind: "ai",
    title: "CompanyInfoCheck",
    eyebrow: "AI & EMERGING TECH / 01",
    status: "WORKING PROTOTYPE",
    heroImage: "/ai/company-info-check.png",
    summary: "面向校招求职者的浏览器公司背调助手：在招聘网页中划选公司名称，即可获得带公开证据、置信度与个性化判断的投递建议。",
    metadata: [["Format", "Chrome extension"], ["Role", "独立设计与开发"], ["Architecture", "React + FastAPI"], ["Stage", "Working prototype"]],
    contribution: "独立完成从问题定义、浏览器交互到信息检索与证据整理的完整原型，并围绕隐私边界、来源质量和结论可信度设计降级策略。",
    sections: [
      { title: "01 / Problem", body: "校招求职者研究陌生公司时，需要在官网、招聘平台、员工社区和社交媒体之间反复切换。信息口径不一，零散内容也很难直接回答“这家公司是否适合我、是否值得优先投递”。" },
      { title: "02 / Product decision", body: "产品被设计成浏览器侧边栏，而不是独立搜索网站。用户在岗位页面划选公司名称后，系统同时读取岗位、城市和招聘批次上下文，将背调动作嵌入原有浏览路径，减少复制、切页和重复输入。" },
      { title: "03 / Evidence strategy", body: "报告将公司业务、薪资、工作节奏和员工反馈拆分呈现，并保留公开来源、相关度和置信度。证据不足或不同来源存在冲突时，系统明确返回“信息不足”或“需要核验”，避免用流畅表达掩盖事实缺口。" },
      { title: "04 / System design", body: "浏览器扩展负责划词、页面上下文、简历偏好与结果展示；FastAPI 后端负责任务编排、公开搜索、证据去重和缓存。简历仅在内存中解析并移除联系方式，浏览器只保存用户确认后的结构化偏好。" },
      { title: "05 / Prototype", body: "目前已完成从首次设置、简历解析、网页划词到渐进式公司报告的完整原型，并为搜索服务不可用、证据不足和缓存命中设计了可解释状态。站内演示使用脱敏固定数据，不上传简历，也不调用外部搜索服务。" },
    ],
    tags: ["Browser Extension", "Evidence", "FastAPI", "Privacy", "AI Product"],
    links: [{ label: "VIEW SOURCE ON GITHUB ↗", href: "https://github.com/kfcvo/CompanyInfoCheck" }],
  },
  "chainbank": {
    kind: "ai",
    title: "ChainBank",
    eyebrow: "AI & EMERGING TECH / 02",
    status: "LIVE ARCHIVE / COURSE PROJECT",
    heroImage: "/ai/chainbank-dashboard.png",
    summary: "基于 Ethereum Sepolia 测试网的银行交易原型，通过地址化账户、资金存入、转账和操作日志，探索智能合约参与资金管理与交易验证的基本路径。",
    metadata: [["Period", "2026.01"], ["Role", "独立开发者"], ["Network", "Ethereum Sepolia"], ["Deployment", "Render live archive"]],
    contribution: "作为个人课程项目，独立完成交易场景定义、页面交互、Solidity 合约实验与 Web 部署，把合约调用过程转译为可理解的存款、转账和记录查询流程。",
    sections: [
      { title: "01 / Background", body: "项目源于区块链课程对智能合约和去中心化交易流程的实践要求。我选择银行操作作为载体，将抽象的地址、合约调用和交易确认转化为更熟悉的存款与转账任务。" },
      { title: "02 / Core flow", body: "系统围绕四个基础能力展开：账户地址输入、资金存入、地址间转账和操作日志。用户完成表单后可以查看最近一笔交易记录，理解付款方、收款方、金额与交易状态之间的关系。" },
      { title: "03 / Contract experiment", body: "智能合约使用 Solidity 在 Remix IDE 中编写，并在 Ethereum Sepolia 测试网上完成课程实验。项目重点是理解前端操作、合约方法和测试网交易之间的连接，而不是将原型包装为生产级金融系统。" },
      { title: "04 / Deployment & reflection", body: "Web 应用部署于 Render，原始版本目前仍可访问。由于历史合约源码未完整保留，作品集内的演示采用固定测试数据重建交互，同时保留原始部署与 GitHub 链接，明确区分历史实现和当前展示。" },
    ],
    tags: ["Solidity", "Remix IDE", "Sepolia", "Web Prototype", "Render"],
    links: [
      { label: "OPEN ORIGINAL DEPLOYMENT ↗", href: "https://six106-assignment.onrender.com" },
      { label: "VIEW SOURCE ON GITHUB ↗", href: "https://github.com/kfcvo/ChainBank-BlockchainBankingSystem" },
    ],
  },
};
