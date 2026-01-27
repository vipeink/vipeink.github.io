export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h1 className="font-mono text-4xl sm:text-5xl mb-12 sm:mb-16">
          Community
        </h1>

        <div className="space-y-8 max-w-3xl">
          <p className="text-vipeink-text-secondary leading-relaxed">
            We are a research-oriented community working on cryptographic
            infrastructure, formal models, and verifiable financial systems.
            The project is built in the open and evolves through discussion,
            critique, and collaboration.
          </p>

          <p className="text-vipeink-text-secondary leading-relaxed">
            If you are interested in protocol design, zero-knowledge systems,
            applied cryptography, or rigorous engineering — you are in the
            right place.
          </p>

          <div className="pt-6 space-y-3 text-sm font-mono">
            <div>
              <span className="text-vipeink-text-secondary">Email:</span>{" "}
              <span className="text-vipeink-text-primary">
                contact@vipeink.org
              </span>
            </div>

            <div>
              <span className="text-vipeink-text-secondary">GitHub:</span>{" "}
              <span className="text-vipeink-text-primary">
                github.com/vipeink
              </span>
            </div>

            <div>
              <span className="text-vipeink-text-secondary">Research:</span>{" "}
              <span className="text-vipeink-text-primary">
                ongoing, open for contribution
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
