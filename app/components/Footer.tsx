import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="border-t py-6 sm:py-8 lg:py-12" style={{ background: 'rgba(8, 4, 20, 0.95)', borderColor: 'rgba(214, 31, 105, 0.1)' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center mb-6 sm:mb-8">
          <Logo />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h5 className="text-white/75 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Liens Rapides</h5>
            <ul className="space-y-1 sm:space-y-2 text-white/40 text-xs sm:text-sm">
              <li><a href="/" className="hover:text-pink-400 transition-colors">Accueil</a></li>
              <li><a href="/#casinos" className="hover:text-pink-400 transition-colors">Plateformes</a></li>
              <li><a href="/#guide" className="hover:text-pink-400 transition-colors">Guide</a></li>
              <li><a href="/#about" className="hover:text-pink-400 transition-colors">À Propos</a></li>
              <li><a href="/#contact-section" className="hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white/75 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Légal</h5>
            <ul className="space-y-1 sm:space-y-2 text-white/40 text-xs sm:text-sm">
              <li><a href="/privacy" className="hover:text-pink-400 transition-colors">Confidentialité</a></li>
              <li><a href="/terms" className="hover:text-pink-400 transition-colors">CGU</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="text-white/75 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Avertissement</h5>
            <p className="text-white/35 text-xs sm:text-sm leading-relaxed">
              Ce portail de comparaison fournit des avis éditoriaux indépendants. Toutes les plateformes listées
              sont régulées par l&apos;Autorité Nationale des Jeux (ANJ). Utilisez les plateformes de manière responsable
              — ne misez jamais plus que ce que vous pouvez vous permettre de perdre.
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 flex flex-col items-center gap-4">
          <p className="text-white/45 text-xs sm:text-sm uppercase tracking-widest font-semibold">
            Jeu Responsable
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            <div className="rounded-xl p-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img src="/18plus.png" alt="18+" width={48} height={48} className="w-12 h-12 object-contain" />
            </div>
            <a href="https://anj.fr" target="_blank" rel="noopener noreferrer" className="rounded-xl p-2 transition-opacity hover:opacity-80" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }} aria-label="Visiter ANJ">
              <img src="/anj_logo.png" alt="ANJ" width={120} height={48} className="h-12 w-auto object-contain" />
            </a>
            <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="rounded-xl p-2 transition-opacity hover:opacity-80" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }} aria-label="Visiter Joueurs Info Service">
              <img src="/joueurs-info-service.png" alt="Joueurs Info Service" width={160} height={48} className="h-12 w-auto object-contain" />
            </a>
            <a href="https://www.adictel.com" target="_blank" rel="noopener noreferrer" className="rounded-xl p-2 transition-opacity hover:opacity-80" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }} aria-label="Visiter Adictel">
              <img src="/adictel1.png" alt="Adictel" width={120} height={48} className="h-12 w-auto object-contain" />
            </a>
            <a href="https://www.mediateur-des-jeux.fr" target="_blank" rel="noopener noreferrer" className="rounded-xl p-2 transition-opacity hover:opacity-80" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }} aria-label="Visiter Médiateur des Jeux">
              <img src="/mediateurdesjeux.png" alt="Médiateur des Jeux" width={120} height={48} className="h-12 w-auto object-contain" />
            </a>
          </div>
        </div>

        <div className="border-t pt-4 sm:pt-6 text-center mt-6" style={{ borderColor: 'rgba(214, 31, 105, 0.1)' }}>
          <p className="text-white/25 text-xs sm:text-sm">
            &copy; 2026 maxsportif.com. À titre informatif uniquement. 18+ uniquement. Jouez responsablement.
          </p>
        </div>
      </div>
    </footer>
  );
}
