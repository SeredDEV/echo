import { Link } from "react-router-dom";
import { getAssetUrl } from "../../utils/assets";

const categories = [
  {
    id: 1,
    name: "Altavoces Inteligentes",
    description: "Controla tu hogar con tu voz",
    image: getAssetUrl("assets/images/categories/altavoces.jpg"),
    link: "/tienda?categoria=altavoces",
  },
  {
    id: 2,
    name: "Dispositivos Streaming",
    description: "Entretenimiento sin límites",
    image: getAssetUrl("assets/images/categories/streaming.jpg"),
    link: "/tienda?categoria=streaming",
  },
  {
    id: 3,
    name: "Accesorios Inteligentes",
    description: "Complementa tu hogar inteligente",
    image: getAssetUrl("assets/images/categories/accesorios.jpg"),
    link: "/tienda?categoria=accesorios",
  },
];

const Categories = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 76.7C840 80 960 80 1080 73.3C1200 67 1320 53 1380 46.7L1440 40V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestra amplia gama de productos tecnológicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark overlay - only on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Title - always visible at TOP */}
              <div className="absolute top-6 left-6 right-6 z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  {category.name}
                </h3>
              </div>

              {/* Description and button - slides up from bottom on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white/95 mb-4 text-base drop-shadow-md">
                  {category.description}
                </p>
                <Link
                  to={category.link}
                  className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-lg"
                >
                  Explorar
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Categories;
