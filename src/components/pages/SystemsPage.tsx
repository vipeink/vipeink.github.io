import StatusCard from '../ui/StatusCard';
import { useModal } from '../../context/ModalContext';

const statusCards = [
  { label: 'ZK Prover Network', status: 'operational' as const, value: '10,243 TPS' },
  { label: 'Data Availability', status: 'operational' as const, value: '21 validators' },
  { label: 'Reserve Ratio', status: 'operational' as const, value: '1:1.05' }
];

const cryptoParams = [
  ['ZK-Rollup', 'Proof System', 'Plonky2 (STARK) + Groth16 (SNARK)', '128-bit'],
  ['Bridge', 'MPC Signature', '3-of-5 threshold', 'Byzantine fault tolerant'],
  ['Data Availability', 'Sampling Rate', '1/21 of data per validator', '99% availability'],
  ['MEV Protection', 'VRF Implementation', 'SHA3-based verifiable randomness', 'Front-running resistant']
];

const proofCharacteristics = [
  ['Proof size', '200-300 KB', '200-400 bytes', '1-2 MB'],
  ['Generation time', '1-5 seconds', '5-15 seconds', '30-60 seconds'],
  ['Verification cost', '$0.05', '$0.15', '$0.25'],
  ['Finality time', '10-15 seconds', '15-20 seconds', '20-30 seconds'],
  ['Security', '80 bits', '128 bits', 'Inherited']
];

const economicParams = [
  ['Base Fee', '0.1%', 'For L2-L2 transactions'],
  ['FX Fee', '0.25%', 'Above TWAP market rate'],
  ['SWIFT Integration', '$0.35', 'Per cross-border payment'],
  ['Fee Distribution', '50% VPE burning, 25% validators, 15% provers, 10% DAO', 'Fee allocation model']
];

export default function SystemsPage() {
  const { openModal } = useModal();
  
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h1 className="font-mono text-4xl sm:text-5xl mb-12 sm:mb-16">System Parameters</h1>
        
        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {statusCards.map((item, i) => (
            <StatusCard 
              key={i} 
              label={item.label} 
              status={item.status} 
              value={item.value} 
            />
          ))}
        </div>
        
        {/* System Specification Table */}
        <section className="mb-16">
          <h2 className="font-mono text-sm uppercase tracking-wider text-vipeink-text-secondary mb-6">
            Cryptographic Parameters
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-vipeink-accent">
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">Component</th>
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">Parameter</th>
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">Value</th>
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">Security Level</th>
                </tr>
              </thead>
              <tbody>
                {cryptoParams.map((row, i) => (
                  <tr key={i} className="border-b border-vipeink-border">
                    <td className="py-4 text-vipeink-text-primary">{row[0]}</td>
                    <td className="py-4 text-vipeink-text-secondary">{row[1]}</td>
                    <td className="py-4 text-vipeink-text-primary">{row[2]}</td>
                    <td className="py-4 text-vipeink-text-secondary">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Proof Characteristics Table */}
        <section className="mb-16">
          <h2 className="font-mono text-sm uppercase tracking-wider text-vipeink-text-secondary mb-6">
            Proof Characteristics
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-vipeink-accent">
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">Parameter</th>
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">STARK (Plonky2)</th>
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">SNARK (Groth16)</th>
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">Recursive</th>
                </tr>
              </thead>
              <tbody>
                {proofCharacteristics.map((row, i) => (
                  <tr key={i} className="border-b border-vipeink-border">
                    <td className="py-4 text-vipeink-text-primary">{row[0]}</td>
                    <td className="py-4 text-vipeink-text-secondary">{row[1]}</td>
                    <td className="py-4 text-vipeink-text-secondary">{row[2]}</td>
                    <td className="py-4 text-vipeink-text-secondary">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Economic Parameters */}
        <section>
          <h2 className="font-mono text-sm uppercase tracking-wider text-vipeink-text-secondary mb-6">
            Economic Parameters
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-vipeink-accent">
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">Parameter</th>
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">Value</th>
                  <th className="text-left py-3 text-vipeink-text-secondary font-normal">Description</th>
                </tr>
              </thead>
              <tbody>
                {economicParams.map((row, i) => (
                  <tr key={i} className="border-b border-vipeink-border">
                    <td className="py-4 text-vipeink-text-primary">{row[0]}</td>
                    <td className="py-4 text-vipeink-text-primary">{row[1]}</td>
                    <td className="py-4 text-vipeink-text-secondary">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Action Buttons */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => openModal('export')}
            className="font-mono text-sm px-6 py-3 border border-vipeink-border text-vipeink-text-primary hover:border-vipeink-accent transition-colors focus:outline-none focus:ring-2 focus:ring-vipeink-accent focus:ring-offset-2 focus:ring-offset-vipeink-bg"
          >
            Export Proof Data
          </button>
          <button
            onClick={() => openModal('configure')}
            className="font-mono text-sm px-6 py-3 border border-vipeink-border text-vipeink-text-primary hover:border-vipeink-accent transition-colors focus:outline-none focus:ring-2 focus:ring-vipeink-accent focus:ring-offset-2 focus:ring-offset-vipeink-bg"
          >
            Verify Reserves
          </button>
        </div>
      </div>
    </div>
  );
}