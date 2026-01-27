import { useState } from 'react';

const faqItems = [
  {
    q: 'How does Vipeink achieve both speed and regulatory compliance?',
    a: 'Vipeink integrates compliance directly into the protocol using zero-knowledge proofs. The ZK-circuit verifies AML/KYC rules without revealing personal data: Circuit_compliance = Circuit_tx ∧ Circuit_AML ∧ Circuit_KYC. This provides mathematical proof of compliance while preserving privacy, allowing transactions to settle in 15-30 seconds while meeting regulatory requirements.'
  },
  {
    q: 'What prevents bridge attacks that have compromised other systems?',
    a: 'Vipeink uses a multi-layer security approach for the bridge: 1) MPC Network with 3-of-5 signatures for mint/burn operations, 2) ZK-proofs for all state transitions, 3) Time-locks for large withdrawals (T_delay = k · log(amount)), and 4) Emergency pause with 4/7 DAO multisig control. Unlike other bridges, we never rely on a single point of failure or trusted execution environment.'
  },
  {
    q: 'How does the system handle network partitions?',
    a: 'During network partitions, Vipeink sacrifices availability to preserve consistency (CP-consistency). The system activates an emergency pause when partition timeout exceeds 60 seconds or more than 25% of validators are unavailable. This prevents double-spending under uncertainty. Recovery requires 4/7 signatures from the DAO multisig wallet to exit pause mode, ensuring safety over liveness during critical failures.'
  },
  {
    q: 'How are stablecoins backed and verified?',
    a: 'Each stablecoin (EUR@, USD@) is backed 1:1 by reserves in licensed partner banks. Reserve Auditor verifies balances and generates Proof_reserve. Daily backing proof is published: Π = Proof_reserve ∧ Proof_audit. Anyone can verify this ZK-proof without seeing user details. If reserve_ratio falls below 0.99, mint operations are automatically suspended and recovery mechanisms activate through DAO voting.'
  },
  {
    q: 'What happens during oracle manipulation attempts?',
    a: 'The Arakula Oracle employs TWAP (Time-Weighted Average Price) with multiple protections: 1) IQR method to filter outliers, 2) Cross-exchange verification (price must be within 2% of median across 5 major exchanges), and 3) Node staking (10,000 VPE per node with slashing for false data). For cross-currency operations, slippage >1.5% triggers reversion with temporary locks and two-phase commit protocol to prevent partial executions.'
  }
];

export default function FAQPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <h1 className="font-mono text-4xl sm:text-5xl mb-12 sm:mb-16">Technical FAQ</h1>
        <div className="space-y-px">
          {faqItems.map((item, i) => (
            <div 
              key={i} 
              className="border-b border-vipeink-border last:border-b-0"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-vipeink-accent focus:outline-none focus:ring-2 focus:ring-vipeink-accent focus:ring-offset-2 focus:ring-offset-vipeink-bg"
                aria-expanded={expandedFaq === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-mono text-lg text-vipeink-text-primary">{item.q}</span>
                {/*<ChevronDown*/}
                {/*  className={`transform transition-transform ${*/}
                {/*    expandedFaq === i ? 'rotate-180' : ''*/}
                {/*  }`}*/}
                {/*  size={20}*/}
                {/*  aria-hidden="true"*/}
                {/*/>*/}
              </button>
              {expandedFaq === i && (
                <div 
                  id={`faq-answer-${i}`}
                  className="pb-6 text-vipeink-text-secondary leading-relaxed"
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}