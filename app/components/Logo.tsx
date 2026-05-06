interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MaxSportif logo">
        <defs>
          <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b"/>
            <stop offset="50%" stopColor="#fbbf24"/>
            <stop offset="100%" stopColor="#d97706"/>
          </linearGradient>
        </defs>
        <path d="M21 2 L38 10 L38 24 L21 40 L4 24 L4 10 Z" fill="url(#logoGold)"/>
        <text x="21" y="28" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontSize="18" fontWeight="900" fill="#0d0820">M</text>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[17px] font-extrabold tracking-tight text-white">
          MAX
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
          SPORTIF
        </span>
      </div>
    </div>
  );
}
