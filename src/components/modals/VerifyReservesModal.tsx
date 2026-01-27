import Modal from '../ui/Modal';

export default function VerifyReservesModal() {
  return (
    <Modal title="Verify Reserves">
      <div className="font-mono text-sm text-vipeink-text-secondary space-y-4">
        <p>Reserve verification generates a zero-knowledge proof that backing reserves exceed circulating stablecoins.</p>
        <p>The proof combines two components:</p>
        <div className="mt-4 pl-4 border-l-2 border-vipeink-accent">
          <p className="text-vipeink-text-primary">Π = Proof<sub>reserve</sub> ∧ Proof<sub>audit</sub></p>
          <p className="text-vipeink-text-secondary mt-2">where Proof<sub>reserve</sub> = ZK-Proof(R<sub>bank</sub> &gt; total_supply)</p>
        </div>
        <p className="mt-4">Verification requires cooperation from partner banks and MPC signers. The proof can be independently verified by anyone without revealing user details.</p>
        <div className="mt-6 p-4 bg-vipeink-bg border border-vipeink-accent rounded">
          <p className="text-vipeink-accent">Daily verification completed</p>
          <p className="text-vipeink-text-secondary mt-2">Last verification: 2025-12-28 23:45 UTC</p>
          <p className="text-vipeink-text-secondary mt-1">Reserve ratio: 1.05 (5% overcollateralization)</p>
          <p className="text-vipeink-text-secondary mt-1">Verification hash: 0x7d32...9a81 (verifiable on-chain)</p>
        </div>
      </div>
    </Modal>
  );
}