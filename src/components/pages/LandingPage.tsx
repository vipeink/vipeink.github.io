export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-8">
        {/* Hero Section */}
        <section className="pt-48 pb-32">
          <h1 className="font-mono text-6xl mb-8 leading-tight">
            Vipeink<br/>Hybrid Financial Layer
          </h1>
          <p className="font-mono text-lg text-vipeink-text-secondary max-w-2xl leading-relaxed">
            A financial compiler that translates human intent into optimal cross-border payments.
          </p>
        </section>
        
        {/* Separator */}
        <div className="h-px bg-vipeink-accent mb-32" />
        
        {/* Research Areas */}
        <section className="mb-32">
          <h2 className="font-mono text-sm uppercase tracking-wider text-vipeink-text-secondary mb-12">
            System Architecture
          </h2>
          <div className="space-y-24">
            <div>
              <h3 className="font-mono text-3xl mb-6 text-vipeink-text-primary">
                01 — The Fundamental Paradox
              </h3>
              <p className="text-vipeink-text-secondary leading-relaxed max-w-3xl mb-6">
                In 2025, WhatsApp delivers messages across oceans in 0.2 seconds at no cost, while banks deliver money across the same borders in 3-5 days, charging $30-150.
              </p>
              <p className="text-vipeink-text-secondary leading-relaxed max-w-3xl">
                This isn't a technology problem—it's a protocol problem. Fiat systems and blockchains represent two parallel financial internets that cannot understand each other. Vipeink builds a translation protocol between them.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono text-3xl mb-6 text-vipeink-text-primary">
                02 — Mathematical Objective
              </h3>
              <p className="text-vipeink-text-secondary leading-relaxed max-w-3xl mb-6">
                We model an ideal payment system as a function that maximizes value across four dimensions:
              </p>
              <p className="text-vipeink-text-secondary leading-relaxed max-w-3xl">
                max(reliability × compliance / (time × cost))
                <br/>
                Traditional systems maximize reliability and compliance at the expense of time and cost. Cryptographic systems minimize time and cost at the expense of reliability and compliance. Vipeink solves for all four simultaneously.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono text-3xl mb-6 text-vipeink-text-primary">
                03 — Hybrid Architecture
              </h3>
              <p className="text-vipeink-text-secondary leading-relaxed max-w-3xl">
                Rather than creating "yet another blockchain," Vipeink functions as a financial compiler that translates user intent into an optimal sequence of operations across both traditional and decentralized systems. This preserves existing banking infrastructure while dramatically improving speed and cost—without requiring revolution.
              </p>
            </div>
          </div>
        </section>
        
        {/* Graph Visualization Zone */}
        <section className="mb-32">
          <h2 className="font-mono text-sm uppercase tracking-wider text-vipeink-text-secondary mb-12">
            Transaction Efficiency
          </h2>
          <div className="border border-vipeink-border bg-vipeink-secondary p-8 sm:p-12">
            <div className="mb-8">
              <h4 className="font-mono text-sm text-vipeink-text-secondary mb-2">
                Figure 1: Time and cost comparison of payment methods
              </h4>
            </div>
            <div className="h-64 flex items-end justify-between gap-1 sm:gap-2">
              {[8, 15, 28, 35, 80, 92, 95].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end">
                  <div
                    className="bg-vipeink-accent opacity-60 hover:opacity-100 transition-opacity rounded-t"
                    style={{height: `${h}%`}}
                  />
                  <span className="font-mono text-xs text-vipeink-text-secondary mt-2 text-center whitespace-nowrap">
                    {i === 0 ? "SWIFT" : 
                     i === 1 ? "SEPA" : 
                     i === 2 ? "Vipeink" : 
                     i === 3 ? "ETH" : 
                     i === 4 ? "BTC" : 
                     i === 5 ? "TON" : "VISA"}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 font-mono text-xs text-vipeink-text-secondary text-center">
              Relative efficiency (higher is better)
            </div>
          </div>
        </section>
        
        {/* Metadata Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary mb-3">
                Settlement Time
              </h4>
              <p className="font-mono text-lg text-vipeink-text-primary">15-30s</p>
              <p className="font-mono text-sm text-vipeink-text-secondary mt-1">vs 3-5 days for SWIFT</p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary mb-3">
                Transaction Cost
              </h4>
              <p className="font-mono text-lg text-vipeink-text-primary">$0.001</p>
              <p className="font-mono text-sm text-vipeink-text-secondary mt-1">vs $30-150 for traditional</p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary mb-3">
                Throughput
              </h4>
              <p className="font-mono text-lg text-vipeink-text-primary">10,000+ TPS</p>
              <p className="font-mono text-sm text-vipeink-text-secondary mt-1">at cryptographic security</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}