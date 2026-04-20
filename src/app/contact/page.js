'use client'
import { useState } from 'react'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const mailtoLink = `mailto:gnahaagoungbeprudencio@gmaill.com?subject=${encodeURIComponent(formData.subject || 'Contact PrudoDev')}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    window.location.href = mailtoLink

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <>
      <section className="bg-[#111111] pt-32 pb-20 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-[#F0B429]/10 text-[#F0B429] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            CONTACT
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-gray-400 text-lg">
            Envoyez-moi un message ou contactez-moi directement sur WhatsApp.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-black text-black mb-2">Message envoyé !</h2>
              <p className="text-gray-500">Je vous répondrai dans les plus brefs délais.</p>
              <a href="/" className="inline-block mt-6 bg-[#F0B429] text-black font-bold px-6 py-3 rounded-full">
                Retour à l'accueil
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jean Dupont"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-[#F0B429] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jean@example.com"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-[#F0B429] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Sujet</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Création de site vitrine"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-[#F0B429] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez votre projet..."
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-[#F0B429] outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#F0B429] text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-colors disabled:opacity-60 text-sm"
              >
                {loading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              <p className="text-center text-gray-400 text-xs">
                Ou contactez-moi directement sur{' '}
                <a href="https://wa.me/+22965359515" target="_blank" rel="noopener noreferrer" className="text-[#F0B429] font-semibold">
                  WhatsApp
                </a>
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
