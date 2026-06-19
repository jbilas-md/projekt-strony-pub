"use client";
import { useState, useRef, useEffect } from "react";
import { useAccessibility } from "./AccessibilityProvider";

export default function AccessibilityMenu() {
    const [isOpen, setIsOpen] = useState(false);
    // Pobieramy stany z naszego Providera
    const { 
        highContrast, toggleHighContrast, 
        largeText, toggleLargeText, 
        highlightLinks, toggleHighlightLinks 
    } = useAccessibility();
    
    const menuRef = useRef<HTMLDivElement>(null);

    // Automatyczne zamykanie menu po kliknięciu poza nim
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            {/* Przycisk otwierający menu (Twoja ikona z dodanym onClick) */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                title="Dostępność" 
                className="block p-2 text-nova-dark hover:text-nova-blue transition-colors focus:outline-none focus:ring-2 focus:ring-nova-blue rounded"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </button>

            {/* Rozwijane okienko z opcjami */}
            {isOpen && (
                <div className="fixed right-4 top-20 w-[min(18rem,calc(100vw-1rem))] bg-white border border-gray-200 shadow-xl rounded-lg z-50 p-4">
                    <h3 className="text-sm font-bold text-gray-800 mb-3 border-b pb-2">Narzędzia dostępności</h3>
                    
                    <div className="space-y-4">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={highContrast} 
                                onChange={toggleHighContrast}
                                className="w-5 h-5 accent-nova-blue rounded cursor-pointer"
                            />
                            <span className="text-sm font-medium text-gray-700">Wysoki kontrast</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={largeText} 
                                onChange={toggleLargeText}
                                className="w-5 h-5 accent-nova-blue rounded cursor-pointer"
                            />
                            <span className="text-sm font-medium text-gray-700">Większy tekst</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={highlightLinks} 
                                onChange={toggleHighlightLinks}
                                className="w-5 h-5 accent-nova-blue rounded cursor-pointer"
                            />
                            <span className="text-sm font-medium text-gray-700">Podkreśl linki</span>
                        </label>
                    </div>
                </div>
            )}
        </div>
    );
}