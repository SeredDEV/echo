export interface Product {
    id: string;
    nombre: string;
    precio: number;
    precioOriginal?: number;
    categoria: 'Altavoces Inteligentes' | 'Dispositivos Streaming' | 'Accesorios Inteligentes';
    subcategoria?: string;
    marca: string;
    imagen: string;
    descripcionCorta: string; // Breve para tarjetas (antes descripcion)
    descripcionLarga?: string; // Detallada para el modal
    stock: number;
    destacado?: boolean;
    coloresDisponibles?: string[];
    imagenes?: string[];
    videos?: string[];
    especificaciones?: Record<string, string>;
}

// Force rebuild - timestamp: 2025-12-07T16:34:30 - UPDATED

export const products: Product[] = [
    // Altavoces Inteligentes
    {
        id: 'alexa-echo-dot-5',
        nombre: 'Amazon Echo Dot (5ta Gen)',
        precio: 189000,
        precioOriginal: 249000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/71hNp8d9WvL._AC_SY879_.jpg',
        descripcionCorta: 'Altavoz inteligente compacto con Alexa, sonido mejorado.',
        descripcionLarga: 'El Echo Dot (5.ª generación) ofrece voces más nítidas y graves más profundos para un sonido vibrante. Pídele a Alexa que reproduzca música, podcasts y audiolibros y disfruta de una experiencia de audio dinámica en cualquier habitación de tu hogar. Además, cuenta con sensores de temperatura y ultrasonido para rutinas de hogar inteligente más avanzadas.',
        stock: 15,
        destacado: true,
        especificaciones: {
            "Audio": "Altavoz de proyección frontal de 1.73” (44 mm)",
            "Conectividad": "WiFi Dual Band, Bluetooth Low Energy Mesh",
            "Sensores": "Acelerómetro, Sensor de temperatura, Ultrasonido",
            "Dimensiones": "100 mm x 100 mm x 89 mm",
            "Peso": "304 g",
            "Procesador": "Amazon AZ2 Neural Edge",
            "Requisitos": "La app de Alexa es compatible con Fire OS, Android e iOS",
            "Garantía": "1 año de garantía limitada",
            "Generación": "Echo Dot 5ta Gen (lanzado en 2022)"
        },
        coloresDisponibles: ['Negro', 'Blanco', 'Azul'],
        imagenes: [
            'https://m.media-amazon.com/images/I/71hNp8d9WvL._AC_SY879_.jpg',
            'https://m.media-amazon.com/images/I/71hNp8d9WvL._AC_SY879_.jpg',
            'https://m.media-amazon.com/images/I/71hNp8d9WvL._AC_SY879_.jpg'
        ],
        videos: [
            'https://m.media-amazon.com/images/G/01/kindle/journeys/IMXSHTbAX7XQVKfljHBxX2Bh7rOZPGrTwYzYkaUNEeX03D/MDRhNDYzOWMt._CB608419687_.mp4'
        ],
    },
    {
        id: 'alexa-echo-dot-max',
        nombre: 'Amazon Echo Dot Max',
        precio: 259000,
        precioOriginal: 319000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/71L5oPwxV7L._AC_SY879_.jpg',
        descripcionCorta: 'Echo Dot con audio mejorado, sensor de temperatura y luz ambiental, control de hogar inteligente con Alexa',
        descripcionLarga: 'El Echo Dot Max lleva tu experiencia auditiva al siguiente nivel con un diseño acústico rediseñado que ofrece graves hasta dos veces más profundos que la generación anterior. Integra sensores avanzados de temperatura para automatizar tu climatización y detección de movimiento por ultrasonido para encender luces al entrar a una habitación. Su pantalla LED oculta muestra la hora, alarmas, clima y títulos de canciones con solo tocar la superficie.',
        stock: 12,
        destacado: true,
        coloresDisponibles: ['Negro', 'Blanco', 'Azul'],
        imagenes: [
            'https://m.media-amazon.com/images/I/71L5oPwxV7L._AC_SY879_.jpg'
        ],
        videos: [
            'https://m.media-amazon.com/images/G/01/kindle/journeys/h0rbPjHoKsDC2FmjG5zmOevgelm2F2UfXqGhfBe2FYATME3D/YTEwYTk1ODkt'
        ],
        especificaciones: {
            "Audio": "Altavoz de proyección frontal de 1.73” (44 mm)",
            "Conectividad": "WiFi Dual Band, Bluetooth Low Energy Mesh",
            "Sensores": "Acelerómetro, Sensor de temperatura, Ultrasonido",
            "Dimensiones": "100 mm x 100 mm x 89 mm",
            "Peso": "340 gramos",
            "Procesador": "MediaTek MT8512B 2.0 GHz",
            "Requisitos": "La app de Alexa es compatible con Fire OS, Android e iOS",
            "Garantía": "1 año de garantía limitada",
            "Generación": "Echo Dot 5ta Gen (lanzado en 2022)",
            "Idioma": "Español, Inglés, Francés, Portugués y más"
        }
    },
    {
        id: 'alexa-echo-pop',
        nombre: 'Amazon Echo Pop',
        precio: 139000,
        precioOriginal: 189000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61V5FRUgX8L._AC_SX679_.jpg',
        descripcionCorta: 'Altavoz inteligente compacto con Alexa, diseño moderno y sonido direccional frontal',
        descripcionLarga: 'Este altavoz inteligente compacto con Alexa cuenta con un sonido completo ideal para habitaciones pequeñas y espacios limitados. Suficientemente pequeño para pasar desapercibido y suficientemente potente para destacar.',
        stock: 25,
        destacado: true,
        especificaciones: {
            "Audio": "Altavoz de proyección frontal de 1.95” (49.5 mm)",
            "Conectividad": "WiFi Dual Band, Bluetooth Low Energy Mesh",
            "Dimensiones": "99 mm x 83 mm x 91 mm",
            "Peso": "196 g",
            "Procesador": "Amazon AZ2 Neural Edge",
            "Idioma": "Español, Inglés, Francés, Portugués y más"
        },
        coloresDisponibles: ['Negro', 'Blanco', 'Lavanda', 'Verde Azulado'],
        imagenes: [
            'https://m.media-amazon.com/images/I/61V5FRUgX8L._AC_SX679_.jpg'
        ]
    },
    {
        id: 'alexa-echo-show-8',
        nombre: 'Amazon Echo Show 8',
        precio: 549000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/511tpdYUF5L._AC_SY879_.jpg',
        descripcionCorta: 'Pantalla inteligente de 8" HD con Alexa, cámara de 13MP con auto-framing y audio espacial',
        descripcionLarga: 'Mira lo que más te gusta con la pantalla táctil HD de 8 pulgadas, el contenido adaptable y los altavoces estéreo. Haz videollamadas con la cámara de 13 MP que te mantiene en el centro de la imagen. Controla tu hogar inteligente de manera sencilla con tu voz.',
        stock: 5,
        especificaciones: {
            "Pantalla": "8.0” táctil HD (1280 x 800)",
            "Cámara": "13 MP con cubierta integrada y auto-framing",
            "Audio": "2 altavoces de 2.0” (52 mm) con radiador de bajos pasivo",
            "Procesador": "Octa-core SoC con Amazon AZ2 Neural Edge",
            "Conectividad": "WiFi 6E, Bluetooth 5.2, Thread, Zigbee",
            "Dimensiones": "200 mm x 135 mm x 99 mm"
        },
        coloresDisponibles: ['Negro', 'Blanco'],
        imagenes: [
            'https://m.media-amazon.com/images/I/511tpdYUF5L._AC_SY879_.jpg',
            'https://m.media-amazon.com/images/I/511tpdYUF5L._AC_SY879_.jpg'
        ]
    },
    {
        id: 'alexa-echo-spot',
        nombre: 'Amazon Echo Spot',
        precio: 349000,
        precioOriginal: 429000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/71-DxWvydgL._AC_SY879_.jpg',
        descripcionCorta: 'Reloj despertador inteligente con pantalla táctil de 2.83", Alexa integrado y audio de alta definición',
        descripcionLarga: 'Un reloj despertador inteligente elegante con Alexa y gran sonido. Diseñado para la mesita de noche, te ayuda a relajarte por la noche y empezar el día con energía. Mira la hora, el clima y los títulos de canciones de un vistazo, controla dispositivos de hogar inteligente y más.',
        stock: 10,
        destacado: true,
        especificaciones: {
            "Pantalla": "2.83” táctil (240 x 320), vidrio semiesférico",
            "Audio": "Altavoz de 1.73” de rango completo",
            "Dimensiones": "113 mm x 103 mm x 111 mm",
            "Sensores": "Sensor de movimiento, sensor de luz ambiental",
            "Conectividad": "WiFi Dual Band, Bluetooth",
            "Peso": "405 g"
        },
        coloresDisponibles: ['Negro', 'Blanco', 'Azul'],
        imagenes: [
            'https://m.media-amazon.com/images/I/71-DxWvydgL._AC_SY879_.jpg'
        ]
    },
    {
        id: 'alexa-echo-show-5',
        nombre: 'Amazon Echo Show 5',
        precio: 399000,
        precioOriginal: 499000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61ejdlU79CL._AC_SX679_.jpg',
        descripcionCorta: 'Pantalla inteligente compacta de 5.5" con Alexa, cámara de 2MP y control de hogar inteligente',
        descripcionLarga: 'Empieza tu día con Alexa. Configura alarmas y timers, revisa tu calendario o las noticias, haz videollamadas con la cámara de 2 MP y reproduce música o series, todo con tu voz. Compacto, ideal para la mesita de noche o el escritorio.',
        stock: 14,
        destacado: true,
        especificaciones: {
            "Pantalla": "5.5” táctil (960 x 480)",
            "Cámara": "2 MP con cubierta integrada",
            "Audio": "Altavoz de rango completo de 1.75” (44 mm)",
            "Procesador": "MediaTek MT 8163",
            "Dimensiones": "148 mm x 86 mm x 73 mm",
            "Conectividad": "WiFi Dual Band, Bluetooth"
        },
        coloresDisponibles: ['Negro', 'Blanco', 'Azul'],
        imagenes: [
            'https://m.media-amazon.com/images/I/61ejdlU79CL._AC_SX679_.jpg'
        ]
    },
    {
        id: 'alexa-echo-show-11',
        nombre: 'Amazon Echo Show 11',
        precio: 1299000,
        precioOriginal: 1599000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61CJ-NSuTxL._AC_SL1500_.jpg',
        descripcionCorta: 'Pantalla inteligente premium de 10.95" Full HD con cámara de 13MP, auto-framing y audio espacial de alta calidad',
        descripcionLarga: 'La experiencia definitiva de Alexa con una pantalla brillante de 10.1" HD que se mueve automáticamente para mantenerte siempre a la vista. Sus altavoces premium ofrecen un sonido direccional de alta calidad que se adapta al espacio.',
        stock: 6,
        destacado: true,
        especificaciones: {
            "Pantalla": "10.1” táctil HD (1280 x 800) rotatoria",
            "Cámara": "13 MP con auto-framing y cubierta",
            "Audio": "Sistema 2.1: 2 tweeters de 1.0” + woofer de 3.0”",
            "Motor": "Motor sin escobillas para rotación silenciosa",
            "Conectividad": "WiFi 6, Bluetooth, Zigbee",
            "Dimensiones": "251 mm x 230 mm x 172 mm"
        },
        coloresDisponibles: ['Negro', 'Blanco']
    },
    {
        id: 'alexa-echo-show-15',
        nombre: 'Amazon Echo Show 15',
        precio: 1499000,
        precioOriginal: 1899000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61xQl81iYQL._AC_SY879_.jpg',
        descripcionCorta: 'Pantalla inteligente de 15.6" Full HD con orientación ajustable, cámara de 13MP y audio premium para toda la familia',
        descripcionLarga: 'Reimagina la organización y el entretenimiento familiar con una pantalla inteligente personalizada que te ayuda a mantener el rumbo. Puedes montarlo en la pared o colocarlo en un soporte (se vende por separado) en orientación vertical u horizontal.',
        stock: 4,
        destacado: true,
        especificaciones: {
            "Pantalla": "15.6” Full HD (1920 x 1080) orientación variable",
            "Cámara": "5 MP con cubierta integrada",
            "Audio": "2 controladores de rango completo de 1.6”",
            "Procesador": "Octa-core SoC Amlogic Pop1 con motor neuronal AZ2",
            "Sensores": "Visual ID, acelerómetro, luz ambiental",
            "Dimensiones": "402 mm x 252 mm x 35 mm"
        },
        coloresDisponibles: ['Negro', 'Blanco']
    },
    {
        id: 'alexa-echo-show-21',
        nombre: 'Amazon Echo Show 21',
        precio: 1899000,
        precioOriginal: 2399000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61tzmVXXOWL._AC_SL1500_.jpg',
        descripcionCorta: 'Pantalla inteligente premium de 21" Full HD con cámara de 13MP, audio espacial de alta calidad y control total del hogar',
        descripcionLarga: 'Transforma tu cocina o sala con el Echo Show más grande hasta la fecha. Una impresionante pantalla Full HD de 21 pulgadas con Fire TV integrado para que disfrutes de tus series favoritas, noticias y deportes. Funciona como el centro de control definitivo para tu hogar inteligente y como un marco de fotos digital gigante cuando no está en uso.',
        stock: 3,
        destacado: true,
        especificaciones: {
            "Pantalla": "21.0” Full HD (1920 x 1080) brillante",
            "Cámara": "13 MP ancho con auto-framing mejorado",
            "Audio": "2x tweeters 1.0” + 2x woofers 2.5” High-Fidelity",
            "Procesador": "Octa-core SoC con motor neuronal AZ2",
            "Conectividad": "WiFi 6E, Bluetooth 5.2, Thread, Matter Controller",
            "Dimensiones": "530 mm x 340 mm x 38 mm",
            "Peso": "2.9 kg"
        },
    },
    {
        id: 'google-nest-mini',
        nombre: 'Google Nest Mini',
        precio: 159000,
        precioOriginal: 199000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Google',
        imagen: 'https://m.media-amazon.com/images/I/71TeLBggnwL._AC_SX679_.jpg',
        descripcionCorta: 'Altavoz inteligente compacto con Google Assistant, sonido mejorado y control por voz',
        descripcionLarga: 'Conoce el Nest Mini de segunda generación, el altavoz que controlas con tu voz. Solo di "Hey Google" para reproducir tu música favorita de Spotify, YouTube Music y más. Disfruta de un sonido más potente y rico con bajos el doble de fuertes que el modelo original.',
        stock: 20,
        destacado: true,
        especificaciones: {
            "Audio": "Sonido 360° con controlador de 40 mm",
            "Micrófonos": "3 micrófonos de largo alcance",
            "Procesador": "CPU ARM de cuatro núcleos de 64 bits",
            "Conectividad": "Wi-Fi 802.11b/g/n/ac (2.4 GHz/5 GHz), Bluetooth 5.0",
            "Dimensiones": "98 mm (diámetro) x 42 mm (alto)",
            "Peso": "181 g",
            "Materiales": "Tela hecha de botellas de plástico 100% recicladas"
        },
        coloresDisponibles: ['Negro', 'Gris Tiza', 'Coral', 'Azul Cielo']
    },
    {
        id: 'google-nest-audio',
        nombre: 'Google Nest Audio',
        precio: 329000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Google',
        imagen: 'https://m.media-amazon.com/images/I/41Puf30CmvL._AC_.jpg',
        descripcionCorta: 'Altavoz inteligente con sonido potente, woofer y tweeter, Google Assistant integrado',
        descripcionLarga: 'El Nest Audio está diseñado para los amantes de la música. Con un woofer, tweeter y software de afinación, llena tu habitación con voces nítidas y bajos potentes. Nest Audio es un 75% más potente que el Google Home original.',
        stock: 12,
        especificaciones: {
            "Audio": "Woofer de 75 mm y tweeter de 19 mm",
            "Micrófonos": "3 micrófonos de campo lejano",
            "Procesador": "Quad Core A53 1.8 GHz",
            "Conectividad": "Wi-Fi 802.11b/g/n/ac (2.4 GHz/5 GHz), Bluetooth 5.0",
            "Dimensiones": "175 mm (alto) x 124 mm (ancho) x 78 mm (profundidad)",
            "Peso": "1.2 kg",
            "Tecnología": "Chromecast integrado"
        },
        coloresDisponibles: ['Negro', 'Gris Tiza', 'Azul Cielo', 'Rosa Arena', 'Salvia']
    },
    {
        id: 'alexa-echo-studio',
        nombre: 'Amazon Echo Studio',
        precio: 899000,
        precioOriginal: 1099000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/71DklMv-8+L._AC_SL1500_.jpg',
        descripcionCorta: 'Altavoz inteligente premium con audio espacial 3D, Dolby Atmos, y 5 altavoces direccionales para sonido inmersivo de alta fidelidad',
        descripcionLarga: 'El Echo más avanzado hasta la fecha. Envuelve tu espacio con un audio inmersivo gracias a sus 5 altavoces que producen graves potentes, rangos medios dinámicos y agudos nítidos. La tecnología Dolby Atmos agrega espacio, claridad y profundidad, convirtiendo tu habitación en un estudio de grabación.',
        stock: 8,
        destacado: true,
        especificaciones: {
            "Audio": "3 tweeters 2” (51 mm), 1 woofer 5.25” (133 mm), DAC de 24 bits",
            "Formatos de Audio": "FLAC, MP3, AAC, Opus, Vorbis, Dolby Digital, Dolby Digital Plus, Dolby Atmos, Sony 360 Reality Audio",
            "Conectividad": "WiFi Dual Band, Zigbee Hub integrado",
            "Entradas": "Entrada de línea de 3.5 mm / mini-toslink óptico",
            "Dimensiones": "206 mm x 175 mm",
            "Peso": "3.5 kg",
            "Procesador": "MediaTek MT8516 + procesador de señal digital Amazon"
        },
        videos: [
            'https://m.media-amazon.com/images/G/01/kindle/journeys/chI6AEQJNSuoFJImCBazsFBsmrcqr5UFgtsp3AtgMRQ3D/OWJjZWZhOGQt'
        ]
    },
    {
        id: 'alexa-echo-auto',
        nombre: 'Amazon Echo Auto',
        precio: 199000,
        precioOriginal: 249000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/41MD7quzjPL._AC_SL1000_.jpg',
        descripcionCorta: 'Alexa para tu auto con 5 micrófonos, conexión Bluetooth y carga rápida',
        descripcionLarga: 'Lleva la inteligencia de Alexa a tu viaje. Diseñado para oírte sobre la música, el aire acondicionado y el ruido de la carretera. Usa tu voz para poner música, revisar tu calendario, hacer llamadas y más, todo mientras mantienes las manos en el volante.',
        stock: 15,
        destacado: true,
        especificaciones: {
            "Micrófonos": "Matriz de 5 micrófonos",
            "Conectividad": "Bluetooth HFP / A2DP, Salida Auxiliar 3.5mm",
            "Alimentación": "Cargador de auto incluído (soporta carga rápida QC3.0)",
            "Compatibilidad": "Funciona a través de la app de Alexa en tu teléfono (iOS/Android)",
            "Dimensiones": "85 mm x 47 mm x 13.28 mm",
            "Peso": "45 g",
            "Procesador": "Mediatek MT7697"
        },
    },

    // Dispositivos Streaming
    {
        id: 'fire-tv-stick-4k',
        nombre: 'Amazon Fire TV Stick 4K',
        precio: 229000,
        precioOriginal: 279000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61r3G3vAhBL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61r3G3vAhBL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61r3G3vAhBL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61r3G3vAhBL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Streaming 4K Ultra HD con Alexa Voice Remote, Dolby Vision y HDR10+',
        descripcionLarga: 'Disfruta de una experiencia cinematográfica en casa con imágenes 4K Ultra HD brillantes y soporte para Dolby Vision, HDR10+ y audio inmersivo Dolby Atmos. Encuentra contenido rápidamente con el control por voz Alexa.',
        stock: 25,
        destacado: true,
        especificaciones: {
            "Resolución": "4K Ultra HD, HDR10, HDR10+, Dolby Vision",
            "Audio": "Dolby Atmos, sonido envolvente 7.1",
            "Almacenamiento": "8 GB",
            "Procesador": "Quad-core 1.7 GHz",
            "Conectividad": "Wi-Fi 802.11ac MIMO",
            "Puertos": "Salida HDMI, micro-USB solo para alimentación"
        },
    },
    {
        id: 'fire-tv-stick-4k-plus',
        nombre: 'Amazon Fire TV Stick 4K Plus',
        precio: 279000,
        precioOriginal: 349000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/51WtNy0OxLL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/51WtNy0OxLL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51WtNy0OxLL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51WtNy0OxLL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Streaming 4K Ultra HD premium con WiFi 6, Dolby Atmos y control remoto Alexa Voice mejorado',
        descripcionLarga: 'Disfruta de una transmisión 4K fluida incluso con múltiples dispositivos conectados a tu red, gracias al soporte para WiFi 6. Experimenta colores vibrantes con Dolby Vision y audio inmersivo Dolby Atmos. Incluye el control remoto por voz Alexa Enhanced.',
        stock: 15,
        destacado: true,
        especificaciones: {
            "Resolución": "4K Ultra HD hasta 60 fps",
            "WiFi": "WiFi 6 Dual-band, dual-antenna (MIMO)",
            "Formatos HDR": "Dolby Vision, HDR 10, HDR10+, HLG",
            "Audio": "Dolby Atmos",
            "Almacenamiento": "8 GB",
            "Memoria RAM": "1.5 GB",
            "Procesador": "Quad-core 1.7 GHz"
        },
    },
    {
        id: 'fire-tv-stick-4k-max',
        nombre: 'Amazon Fire TV Stick 4K Max',
        precio: 319000,
        precioOriginal: 399000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61KoIgcXSKL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61KoIgcXSKL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61KoIgcXSKL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61KoIgcXSKL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Streaming 4K Ultra HD de alto rendimiento con WiFi 6E, procesador quad-core y Alexa Voice Remote Enhanced',
        descripcionLarga: 'Eleva tu experiencia de entretenimiento con nuestro Stick más potente. Navegación ultra rápida, soporte para Wi-Fi 6E de próxima generación y el doble de almacenamiento. Convierte tu TV en una galería de arte con Fondo Ambiental y juega videojuegos de Xbox sin consola.',
        stock: 12,
        destacado: true,
        especificaciones: {
            "Procesador": "Quad-core 2.0 GHz",
            "Almacenamiento": "16 GB (el doble que el 4K estándar)",
            "WiFi": "Wi-Fi 6E Tri-band",
            "Resolución": "4K Ultra HD, Dolby Vision, HDR10+, HLG",
            "Audio": "Dolby Atmos, 7.1 surround sound",
            "Gráficos": "GPU 850 MHz",
            "Puertos": "Salida HDMI 2.1 con soporte ARC"
        },
    },
    {
        id: 'fire-tv-stick-hd',
        nombre: 'Amazon Fire TV Stick HD',
        precio: 149000,
        precioOriginal: 189000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61nyRfbgaLL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61nyRfbgaLL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61nyRfbgaLL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61nyRfbgaLL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Streaming HD con Alexa Voice Remote, 1080p y control por voz',
        stock: 25,
        destacado: true
    },
    {
        id: 'fire-tv-cube',
        nombre: 'Amazon Fire TV Cube',
        precio: 449000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61CvilMENWL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61CvilMENWL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61CvilMENWL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61CvilMENWL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Streaming 4K Ultra HD con control por voz manos libres, procesador octa-core y WiFi 6E',
        descripcionLarga: 'El reproductor multimedia de streaming Fire TV más rápido de todos. Controla tu TV, barra de sonido y receptor compatible solo con tu voz, incluso desde el otro lado de la habitación. Con un procesador octa-core, las apps se inician al instante y la navegación es súper fluida.',
        stock: 6,
        especificaciones: {
            "Procesador": "Octa-core (4x 2.2GHz, 4x 2.0GHz)",
            "WiFi": "Wi-Fi 6E Tri-band",
            "Puertos": "Entrada HDMI, Salida HDMI, USB-A, Ethernet",
            "Resolución": "4K Ultra HD, Dolby Vision, HDR10+, HLG",
            "Audio": "Dolby Atmos, sonido envolvente 7.1",
            "Control": "Manos libres con Alexa (micrófono integrado)",
            "Upscaling": "Super Resolution Upscaling"
        },
    },
    {
        id: 'google-tv-streamer-4k',
        nombre: 'Google TV Streamer 4K',
        precio: 379000,
        precioOriginal: 459000,
        categoria: 'Dispositivos Streaming',
        marca: 'Google',
        imagen: 'https://m.media-amazon.com/images/I/510wm50VDHL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/510wm50VDHL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/510wm50VDHL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/510wm50VDHL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Streaming 4K con Google Assistant, rendimiento rápido y recomendaciones personalizadas',
        stock: 10,
        destacado: true
    },
    {
        id: 'chromecast-google-tv',
        nombre: 'Chromecast con Google TV',
        precio: 269000,
        categoria: 'Dispositivos Streaming',
        marca: 'Google',
        imagen: 'https://m.media-amazon.com/images/I/514iHiICOOL._AC_SL1000_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/514iHiICOOL._AC_SL1000_.jpg',
            'https://m.media-amazon.com/images/I/514iHiICOOL._AC_SL1000_.jpg',
            'https://m.media-amazon.com/images/I/514iHiICOOL._AC_SL1000_.jpg'
        ],
        descripcionCorta: 'Streaming 4K HDR con Google TV, control remoto y recomendaciones personalizadas',
        stock: 18,
        destacado: true
    },

    // Accesorios Inteligentes - Bombillos




    // Accesorios Inteligentes - Tomacorrientes
    {
        id: 'kasa-smart-plug-kp200',
        nombre: 'Kasa Smart Plug KP200',
        precio: 129000,
        precioOriginal: 159000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Tomacorrientes',
        marca: 'TP-Link',
        imagen: 'https://m.media-amazon.com/images/I/61Cz57Vl0yL._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61Cz57Vl0yL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61Cz57Vl0yL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61Cz57Vl0yL._SL1500_.jpg'
        ],
        descripcionCorta: 'Tomacorriente inteligente de pared con 2 enchufes controlables, control por voz y app Kasa',
        stock: 25,
        destacado: true
    },
    {
        id: 'govee-smart-plug-energy',
        nombre: 'Govee Smart Plug con Monitoreo de Energía',
        precio: 99000,
        precioOriginal: 129000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Tomacorrientes',
        marca: 'Govee',
        imagen: 'https://m.media-amazon.com/images/I/61xNTXtJ30L._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61xNTXtJ30L._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61xNTXtJ30L._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61xNTXtJ30L._SL1500_.jpg'
        ],
        descripcionCorta: 'Enchufe inteligente con monitoreo de energía en tiempo real, WiFi y Bluetooth, control por voz',
        stock: 35,
        destacado: true
    },
    {
        id: 'govee-smart-plug',
        nombre: 'Govee Smart Plug',
        precio: 79000,
        precioOriginal: 99000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Tomacorrientes',
        marca: 'Govee',
        imagen: 'https://m.media-amazon.com/images/I/51wdsa8jwnL._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/51wdsa8jwnL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51wdsa8jwnL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51wdsa8jwnL._SL1500_.jpg'
        ],
        descripcionCorta: 'Enchufe inteligente WiFi y Bluetooth, control por voz, programación y control grupal',
        stock: 45,
        destacado: true
    },
    {
        id: 'tp-link-tapo-p210m',
        nombre: 'TP-Link Tapo Smart Plug P210M',
        precio: 89000,
        precioOriginal: 119000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Tomacorrientes',
        marca: 'TP-Link',
        imagen: 'https://m.media-amazon.com/images/I/61PHxUzYs9L._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61PHxUzYs9L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61PHxUzYs9L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61PHxUzYs9L._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Tomacorriente inteligente de pared con certificación Matter, monitoreo de energía y prevención de sobrecarga',
        stock: 30,
        destacado: true
    },
    {
        id: 'ghome-smart-plug-mini',
        nombre: 'GHome Smart Plug Mini',
        precio: 59000,
        precioOriginal: 79000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Tomacorrientes',
        marca: 'GHome',
        imagen: 'https://m.media-amazon.com/images/I/51Ipo9YCEwL._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/51Ipo9YCEwL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51Ipo9YCEwL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51Ipo9YCEwL._SL1500_.jpg'
        ],
        descripcionCorta: 'Enchufe inteligente mini WiFi y Bluetooth, control por voz, diseño compacto y certificación ETL/FCC',
        stock: 50,
        destacado: true
    },

    // Accesorios Inteligentes - Apagadores

    {
        id: 'kasa-smart-switch-hs200p3',
        nombre: 'Kasa Smart Light Switch HS200P3',
        precio: 149000,
        precioOriginal: 189000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Apagadores',
        marca: 'TP-Link',
        imagen: 'https://m.media-amazon.com/images/I/61Du7b9kpxL._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61Du7b9kpxL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61Du7b9kpxL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61Du7b9kpxL._SL1500_.jpg'
        ],
        descripcionCorta: 'Interruptor inteligente WiFi con control por voz, programación y modo ausencia',
        stock: 20,
        destacado: true
    },
    {
        id: 'kasa-smart-switch-2gang',
        nombre: 'Kasa Smart Switch 2-Gang HS200-2',
        precio: 189000,
        precioOriginal: 239000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Apagadores',
        marca: 'TP-Link',
        imagen: 'https://m.media-amazon.com/images/I/61VngqZKsTL._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61VngqZKsTL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61VngqZKsTL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61VngqZKsTL._SL1500_.jpg'
        ],
        descripcionCorta: 'Interruptor inteligente 2-Gang WiFi, control de 2 circuitos independientes con voz y app',
        stock: 15,
        destacado: true
    },
    {
        id: 'kasa-smart-dimmer-hs220',
        nombre: 'Kasa Smart Dimmer Switch HS220',
        precio: 169000,
        precioOriginal: 209000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Apagadores',
        marca: 'TP-Link',
        imagen: 'https://m.media-amazon.com/images/I/61C3hsyi5HL._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61C3hsyi5HL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61C3hsyi5HL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61C3hsyi5HL._SL1500_.jpg'
        ],
        descripcionCorta: 'Interruptor dimmer inteligente WiFi con control de brillo 1%-100%, transiciones suaves y modo ausencia',
        stock: 18,
        destacado: true
    },
    {
        id: 'kasa-smart-motion-sensor-switch',
        nombre: 'Kasa Smart Motion Sensor Switch',
        precio: 199000,
        precioOriginal: 249000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Apagadores',
        marca: 'TP-Link',
        imagen: 'https://m.media-amazon.com/images/I/51MWX3hAPqL._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/51MWX3hAPqL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51MWX3hAPqL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51MWX3hAPqL._SL1500_.jpg'
        ],
        descripcionCorta: 'Interruptor inteligente con sensor de movimiento, detección de luz diurna y control de brillo 1%-100%',
        stock: 12,
        destacado: true
    },
    {
        id: 'louysgen-smart-switch',
        nombre: 'LOUYSGEN Smart Light Switch',
        precio: 119000,
        precioOriginal: 159000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Apagadores',
        marca: 'LOUYSGEN',
        imagen: 'https://m.media-amazon.com/images/I/41d6gQvhgIL._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/41d6gQvhgIL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/41d6gQvhgIL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/41d6gQvhgIL._SL1500_.jpg'
        ],
        descripcionCorta: 'Interruptor inteligente WiFi con control 3-way, certificación IP54, superficie de vidrio templado y control por voz',
        stock: 25,
        destacado: true
    },
    {
        id: 'louysgen-smart-switch-white',
        nombre: 'LOUYSGEN Smart Light Switch  Blanco Doble',
        precio: 119000,
        precioOriginal: 159000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Apagadores',
        marca: 'LOUYSGEN',
        imagen: 'https://m.media-amazon.com/images/I/41MdJk9vRxL._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/41MdJk9vRxL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/41MdJk9vRxL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/41MdJk9vRxL._SL1500_.jpg'
        ],
        descripcionCorta: 'Interruptor inteligente WiFi blanco con control 3-way, certificación IP54, superficie de vidrio templado y control por voz',
        stock: 25,
        destacado: true
    },
    {
        id: 'louysgen-smart-switch-triple',
        nombre: 'LOUYSGEN Smart Light Switch Triple',
        precio: 139000,
        precioOriginal: 179000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Apagadores',
        marca: 'LOUYSGEN',
        imagen: 'https://m.media-amazon.com/images/I/41mJ4fWKO9L._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/41mJ4fWKO9L._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/41mJ4fWKO9L._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/41mJ4fWKO9L._SL1500_.jpg'
        ],
        descripcionCorta: 'Interruptor inteligente WiFi triple con control 3-way, certificación IP54, superficie de vidrio templado y control por voz',
        stock: 20,
        destacado: true
    },
    {
        id: 'louysgen-smart-dimmer',
        nombre: 'LOUYSGEN Smart Dimmer Switch',
        precio: 129000,
        precioOriginal: 169000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Apagadores',
        marca: 'LOUYSGEN',
        imagen: 'https://m.media-amazon.com/images/I/41aj3o7CcfL._SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/41aj3o7CcfL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/41aj3o7CcfL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/41aj3o7CcfL._SL1500_.jpg'
        ],
        descripcionCorta: 'Interruptor dimmer inteligente WiFi con control de brillo, temporizador y certificación FCC',
        stock: 22,
        destacado: true
    },


    // Accesorios Inteligentes - Cintas LED
    {
        id: 'kasa-smart-led-strip',
        nombre: 'Kasa Smart LED Light Strip Full Color',
        precio: 179000,
        precioOriginal: 229000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cintas LED',
        marca: 'TP-Link',
        imagen: 'https://m.media-amazon.com/images/I/61ul+J5L+FL._AC_SL1241_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61ul+J5L+FL._AC_SL1241_.jpg',
            'https://m.media-amazon.com/images/I/61ul+J5L+FL._AC_SL1241_.jpg',
            'https://m.media-amazon.com/images/I/61ul+J5L+FL._AC_SL1241_.jpg'
        ],
        descripcionCorta: 'Tira LED RGB WiFi 16.4ft con 16 millones de colores, efectos animados y control por voz',
        stock: 30,
        destacado: true
    },
    {
        id: 'kasa-smart-led-strip-multicolor',
        nombre: 'Kasa Smart LED Light Strip Multicolor',
        precio: 199000,
        precioOriginal: 259000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cintas LED',
        marca: 'TP-Link',
        imagen: 'https://m.media-amazon.com/images/I/71N1ACuZ00L._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/71N1ACuZ00L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71N1ACuZ00L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71N1ACuZ00L._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Tira LED RGB WiFi 16.4ft con 50 zonas de color, efectos animados, certificación IP44 y control por voz',
        stock: 25,
        destacado: true
    },
    {
        id: 'govee-rgbic-led-strip-100ft',
        nombre: 'Govee 100ft RGBIC LED Strip Lights',
        precio: 289000,
        precioOriginal: 359000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cintas LED',
        marca: 'Govee',
        imagen: 'https://m.media-amazon.com/images/I/71N76hGMHVL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/71N76hGMHVL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71N76hGMHVL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71N76hGMHVL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Tira LED RGBIC 100ft con colores segmentados, sincronización musical mejorada y control por voz',
        stock: 15,
        destacado: true
    },
    {
        id: 'govee-cob-led-strip-pro',
        nombre: 'Govee COB LED Strip Light Pro',
        precio: 249000,
        precioOriginal: 319000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cintas LED',
        marca: 'Govee',
        imagen: 'https://m.media-amazon.com/images/I/71a6EtPXZFL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/71a6EtPXZFL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71a6EtPXZFL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71a6EtPXZFL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Tira LED COB con tecnología de 1260 LEDs/m, iluminación sin puntos, certificación Matter y control por voz',
        stock: 20,
        destacado: true
    },
    {
        id: 'govee-led-strip',
        nombre: 'Govee Bombillos Inteligentes',
        precio: 119000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'Govee',
        imagen: 'https://m.media-amazon.com/images/I/51sixdfNb4L._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/51sixdfNb4L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51sixdfNb4L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51sixdfNb4L._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Bombillos LED RGB WiFi con 16 millones de colores, sincronización musical y control por voz',
        stock: 32
    },
    {
        id: 'wiz-smart-bulbs',
        nombre: 'WiZ Bombillos Inteligentes LED',
        precio: 89000,
        precioOriginal: 119000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'WiZ',
        imagen: 'https://m.media-amazon.com/images/I/71zYZwRnoxL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/71zYZwRnoxL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71zYZwRnoxL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71zYZwRnoxL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Bombillos LED WiFi con 16 millones de colores, compatible con Alexa y Google Home, certificación Matter',
        stock: 40,
        destacado: true
    },
    {
        id: 'amazon-basics-smart-bulb',
        nombre: 'Amazon Basics Bombillo Inteligente LED A19',
        precio: 69000,
        precioOriginal: 89000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/71InrzITFhL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/71InrzITFhL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71InrzITFhL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71InrzITFhL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Bombillo LED inteligente con control por voz Alexa, 16 colores preestablecidos y configuración simple',
        stock: 50,
        destacado: true
    },
    {
        id: 'kasa-smart-bulb',
        nombre: 'Kasa Bombillo Inteligente',
        precio: 79000,
        precioOriginal: 99000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'TP-Link',
        imagen: 'https://m.media-amazon.com/images/I/51rE9Q2r6AL._AC_SL1000_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/51rE9Q2r6AL._AC_SL1000_.jpg',
            'https://m.media-amazon.com/images/I/51rE9Q2r6AL._AC_SL1000_.jpg',
            'https://m.media-amazon.com/images/I/51rE9Q2r6AL._AC_SL1000_.jpg'
        ],
        descripcionCorta: 'Bombillo LED multicolor con 16 millones de colores, monitoreo de energía y control por voz',
        stock: 45,
        destacado: true
    },
    {
        id: 'philips-hue-essential',
        nombre: 'Philips Hue Essential Bombillo LED A19',
        precio: 95000,
        precioOriginal: 129000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'Philips',
        imagen: 'https://m.media-amazon.com/images/I/719V8HYaMgL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/719V8HYaMgL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/719V8HYaMgL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/719V8HYaMgL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Bombillo LED inteligente con millones de colores, control por voz y compatibilidad con Alexa, Google y Apple Home',
        stock: 30,
        destacado: true
    },
    {
        id: 'linkind-smart-bulbs',
        nombre: 'Linkind Bombillos Inteligentes WiFi',
        precio: 55000,
        precioOriginal: 75000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'Linkind',
        imagen: 'https://m.media-amazon.com/images/I/51ZR2lB0Q1L._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/51ZR2lB0Q1L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51ZR2lB0Q1L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51ZR2lB0Q1L._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Bombillos LED WiFi con 16 millones de colores, modo despertar y control por voz con Alexa y Google',
        stock: 60,
        destacado: true
    },
    {
        id: 'ge-cync-smart-bulbs',
        nombre: 'GE Cync Bombillos Inteligentes LED A19',
        precio: 85000,
        precioOriginal: 109000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'GE',
        imagen: 'https://m.media-amazon.com/images/I/71qdF1Tjp6L._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/71qdF1Tjp6L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71qdF1Tjp6L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71qdF1Tjp6L._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Bombillos LED con millones de colores, certificación Matter y control por voz con Alexa, Google y Apple Home',
        stock: 35,
        destacado: true
    },

    // Accesorios Inteligentes - Cerraduras
    {
        id: 'yale-smart-lock-matter',
        nombre: 'Yale Matte Black Keyed Deadbolt Smart Lock',
        precio: 1299000,
        precioOriginal: 1599000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cerraduras',
        marca: 'Yale',
        imagen: 'https://m.media-amazon.com/images/I/61Klu1LH1EL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/61Klu1LH1EL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61Klu1LH1EL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61Klu1LH1EL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Cerradura inteligente con certificación Matter, control por voz Google Assistant, códigos de acceso y llave física',
        stock: 6,
        destacado: true
    },
    {
        id: 'philips-wifi-keypad-lock',
        nombre: 'Philips WiFi Keypad Door Lock with Handle',
        precio: 899000,
        precioOriginal: 1199000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cerraduras',
        marca: 'Philips',
        imagen: 'https://m.media-amazon.com/images/I/71Zf7Sa08SL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/71Zf7Sa08SL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71Zf7Sa08SL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71Zf7Sa08SL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Cerradura WiFi con teclado, lector de huellas 0.3s, manija incluida y control por voz',
        stock: 8,
        destacado: true
    },

    // Accesorios Inteligentes - Cámaras
    {
        id: 'google-nest-cam',
        nombre: 'Google Nest Cam Outdoor or Indoor',
        precio: 599000,
        precioOriginal: 799000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cámaras',
        marca: 'Google',
        imagen: 'https://m.media-amazon.com/images/I/31750hI5MLL._AC_SL1080_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/31750hI5MLL._AC_SL1080_.jpg',
            'https://m.media-amazon.com/images/I/31750hI5MLL._AC_SL1080_.jpg',
            'https://m.media-amazon.com/images/I/31750hI5MLL._AC_SL1080_.jpg'
        ],
        descripcionCorta: 'Cámara inteligente 1080p HDR con batería, detección de personas/animales/vehículos y 3 horas de historial gratis',
        descripcionLarga: 'La Nest Cam (exterior o interior) funciona con batería, por lo que puedes colocarla donde la necesites, no solo donde haya un enchufe cercano. Sabe diferenciar entre personas, animales y vehículos, enviándote las alertas que realmente importan. Con HDR y visión nocturna, obtendrás una imagen clara bajo cualquier condición de luz.',
        stock: 20,
        destacado: true,
        especificaciones: {
            "Resolución de Video": "1080p HDR a 30 FPS",
            "Visión Nocturna": "Hasta 6 metros de alcance",
            "Campo de Visión": "Diagonal de 130°",
            "Resistencia": "IP54 (Resistente a la intemperie)",
            "Audio": "Altavoz y micrófono de alta calidad, audio bidireccional",
            "Batería": "6000 mAh recargable (hasta 6 meses de duración)",
            "Conectividad": "WiFi 802.11b/g/n (2.4GHz)",
            "Seguridad": "Encriptación AES de 128 bits"
        }
    },
    {
        id: 'google-nest-doorbell',
        nombre: 'Google Nest Doorbell',
        precio: 749000,
        precioOriginal: 999000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cámaras',
        marca: 'Google',
        imagen: 'https://m.media-amazon.com/images/I/51z4-jHiLuL._AC_SL1500_.jpg',
        imagenes: [
            'https://m.media-amazon.com/images/I/51z4-jHiLuL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51z4-jHiLuL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51z4-jHiLuL._AC_SL1500_.jpg'
        ],
        descripcionCorta: 'Timbre inteligente con video 2K HDR, Gemini AI, visión nocturna y campo de visión de 166°',
        stock: 12,
        destacado: true,
        especificaciones: {
            "Resolución": "Video HD 960 x 1280 píxeles, hasta 30 FPS",
            "Visión Nocturna": "LEDs infrarrojos de 850 nm",
            "Campo de Visión": "145° diagonal",
            "Sensores": "Sensor PIR (proximidad y movimiento)",
            "Audio": "Audio bidireccional con cancelación de ruido",
            "Dimensiones": "46 mm x 160 mm x 24.1 mm",
            "Peso": "206 g"
        }
    },

];

export const categorias = ['Altavoces Inteligentes', 'Dispositivos Streaming', 'Accesorios Inteligentes'] as const;
export const marcas = ['Amazon', 'Google', 'TP-Link', 'Philips', 'Sonoff', 'Govee', 'Yale', 'August', 'Ultraloq', 'Ring', 'Ecobee', 'Sengled', 'Wyze'] as const;
