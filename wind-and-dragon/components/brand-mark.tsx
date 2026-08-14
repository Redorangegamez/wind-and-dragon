export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid size-8 shrink-0 place-items-center rounded-[0.55rem] border border-current bg-[#fffdf8] text-[0.68rem] font-bold leading-none ${className}`}
    >
      <span className="-mt-1">中</span>
      <span className="absolute bottom-1 h-px w-3 bg-current/50" />
      <span className="absolute bottom-[0.3rem] h-1.5 w-px bg-current/50" />
    </span>
  );
}
