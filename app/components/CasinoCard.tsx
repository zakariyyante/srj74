'use client';

import { Casino } from '../data/casinos';
import { logos } from './CasinoLogos';
import Image from 'next/image';
import { track } from '@vercel/analytics';

interface CasinoCardProps {
  casino: Casino;
  rank?: number;
  badge?: 'gold' | 'silver' | 'bronze' | 'fourth';
  isOnline?: boolean;
}

export default function CasinoCard({ casino, rank, badge, isOnline = false }: CasinoCardProps) {
  const handleCasinoClick = () => {
    if (casino.isMobile) {
      track('Casino Click', { casino: casino.name });
    }
  };

  const handleCardClick = () => {
    handleCasinoClick();
    window.open(casino.url, '_blank', 'noopener,noreferrer');
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  const renderLogo = () => {
    if (typeof casino.logo === 'string' && casino.logo.startsWith('/')) {
      return (
        <Image
          src={casino.logo}
          alt={`${casino.name} logo`}
          width={200}
          height={120}
          className="h-full w-full object-contain"
        />
      );
    }
    return logos[casino.logo as keyof typeof logos];
  };

  const badgeLabel =
    badge === 'gold' ? 'Meilleur Choix' :
    badge === 'silver' ? 'Le Plus Populaire' :
    badge === 'bronze' ? 'Offre Exclusive' :
    badge === 'fourth' ? 'Tendance' : null;

  return (
    <article
      className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 cursor-pointer hover:scale-[1.02] casino-glow gold-shimmer"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #1e3a8a 100%)' }}
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      {/* Pink badge */}
      {badge && badgeLabel && (
        <div className="flex justify-center pt-3 pb-0">
          <span
            className="px-5 py-1.5 rounded-full text-sm font-bold italic text-white shadow-lg"
            style={{ background: 'linear-gradient(90deg, #be185d, #ec4899)' }}
          >
            {badgeLabel}
          </span>
        </div>
      )}

      <div className="px-4 pt-3 pb-4">
        {/* Logo + Bonus info row */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-36 h-20 flex items-center justify-center flex-shrink-0 [&>svg]:w-full [&>svg]:h-full [&>svg]:text-white bg-white/10 rounded-xl p-2">
            {renderLogo()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-blue-200/80 text-xs font-semibold mb-1 uppercase tracking-wide">
              Offre de bienvenue
            </p>
            <p className="text-white text-base sm:text-lg font-extrabold leading-tight">
              {casino.bonus}
            </p>
          </div>
        </div>

        {/* Rating row */}
        <div className="flex items-center gap-2.5 mb-4">
          <span className="text-white text-3xl font-black">{casino.rating.toFixed(1)}</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="#f59e0b">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={casino.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            handleCasinoClick();
          }}
          className="block w-full text-white font-extrabold py-3.5 px-4 rounded-xl text-sm sm:text-base uppercase tracking-wider text-center shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-orange-500/30"
          style={{ background: 'linear-gradient(90deg, #ea580c, #f97316, #f59e0b)' }}
        >
          ACCÉDER À LA PLATEFORME
        </a>
        <div className="mt-2 text-center text-[11px] text-blue-200/40">
          CGU applicables. 18+
        </div>
      </div>
    </article>
  );
}
