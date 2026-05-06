'use client';

import { useMemo } from 'react';
import { Casino } from '../data/casinos';
import CasinoCard from './CasinoCard';
import Header from './Header';
import Footer from './Footer';

interface MobileCasinoModalProps {
  mobileCasinos: Casino[];
  isOnline: boolean;
  gclidValue?: string;
}

export default function MobileCasinoModal({ mobileCasinos, isOnline, gclidValue = '' }: MobileCasinoModalProps) {
  const isOpen = isOnline && mobileCasinos.length > 0;

  const updatedCasinos = useMemo(() => {
    if (!gclidValue) return mobileCasinos;
    return mobileCasinos.map(casino => ({
      ...casino,
      url: casino.url + `&s=4&utm_medium=${gclidValue}`
    }));
  }, [mobileCasinos, gclidValue]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={{ background: '#0d0820' }}>
      <div className="w-full min-h-screen felt-texture">
        <Header />

        <div className="border-b px-4 sm:px-6 py-4 sm:py-5 backdrop-blur" style={{ background: 'rgba(13, 8, 32, 0.8)', borderColor: 'rgba(214, 31, 105, 0.15)' }}>
          <div className="container mx-auto">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white mb-1 uppercase">
              {isOnline ? 'Meilleures Plateformes en France 2026' : 'Nouvelles Plateformes 2026'}
            </h1>
            <h2 className="text-sm sm:text-base font-bold mb-1" style={{ color: '#f59e0b' }}>
              {isOnline
                ? "Offres exclusives avec retraits le jour même sur les meilleures plateformes françaises."
                : 'Découvrez les meilleures plateformes en France'}
            </h2>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-5 sm:py-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-5xl mx-auto">
            {updatedCasinos.map((casino, index) => (
              <div key={casino.id} className="w-full sm:w-[360px]">
              <CasinoCard
                isOnline={isOnline}
                key={casino.id}
                casino={casino}
                rank={index + 1}
                badge={index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : index === 3 ? 'fourth' : undefined}
              />
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 rounded-2xl p-3 sm:p-4 max-w-6xl mx-auto" style={{ background: 'rgba(30, 64, 175, 0.1)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
            <p className="text-white/45 text-xs sm:text-sm text-center">
              <strong className="text-white/65">Nouveaux utilisateurs uniquement.</strong> 18+. CGU applicables. joueurs-info-service.fr
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
