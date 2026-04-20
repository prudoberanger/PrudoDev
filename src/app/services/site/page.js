'use client'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function SitePage() {
  const features = [
    { icon: '🎨', title: 'Design sur mesure', desc: 'Un design unique qui reflète votre identité de marque et séduit vos visiteurs dès le premier regard.' },
    { icon: '📱', title: '100% Responsive', desc: 'Votre site s\'adapte parfaitement à tous les écrans : mobile, tablette, desktop.' },
    { icon: '⚡', title: 'Performance optimale', desc: 'Sites rapides et optimisés pour offrir une expérience utilisateur fluide et agréable.' },
    { icon: '🔍', title: 'SEO intégré', desc: 'Chaque site est construit avec les meilleures pratiques SEO pour maximiser votre visibilité Google.' },
    { icon: '🛒', title: 'E-commerce', desc: 'Boutiques en ligne complètes avec paiement sécurisé, gestion des stocks et tableau de bord.' },
    { icon: '🔒', title: 'Sécurité & maintenance', desc: 'Votre site est sécurisé, mis à jour régulièrement et maintenu pour fonctionner 24h/24.' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#F0B429]/10 text-[#F0B429] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            NOS SERVICES
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Création de Sites Internet
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Des sites vitrine et e-commerce entièrement personnalisés, optimisés SEO et conçus pour convertir vos visiteurs en clients.
          </p>
          <a
            href="https://wa.me/+22965359515"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F0B429] text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Démarrer mon projet
          </a>
        </div>
      </section>

      {/* Screenshot */}
      <section className="bg-[#F0B429] py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776622903/Screenshot_20260417-144707_1_e5jut4.jpg"
              alt="Site vitrine exemple"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features */}
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

      {/* CTA */}
      <section className="bg-[#111111] py-16 px-5 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Prêt à lancer votre site ?</h2>
        <p className="text-gray-400 mb-8">Discutons de votre projet gratuitement.</p>
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

