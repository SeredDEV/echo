import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "/assets/video/hero/alexa.mp4",
    "/assets/video/hero/google.mp4",
    "/assets/video/hero/googlecam.mp4",
    "/assets/video/hero/googlemini.mp4",
  ];

  // Cambiar video cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // 10 segundos

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <video
            key={video}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}

        {/* Overlay MUY claro para mejor visibilidad del video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
      </div>

      {/* Background Pattern (sobre el video) */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 animate-fade-in drop-shadow-2xl text-shadow-lg">
            Bienvenido al Futuro de tu Hogar
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg animate-slide-up max-w-3xl mx-auto">
            Descubre la tecnología del futuro en Echo Tecnología en Casa.
            Encuentra asistentes de voz, dispositivos de domótica y más para
            hacer tu vida más fácil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link
              to="/tienda"
              className="btn-primary bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 text-lg font-bold shadow-2xl border-2 border-primary-600 rounded-xl inline-block transition-all"
            >
              Explorar Productos
            </Link>
            <Link
              to="/contacto"
              className="btn-secondary bg-white/10 text-white border-2 border-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg font-bold backdrop-blur-md shadow-2xl transition-all rounded-xl inline-block"
            >
              Contáctanos
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-up max-w-3xl mx-auto">
            <div className="glass-effect rounded-2xl p-6 backdrop-blur-md bg-white/20 border border-white/30">
              <div className="text-4xl font-bold mb-2">97%</div>
              <div className="text-sm text-white/90">Clientes satisfechos</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 backdrop-blur-md bg-white/20 border border-white/30">
              <div className="text-4xl font-bold mb-2">3000+</div>
              <div className="text-sm text-white/90">Productos vendidos</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 backdrop-blur-md bg-white/20 border border-white/30">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm text-white/90">Soporte disponible</div>
            </div>
          </div>

          {/* Video Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Ver video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
