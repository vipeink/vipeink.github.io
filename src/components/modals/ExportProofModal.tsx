import { useState } from 'react';
import Modal from '../ui/Modal';

const proofTypes = [
  'STARK (Plonky2)',
  'SNARK (Groth16)',
  'Recursive'
];

const verificationLevels = [
  'Full proof (for auditors)',
  'Proof hash only (for verification)',
  'Public parameters only'
];

export default function ExportProofModal() {
  const [proofType, setProofType] = useState(proofTypes[0]);
  const [dateRange, setDateRange] = useState('2025-12-01 to 2025-12-31');
  const [verificationLevel, setVerificationLevel] = useState(verificationLevels[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle export logic here
    console.log('Exporting proof data with:', {
      proofType,
      dateRange,
      verificationLevel
    });
  };

  return (
    <Modal title="Export Proof Data">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label 
            htmlFor="proof-type" 
            className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary block mb-2"
          >
            Proof Type
          </label>
          <select
            id="proof-type"
            value={proofType}
            onChange={(e) => setProofType(e.target.value)}
            className="w-full bg-vipeink-bg border border-vipeink-border px-4 py-3 font-mono text-sm text-vipeink-text-primary focus:outline-none focus:border-vipeink-accent focus:ring-2 focus:ring-vipeink-accent focus:ring-offset-2 focus:ring-offset-vipeink-bg rounded"
          >
            {proofTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label 
            htmlFor="date-range" 
            className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary block mb-2"
          >
            Date Range
          </label>
          <input
            id="date-range"
            type="text"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            placeholder="2025-12-01 to 2025-12-31"
            className="w-full bg-vipeink-bg border border-vipeink-border px-4 py-3 font-mono text-sm text-vipeink-text-primary focus:outline-none focus:border-vipeink-accent focus:ring-2 focus:ring-vipeink-accent focus:ring-offset-2 focus:ring-offset-vipeink-bg rounded"
          />
        </div>
        
        <div>
          <label 
            htmlFor="verification-level" 
            className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary block mb-2"
          >
            Verification Level
          </label>
          <select
            id="verification-level"
            value={verificationLevel}
            onChange={(e) => setVerificationLevel(e.target.value)}
            className="w-full bg-vipeink-bg border border-vipeink-border px-4 py-3 font-mono text-sm text-vipeink-text-primary focus:outline-none focus:border-vipeink-accent focus:ring-2 focus:ring-vipeink-accent focus:ring-offset-2 focus:ring-offset-vipeink-bg rounded"
          >
            {verificationLevels.map(level => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          type="submit"
          className="w-full font-mono text-sm px-6 py-3 bg-vipeink-accent text-vipeink-text-primary hover:bg-vipeink-accent-hover transition-colors rounded focus:outline-none focus:ring-2 focus:ring-vipeink-accent focus:ring-offset-2 focus:ring-offset-vipeink-bg"
        >
          Generate Export
        </button>
      </form>
    </Modal>
  );
}