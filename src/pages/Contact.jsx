import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi (dans un vrai projet, il faudrait un backend ou service comme EmailJS)
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus('');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[95%] xl:max-w-6xl 2xl:max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Me Contacter</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vous avez un projet, une question ou simplement envie d'échanger ?
            N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:marwane.ibrahim@example.com"
                    className="text-primary hover:underline"
                  >
                    marwane.ibrahim@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <a href="tel:+33612345678" className="text-primary hover:underline">
                    +33 6 12 34 56 78
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Localisation</h3>
                  <p className="text-gray-600">France</p>
                  <p className="text-sm text-gray-500 mt-1">Disponible pour télétravail / présentiel</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Réseaux sociaux</h3>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/marwane-ibrahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <FaLinkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/marwane-ibrahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-2">Disponibilité</h3>
              <p className="text-sm">
                Actuellement en recherche d'opportunités professionnelles.
                Disponible immédiatement après l'obtention de mon diplôme.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyer un message</h2>

              {status === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p className="font-semibold">Message envoyé avec succès !</p>
                  <p className="text-sm">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="votre.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Objet de votre message"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full bg-primary hover:bg-secondary text-white font-semibold py-4 rounded-lg transition-colors ${
                    status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
