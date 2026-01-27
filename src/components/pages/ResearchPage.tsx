export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <article>
          {/* Title */}
          <h1 className="font-mono text-4xl sm:text-5xl mb-6 leading-tight">
            Three Interconnected Worlds<br/>Technical Architecture
          </h1>
          
          {/* Metadata */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-12 pb-8 border-b border-vipeink-border">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary">
                Authors
              </span>
              <p className="font-mono text-sm text-vipeink-text-primary mt-1">
                Vipeink Development Team
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary">
                Version
              </span>
              <p className="font-mono text-sm text-vipeink-text-primary mt-1">
                2.1
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary">
                Date
              </span>
              <p className="font-mono text-sm text-vipeink-text-primary mt-1">
                December 28, 2025
              </p>
            </div>
          </div>
          
          {/* Abstract */}
          <section className="mb-16 p-6 sm:p-8 border-l-2 border-vipeink-accent bg-vipeink-bg/30">
            <h2 className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary mb-4">
              Abstract
            </h2>
            <p className="text-vipeink-text-secondary leading-relaxed">
              Vipeink is a hybrid financial system that resolves a fundamental paradox: why do cross-border transfers still take days and cost significant percentages when messages travel instantly? The system combines a decentralized ZK-Rollup layer with traditional banking infrastructure through a mathematically verifiable bridge, functioning as a financial compiler that translates human intent into optimal operations across both systems simultaneously.
            </p>
          </section>
          
          {/* Body Sections */}
          <section className="space-y-16">
            <div>
              <h2 className="font-mono text-2xl mb-6 text-vipeink-text-primary">
                1. World 1: Human Interface (Intent Layer)
              </h2>
              <p className="text-vipeink-text-secondary leading-relaxed mb-4">
                Money as intent: rather than forcing humans to think like computers (specifying addresses, fees, conversions), Vipeink enables computers to understand human intent. An intent is a declarative statement:
              </p>
              <div className="font-mono text-sm bg-vipeink-bg border border-vipeink-border p-6 my-8 rounded">
                <div className="text-vipeink-text-secondary">
                  I = &#123;from: A, to: B, amount: X, currency: C, constraints: Φ&#125;
                </div>
              </div>
              <p className="text-vipeink-text-secondary leading-relaxed mb-4">
                where Φ represents constraints like maximum slippage or time windows. Each intent is encrypted using AES-256-GCM with ephemeral keys, and transactions are ordered using Verifiable Random Function (VRF) to prevent manipulation (MEV).
              </p>
              <p className="text-vipeink-text-secondary leading-relaxed">
                This layer eliminates financial literacy as a barrier. Users need not understand "gas limits" or "slippage tolerance"—they simply state: "I want to send 500 euros to my granddaughter in London by Friday."
              </p>
            </div>
            
            <div>
              <h2 className="font-mono text-2xl mb-6 text-vipeink-text-primary">
                2. World 2: Computational Layer (ZK-Rollup)
              </h2>
              <p className="text-vipeink-text-secondary leading-relaxed mb-4">
                The mathematical conscience of the system. How can we prove that thousands of transactions were processed correctly without manual verification of each? We employ Plonky2 (STARK) and Groth16 (SNARK) to create cryptographic proofs of correctness.
              </p>
              <div className="font-mono text-sm bg-vipeink-bg border border-vipeink-border p-6 my-8 rounded">
                <div className="text-vipeink-text-secondary">
                  <span className="text-vipeink-accent">//</span> State representation<br/>
                  Root = H(H(acc₁)‖H(acc₂)‖...‖H(accₙ))<br/><br/>
                  <span className="text-vipeink-accent">//</span> Proof generation<br/>
                  π = Prove(Circuit, T, Root<sub>old</sub>, Root<sub>new</sub>)<br/><br/>
                  <span className="text-vipeink-accent">//</span> Circuit verifies:<br/>
                  <span className="ml-4">• Balances do not go negative</span><br/>
                  <span className="ml-4">• Signatures are valid</span><br/>
                  <span className="ml-4">• Fees are correctly calculated</span><br/>
                  <span className="ml-4">• KYC rules are satisfied</span>
                </div>
              </div>
              <p className="text-vipeink-text-secondary leading-relaxed">
                Our Proof Marketplace decentralizes proving power: any node can participate in generating proofs, with selection probability based on reputation and latency. This achieves 10,000+ TPS with mathematical guarantees of correctness, while preserving privacy through zero-knowledge proofs.
              </p>
            </div>
            
            <div>
              <h2 className="font-mono text-2xl mb-6 text-vipeink-text-primary">
                3. World 3: Physical Bridge (Banking Integration)
              </h2>
              <p className="text-vipeink-text-secondary leading-relaxed mb-6">
                Translators between financial languages: blockchains speak "addresses and hashes," banks speak "IBAN and SWIFT." We create a bidirectional translator with mathematically verifiable transformations.
              </p>
              <h3 className="font-mono text-lg mb-4 text-vipeink-text-primary">
                3.1 SWIFT Integration Protocol
              </h3>
              <p className="text-vipeink-text-secondary leading-relaxed mb-4">
                We define a transformation function:
              </p>
              <div className="font-mono text-sm bg-vipeink-bg border border-vipeink-border p-6 my-8 rounded">
                <div className="text-vipeink-text-secondary">
                  f: TX<sub>blockchain</sub> → MT103<sub>SWIFT</sub>
                </div>
              </div>
              <p className="text-vipeink-text-secondary leading-relaxed mb-4">
                where blockchain transactions (from<sub>hash</sub>, to<sub>hash</sub>, amount, token) map to SWIFT messages (OrderingCustomer, Beneficiary, Amount, Currency). The Account-Wallet Mapper stores this mapping encrypted with AES-256-GCM and ephemeral keys, ensuring privacy during translation.
              </p>
              <p className="text-vipeink-text-secondary leading-relaxed">
                Each digital currency (EUR@, USD@) is backed 1:1 by reserves in licensed partner banks, with daily ZK-proofs of solvency: Π = Proof<sub>reserve</sub> ∧ Proof<sub>audit</sub>. This creates a bridge that preserves existing banking infrastructure while dramatically improving speed and cost.
              </p>
            </div>
          </section>
          
          {/* References */}
          <section className="mt-24 pt-12 border-t border-vipeink-border">
            <h2 className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary mb-8">
              References
            </h2>
            <ol className="space-y-4 font-mono text-sm text-vipeink-text-secondary pl-4 list-decimal">
              <li>[1] White Paper: Vipeink - A Hybrid Financial Layer for Cross-Border Payments (2025).</li>
              <li>[2] Buterin, V. et al. (2021). Combining Graftroot and Adaptor Signatures.</li>
              <li>[3] Ben-Sasson, E. et al. (2018). Scalable, transparent, and post-quantum secure computational integrity.</li>
              <li>[4] Arakula Network: Decentralized Price Oracle with TWAP Protection (2025).</li>
            </ol>
          </section>
        </article>
      </div>
    </div>
  );
}