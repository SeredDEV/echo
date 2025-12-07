export interface Product {
    id: string;
    nombre: string;
    precio: number;
    precioOriginal?: number;
    categoria: 'Altavoces Inteligentes' | 'Dispositivos Streaming' | 'Accesorios Inteligentes';
    subcategoria?: string; // Bombillos, Tomacorrientes, Apagadores, Cintas LED, Cerraduras, etc.
    marca: string;
    imagen: string;
    descripcion: string;
    stock: number;
    destacado?: boolean;
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
        descripcion: 'Altavoz inteligente compacto con Alexa, sonido mejorado y control de hogar inteligente',
        stock: 15,
        destacado: true
    },
    {
        id: 'alexa-echo-dot-max',
        nombre: 'Amazon Echo Dot Max',
        precio: 259000,
        precioOriginal: 319000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/71L5oPwxV7L._AC_SY879_.jpg',
        descripcion: 'Echo Dot con audio mejorado, sensor de temperatura y luz ambiental, control de hogar inteligente con Alexa',
        stock: 12,
        destacado: true
    },
    {
        id: 'alexa-echo-pop',
        nombre: 'Amazon Echo Pop',
        precio: 139000,
        precioOriginal: 189000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61V5FRUgX8L._AC_SX679_.jpg',
        descripcion: 'Altavoz inteligente compacto con Alexa, diseño moderno y sonido direccional frontal',
        stock: 25,
        destacado: true
    },
    {
        id: 'alexa-echo-show-8',
        nombre: 'Amazon Echo Show 8',
        precio: 549000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/511tpdYUF5L._AC_SY879_.jpg',
        descripcion: 'Pantalla inteligente de 8" HD con Alexa, cámara de 13MP con auto-framing y audio espacial',
        stock: 5
    },
    {
        id: 'alexa-echo-spot',
        nombre: 'Amazon Echo Spot',
        precio: 349000,
        precioOriginal: 429000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/71-DxWvydgL._AC_SY879_.jpg',
        descripcion: 'Reloj despertador inteligente con pantalla táctil de 2.83", Alexa integrado y audio de alta definición',
        stock: 10,
        destacado: true
    },
    {
        id: 'alexa-echo-show-5',
        nombre: 'Amazon Echo Show 5',
        precio: 399000,
        precioOriginal: 499000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61ejdlU79CL._AC_SX679_.jpg',
        descripcion: 'Pantalla inteligente compacta de 5.5" con Alexa, cámara de 2MP y control de hogar inteligente',
        stock: 14,
        destacado: true
    },
    {
        id: 'alexa-echo-show-11',
        nombre: 'Amazon Echo Show 11',
        precio: 1299000,
        precioOriginal: 1599000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61CJ-NSuTxL._AC_SL1500_.jpg',
        descripcion: 'Pantalla inteligente premium de 10.95" Full HD con cámara de 13MP, auto-framing y audio espacial de alta calidad',
        stock: 6,
        destacado: true
    },
    {
        id: 'alexa-echo-show-15',
        nombre: 'Amazon Echo Show 15',
        precio: 1499000,
        precioOriginal: 1899000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61xQl81iYQL._AC_SY879_.jpg',
        descripcion: 'Pantalla inteligente de 15.6" Full HD con orientación ajustable, cámara de 13MP y audio premium para toda la familia',
        stock: 4,
        destacado: true
    },
    {
        id: 'alexa-echo-show-21',
        nombre: 'Amazon Echo Show 21',
        precio: 1899000,
        precioOriginal: 2399000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61tzmVXXOWL._AC_SL1500_.jpg',
        descripcion: 'Pantalla inteligente premium de 21" Full HD con cámara de 13MP, audio espacial de alta calidad y control total del hogar',
        stock: 3,
        destacado: true
    },
    {
        id: 'google-nest-mini',
        nombre: 'Google Nest Mini',
        precio: 159000,
        precioOriginal: 199000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Google',
        imagen: 'https://m.media-amazon.com/images/I/71TeLBggnwL._AC_SX679_.jpg',
        descripcion: 'Altavoz inteligente compacto con Google Assistant, sonido mejorado y control por voz',
        stock: 20,
        destacado: true
    },
    {
        id: 'google-nest-audio',
        nombre: 'Google Nest Audio',
        precio: 329000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Google',
        imagen: 'https://m.media-amazon.com/images/I/41Puf30CmvL._AC_.jpg',
        descripcion: 'Altavoz inteligente con sonido potente, woofer y tweeter, Google Assistant integrado',
        stock: 12
    },
    {
        id: 'alexa-echo-studio',
        nombre: 'Amazon Echo Studio',
        precio: 899000,
        precioOriginal: 1099000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/71DklMv-8+L._AC_SL1500_.jpg',
        descripcion: 'Altavoz inteligente premium con audio espacial 3D, Dolby Atmos, y 5 altavoces direccionales para sonido inmersivo de alta fidelidad',
        stock: 8,
        destacado: true
    },
    {
        id: 'alexa-echo-auto',
        nombre: 'Amazon Echo Auto',
        precio: 199000,
        precioOriginal: 249000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/41MD7quzjPL._AC_SL1000_.jpg',
        descripcion: 'Alexa para tu auto con 5 micrófonos, conexión Bluetooth y carga rápida',
        stock: 15,
        destacado: true
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
        descripcion: 'Streaming 4K Ultra HD con Alexa Voice Remote, Dolby Vision y HDR10+',
        stock: 25,
        destacado: true
    },
    {
        id: 'fire-tv-stick-4k-plus',
        nombre: 'Amazon Fire TV Stick 4K Plus',
        precio: 279000,
        precioOriginal: 349000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/51WtNy0OxLL._AC_SL1500_.jpg',
        descripcion: 'Streaming 4K Ultra HD premium con WiFi 6, Dolby Atmos y control remoto Alexa Voice mejorado',
        stock: 15,
        destacado: true
    },
    {
        id: 'fire-tv-stick-4k-max',
        nombre: 'Amazon Fire TV Stick 4K Max',
        precio: 319000,
        precioOriginal: 399000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61KoIgcXSKL._AC_SL1500_.jpg',
        descripcion: 'Streaming 4K Ultra HD de alto rendimiento con WiFi 6E, procesador quad-core y Alexa Voice Remote Enhanced',
        stock: 12,
        destacado: true
    },
    {
        id: 'fire-tv-stick-hd',
        nombre: 'Amazon Fire TV Stick HD',
        precio: 149000,
        precioOriginal: 189000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://m.media-amazon.com/images/I/61nyRfbgaLL._AC_SL1500_.jpg',
        descripcion: 'Streaming HD con Alexa Voice Remote, 1080p y control por voz',
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
        descripcion: 'Streaming 4K Ultra HD con control por voz manos libres, procesador octa-core y WiFi 6E',
        stock: 6
    },
    {
        id: 'google-tv-streamer-4k',
        nombre: 'Google TV Streamer 4K',
        precio: 379000,
        precioOriginal: 459000,
        categoria: 'Dispositivos Streaming',
        marca: 'Google',
        imagen: 'https://m.media-amazon.com/images/I/510wm50VDHL._AC_SL1500_.jpg',
        descripcion: 'Streaming 4K con Google Assistant, rendimiento rápido y recomendaciones personalizadas',
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
        descripcion: 'Streaming 4K HDR con Google TV, control remoto y recomendaciones personalizadas',
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
        descripcion: 'Tomacorriente inteligente de pared con 2 enchufes controlables, control por voz y app Kasa',
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
        descripcion: 'Enchufe inteligente con monitoreo de energía en tiempo real, WiFi y Bluetooth, control por voz',
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
        descripcion: 'Enchufe inteligente WiFi y Bluetooth, control por voz, programación y control grupal',
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
        descripcion: 'Tomacorriente inteligente de pared con certificación Matter, monitoreo de energía y prevención de sobrecarga',
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
        descripcion: 'Enchufe inteligente mini WiFi y Bluetooth, control por voz, diseño compacto y certificación ETL/FCC',
        stock: 50,
        destacado: true
    },

    // Accesorios Inteligentes - Apagadores
    {
        id: 'tp-link-tapo-s500',
        nombre: 'TP-Link Tapo S500',
        precio: 129000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Apagadores',
        marca: 'TP-Link',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Interruptor inteligente WiFi touch',
        stock: 25
    },
    {
        id: 'sonoff-mini',
        nombre: 'Sonoff Mini R2',
        precio: 59000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Apagadores',
        marca: 'Sonoff',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Interruptor inteligente WiFi compacto',
        stock: 42
    },

    // Accesorios Inteligentes - Cintas LED
    {
        id: 'philips-hue-lightstrip',
        nombre: 'Philips Hue Lightstrip Plus',
        precio: 299000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cintas LED',
        marca: 'Philips',
        imagen: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400',
        descripcion: 'Tira LED RGB inteligente 2m, extensible',
        stock: 15,
        destacado: true
    },
    {
        id: 'tp-link-tapo-l900',
        nombre: 'TP-Link Tapo L900-5',
        precio: 149000,
        precioOriginal: 189000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cintas LED',
        marca: 'TP-Link',
        imagen: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400',
        descripcion: 'Tira LED RGB WiFi 5m con sincronización musical',
        stock: 28
    },
    {
        id: 'govee-led-strip',
        nombre: 'Govee Bombillos Inteligentes',
        precio: 119000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'Govee',
        imagen: 'https://m.media-amazon.com/images/I/51sixdfNb4L._AC_SL1500_.jpg',
        descripcion: 'Bombillos LED RGB WiFi con 16 millones de colores, sincronización musical y control por voz',
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
        descripcion: 'Bombillos LED WiFi con 16 millones de colores, compatible con Alexa y Google Home, certificación Matter',
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
        descripcion: 'Bombillo LED inteligente con control por voz Alexa, 16 colores preestablecidos y configuración simple',
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
        descripcion: 'Bombillo LED multicolor con 16 millones de colores, monitoreo de energía y control por voz',
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
        descripcion: 'Bombillo LED inteligente con millones de colores, control por voz y compatibilidad con Alexa, Google y Apple Home',
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
        descripcion: 'Bombillos LED WiFi con 16 millones de colores, modo despertar y control por voz con Alexa y Google',
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
        descripcion: 'Bombillos LED con millones de colores, certificación Matter y control por voz con Alexa, Google y Apple Home',
        stock: 35,
        destacado: true
    },

    // Accesorios Inteligentes - Cerraduras
    {
        id: 'yale-assure-lock',
        nombre: 'Yale Assure Lock SL',
        precio: 899000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cerraduras',
        marca: 'Yale',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Cerradura inteligente con teclado táctil',
        stock: 8,
        destacado: true
    },
    {
        id: 'august-smart-lock',
        nombre: 'August Smart Lock Pro',
        precio: 749000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cerraduras',
        marca: 'August',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Cerradura inteligente con WiFi integrado',
        stock: 6
    },
    {
        id: 'ultraloq-u-bolt',
        nombre: 'Ultraloq U-Bolt Pro',
        precio: 649000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cerraduras',
        marca: 'Ultraloq',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Cerradura inteligente 6 en 1 con huella',
        stock: 10
    },

    // Más productos variados
    {
        id: 'ring-video-doorbell',
        nombre: 'Ring Video Doorbell',
        precio: 449000,
        categoria: 'Accesorios Inteligentes',
        marca: 'Ring',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Timbre inteligente con video HD y detección de movimiento',
        stock: 14
    },
    {
        id: 'tp-link-kasa-cam',
        nombre: 'TP-Link Kasa Spot KC100',
        precio: 179000,
        categoria: 'Accesorios Inteligentes',
        marca: 'TP-Link',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Cámara de seguridad WiFi 1080p',
        stock: 22
    },
    {
        id: 'nest-thermostat',
        nombre: 'Google Nest Thermostat',
        precio: 549000,
        categoria: 'Accesorios Inteligentes',
        marca: 'Google',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Termostato inteligente programable',
        stock: 12
    },
    {
        id: 'ecobee-smartthermostat',
        nombre: 'Ecobee SmartThermostat',
        precio: 699000,
        categoria: 'Accesorios Inteligentes',
        marca: 'Ecobee',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Termostato inteligente con Alexa integrado',
        stock: 9
    },


];

export const categorias = ['Altavoces Inteligentes', 'Dispositivos Streaming', 'Accesorios Inteligentes'] as const;
export const marcas = ['Amazon', 'Google', 'TP-Link', 'Philips', 'Sonoff', 'Govee', 'Yale', 'August', 'Ultraloq', 'Ring', 'Ecobee', 'Sengled', 'Wyze'] as const;
