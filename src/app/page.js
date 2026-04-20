import Image from 'next/image'
import Link from 'next/link'
import Typewriter from '@/components/Typewriter'
import ScrollAnimator from '@/components/ScrollAnimator'
import Footer from '@/components/Footer'

const tags = [
  'Site Vitrine', 'E-commerce', 'SEO', 'Google Ads',
  'Site Vitrine', 'E-commerce', 'SEO', 'Google Ads',
  'Site Vitrine', 'E-commerce', 'SEO', 'Google Ads',
  'Site Vitrine', 'E-commerce', 'SEO', 'Google Ads',
]

const testimonials = [
  {
    name: 'Koffi A.',
    role: 'Fondateur KA Consulting',
    text: 'Prudencio a livré mon site en un temps record. Design soigné, SEO bien travaillé. Je recommande les yeux fermés !',
    initials: 'KA',
    color: '#F0B429',
  },
  {
    name: 'Marie-Claire D.',
    role: 'Gérante Boutique Éclat',
    text: "Mon site e-commerce a doublé mes ventes en 2 mois. Un vrai professionnel, à l'écoute et très réactif.",
    initials: 'MC',
    color: '#3B82F6',
  },
  {
    name: 'Ibrahim S.',
    role: 'Directeur IS Immobilier',
    text: 'Excellent travail ! Le site est rapide, beau sur mobile et bien référencé. Exactement ce que je voulais.',
    initials: 'IS',
    color: '#10B981',
  },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen bg-[#111111] flex flex-col justify-center pt-28 pb-16 px-5 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B429] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F0B429">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 font-medium tracking-widest text-xs uppercase mb-3">Création site Internet</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                Solutions sur mesure,{' '}
                <span className="text-[#F0B429] relative inline-block">
                  Succès
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#F0B429] rounded-full opacity-40" />
                </span>{' '}
                sans limite
              </h1>
              <p className="text-xl md:text-2xl font-semibold mt-2 mb-5 min-h-[2rem]">
                <Typewriter />
              </p>
              <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Développez votre activité avec des sites internet performants, un SEO maîtrisé et des campagnes Google Ads rentables.
              </p>
              <a
                href="https://wa.me/+22965359515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 5 9-5M3 7a2 2 0 012-2h14a2 2 0 012 2" />
                </svg>
                Nos services
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-[280px] md:w-[320px]" style={{ animation: 'float 3s ease-in-out infinite' }}>
                <Image
                  src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776621910/20260419_050222_osyhy7.png"
                  alt="PrudoDev App"
                  width={320}
                  height={600}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs">Défiler</span>
          <div className="w-px h-8 bg-white animate-pulse" />
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="bg-[#F0B429] py-20 px-5 overflow-hidden" id="services">
        <ScrollAnimator>
          <div className="text-center mb-12">
            <span className="section-badge mb-4 block w-fit mx-auto">NOS SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-black text-black">Des Solutions Digitales<br />Complètes</h2>
          </div>
        </ScrollAnimator>
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <div className="service-card bg-white rounded-3xl p-6 min-w-[300px] snap-start flex-shrink-0">
              <div className="rounded-2xl overflow-hidden mb-5 h-48 bg-gray-100">
                <Image src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776622903/Screenshot_20260417-144707_1_e5jut4.jpg" alt="Site Vitrine" width={300} height={200} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[#F0B429] font-bold text-lg mb-2">Création de Sites Internet</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">Des sites entièrement personnalisés et responsive, conçus pour refléter votre marque et atteindre vos objectifs en ligne.</p>
              <Link href="/services/site" className="inline-flex items-center gap-2 bg-black text-white font-semibold text-sm px-5 py-3 rounded-full hover:bg-gray-800 transition-colors">
                <span>›</span> Plus d&apos;informations
              </Link>
            </div>
            <div className="service-card bg-white rounded-3xl p-6 min-w-[300px] snap-start flex-shrink-0">
              <div className="rounded-2xl overflow-hidden mb-5 h-48 bg-gray-100">
                <Image src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776641028/20260419_113156_agceem.png" alt="Google Ads" width={300} height={200} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[#F0B429] font-bold text-lg mb-2">Publicité Google Ads</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">Des campagnes publicitaires ciblées sur Google pour attirer des clients qualifiés et maximiser votre retour sur investissement.</p>
              <Link href="/services/google-ads" className="inline-flex items-center gap-2 bg-black text-white font-semibold text-sm px-5 py-3 rounded-full hover:bg-gray-800 transition-colors">
                <span>›</span> Plus d&apos;informations
              </Link>
            </div>
            <div className="service-card bg-white rounded-3xl p-6 min-w-[300px] snap-start flex-shrink-0">
              <div className="rounded-2xl overflow-hidden mb-5 h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <span className="text-7xl">🔍</span>
              </div>
              <h3 className="text-[#F0B429] font-bold text-lg mb-2">Référencement SEO</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">Optimisation de votre site pour apparaître en première page Google et attirer un trafic organique qualifié durablement.</p>
              <a href="https://wa.me/+22965359515" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-black text-white font-semibold text-sm px-5 py-3 rounded-full hover:bg-gray-800 transition-colors">
                <span>›</span> Plus d&apos;informations
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <span className="w-6 h-2 bg-black rounded-full" />
            <span className="w-2 h-2 bg-black/30 rounded-full" />
            <span className="w-2 h-2 bg-black/30 rounded-full" />
          </div>
        </div>
        <div className="mt-16 overflow-hidden">
          <div className="tags-track">
            {tags.map((tag, i) => (
              <span key={i} className="inline-flex items-center bg-white/20 text-black font-semibold text-sm px-5 py-2.5 rounded-full mx-2 whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE / WHY US ─── */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimator className="text-center mb-12">
            <span className="section-badge mb-4 block w-fit mx-auto">EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl font-black text-black">Pourquoi choisir <span className="gold-underline text-black">PrudoDev ?</span></h2>
          </ScrollAnimator>
          <ScrollAnimator className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-[#F0B429] shadow-xl">
                <Image src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776634274/20260419_221914_uvi7xr.png" alt="Prudencio — PrudoDev" width={208} height={208} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-2 rounded-full border-2 border-[#F0B429]/30" />
            </div>
          </ScrollAnimator>
          <div className="grid grid-cols-1 divide-y divide-gray-100 border border-gray-100 rounded-3xl overflow-hidden">
            <ScrollAnimator className="p-8">
              <p className="stat-number">+1</p>
              <p className="text-[#F0B429] font-semibold text-sm mt-1 mb-2">Année d&apos;opération</p>
              <p className="text-gray-500 text-sm">Une expertise en constante progression, projet après projet.</p>
            </ScrollAnimator>
            <ScrollAnimator className="p-8">
              <p className="stat-number">95%</p>
              <p className="text-[#F0B429] font-semibold text-sm mt-1 mb-2">De retours positifs</p>
              <p className="text-gray-500 text-sm">La satisfaction client est au cœur de chaque mission.</p>
            </ScrollAnimator>
            <ScrollAnimator className="p-8">
              <p className="stat-number">+15</p>
              <p className="text-[#F0B429] font-semibold text-sm mt-1 mb-2">Sites réalisés</p>
              <p className="text-gray-500 text-sm">Des solutions concrètes, pensées pour performer.</p>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* ─── CTA BUSINESS ─── */}
      <section className="bg-[#F0B429] py-20 px-5">
        <div className="max-w-2xl mx-auto">
          <ScrollAnimator>
            <div className="bg-white rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-black text-black mb-4">Et si on discutait de votre <span className="text-[#F0B429]">projet</span> ?</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">Votre entreprise mérite une stratégie digitale puissante. Je vous aide à structurer votre vision, identifier vos opportunités et implémenter des solutions efficaces.</p>
              <a href="https://wa.me/+22965359515" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-black text-white font-semibold px-7 py-4 rounded-full hover:bg-gray-900 transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Discutons-en
              </a>
              <div className="mt-8 flex flex-col gap-2">
                <span className="text-gray-300 font-bold text-xl">Partenaire 🤝</span>
                <span className="text-[#F0B429] font-bold text-xl">Opportunités 📈</span>
                <span className="text-gray-300 font-bold text-xl">Plan d&apos;action 📋</span>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section className="bg-white py-20 px-5" id="portfolio">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimator className="flex items-center justify-between mb-8">
            <div>
              <span className="section-badge mb-3 block w-fit">MISSIONS PRUDODEV</span>
              <h2 className="text-3xl md:text-4xl font-black text-black gold-underline">Portfolio</h2>
            </div>
            <a href="https://wa.me/+22965359515" target="_blank" rel="noopener noreferrer" className="text-black font-semibold text-sm flex items-center gap-1 hover:text-[#F0B429] transition-colors">Voir plus →</a>
          </ScrollAnimator>
          <div className="border-b border-gray-200 pb-4 mb-8">
            <p className="text-gray-500 text-sm font-medium">Filtrer par</p>
            <div className="mt-2">
              <span className="bg-black text-white text-xs font-semibold px-4 py-2 rounded-full">Tous ▾</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimator className="bg-gray-50 rounded-3xl overflow-hidden">
              <div className="h-52 overflow-hidden">
                <Image src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776622903/Screenshot_20260417-144707_1_e5jut4.jpg" alt="Projet Site Vitrine" width={600} height={400} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-black">Site Vitrine Pro</h3>
                <p className="text-gray-400 text-sm mt-1">Site Internet</p>
              </div>
            </ScrollAnimator>
            <ScrollAnimator className="bg-gray-50 rounded-3xl overflow-hidden">
              <div className="h-52 overflow-hidden">
                <Image src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776622937/Screenshot_20260417-190519_1_tmy04i.jpg" alt="Projet Portfolio" width={600} height={400} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-black">Portfolio Digital</h3>
                <p className="text-gray-400 text-sm mt-1">Site Internet</p>
              </div>
            </ScrollAnimator>
          </div>
          <ScrollAnimator className="mt-8 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-3">
              Les autres projets sont en cours de publication
              <span className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-400 font-bold">+</span>
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[#F0B429] py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimator className="text-center mb-12">
            <span className="section-badge mb-4 block w-fit mx-auto">EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl font-black text-black gold-underline inline-block">Retours d&apos;expérience<br />de nos clients</h2>
          </ScrollAnimator>
          <div className="flex flex-col gap-5">
            {testimonials.map((t, i) => (
              <ScrollAnimator key={i}>
                <div className="bg-white rounded-3xl p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: t.color }}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-[#F0B429] font-bold">{t.name}</p>
                      <p className="text-black font-semibold text-sm">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
