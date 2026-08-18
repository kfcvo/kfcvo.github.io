import Image from "next/image";
import { type StandardCase } from "../data";

const visualChapters = [
  {
    label: "ORIGINAL WEB PROTOTYPE",
    kind: "pair",
    images: [
      { src: "/ai/chainbank-transfer.png", alt: "ChainBank 原始转账页面", width: 984, height: 1400 },
      { src: "/ai/chainbank-deposit.png", alt: "ChainBank 原始存款页面", width: 984, height: 1214 },
    ],
    note: "TRANSFER / DEPOSIT",
  },
  {
    label: "CONTRACT INTERACTION",
    kind: "wide",
    images: [
      { src: "/ai/chainbank-transfer-confirmed.png", alt: "ChainBank 转账与 MetaMask 交易确认页面", width: 2800, height: 2100 },
    ],
    note: "WEB UI × METAMASK",
  },
  {
    label: "SOLIDITY IN REMIX IDE",
    kind: "wide",
    images: [
      { src: "/ai/chainbank-remix.png", alt: "Remix IDE 中的 ChainBank Solidity 转账合约", width: 2372, height: 2048 },
    ],
    note: "TRANSFER_MONEY / CHECK_TRANSACTION",
  },
  {
    label: "SEPOLIA VALIDATION",
    kind: "wide",
    images: [
      { src: "/ai/chainbank-etherscan-metamask.png", alt: "Etherscan 与 MetaMask 显示的 Sepolia 测试网交易记录", width: 2372, height: 1400 },
    ],
    note: "ETHERSCAN × METAMASK / CONFIRMED",
  },
] as const;

export function ChainBankStory({ sections }: { sections: StandardCase["sections"] }) {
  return (
    <section className="chain-story" aria-label="ChainBank 项目过程">
      {sections.map((section, index) => {
        const visual = visualChapters[index];
        if (!visual) return null;
        return (
          <article className={`chain-story-chapter ${index % 2 === 1 ? "reverse" : ""}`} key={section.title}>
            <figure className={`chain-story-visual chain-story-${visual.kind}`}>
              <span>{visual.label}</span>
              <div>
                {visual.images.map((image) => (
                  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} key={image.src} unoptimized />
                ))}
              </div>
              <figcaption>{visual.note}</figcaption>
            </figure>
            <div className="chain-story-copy">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p className="eyebrow">{visual.label}</p>
              <h2>{section.title.replace(/^\d+ \/ /, "")}</h2>
              <p>{section.body}</p>
              {index === 1 && (
                <dl>
                  <div><dt>INPUT</dt><dd>Payer / Payee / Amount</dd></div>
                  <div><dt>OUTPUT</dt><dd>Transaction record</dd></div>
                </dl>
              )}
              {index === 2 && (
                <div className="chain-code-note">
                  <code>transfer_money(address, address, uint)</code>
                  <code>check_transaction() → payer, payee, amount</code>
                </div>
              )}
              {index === 3 && (
                <div className="chain-live-links">
                  <a href="https://six106-assignment.onrender.com" rel="noreferrer" target="_blank">OPEN ORIGINAL DEPLOYMENT ↗</a>
                  <span>LIVE ARCHIVE / RENDER</span>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}
