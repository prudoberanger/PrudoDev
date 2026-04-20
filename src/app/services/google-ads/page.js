'use client'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function GoogleAdsPage() {
  const features = [
    { icon: '🎯', title: 'Ciblage précis', desc: 'Vos annonces sont diffusées aux bonnes personnes, au bon moment, dans la bonne zone géographique.' },
    { icon: '📊', title: 'Suivi de performance', desc: 'Tableaux de bord complets pour suivre vos conversions, coûts et retour sur investissement en temps réel.' },
    { icon: '✍️', title: "Rédaction d'annonces", desc: "Des textes d'annonces percutants qui attirent l'attention et incitent au clic." },
    { icon: '🔑', title: 'Recherche de mots-clés', desc: 'Sélection stratégique des mots-clés les plus rentables pour votre activité.' },
    { icon: '💰', title: 'Budget optimisé', desc: 'Gestion intelligente de votre budget publicitaire pour maximiser chaque euro investi.' },
    { icon: '📈', title: 'Optimisation continue', desc: 'Vos campagnes sont analysées et améliorées régulièrement pour des résultats croissants.' },
  ]

  return (
    <>
      <section className="bg-[#111111] pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#F0B429]/10 text-[#F0B429] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            NOS SERVICES
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Publicité Google Ads
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Des campagnes Google Ads ciblées et rentables pour attirer des clients qualifiés et développer rapidement votre chiffre d&apos;affaires.
          </p>
          <a
            href="https://wa.me/+22965359515"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F0B429] text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Lancer ma campagne
          </a>
        </div>
      </section>

      <section className="bg-[#F0B429] py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776641028/20260419_113156_agceem.png"
              alt="Google Ads dashboard"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-black text-center mb-12">
            Ce qui est inclus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-black text-black text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-16 px-5 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Prêt à attirer plus de clients ?</h2>
        <p className="text-gray-400 mb-8">Discutons de votre budget et de vos objectifs.</p>
        <a
          href="https://wa.me/+22965359515"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#F0B429] text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors"
        >
          Me contacter sur WhatsApp
        </a>
      </section>

      <Footer />
    </>
  )
}
