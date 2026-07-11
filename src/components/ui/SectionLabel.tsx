export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3 font-mono text-sm text-brand-primary">
      <span>{`< ${label} />`}</span>
      <span className="h-px w-16 bg-brand-primary" />
    </div>
  )
}
