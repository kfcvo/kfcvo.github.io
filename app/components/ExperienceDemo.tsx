"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

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

type BankTab = "overview" | "transfer" | "deposit" | "logs";
type BankTransaction = { id: string; type: "TRANSFER" | "DEPOSIT"; from: string; to: string; amount: number; time: string };

const samplePayer = "0xb0EC1EC73f4Eb7bD4fF617D3d512AC8523564ffC";
const samplePayee = "0x71eA40eA4F7c26A94b513DD4e68EC0dA2086Bc19";

function shortenAddress(value: string) {
  if (value.length < 18) return value;
  return `${value.slice(0, 8)}…${value.slice(-6)}`;
}

function ChainBankDemo() {
  const [tab, setTab] = useState<BankTab>("overview");
  const [balance, setBalance] = useState(12840);
  const [status, setStatus] = useState<"idle" | "validating" | "confirmed">("idle");
  const [payer, setPayer] = useState(samplePayer);
  const [payee, setPayee] = useState(samplePayee);
  const [amount, setAmount] = useState("100");
  const [depositor, setDepositor] = useState(samplePayer);
  const [depositAmount, setDepositAmount] = useState("10");
  const [transactions, setTransactions] = useState<BankTransaction[]>([
    { id: "0x8a71…3f92", type: "TRANSFER", from: samplePayer, to: samplePayee, amount: 100, time: "10:42" },
    { id: "0x2c19…a540", type: "DEPOSIT", from: samplePayer, to: "CHAINBANK", amount: 10, time: "10:36" },
  ]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const complete = (transaction: BankTransaction, change: number) => {
    if (timer.current) clearTimeout(timer.current);
    setStatus("validating");
    timer.current = setTimeout(() => {
      setTransactions((current) => [transaction, ...current].slice(0, 5));
      setBalance((current) => current + change);
      setStatus("confirmed");
    }, 900);
  };

  const submitTransfer = (event: FormEvent) => {
    event.preventDefault();
    const value = Number(amount) || 0;
    complete({ id: "0xd831…7a20", type: "TRANSFER", from: payer, to: payee, amount: value, time: "NOW" }, -value);
  };

  const submitDeposit = (event: FormEvent) => {
    event.preventDefault();
    const value = Number(depositAmount) || 0;
    complete({ id: "0x4f20…91bc", type: "DEPOSIT", from: depositor, to: "CHAINBANK", amount: value, time: "NOW" }, value);
  };

  const changeTab = (next: BankTab) => {
    setTab(next);
    setStatus("idle");
  };

  return (
    <div className="chainbank-demo">
      <aside className="bank-sidebar">
        <div className="bank-brand"><span>CB</span><b>CHAINBANK</b></div>
        <nav aria-label="ChainBank 演示功能">
          <button className={tab === "overview" ? "active" : ""} onClick={() => changeTab("overview")} type="button"><span>01</span>Overview</button>
          <button className={tab === "transfer" ? "active" : ""} onClick={() => changeTab("transfer")} type="button"><span>02</span>Transfer</button>
          <button className={tab === "deposit" ? "active" : ""} onClick={() => changeTab("deposit")} type="button"><span>03</span>Deposit</button>
          <button className={tab === "logs" ? "active" : ""} onClick={() => changeTab("logs")} type="button"><span>04</span>Logs</button>
        </nav>
        <div className="bank-network"><i />SEPOLIA TESTNET<small>RECONSTRUCTED DEMO</small></div>
      </aside>

      <div className="bank-screen">
        <header><div><small>SECURE BANKING MANAGEMENT / 2026</small><h3>{tab === "overview" ? "Account overview" : tab === "transfer" ? "Transfer money" : tab === "deposit" ? "Deposit funds" : "Transaction logs"}</h3></div><span>● CONNECTED</span></header>

        {tab === "overview" && (
          <div className="bank-overview">
            <section className="bank-balance"><small>DEMO BALANCE</small><strong>{balance.toLocaleString()}<span> TEST</span></strong><p>{shortenAddress(samplePayer)}</p></section>
            <div className="bank-actions"><button onClick={() => changeTab("transfer")} type="button"><span>TRANSFER</span><b>Send funds between addresses</b><i>↗</i></button><button onClick={() => changeTab("deposit")} type="button"><span>DEPOSIT</span><b>Add funds to an account</b><i>↗</i></button></div>
            <TransactionTable transactions={transactions.slice(0, 2)} />
          </div>
        )}

        {tab === "transfer" && (
          <form className="bank-form" onSubmit={submitTransfer}>
            <label>From / Payer address<input onChange={(event) => setPayer(event.target.value)} value={payer} /></label>
            <label>To / Payee address<input onChange={(event) => setPayee(event.target.value)} value={payee} /></label>
            <label>Amount<input min="1" onChange={(event) => setAmount(event.target.value)} type="number" value={amount} /></label>
            <button disabled={status === "validating"} type="submit">{status === "validating" ? "VALIDATING ON TESTNET…" : "CONFIRM TRANSFER"}</button>
            <BankStatus status={status} transaction={transactions[0]} />
          </form>
        )}

        {tab === "deposit" && (
          <form className="bank-form" onSubmit={submitDeposit}>
            <label>Depositor address<input onChange={(event) => setDepositor(event.target.value)} value={depositor} /></label>
            <label>Deposit amount<input min="1" onChange={(event) => setDepositAmount(event.target.value)} type="number" value={depositAmount} /></label>
            <button disabled={status === "validating"} type="submit">{status === "validating" ? "VALIDATING ON TESTNET…" : "CONFIRM DEPOSIT"}</button>
            <BankStatus status={status} transaction={transactions[0]} />
          </form>
        )}

        {tab === "logs" && <TransactionTable transactions={transactions} />}
      </div>
    </div>
  );
}

function BankStatus({ status, transaction }: { status: "idle" | "validating" | "confirmed"; transaction: BankTransaction }) {
  if (status === "idle") return <p className="bank-form-note">This portfolio demo uses fixed test data and does not submit a blockchain transaction.</p>;
  return (
    <div className={`bank-status bank-status-${status}`} aria-live="polite">
      <span>{status === "confirmed" ? "✓" : "…"}</span>
      <div><b>{status === "confirmed" ? "Transaction confirmed" : "Validating transaction"}</b><p>{status === "confirmed" ? `${transaction.id} · Sepolia testnet simulation` : "Checking addresses and preparing the contract call."}</p></div>
    </div>
  );
}

function TransactionTable({ transactions }: { transactions: BankTransaction[] }) {
  return (
    <section className="bank-transactions">
      <div className="bank-table-heading"><b>RECENT TRANSACTIONS</b><span>STATUS</span></div>
      {transactions.map((item, index) => (
        <div className="bank-transaction" key={`${item.id}-${index}`}>
          <span>{item.type.slice(0, 1)}</span>
          <div><b>{item.type === "TRANSFER" ? `${shortenAddress(item.from)} → ${shortenAddress(item.to)}` : `Deposit to ${shortenAddress(item.from)}`}</b><small>{item.id} · {item.time}</small></div>
          <strong>{item.type === "TRANSFER" ? "−" : "+"}{item.amount}</strong>
          <i>CONFIRMED</i>
        </div>
      ))}
    </section>
  );
}

export function ExperienceDemo({ slug }: { slug: string }) {
  if (slug === "company-info-check") return <CompanyInfoCheckDemo />;
  if (slug === "chainbank") return <ChainBankDemo />;
  return null;
}
