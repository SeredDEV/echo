import React, { useState, useEffect } from "react";

const offers = [
  {
    icon: "🚚 ",
    text: "Envío GRATIS en todos los pedidos - Compra sin preocupaciones",
  },
  {
    icon: "💰 ",
    text: "Paga al recibir - Seguridad total en tu compra",
  },
  {
    icon: "🎁 ",
    text: "Descuentos especiales en productos seleccionados - Hasta 30% OFF",
  },
  {
    icon: "🔄 ",
    text: "Devolución GRATIS hasta 30 días - Garantía de satisfacción",
  },
  {
    icon: "⚡ ",
    text: "Ofertas relámpago disponibles - No te las pierdas",
  },
];

const BannerOfertasHeader: React.FC = () => {
  const [active, setActive] = useState(0);
  
  const effects = [
    'slideInLeft',
    'slideInRight', 
    'zoomIn',
    'bounceIn',
    'fadeInUp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="gradient-bg text-white py-3 text-center text-sm font-medium relative z-50 min-h-[44px]"
      style={{ minHeight: '44px' }}
    >
      <div className="container mx-auto px-4 flex items-center justify-center gap-4 h-full">
        <span 
          key={active}
          className="inline-block"
          style={{ animation: `${effects[active % effects.length]} 1s ease-in-out` }}
        >
          {offers[active].icon}{offers[active].text}
        </span>
      </div>
      <style>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes zoomIn {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default BannerOfertasHeader;
