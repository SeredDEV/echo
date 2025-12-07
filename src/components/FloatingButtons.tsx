import { useState } from 'react';

const FloatingButtons = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: '¡Hola! 👋 Soy tu asistente virtual de Echo Tecnología. ¿En qué puedo ayudarte hoy?',
            time: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        // Add user message
        const userMessage = {
            type: 'user',
            text: inputMessage,
            time: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, userMessage]);

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                type: 'bot',
                text: getBotResponse(inputMessage),
                time: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);

        setInputMessage('');
    };

    const getBotResponse = (message: string) => {
        const lowerMessage = message.toLowerCase();

        if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cuanto')) {
            return 'Nuestros productos tienen precios muy competitivos. ¿Te gustaría que un asesor te contacte para darte información detallada sobre algún producto en específico?';
        } else if (lowerMessage.includes('envio') || lowerMessage.includes('envío') || lowerMessage.includes('entrega')) {
            return '¡Tenemos envío gratis! 🚛 Realizamos entregas a nivel nacional. El tiempo de entrega varía según tu ubicación, generalmente entre 2-5 días hábiles.';
        } else if (lowerMessage.includes('pago') || lowerMessage.includes('pagar')) {
            return 'Aceptamos múltiples métodos de pago: tarjetas de crédito/débito (Visa, Mastercard) y ¡puedes pagar al recibir! 💳';
        } else if (lowerMessage.includes('alexa') || lowerMessage.includes('echo') || lowerMessage.includes('altavoz')) {
            return 'Tenemos una gran variedad de altavoces inteligentes Echo con Alexa. ¿Te gustaría conocer más sobre algún modelo en particular?';
        } else if (lowerMessage.includes('streaming') || lowerMessage.includes('fire') || lowerMessage.includes('chromecast')) {
            return 'Contamos con dispositivos de streaming como Fire TV Stick y Chromecast. ¡Perfectos para convertir tu TV en smart TV! 📺';
        } else if (lowerMessage.includes('hola') || lowerMessage.includes('buenos') || lowerMessage.includes('buenas')) {
            return '¡Hola! 😊 Estoy aquí para ayudarte. ¿Tienes alguna pregunta sobre nuestros productos o servicios?';
        } else if (lowerMessage.includes('gracias')) {
            return '¡De nada! 😊 ¿Hay algo más en lo que pueda ayudarte?';
        } else {
            return 'Gracias por tu mensaje. Para una atención más personalizada, te recomiendo contactarnos por WhatsApp o puedes explorar nuestro catálogo de productos. ¿Necesitas ayuda con algo específico?';
        }
    };

    return (
        <>
            {/* Chat Popup */}
            {isChatOpen && (
                <div className="fixed bottom-28 right-6 w-96 max-w-[calc(100vw-3rem)] h-[480px] max-h-[calc(100vh-12rem)] bg-white rounded-2xl shadow-2xl z-[60] flex flex-col animate-slide-up">
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold">Asistente Echo</h3>
                                <p className="text-xs text-white/80">En línea</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsChatOpen(false)}
                            className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                                    <div
                                        className={`rounded-2xl px-4 py-2 ${message.type === 'user'
                                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                            : 'bg-white text-gray-800 shadow-sm'
                                            }`}
                                    >
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1 px-2">{message.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
                        <div className="flex gap-2 items-center">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Escribe tu mensaje..."
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                            />
                            <button
                                type="submit"
                                disabled={!inputMessage.trim()}
                                className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Floating Buttons */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
                {/* AI Assistant Button */}
                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="group relative w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                    aria-label="Asistente IA"
                >
                    {/* Tooltip */}
                    {!isChatOpen && (
                        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Asistente IA
                        </span>
                    )}

                    {/* AI Icon */}
                    {isChatOpen ? (
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    )}

                    {/* Pulse Animation */}
                    {!isChatOpen && <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20"></span>}
                </button>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.link/78epdb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                    aria-label="WhatsApp"
                >
                    {/* Tooltip */}
                    <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Chatea con nosotros
                    </span>

                    {/* WhatsApp Icon */}
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>

                    {/* Pulse Animation */}
                    <span className="absolute inset-0 rounded-full bg-green-300 animate-ping opacity-20"></span>
                </a>
            </div>
        </>
    );
};

export default FloatingButtons;
