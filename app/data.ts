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
        title: "MoodMate AI",
        meta: "多模态心理健康系统",
        href: "/works/projects/moodmate-ai",
      },
    ],
  },
  {
    id: "ai",
    index: "03",
    title: "AI EXPERIENCE",
    count: "3 experiments",
    note: "把日常问题做成可用工具",
    items: [
      {
        index: "01",
        title: "Career Copilot",
        meta: "秋招公司研究插件",
        href: "/works/ai/career-copilot",
      },
      {
        index: "02",
        title: "Japanese Translator",
        meta: "日语翻译网页",
        href: "/works/ai/japanese-translator",
      },
      {
        index: "03",
        title: "Vision Break",
        meta: "视力休息提醒工具",
        href: "/works/ai/vision-break",
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
  summary: string;
  metadata: Array<[string, string]>;
  contribution: string;
  sections: Array<{ title: string; body: string }>;
  tags: string[];
  placeholder?: boolean;
};

export const standardCases: Record<string, StandardCase> = {
  "moodmate-ai": {
    kind: "project",
    title: "MoodMate AI",
    eyebrow: "MULTIMODAL MENTAL WELLBEING",
    status: "MVP COMPLETED",
    summary:
      "面向高校学生的轻量情绪管理系统，用差异化 AI 陪伴、情绪日历和自我量化降低表达压力。",
    metadata: [
      ["Period", "2023.12 — 2024.06"],
      ["Role", "项目负责人 / 前端开发"],
      ["Scope", "300+ 样本调研"],
      ["Outcome", "北京市级互联网+三等奖"],
    ],
    contribution:
      "负责从用户研究、产品定位到 AI Agent 人设与 Uniapp MVP 的完整推进，并参与前端开发和数据可视化落地。",
    sections: [
      {
        title: "01 / Background",
        body: "调研显示，60% 的学生存在情绪困扰，但因隐私顾虑不愿寻求心理中心的人工咨询。团队由此将产品定位为低压力、轻量级的 AI 情绪伴侣。",
      },
      {
        title: "02 / Product decision",
        body: "针对“求安慰”和“求建议”两种不同诉求，设计倾听型与指导型两类 AI 咨询师；通过 System Prompt 与 Few-Shot 调整回应方式。",
      },
      {
        title: "03 / Retention loop",
        body: "规划“情绪标签 + 行为记录”的情绪日历，帮助用户理解情绪与行为的关系，让产品从一次性对话延展为可持续的自我观察工具。",
      },
      {
        title: "04 / Outcome & reflection",
        body: "基于 Uniapp 与 LLM API 完成流式对话和数据可视化 MVP，并获得赛事三等奖。下一版需要补充安全边界、危机干预与长期留存验证。",
      },
    ],
    tags: ["User Research", "AI Agent", "Uniapp", "LLM API"],
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
  "career-copilot": {
    kind: "ai",
    title: "Career Copilot",
    eyebrow: "AI EXPERIENCE / 01",
    status: "EXPLORATION PROTOTYPE",
    summary: "一个面向求职场景的公司研究插件：选中公司名称后，快速整理业务、行业与口碑信息。",
    metadata: [["Format", "Browser extension"], ["Focus", "Company research"], ["Role", "独立探索"], ["Stage", "Prototype"]],
    contribution: "从求职准备中的重复检索出发，定义信息框架、提示词与浏览器上下文交互，探索更低摩擦的公司研究体验。",
    sections: [
      { title: "01 / Problem", body: "求职者研究陌生公司时，需要在官网、行业信息与口碑来源之间反复切换，信息收集成本高且判断框架不稳定。" },
      { title: "02 / Solution", body: "通过浏览器上下文识别公司名称，将业务、行业位置、增长信号与风险提示组织成一份可快速阅读的研究摘要。" },
      { title: "03 / Build process", body: "原型重点验证信息层级、来源提示与生成结果的可扫描性，并持续调整提示词以减少宽泛、重复的结论。" },
      { title: "04 / Next step", body: "下一步将补充来源可信度标记、用户自定义研究维度，以及对不同岗位更有针对性的结论结构。" },
    ],
    tags: ["Browser Extension", "LLM", "Research"],
  },
  "japanese-translator": {
    kind: "ai",
    title: "Japanese Translator",
    eyebrow: "AI EXPERIENCE / 02",
    status: "WEB PROTOTYPE",
    summary: "一个可直接体验的日语翻译网页。当前页面先定义展示结构，后续接入真实网站、截图与 GitHub。",
    metadata: [["Format", "Web app"], ["Focus", "Contextual translation"], ["Role", "独立探索"], ["Stage", "Prototype"]],
    contribution: "围绕“理解而不仅是直译”设计输入、译文与语言解释的层级，并完成轻量网页原型。",
    sections: [
      { title: "01 / Use case", body: "面向日语学习与日常阅读场景，重点处理语气、上下文和文化表达在普通直译中容易丢失的问题。" },
      { title: "02 / Experience", body: "把结果拆成自然译文、关键词解释和语气提示，让用户既能快速使用，也能理解表达为什么成立。" },
      { title: "03 / Build process", body: "通过提示词约束输出结构，并在前端保持输入、结果与复制操作的清晰节奏，降低信息噪音。" },
      { title: "04 / Outcome", body: "当前完成核心网页原型；后续计划加入术语偏好、历史记录与不同文体的表达模式。" },
    ],
    tags: ["Web App", "Translation", "Prompt"],
  },
  "vision-break": {
    kind: "ai",
    title: "Vision Break",
    eyebrow: "AI EXPERIENCE / 03",
    status: "CONCEPT PROTOTYPE",
    summary: "围绕长时间使用电脑造成的视觉疲劳，探索更自然、更难被忽略的休息提醒机制。",
    metadata: [["Format", "Desktop tool"], ["Focus", "Digital wellbeing"], ["Role", "独立探索"], ["Stage", "Concept"]],
    contribution: "从长期电脑工作中的视觉疲劳出发，探索兼顾有效提醒与用户控制感的桌面干预机制。",
    sections: [
      { title: "01 / Observation", body: "普通通知很容易被忽略，而过强的强制中断又会破坏专注；提醒是否有效取决于时机、强度与退出成本。" },
      { title: "02 / Mechanism", body: "概念采用渐进式屏幕变化，在不突然打断工作的情况下逐步提高提示强度，并始终保留延后与退出入口。" },
      { title: "03 / Prototype", body: "原型用于验证提醒层级、文案语气和恢复工作前的过渡体验，避免把健康工具做成新的压力来源。" },
      { title: "04 / Next step", body: "下一步将测试不同工作节奏下的接受度，并探索基于连续使用时长动态调整提醒频率。" },
    ],
    tags: ["Desktop", "Wellbeing", "Prototype"],
  },
};
