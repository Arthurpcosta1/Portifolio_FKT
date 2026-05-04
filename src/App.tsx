import { useState } from 'react';
import { Play, Image as ImageIcon, Mail, MessageCircle, ExternalLink } from 'lucide-react';

const portfolioData = {
  videos: [
    { 
      id: 1, 
      embedUrl: 'https://www.tiktok.com/embed/v2/7540377193222769925',
      linkUrl: 'https://www.tiktok.com/@.niingel/video/7540377193222769925'
    },
    { 
      id: 2, 
      embedUrl: 'https://www.tiktok.com/embed/v2/7564607617356647736',
      linkUrl: 'https://www.tiktok.com/@.niingel/video/7564607617356647736'
    },
    { 
      id: 3, 
      embedUrl: 'https://www.tiktok.com/embed/v2/7594896436827884807',
      linkUrl: 'https://www.tiktok.com/@.niingel/video/7594896436827884807'
    },
    { 
      id: 4, 
      embedUrl: 'https://www.tiktok.com/embed/v2/7587102597350214919',
      linkUrl: 'https://www.tiktok.com/@.niingel/video/7587102597350214919'
    },
  ],
  designs: [
    { id: 1, title: 'Portfólio Design', imgUrl: '/portfolio-design.jpeg' },
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'videos' | 'designs'>('videos');

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-pink-200 to-fuchsia-200 text-purple-950 font-sans selection:bg-purple-400/40">
      
      {/* Header / Hero Section */}
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4 text-white drop-shadow-xl uppercase">
          @.niingel
        </h1>
        <p className="text-xl font-bold text-purple-900/80 mb-8 max-w-2xl mx-auto drop-shadow-sm">
          Editora de Vídeo & Designer Gráfico. Transformando ideias em conteúdo visual com impacto, ritmo e estética.
        </p>
        
        {/* Social / Contato */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/558195420725" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/60 hover:bg-white/80 backdrop-blur-md border border-white/50 text-green-700 px-6 py-3 rounded-3xl transition-all font-bold shadow-lg shadow-purple-500/10">
            <MessageCircle size={20} />
            WhatsApp
          </a>
          
          <a href="https://instagram.com/_shyyluv" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/60 hover:bg-white/80 backdrop-blur-md border border-white/50 text-purple-900 px-6 py-3 rounded-3xl transition-all font-bold shadow-lg shadow-purple-500/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </a>

          <a href="https://tiktok.com/@.niingel" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/60 hover:bg-white/80 backdrop-blur-md border border-white/50 text-black px-6 py-3 rounded-3xl transition-all font-bold shadow-lg shadow-purple-500/10">
            <Play size={20} />
            TikTok
          </a>
        </div>
      </header>

      {/* Tabs de Navegação */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="flex justify-center gap-4 border-b-2 border-white/40 pb-4">
          <button 
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-4 py-2 font-bold transition-all ${activeTab === 'videos' ? 'text-purple-900 border-b-4 border-purple-500 -mb-[20px] scale-105' : 'text-purple-800/60 hover:text-purple-900'}`}
          >
            <Play size={20} />
            Edições (TikTok)
          </button>
          <button 
            onClick={() => setActiveTab('designs')}
            className={`flex items-center gap-2 px-4 py-2 font-bold transition-all ${activeTab === 'designs' ? 'text-purple-900 border-b-4 border-purple-500 -mb-[20px] scale-105' : 'text-purple-800/60 hover:text-purple-900'}`}
          >
            <ImageIcon size={20} />
            Design Gráfico
          </button>
        </div>
      </section>

      {/* Galeria */}
      <main className="max-w-5xl mx-auto px-6 pb-24">
        {activeTab === 'videos' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {portfolioData.videos.map((video) => (
              <div key={video.id} className="flex flex-col gap-4">
                <div className="bg-white/40 backdrop-blur-md p-2 rounded-3xl border-2 border-white/60 aspect-[9/16] relative shadow-xl shadow-purple-500/10 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative bg-black/5">
                    <iframe 
                      src={video.embedUrl}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                      scrolling="no"
                      style={{ border: 'none', overflow: 'hidden' }}
                    ></iframe>
                  </div>
                </div>
                <a 
                  href={video.linkUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/70 hover:bg-white text-purple-900 py-3 px-6 rounded-full font-bold transition-all shadow-md border border-white/50 hover:scale-[1.02]"
                >
                  <ExternalLink size={18} />
                  Assistir no TikTok
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {portfolioData.designs.map((design) => (
              <div key={design.id} className="bg-white/40 backdrop-blur-md p-3 rounded-3xl border-2 border-white/60 shadow-xl shadow-purple-500/10 group transition-transform duration-300">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    src={design.imgUrl} 
                    alt={design.title} 
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer id="contato" className="border-t-2 border-white/40 bg-white/20 backdrop-blur-sm py-12 text-center relative">
        <h2 className="text-3xl font-black text-white drop-shadow-md mb-4">Gostou do trabalho?</h2>
        <p className="text-purple-900 font-medium mb-8 max-w-md mx-auto">
          Mande uma mensagem para discutirmos o próximo projeto visual da sua marca ou perfil.
        </p>
        <div className="flex justify-center gap-6 mb-16">
          <a href="mailto:gabrielafekete7@gmail.com" className="flex items-center gap-2 text-purple-900 hover:text-purple-700 font-bold bg-white/60 px-6 py-3 rounded-full shadow-sm border border-white/50 transition-colors">
            <Mail size={20} />
            gabrielafekete7@gmail.com
          </a>
        </div>

        {/* Seus Créditos Aqui */}
        <div className="mt-8 pt-6 border-t border-purple-900/10 text-xs font-semibold text-purple-900/50 flex flex-col items-center gap-2">
          <p>Desenvolvido por Arthur Costa</p>
          <div className="flex gap-4">
            <a href="https://github.com/Arthurpcosta1" target="_blank" rel="noreferrer" className="hover:text-purple-900 transition-colors">
              GitHub: Arthurpcosta1
            </a>
            <span>•</span>
            <a href="https://instagram.com/Arthurpcosta_" target="_blank" rel="noreferrer" className="hover:text-purple-900 transition-colors">
              Instagram: @Arthurpcosta_
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}