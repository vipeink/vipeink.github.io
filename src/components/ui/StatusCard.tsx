interface StatusCardProps {
  label: string;
  status: 'operational' | 'degraded' | 'down';
  value: string;
}

export default function StatusCard({ label, status, value }: StatusCardProps) {
  const statusColor = {
    operational: 'text-vipeink-status-success',
    degraded: 'text-vipeink-status-warning',
    down: 'text-red-500'
  }[status];

  return (
    <div className="border border-vipeink-border bg-vipeink-secondary p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-vipeink-text-secondary">
          {label}
        </span>
        <span className={`text-xs font-mono ${statusColor}`}>
          {status}
        </span>
      </div>
      <div className="font-mono text-3xl text-vipeink-text-primary">
        {value}
      </div>
    </div>
  );
}