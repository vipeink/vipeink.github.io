import { useState } from 'react';
import Accordion from '../ui/Accordion';

export default function DocumentationPage() {
  const [expandedDoc] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h1 className="font-mono text-4xl sm:text-5xl mb-12 sm:mb-16">Technical Documentation</h1>
        <div className="space-y-8">
          {/* Proof Marketplace */}
          <Accordion
            id="proof-marketplace"
            title="Proof Marketplace"
            subtitle="Decentralized computational integrity with SLA guarantees"
            defaultOpen={expandedDoc === 'proof-marketplace'}
          >
            <div className="space-y-6">
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Conceptual Motivation</h3>
                <p className="text-vipeink-text-secondary leading-relaxed">
                  Centralized ZK-proving stacks create single points of failure and censorship risks. The Proof Marketplace distributes proving power across a competitive network of provers, ensuring system resilience while maintaining SLA guarantees for time-sensitive financial operations.
                </p>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-4 text-vipeink-text-primary">Formal Model</h3>
                <div className="font-mono text-sm bg-vipeink-bg border border-vipeink-border p-6 my-4 rounded">
                  <div className="text-vipeink-text-secondary">
                    <span className="text-vipeink-accent">//</span> Prover selection probability<br/>
                    P<sub>win</sub> = (reputation<sub>i</sub> · e<sup>-λ·latency<sub>i</sub></sup>) / ∑<sub>j</sub>(reputation<sub>j</sub> · e<sup>-λ·latency<sub>j</sub></sup>)<br/><br/>
                    <span className="text-vipeink-accent">//</span> SLA deadline for proof generation<br/>
                    T<sub>max</sub> = max(2 · median<sub>history</sub>, timestamp<sub>batch</sub> + 15 seconds)<br/><br/>
                    <span className="text-vipeink-accent">//</span> Hierarchical proof structure<br/>
                    π<sub>daily</sub> = Prove<sub>Rec</sub>(π<sub>hour1</sub>, π<sub>hour2</sub>, ..., π<sub>hour24</sub>)
                  </div>
                </div>
                <p className="text-vipeink-text-secondary leading-relaxed mt-3">
                  Provers compete based on a weighted combination of reputation and latency. Reputation is updated through accuracy evaluation mechanisms, creating economic incentives for honest behavior. Recursive proofs allow daily proofs to be aggregated from hourly ones, reducing L1 load by a factor of 24.
                </p>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Protocol Flow</h3>
                <ol className="space-y-2 pl-4 list-decimal text-vipeink-text-secondary">
                  <li>Batches of transactions are formed by the Sequencer Committee</li>
                  <li>Proof generation tasks are broadcast to the marketplace</li>
                  <li>Provers submit proofs with cryptographic commitments</li>
                  <li>Selection algorithm chooses winner based on reputation/latency metrics</li>
                  <li>Proof is verified on L1 (TON MasterChain)</li>
                  <li>Prover is rewarded based on SLA compliance</li>
                  <li>If SLA violated, system transitions to optimistic mode with fraud-proof within 6 hours</li>
                </ol>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Security Model</h3>
                <p className="text-vipeink-text-secondary leading-relaxed mb-3">
                  The system assumes Byzantine fault tolerance with up to f &lt; n/3 malicious provers. Honest behavior is incentivized through:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-vipeink-text-secondary">
                  <li>Base reward: R<sub>base</sub> = 0.001 · tx_count</li>
                  <li>Speed bonus: R<sub>speed</sub> = max(0, 0.0002 · (T<sub>max</sub> - T<sub>actual</sub>))</li>
                  <li>Slashing for errors: Slash = 0.1 · R<sub>total</sub> for incorrect proofs</li>
                </ul>
                <p className="text-vipeink-text-secondary italic mt-3">
                  Annual yield for provers: 8-15% with 99.9% uptime. Economic security model ensures E[profit] &lt; 0 for attack attempts.
                </p>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Integration Points</h3>
                <p className="text-vipeink-text-secondary leading-relaxed mb-3">
                  The Proof Marketplace interfaces with:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-vipeink-text-secondary">
                  <li>Intent Layer: Processes batches of user transactions</li>
                  <li>ZK-Rollup: Generates proofs of state transitions</li>
                  <li>Settlement Layer: Provides cryptographic finality for cross-border operations</li>
                </ul>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Failure Modes</h3>
                <p className="text-vipeink-text-secondary leading-relaxed">
                  When proof generation SLAs are violated, the system automatically transitions to optimistic mode. In this mode, state transitions are assumed correct unless fraud proofs are submitted within a 6-hour window. If more than 33% of provers are unavailable or malicious, the Emergency Pause mechanism activates, freezing all L1↔L2 bridges until DAO governance resolves the issue.
                </p>
              </section>
            </div>
          </Accordion>
          
          {/* Account-Wallet Mapper */}
          <Accordion
            id="account-wallet-mapper"
            title="Account-Wallet Mapper"
            subtitle="Privacy-preserving translation between financial languages"
            defaultOpen={expandedDoc === 'account-wallet-mapper'}
          >
            <div className="space-y-6">
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Conceptual Motivation</h3>
                <p className="text-vipeink-text-secondary leading-relaxed">
                  Blockchains speak the language of "addresses and hashes." Banks speak the language of "IBAN and SWIFT." The Account-Wallet Mapper creates a bidirectional translator that preserves user privacy while enabling interoperability between traditional banking and blockchain infrastructure.
                </p>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-4 text-vipeink-text-primary">Formal Model</h3>
                <div className="font-mono text-sm bg-vipeink-bg border border-vipeink-border p-6 my-4 rounded">
                  <div className="text-vipeink-text-secondary">
                    <span className="text-vipeink-accent">//</span> Translation function<br/>
                    f: TX<sub>blockchain</sub> → MT103<sub>SWIFT</sub><br/>
                    where:<br/>
                    TX<sub>blockchain</sub> = (from<sub>hash</sub>, to<sub>hash</sub>, amount, token)<br/>
                    MT103<sub>SWIFT</sub> = (OrderingCustomer, Beneficiary, Amount, Currency)<br/><br/>
                    <span className="text-vipeink-accent">//</span> Privacy-preserving encryption<br/>
                    E = AES<sub>GCM</sub>(K, IBAN‖wallet_addr), K ∈ HSM<br/><br/>
                    <span className="text-vipeink-accent">//</span> Single-call algorithm<br/>
                    decrypt(K<sub>S</sub>) → wallet<sub>S</sub><br/>
                    decrypt(K<sub>R</sub>) → wallet<sub>R</sub>
                  </div>
                </div>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Protocol Flow</h3>
                <ol className="space-y-2 pl-4 list-decimal text-vipeink-text-secondary">
                  <li>Account mapping is initialized during KYC verification</li>
                  <li>IBAN and wallet address are encrypted with AES-256-GCM</li>
                  <li>Encryption key is stored in HSM (Hardware Security Module)</li>
                  <li>For transactions, keys are retrieved only for sender and recipient</li>
                  <li>Keys are destroyed after execution, preventing address linking</li>
                  <li>During SWIFT→L2 operations, Dummy TX Generator creates placeholders in L2</li>
                  <li>Placeholder transactions are linked to L1 through Merkle proofs</li>
                </ol>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Security Model</h3>
                <p className="text-vipeink-text-secondary leading-relaxed mb-3">
                  The system provides strong privacy guarantees through:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-vipeink-text-secondary">
                  <li>Perfect forward secrecy: Keys destroyed after each transaction</li>
                  <li>Separation of duties: No single entity can access complete mapping</li>
                  <li>Cryptographic unlinkability: Transaction graph analysis resistance</li>
                  <li>Hardware security: Keys stored in FIPS 140-2 Level 3 compliant HSMs</li>
                </ul>
                <p className="text-vipeink-text-secondary mt-3">
                  Formal privacy guarantee: Pr[link transactions | adversary] ≤ 1/2<sup>128</sup>
                </p>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Integration Points</h3>
                <p className="text-vipeink-text-secondary leading-relaxed mb-3">
                  The Account-Wallet Mapper interfaces with:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-vipeink-text-secondary">
                  <li>Compliance Layer: Receives KYC-approved mappings</li>
                  <li>Bridge API: Translates between blockchain and SWIFT formats</li>
                  <li>ATM Gateway: Enables cash deposits/withdrawals with privacy preservation</li>
                </ul>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Failure Modes</h3>
                <p className="text-vipeink-text-secondary leading-relaxed">
                  In case of HSM compromise, the system automatically rotates encryption keys and isolates affected accounts. During network partitions, the mapper enters CP-consistency mode, prioritizing accuracy over availability. All operations require cryptographic proofs of proper execution, with automatic rollbacks if verification fails.
                </p>
              </section>
            </div>
          </Accordion>
          
          {/* Compliance as Code */}
          <Accordion
            id="compliance-as-code"
            title="Compliance as Code"
            subtitle="Regulatory requirements embedded directly in ZK-circuits"
            defaultOpen={expandedDoc === 'compliance-as-code'}
          >
            <div className="space-y-6">
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Conceptual Motivation</h3>
                <p className="text-vipeink-text-secondary leading-relaxed">
                  Traditional compliance creates friction, cost, and privacy violations. Compliance as Code embeds regulatory requirements directly into protocol logic, providing mathematical proofs of compliance without revealing personal data. This transforms compliance from a cost center to a mathematical guarantee.
                </p>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-4 text-vipeink-text-primary">Formal Model</h3>
                <div className="font-mono text-sm bg-vipeink-bg border border-vipeink-border p-6 my-4 rounded">
                  <div className="text-vipeink-text-secondary">
                    <span className="text-vipeink-accent">//</span> Circuit composition<br/>
                    Circuit<sub>compliance</sub> = Circuit<sub>tx</sub> ∧ Circuit<sub>AML</sub> ∧ Circuit<sub>KYC</sub><br/><br/>
                    <span className="text-vipeink-accent">//</span> Privacy-preserving verification<br/>
                    Proof<sub>clear</sub> = ZK(x ∉ sanctions_list)<br/>
                    Proof<sub>citizenship</sub> = ZK(x ∈ EU_countries)<br/>
                    Proof<sub>adult</sub> = ZK(age ≥ 18)<br/><br/>
                    <span className="text-vipeink-accent">//</span> Travel Rule compliance<br/>
                    Π<sub>travel</sub> = Proof(
                    <div className="ml-4 mt-1">
                      sender_kyc ≥ required ∧<br/>
                      receiver_kyc ≥ required ∧<br/>
                      amount ≤ 1000 ∨ data_shared ∧<br/>
                      origin ∉ sanctioned_country
                    </div>
                    )
                  </div>
                </div>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Protocol Flow</h3>
                <ol className="space-y-2 pl-4 list-decimal text-vipeink-text-secondary">
                  <li>KYC data collected in encrypted form: KYC<sub>enc</sub> = AES<sub>GCM</sub>(K<sub>user</sub>, KYC<sub>raw</sub>)</li>
                  <li>Permissioned intent: Operation limits set based on KYC level (L1: $100/day)</li>
                  <li>AML Hook: Behavioral analysis detects anomalies through ML models</li>
                  <li>Travel Rule: FATF compliance via ZK-proofs instead of raw data sharing</li>
                  <li>Continuous monitoring: Dynamic risk assessment and automatic demotion</li>
                  <li>Regulatory reporting: Mathematical proofs instead of data dumps</li>
                </ol>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Security Model</h3>
                <p className="text-vipeink-text-secondary leading-relaxed mb-3">
                  Compliance as Code operates under these security assumptions:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-vipeink-text-secondary">
                  <li>Zero-knowledge proofs provide perfect completeness and soundness</li>
                  <li>Regulatory authorities can verify compliance without accessing private data</li>
                  <li>Multiple jurisdictional requirements are composed through circuit conjunctions</li>
                  <li>Sanctions lists are verified through Merkle proofs against authoritative sources</li>
                </ul>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Integration Points</h3>
                <p className="text-vipeink-text-secondary leading-relaxed mb-3">
                  Compliance as Code interfaces with:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-vipeink-text-secondary">
                  <li>ZK-Rollup: Compliance checks embedded in transaction circuits</li>
                  <li>ATM Gateway: Local KYC verification without network dependencies</li>
                  <li>Bridge API: Travel Rule compliance for cross-border operations</li>
                  <li>Regulatory Dashboard: Mathematical proofs for authorities</li>
                </ul>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Failure Modes</h3>
                <p className="text-vipeink-text-secondary leading-relaxed">
                  During regulatory conflicts between jurisdictions, the system defaults to the strictest requirements. If ZK-proof generation fails for compliance circuits, transactions enter a quarantine state pending manual review. During network partitions, the system prioritizes regulatory compliance over transaction throughput, activating emergency pause if necessary.
                </p>
              </section>
            </div>
          </Accordion>
          
          {/* Arakula Oracle */}
          <Accordion
            id="arakula-oracle"
            title="Arakula Oracle"
            subtitle="Decentralized price feeds with TWAP protection"
            defaultOpen={expandedDoc === 'arakula-oracle'}
          >
            <div className="space-y-6">
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Conceptual Motivation</h3>
                <p className="text-vipeink-text-secondary leading-relaxed">
                  Centralized oracles represent single points of failure vulnerable to manipulation. The Arakula Oracle provides decentralized, manipulation-resistant price feeds using Time-Weighted Average Price (TWAP) with Sybil protection through staking and cross-exchange verification. This enables reliable cross-currency operations without trusted third parties.
                </p>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-4 text-vipeink-text-primary">Formal Model</h3>
                <div className="font-mono text-sm bg-vipeink-bg border border-vipeink-border p-6 my-4 rounded">
                  <div className="text-vipeink-text-secondary">
                    <span className="text-vipeink-accent">//</span> TWAP calculation with outlier filtering<br/>
                    P<sub>TWAP</sub> = ∑<sub>i=1</sub><sup>n</sup>(w<sub>i</sub> · p<sub>i</sub>) / ∑<sub>i=1</sub><sup>n</sup>w<sub>i</sub><br/>
                    where weights w<sub>i</sub> are proportional to time between samples<br/><br/>
                    <span className="text-vipeink-accent">//</span> IQR outlier filtering<br/>
                    Values outside [Q<sub>1</sub> - 1.5 · IQR, Q<sub>3</sub> + 1.5 · IQR] are discarded<br/><br/>
                    <span className="text-vipeink-accent">//</span> Cross-exchange verification<br/>
                    |p<sub>i</sub> - median(P<sub>exchanges</sub>)| &lt; 0.02 · median(P<sub>exchanges</sub>)<br/><br/>
                    <span className="text-vipeink-accent">//</span> Node staking requirement<br/>
                    Each node stakes 10,000 VPE with slashing for false data
                  </div>
                </div>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Protocol Flow</h3>
                <ol className="space-y-2 pl-4 list-decimal text-vipeink-text-secondary">
                  <li>Oracle nodes collect price data from multiple exchanges</li>
                  <li>Data is filtered through IQR method to remove outliers</li>
                  <li>Cross-exchange verification ensures price consistency (within 2%)</li>
                  <li>Time-weighted average is calculated with exponential decay</li>
                  <li>ZK-proofs are generated for price validity</li>
                  <li>For cross-currency operations, slippage check: |P<sub>actual</sub> - P<sub>TWAP</sub>| &lt; 0.015 · P<sub>TWAP</sub></li>
                  <li>If slippage exceeds threshold, operation reverts with atomic rollback</li>
                </ol>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Security Model</h3>
                <p className="text-vipeink-text-secondary leading-relaxed mb-3">
                  The oracle system assumes:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-vipeink-text-secondary">
                  <li>At least 51% of staked nodes are honest</li>
                  <li>Exchange data sources are uncorrelated in manipulation attempts</li>
                  <li>Slashing penalties exceed potential manipulation profits</li>
                  <li>Time-weighting prevents flash crash exploitation</li>
                </ul>
                <p className="text-vipeink-text-secondary mt-3">
                  Security bound: Pr[price manipulation success] ≤ (1/3)<sup>k</sup> where k is number of confirmation rounds
                </p>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Integration Points</h3>
                <p className="text-vipeink-text-secondary leading-relaxed mb-3">
                  The Arakula Oracle interfaces with:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-vipeink-text-secondary">
                  <li>ZK-Rollup: Provides price data for swap operations</li>
                  <li>Liquidity Hub: Determines exchange rates for stablecoins</li>
                  <li>Slippage Controller: Verifies price stability during operations</li>
                  <li>Revert Manager: Triggers rollbacks when prices deviate</li>
                </ul>
              </section>
              <section>
                <h3 className="font-mono text-lg mb-3 text-vipeink-text-primary">Failure Modes</h3>
                <p className="text-vipeink-text-secondary leading-relaxed">
                  During extreme market volatility, the oracle increases sampling frequency and widens acceptance thresholds proportionally to volatility indices. If more than 50% of nodes fail verification, the system defaults to last known good prices with reduced transaction limits. In partition scenarios, the oracle prioritizes liveness with bounded accuracy degradation.
                </p>
              </section>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}