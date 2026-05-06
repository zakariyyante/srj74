import CasinoCard from './components/CasinoCard';
import Header from './components/Header';
import Logo from './components/Logo';
import MobileCasinoModal from './components/MobileCasinoModal';
import { casinos } from './data/casinos';

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Home({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const gclid = resolvedSearchParams?.gclid as string | undefined;
  const isOnline = !!gclid;

  const mobileCasinos = casinos.filter(casino => casino.isMobile === true);
  const regularCasinos = casinos.filter(casino => !casino.isMobile);

  const today = new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen felt-texture">
      <MobileCasinoModal mobileCasinos={mobileCasinos} isOnline={isOnline} gclidValue={gclid} />
      <Header />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 pt-10 pb-10 sm:pt-16 sm:pb-14 lg:pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 left-1/4 w-80 h-80 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #d61f69 0%, transparent 70%)' }} />
          <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg" style={{ background: 'rgba(30, 64, 175, 0.5)', border: '1px solid rgba(99, 102, 246, 0.35)' }}>
            <span className="text-base">🕐</span>
            <span className="text-sm font-semibold text-blue-200 italic">Actualisé le {today}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight uppercase tracking-tight">
            PASSEZ AU NIVEAU SUPÉRIEUR DU DIVERTISSEMENT
          </h1>

          <p className="text-base sm:text-lg text-white/55 max-w-xl mx-auto">
            Cadre éditorial aligné avec les orientations de l&apos;Autorité Nationale des Jeux
          </p>
        </div>
      </section>

      {/* Casino Cards Section */}
      <section id="casinos" className="container mx-auto px-4 pt-10 pb-16 border-t" style={{ borderColor: 'rgba(214, 31, 105, 0.12)' }}>
        <div className="mb-8 sm:mb-10 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white mb-2 sm:mb-3 tracking-wide uppercase">
            Meilleures Plateformes
          </h3>
          <p className="text-sm sm:text-base text-white/40">
            Mis à jour chaque semaine — classées par performance, offres et avis utilisateurs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          {regularCasinos.map((casino, index) => (
            <div key={casino.id} className="w-full md:w-[360px]">
              <CasinoCard
                casino={casino}
                rank={index + 1}
                badge={index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : undefined}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 rounded-2xl p-3 sm:p-4 lg:p-5 max-w-6xl mx-auto" style={{ background: 'rgba(30, 64, 175, 0.1)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
          <p className="text-white/45 text-xs sm:text-sm text-center">
            <strong className="text-white/65">Nouveaux utilisateurs uniquement.</strong> 18+. CGU applicables. joueurs-info-service.fr
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 sm:py-12 lg:py-16 border-y" style={{ background: 'rgba(13, 8, 32, 0.8)', borderColor: 'rgba(214, 31, 105, 0.1)' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-6 sm:mb-8 text-center uppercase">
            Comment Nous Sélectionnons les Meilleures Plateformes
          </h3>

          <div className="rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8" style={{ background: 'rgba(30, 64, 175, 0.15)', border: '1px solid rgba(30, 64, 175, 0.25)' }}>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ce Qui Distingue Nos Avis ?
            </h4>
            <p className="text-white/50 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              Notre équipe éditoriale indépendante évalue rigoureusement chaque plateforme pour que
              les utilisateurs français puissent faire des choix éclairés et sûrs. Chaque plateforme est notée
              sur la licence, la qualité du service, les offres, les options de paiement et le support client.
            </p>
            <ul className="space-y-2.5 text-white/50 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5" style={{ color: '#ec4899' }}>♠</span>
                <span>Chaque plateforme listée détient une licence complète de l&apos;ANJ</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5" style={{ color: '#ec4899' }}>♦</span>
                <span>Nous auditons indépendamment les normes de sécurité et la fiabilité</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5" style={{ color: '#ec4899' }}>♣</span>
                <span>Nos notes éditoriales sont impartiales et commercialement indépendantes</span>
              </li>
            </ul>
          </div>

          <div id="guide" className="rounded-2xl p-4 sm:p-6 lg:p-8" style={{ background: 'rgba(13, 8, 32, 0.7)', border: '1px solid rgba(214, 31, 105, 0.15)' }}>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 gold-text">
              Jeu Responsable
            </h4>
            <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Le jeu responsable est au cœur de tout ce que nous faisons. Si vous ou quelqu&apos;un
              que vous connaissez avez besoin d&apos;aide, une assistance confidentielle est toujours disponible :
            </p>
            <ul className="space-y-2 text-white/55 text-sm sm:text-base">
              <li>• <strong className="text-white/80">Joueurs Info Service :</strong> Appelez le{' '}
                <strong className="text-orange-400">09 74 75 13 13</strong> ou visitez{' '}
                <a href="https://www.joueurs-info-service.fr" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">joueurs-info-service.fr</a>
              </li>
              <li>• <strong className="text-white/80">Adictel :</strong> Visitez{' '}
                <a href="https://www.adictel.com" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">adictel.com</a>
              </li>
              <li>• <strong className="text-white/80">ANJ — Autoexclusion :</strong> Visitez{' '}
                <a href="https://anj.fr" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">anj.fr</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-8 sm:py-12 lg:py-16" style={{ background: 'rgba(30, 64, 175, 0.05)' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3 uppercase">
              Guide du Débutant
            </h3>
            <p className="text-white/45 text-sm sm:text-base max-w-xl mx-auto">
              Tout ce que vous devez savoir avant de rejoindre une plateforme en France.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Step 1 */}
            <div className="rounded-2xl p-5 sm:p-6" style={{ background: 'rgba(30, 64, 175, 0.12)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #be185d, #ec4899)' }}>1</div>
                <h4 className="text-white font-bold text-base sm:text-lg">Choisir la Bonne Plateforme</h4>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Vérifiez toujours que la plateforme est agréée par l&apos;ANJ (Autorité Nationale des Jeux).
                Consultez les avis utilisateurs, les conditions de retrait et la qualité du support client
                avant de vous inscrire.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl p-5 sm:p-6" style={{ background: 'rgba(30, 64, 175, 0.12)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #be185d, #ec4899)' }}>2</div>
                <h4 className="text-white font-bold text-base sm:text-lg">Créer Votre Compte</h4>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                L&apos;inscription est rapide et gratuite. Préparez une pièce d&apos;identité valide — les plateformes
                agréées ANJ sont tenues de vérifier votre identité pour garantir votre sécurité
                et le respect des réglementations françaises.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl p-5 sm:p-6" style={{ background: 'rgba(30, 64, 175, 0.12)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #be185d, #ec4899)' }}>3</div>
                <h4 className="text-white font-bold text-base sm:text-lg">Comprendre les Offres</h4>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Les offres de bienvenue sont attractives, mais lisez toujours les conditions générales.
                Faites attention aux exigences de mise, aux délais de validité et aux montants
                minimaux de dépôt avant d&apos;accepter une offre.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl p-5 sm:p-6" style={{ background: 'rgba(30, 64, 175, 0.12)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #be185d, #ec4899)' }}>4</div>
                <h4 className="text-white font-bold text-base sm:text-lg">Méthodes de Paiement</h4>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Les plateformes agréées acceptent généralement les cartes bancaires, virements SEPA
                et portefeuilles électroniques. Privilégiez les plateformes proposant des retraits rapides
                et sans frais cachés.
              </p>
            </div>

            {/* Step 5 */}
            <div className="rounded-2xl p-5 sm:p-6" style={{ background: 'rgba(30, 64, 175, 0.12)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #be185d, #ec4899)' }}>5</div>
                <h4 className="text-white font-bold text-base sm:text-lg">Fixer des Limites</h4>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Toutes les plateformes agréées ANJ vous permettent de définir des limites de dépôt,
                de mise et de temps de jeu. Utilisez ces outils dès le départ pour garder
                le contrôle et profiter de l&apos;expérience sereinement.
              </p>
            </div>

            {/* Step 6 */}
            <div className="rounded-2xl p-5 sm:p-6" style={{ background: 'rgba(30, 64, 175, 0.12)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #be185d, #ec4899)' }}>6</div>
                <h4 className="text-white font-bold text-base sm:text-lg">Besoin d&apos;Aide ?</h4>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Si vous ressentez une perte de contrôle, contactez immédiatement le{' '}
                <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">
                  Joueurs Info Service
                </a>{' '}
                au <strong className="text-white/70">09 74 75 13 13</strong> (disponible 7j/7).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-8 sm:py-12 lg:py-16 border-t" style={{ background: 'rgba(13, 8, 32, 0.9)', borderColor: 'rgba(214, 31, 105, 0.1)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3 uppercase">
              Nous Contacter
            </h3>
            <p className="text-white/45 text-sm sm:text-base max-w-xl mx-auto">
              Une question, un signalement ou une suggestion ? Notre équipe vous répond sous 48h.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            <div className="rounded-2xl p-5 text-center" style={{ background: 'rgba(30, 64, 175, 0.12)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
              <div className="text-3xl mb-3">✉️</div>
              <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">Email</h4>
              <a href="mailto:contact@maxsportif.com" className="text-pink-400 hover:text-pink-300 text-sm transition-colors">
                contact@maxsportif.com
              </a>
            </div>
            <div className="rounded-2xl p-5 text-center" style={{ background: 'rgba(30, 64, 175, 0.12)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
              <div className="text-3xl mb-3">🕐</div>
              <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">Délai de réponse</h4>
              <p className="text-white/50 text-sm">Sous 24 à 48 heures ouvrées</p>
            </div>
            <div className="rounded-2xl p-5 text-center" style={{ background: 'rgba(30, 64, 175, 0.12)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
              <div className="text-3xl mb-3">🇫🇷</div>
              <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">Langue</h4>
              <p className="text-white/50 text-sm">Support disponible en français</p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8" style={{ background: 'rgba(30, 64, 175, 0.12)', border: '1px solid rgba(30, 64, 175, 0.2)' }}>
            <h4 className="text-white font-bold text-base mb-4">Questions fréquentes</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/70 text-sm font-semibold mb-1">Comment une plateforme est-elle sélectionnée par MaxSportif ?</p>
                <p className="text-white/45 text-sm leading-relaxed">Chaque plateforme est évaluée sur sa licence ANJ, la qualité de ses offres, la rapidité des retraits et les retours d&apos;utilisateurs réels.</p>
              </div>
              <div className="border-t pt-4" style={{ borderColor: 'rgba(214, 31, 105, 0.1)' }}>
                <p className="text-white/70 text-sm font-semibold mb-1">MaxSportif est-il un opérateur de jeux ?</p>
                <p className="text-white/45 text-sm leading-relaxed">Non. MaxSportif est un portail de comparaison indépendant. Nous ne gérons aucune plateforme et ne traitons aucun paiement.</p>
              </div>
              <div className="border-t pt-4" style={{ borderColor: 'rgba(214, 31, 105, 0.1)' }}>
                <p className="text-white/70 text-sm font-semibold mb-1">Comment signaler une plateforme frauduleuse ?</p>
                <p className="text-white/45 text-sm leading-relaxed">Écrivez-nous à <a href="mailto:contact@maxsportif.com" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">contact@maxsportif.com</a> avec les détails. Nous traiterons votre signalement dans les plus brefs délais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#casinos" className="hover:text-pink-400 transition-colors">Plateformes</a></li>
                <li><a href="#guide" className="hover:text-pink-400 transition-colors">Guide</a></li>
                <li><a href="#about" className="hover:text-pink-400 transition-colors">À Propos</a></li>
                <li><a href="#contact-section" className="hover:text-pink-400 transition-colors">Contact</a></li>
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
            <p className="text-white/45 text-xs sm:text-sm uppercase tracking-widest font-semibold">Jeu Responsable</p>
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
    </div>
  );
}
