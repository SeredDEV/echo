import { getAssetUrl } from "../../utils/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900">
      {/* Newsletter Section con color principal de marca */}
      <div className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#4DE2E5] to-[#94D6EA] rounded-3xl p-6 md:p-12 text-white shadow-2xl text-center">
            <div className="inline-block mb-2 md:mb-4">
              <span className="text-3xl md:text-5xl">📬</span>
            </div>
            <h3 className="text-xl md:text-4xl font-display font-bold mb-2 md:mb-4 text-white">
              ¡No te pierdas nuestras ofertas!
            </h3>
            <p className="mb-4 md:mb-8 text-white text-sm md:text-lg">
              Suscríbete y recibe descuentos exclusivos, nuevos productos y
              novedades tecnológicas
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 md:px-6 md:py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white shadow-lg text-sm md:text-base"
              />
              <button className="bg-white text-[#0FA6D1] font-bold px-6 py-2 md:px-8 md:py-4 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base">
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - con colores de marca */}
      <div className="bg-[#F7F5F2] py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mb-4 md:mb-12">
              {/* Company Info */}
              <div className="md:col-span-1">
                <img
                  src="/assets/logo/logo.png"
                  alt="Echo Tecnología"
                  className="h-16 md:h-28 w-auto mb-3 md:mb-6"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const textLogo = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (textLogo) textLogo.style.display = "block";
                  }}
                />
                <h4 className="text-2xl font-display font-bold mb-4 text-[#0FA6D1] hidden">
                  Echo Tecnología
                </h4>
                <p className="text-[#959595] leading-relaxed mb-3 md:mb-6 text-xs md:text-base">
                  Tu tienda de confianza para dispositivos inteligentes y
                  tecnología del hogar.
                </p>
                {/* Social Media */}
                <div className="flex gap-2 md:gap-3">
                  <a
                    href="https://www.instagram.com/echo_tecnologiaencasa/?igsh=MW1vdGE4b3VlMHNxOQ%3D%3D#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#0FA6D1] to-[#5EA4CF] hover:from-[#0d8bb5] hover:to-[#4d8fb8] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.link/78epdb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Customer Service */}
              <div>
                <h4 className="text-sm md:text-lg font-bold mb-3 md:mb-6 text-[#0FA6D1]">
                  Atención al Cliente
                </h4>
                <div className="space-y-2 md:space-y-4 text-[#959595]">
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#0FA6D1] mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs md:text-sm text-gray-500 font-semibold">
                        Email
                      </p>
                      <a
                        href="mailto:sacechotecnologia@gmail.com"
                        className="hover:text-[#0FA6D1] transition-colors text-[10px] md:text-sm break-words block"
                      >
                        sacechotecnologia@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#25D366] mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <div>
                      <p className="text-xs md:text-sm text-gray-500 font-semibold">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.link/78epdb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#25D366] transition-colors text-xs md:text-sm"
                      >
                        +57 320 7548718
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information */}
              <div>
                <h4 className="text-sm md:text-lg font-bold mb-3 md:mb-6 text-[#0FA6D1]">
                  Información
                </h4>
                <ul className="space-y-2 md:space-y-3 text-[#959595]">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#0FA6D1] transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm"
                    >
                      <span className="text-[#0FA6D1]">→</span>
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#0FA6D1] transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm"
                    >
                      <span className="text-[#0FA6D1]">→</span>
                      Envío y Pago
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#0FA6D1] transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm"
                    >
                      <span className="text-[#0FA6D1]">→</span>
                      Devoluciones
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#0FA6D1] transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm"
                    >
                      <span className="text-[#0FA6D1]">→</span>
                      Términos y Condiciones
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#0FA6D1] transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm"
                    >
                      <span className="text-[#0FA6D1]">→</span>
                      PQRS
                    </a>
                  </li>
                </ul>
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="text-sm md:text-lg font-bold mb-3 md:mb-6 text-[#0FA6D1]">
                  Métodos de Pago
                </h4>
                <div className="space-y-2 md:space-y-4">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <div className="bg-white border-2 border-[#0FA6D1] rounded-lg px-2 md:px-4 py-1 md:py-2 shadow-md">
                      <span className="font-bold text-[#1A1F71] text-xs md:text-base">
                        VISA
                      </span>
                    </div>
                    <div className="bg-white border-2 border-[#0FA6D1] rounded-lg px-2 md:px-4 py-1 md:py-2 shadow-md">
                      <span className="font-bold text-[#EB001B] text-xs md:text-base">
                        Mastercard
                      </span>
                    </div>
                  </div>
                  <p className="text-[#959595] text-xs md:text-sm">
                    💳 Pagos 100% seguros
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300 pt-2 md:pt-8 mt-2 md:mt-8 pb-2 md:pb-0">
              <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-4 text-center md:text-left">
                <p className="text-[#959595] text-[10px] md:text-sm">
                  © 2024{" "}
                  <span className="text-gray-900 font-semibold">
                    Echo Tecnología
                  </span>
                  . Todos los derechos reservados.
                </p>
                <p className="text-[#959595] text-[10px] md:text-sm">
                  Hecho con ❤️ en Colombia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
