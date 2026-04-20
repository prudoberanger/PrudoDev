import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppFAB from '@/components/WhatsAppFAB'

export const metadata = {
  title: 'PrudoDev — Création de Sites Internet & SEO',
  description: 'PrudoDev crée des sites internet modernes, optimisés SEO et des campagnes Google Ads performantes.',
  keywords: 'création site internet, SEO, Google Ads, développeur web',
  openGraph: {
    title: 'PrudoDev — Création de Sites Internet & SEO',
    description: 'Sites modernes, SEO optimisé et Google Ads pour booster votre visibilité.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppFAB />
      </body>
    </html>
  )
}
