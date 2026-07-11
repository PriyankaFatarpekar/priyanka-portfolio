type ScrollProgressProps = {
  progress: number
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return <div className="fixed left-0 top-0 z-[70] h-0.5 bg-gradient-brand transition-[width]" style={{ width: `${progress}%` }} />
}
