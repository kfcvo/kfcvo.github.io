"use client";

import { useEffect, useRef, useState } from "react";

type ResearchCompany = "MiniMax" | "字节跳动" | "小红书";

const researchReports: Record<ResearchCompany, {
  industry: string;
  role: string;
  city: string;
  score: number;
  recommendation: string;
  business: string;
  salary: string;
  pace: string;
}> = {
  MiniMax: {
    industry: "AI / 大模型",
    role: "AI 产品经理",
    city: "上海",
    score: 82,
    recommendation: "高优先级投递",
    business: "聚焦通用大模型研发及面向个人与企业的 AI 原生产品。",
    salary: "公开样本有限，建议结合岗位职级进一步核验。",
    pace: "多条反馈提及节奏较快，团队差异较大。",
  },
  字节跳动: {
    industry: "互联网 / 内容科技",
    role: "产品经理",
    city: "北京",
    score: 76,
    recommendation: "建议重点了解团队",
    business: "覆盖内容平台、企业服务与 AI 产品等多条业务线。",
    salary: "公开招聘信息较丰富，不同业务与职级跨度明显。",
    pace: "成长速度快，同时需要重点确认具体团队工作节奏。",
  },
  小红书: {
    industry: "内容社区 / 电商",
    role: "商业产品经理",
    city: "上海",
    score: 79,
    recommendation: "较高优先级投递",
    business: "以生活方式内容社区为核心，延伸商业化与交易场景。",
    salary: "岗位样本与业务方向相关，面试阶段需确认薪资构成。",
    pace: "用户与商业化导向明显，反馈呈现团队差异。",
  },
};

function CompanyInfoCheckDemo() {
  const [selected, setSelected] = useState<ResearchCompany>("MiniMax");
  const [status, setStatus] = useState<"ready" | "analyzing">("ready");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const analyze = (company: ResearchCompany) => {
    if (timer.current) clearTimeout(timer.current);
    setSelected(company);
    setStatus("analyzing");
    timer.current = setTimeout(() => setStatus("ready"), 760);
  };

  const report = researchReports[selected];

  return (
    <div className="research-demo">
      <div className="research-browser">
        <div className="demo-browser-bar">
          <i /><i /><i />
          <span>campus.example.com/jobs/2027</span>
        </div>
        <div className="research-job-page">
          <div className="research-page-heading">
            <small>2027 CAMPUS RECRUITMENT</small>
            <strong>产品与技术岗位校招汇总</strong>
            <p>点击公司名称，模拟网页划词背调</p>
          </div>
          <div className="research-table" role="list" aria-label="公司岗位样例">
            {(Object.keys(researchReports) as ResearchCompany[]).map((company) => {
              const item = researchReports[company];
              return (
                <button className={company === selected ? "selected" : ""} key={company} onClick={() => analyze(company)} type="button">
                  <b>{company}</b><span>{item.role}</span><span>{item.city}</span><i>选择 ↗</i>
                </button>
              );
            })}
          </div>
          <p className="demo-safety-note">演示使用固定脱敏数据，不上传简历，也不调用外部搜索服务。</p>
        </div>
      </div>

      <aside className="research-panel" aria-live="polite">
        <header><span className="research-mark">⌕</span><div><b>公司背调</b><small>公开证据 · 个性化判断</small></div><i>•••</i></header>
        {status === "analyzing" ? (
          <div className="research-loading">
            <span />
            <b>正在识别 {selected}</b>
            <p>整理岗位上下文、公开来源与偏好匹配…</p>
            <div><i /><i /><i /></div>
          </div>
        ) : (
          <div className="research-result">
            <div className="research-identity"><div><h3>{selected}</h3><p>{report.industry} · {report.city}</p></div><span>身份 96%</span></div>
            <section className="research-score"><div><b>{report.recommendation}</b><p>岗位方向与产品经历存在匹配，建议继续核验团队与职级。</p></div><strong>{report.score}<small>/100</small></strong></section>
            <section><small>主营业务</small><p>{report.business}</p></section>
            <div className="research-insights"><section><small>薪资观察</small><p>{report.salary}</p></section><section><small>工作节奏</small><p>{report.pace}</p></section></div>
            <button className="research-evidence" type="button"><span>03</span><b>查看公开证据</b><i>Evidence ↗</i></button>
          </div>
        )}
      </aside>
    </div>
  );
}

export function ExperienceDemo({ slug }: { slug: string }) {
  if (slug === "company-info-check") return <CompanyInfoCheckDemo />;
  return null;
}
