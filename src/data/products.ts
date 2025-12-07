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

export const products: Product[] = [
    // Altavoces Inteligentes
    {
        id: 'alexa-echo-dot-5',
        nombre: 'Amazon Echo Dot (5ta Gen)',
        precio: 189000,
        precioOriginal: 249000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=400',
        descripcion: 'Altavoz inteligente con Alexa, sonido mejorado y control de hogar inteligente',
        stock: 15,
        destacado: true
    },
    {
        id: 'alexa-echo-4',
        nombre: 'Amazon Echo (4ta Gen)',
        precio: 349000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400',
        descripcion: 'Altavoz inteligente premium con sonido de alta calidad y Alexa integrado',
        stock: 8,
        destacado: true
    },
    {
        id: 'alexa-echo-show-8',
        nombre: 'Amazon Echo Show 8',
        precio: 549000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Amazon',
        imagen: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
        descripcion: 'Pantalla inteligente de 8" con Alexa, cámara HD y control de hogar',
        stock: 5
    },
    {
        id: 'google-nest-mini',
        nombre: 'Google Nest Mini',
        precio: 159000,
        precioOriginal: 199000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Google',
        imagen: 'https://images.unsplash.com/photo-1507646871582-1f3be8a0b78e?w=400',
        descripcion: 'Altavoz inteligente compacto con Google Assistant',
        stock: 20,
        destacado: true
    },
    {
        id: 'google-nest-audio',
        nombre: 'Google Nest Audio',
        precio: 329000,
        categoria: 'Altavoces Inteligentes',
        marca: 'Google',
        imagen: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
        descripcion: 'Altavoz inteligente con sonido potente y Google Assistant',
        stock: 12
    },

    // Dispositivos Streaming
    {
        id: 'fire-tv-stick-4k',
        nombre: 'Amazon Fire TV Stick 4K',
        precio: 229000,
        precioOriginal: 279000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400',
        descripcion: 'Streaming 4K HDR con Alexa Voice Remote',
        stock: 25,
        destacado: true
    },
    {
        id: 'fire-tv-stick-lite',
        nombre: 'Amazon Fire TV Stick Lite',
        precio: 149000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400',
        descripcion: 'Streaming Full HD con control remoto Alexa Lite',
        stock: 30
    },
    {
        id: 'fire-tv-cube',
        nombre: 'Amazon Fire TV Cube',
        precio: 449000,
        categoria: 'Dispositivos Streaming',
        marca: 'Amazon',
        imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400',
        descripcion: 'Streaming 4K con control por voz manos libres',
        stock: 6
    },
    {
        id: 'chromecast-google-tv',
        nombre: 'Chromecast con Google TV',
        precio: 269000,
        categoria: 'Dispositivos Streaming',
        marca: 'Google',
        imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400',
        descripcion: 'Streaming 4K HDR con Google TV y control remoto',
        stock: 18,
        destacado: true
    },
    {
        id: 'chromecast-hd',
        nombre: 'Chromecast HD',
        precio: 179000,
        categoria: 'Dispositivos Streaming',
        marca: 'Google',
        imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400',
        descripcion: 'Streaming Full HD con Google TV',
        stock: 22
    },

    // Accesorios Inteligentes - Bombillos
    {
        id: 'philips-hue-color',
        nombre: 'Philips Hue Color A19',
        precio: 189000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'Philips',
        imagen: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400',
        descripcion: 'Bombillo LED RGB inteligente, 16 millones de colores',
        stock: 40,
        destacado: true
    },
    {
        id: 'philips-hue-white',
        nombre: 'Philips Hue White A19',
        precio: 89000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'Philips',
        imagen: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400',
        descripcion: 'Bombillo LED blanco inteligente regulable',
        stock: 50
    },
    {
        id: 'tp-link-tapo-l530',
        nombre: 'TP-Link Tapo L530E',
        precio: 79000,
        precioOriginal: 99000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'TP-Link',
        imagen: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400',
        descripcion: 'Bombillo LED RGB WiFi multicolor',
        stock: 35,
        destacado: true
    },

    // Accesorios Inteligentes - Tomacorrientes
    {
        id: 'tp-link-tapo-p100',
        nombre: 'TP-Link Tapo P100',
        precio: 49000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Tomacorrientes',
        marca: 'TP-Link',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Enchufe inteligente WiFi con control por app',
        stock: 60
    },
    {
        id: 'tp-link-tapo-p110',
        nombre: 'TP-Link Tapo P110',
        precio: 69000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Tomacorrientes',
        marca: 'TP-Link',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Enchufe inteligente con monitoreo de energía',
        stock: 45,
        destacado: true
    },
    {
        id: 'amazon-smart-plug',
        nombre: 'Amazon Smart Plug',
        precio: 89000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Tomacorrientes',
        marca: 'Amazon',
        imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        descripcion: 'Enchufe inteligente compatible con Alexa',
        stock: 38
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
        nombre: 'Govee LED Strip 5m',
        precio: 119000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Cintas LED',
        marca: 'Govee',
        imagen: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400',
        descripcion: 'Tira LED RGB WiFi con control por app',
        stock: 32
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
    {
        id: 'sengled-smart-bulb',
        nombre: 'Sengled Smart Bulb A19',
        precio: 49000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'Sengled',
        imagen: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400',
        descripcion: 'Bombillo LED blanco inteligente económico',
        stock: 55
    },
    {
        id: 'wyze-bulb-color',
        nombre: 'Wyze Bulb Color',
        precio: 69000,
        categoria: 'Accesorios Inteligentes',
        subcategoria: 'Bombillos',
        marca: 'Wyze',
        imagen: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400',
        descripcion: 'Bombillo LED RGB WiFi económico',
        stock: 48
    }
];

export const categorias = ['Altavoces Inteligentes', 'Dispositivos Streaming', 'Accesorios Inteligentes'] as const;
export const marcas = ['Amazon', 'Google', 'TP-Link', 'Philips', 'Sonoff', 'Govee', 'Yale', 'August', 'Ultraloq', 'Ring', 'Ecobee', 'Sengled', 'Wyze'] as const;
