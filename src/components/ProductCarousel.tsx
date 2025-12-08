import { useState, useEffect } from 'react';

interface CarouselItem {
    id: number;
    title: string;
    subtitle: string;
    description: string[];
    videos: string[];
    buttonLabel: string;
}

const carouselData: CarouselItem[] = [
    {
        id: 1,
        title: 'Controla tu hogar con',
        subtitle: 'Alexa',
        description: [
            'Acceso rápido desde el panel de inicio para ver, controlar y ajustar dispositivos en tu hogar.',
            'En modo Hub, todos en tu hogar pueden controlar dispositivos inteligentes.'
        ],
        videos: [
            'assets/video/carrusel/alexa-echo/alexa.mp4',
            'assets/video/carrusel/alexa-echo/alexaecho.mp4',
            'assets/video/carrusel/alexa-echo/ZjM0Y2YxZjgt.mp4'
        ],
        buttonLabel: 'Alexa Echo'
    },
    {
        id: 2,
        title: 'Hogar inteligente con',
        subtitle: 'Google Nest',
        description: [
            'Controla tu hogar con el asistente de Google integrado en dispositivos Nest.',
            'Cámaras de seguridad, termostatos inteligentes y más para un hogar conectado.'
        ],
        videos: [
            'assets/video/carrusel/google-nest/bf8cb84a-c9d6-4e88-b36a-5b4405c7686a.mp4',
            'assets/video/carrusel/google-nest/nestmini.mp4'
        ],
        buttonLabel: 'Google Nest'
    },
    {
        id: 3,
        title: 'Entretenimiento total con',
        subtitle: 'Fire TV Stick',
        description: [
            'Accede a todas tus plataformas de streaming favoritas en un solo lugar.',
            'Control por voz con Alexa integrado para una experiencia manos libres.'
        ],
        videos: [
            'assets/video/carrusel/amazon-fire/firetv.mp4'
        ],
        buttonLabel: 'Amazon Fire TV'
    },
    {
        id: 4,
        title: 'Streaming sin límites con',
        subtitle: 'Chromecast',
        description: [
            'Disfruta de acceso rápido a tus dispositivos inteligentes compatibles con el widget de favoritos.',
            'Ve lo que está pasando en casa y administra tus dispositivos desde cualquier lugar.'
        ],
        videos: [
            'assets/video/carrusel/google-chromecast/chromecast.mp4'
        ],
        buttonLabel: 'Google Chromecast'
    },
    {
        id: 5,
        title: 'Ilumina tu hogar con',
        subtitle: 'bombillas inteligentes',
        description: [
            'Controla la iluminación de tu hogar con tu voz o desde tu smartphone.',
            'Crea ambientes personalizados con millones de colores disponibles.'
        ],
        videos: [
            'assets/video/carrusel/bombillas-RGB/f2cdd04dbf114786998e1647945ace50.HD-1080p-7.2Mbps-45550478.mp4'
        ],
        buttonLabel: 'Bombillas RGB'
    }
];

const ProductCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const activeItem = carouselData[activeIndex];

    // Cambiar al siguiente video cada 8 segundos si hay múltiples videos
    useEffect(() => {
        if (activeItem.videos.length > 1) {
            const interval = setInterval(() => {
                setCurrentVideoIndex((prev) => (prev + 1) % activeItem.videos.length);
            }, 8000);
            return () => clearInterval(interval);
        }
    }, [activeIndex, activeItem.videos.length]);

    // Resetear el índice de video cuando cambia el producto
    useEffect(() => {
        setCurrentVideoIndex(0);
    }, [activeIndex]);

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        Tu hogar, siempre a tu alcance
                    </h2>
                </div>

                {/* Main Content */}
                <div>
                    {/* Video Container */}
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl mb-4 md:mb-8">
                        {/* Mobile: Fixed height, Desktop: aspect-video */}
                        <div className="min-h-[400px] md:aspect-video relative bg-black">
                            {activeItem.videos.length > 0 ? (
                                <>
                                    {/* Video Background */}
                                    {activeItem.videos.map((video, index) => (
                                        <video
                                            key={video}
                                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
                                                }`}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src={video} type="video/mp4" />
                                        </video>
                                    ))}

                                    {/* Overlay solo en desktop para mejorar legibilidad de botones */}
                                    <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                </>
                            ) : (
                                /* Placeholder si no hay videos */
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500 to-accent-500">
                                    <div className="text-center text-white p-4 md:p-8">
                                        <div className="text-4xl md:text-6xl mb-2 md:mb-4">📺</div>
                                        <p className="text-sm md:text-xl opacity-90">
                                            {activeItem.buttonLabel}
                                        </p>
                                        <p className="text-xs md:text-sm opacity-75 mt-2">
                                            Video próximamente
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Desktop: Buttons over video */}
                        <div className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4">
                            <div className="bg-white/95 backdrop-blur-md rounded-full shadow-2xl p-2">
                                <div className="flex flex-wrap justify-center gap-2">
                                    {carouselData.map((item, index) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveIndex(index)}
                                            className={`px-6 py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 ${activeIndex === index
                                                ? 'bg-primary-600 text-white shadow-lg scale-105'
                                                : 'bg-transparent text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            {item.buttonLabel}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Video indicators (si hay múltiples videos) */}
                        {activeItem.videos.length > 1 && (
                            <div className="absolute top-4 right-4 flex gap-1.5">
                                {activeItem.videos.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentVideoIndex
                                            ? 'bg-white w-6'
                                            : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile: Buttons below video */}
                    <div className="md:hidden mb-6">
                        <div className="bg-white rounded-2xl shadow-xl p-3">
                            <div className="grid grid-cols-2 gap-2">
                                {carouselData.slice(0, 4).map((item, index) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveIndex(index)}
                                        className={`px-4 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 ${activeIndex === index
                                            ? 'bg-primary-600 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {item.buttonLabel}
                                    </button>
                                ))}
                            </div>
                            {carouselData.length > 4 && (
                                <div className="mt-2">
                                    <button
                                        onClick={() => setActiveIndex(4)}
                                        className={`w-full px-4 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 ${activeIndex === 4
                                            ? 'bg-primary-600 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {carouselData[4].buttonLabel}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content Below */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start md:items-center mt-8 md:mt-12">
                        {/* Left: Title */}
                        <div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-1 md:mb-2">
                                {activeItem.title}
                            </h3>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gradient mb-4 md:mb-6">
                                {activeItem.subtitle}
                            </h3>
                        </div>

                        {/* Right: Description */}
                        <div className="space-y-3 md:space-y-4">
                            {activeItem.description.map((desc, idx) => (
                                <div key={idx} className="flex items-start gap-2 md:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5 md:mt-1">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;
