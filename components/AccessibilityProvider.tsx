"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Definiujemy, jakie dane będziemy przechowywać
type AccessibilityContextType = {
    highContrast: boolean;
    toggleHighContrast: () => void;
    largeText: boolean;
    toggleLargeText: () => void;
    highlightLinks: boolean;
    toggleHighlightLinks: () => void;
};

// Tworzymy kontekst
const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
    const [highContrast, setHighContrast] = useState(false);
    const [largeText, setLargeText] = useState(false);
    const [highlightLinks, setHighlightLinks] = useState(false);

    // Krok A: Pobieranie zapisanych ustawień przy ładowaniu strony
    useEffect(() => {
        setHighContrast(localStorage.getItem("wcag-highContrast") === "true");
        setLargeText(localStorage.getItem("wcag-largeText") === "true");
        setHighlightLinks(localStorage.getItem("wcag-highlightLinks") === "true");
    }, []);

    // Krok B: Funkcje przełączające opcje i zapisujące je w pamięci przeglądarki
    const toggleHighContrast = () => {
        setHighContrast((prev) => {
            const newVal = !prev;
            localStorage.setItem("wcag-highContrast", String(newVal));
            return newVal;
        });
    };

    const toggleLargeText = () => {
        setLargeText((prev) => {
            const newVal = !prev;
            localStorage.setItem("wcag-largeText", String(newVal));
            return newVal;
        });
    };

    const toggleHighlightLinks = () => {
        setHighlightLinks((prev) => {
            const newVal = !prev;
            localStorage.setItem("wcag-highlightLinks", String(newVal));
            return newVal;
        });
    };

    // Krok C: Dodawanie klas do znacznika <html> dla pełnej kompatybilności z Safari
useEffect(() => {
    // Pobieramy element <html> zamiast <body>
    const rootElement = document.documentElement;

    if (highContrast) rootElement.classList.add("wcag-high-contrast");
    else rootElement.classList.remove("wcag-high-contrast");

    if (largeText) rootElement.classList.add("wcag-large-text");
    else rootElement.classList.remove("wcag-large-text");

    if (highlightLinks) rootElement.classList.add("wcag-highlight-links");
    else rootElement.classList.remove("wcag-highlight-links");
}, [highContrast, largeText, highlightLinks]);

    return (
        <AccessibilityContext.Provider value={{ 
            highContrast, toggleHighContrast, 
            largeText, toggleLargeText, 
            highlightLinks, toggleHighlightLinks 
        }}>
            {children}
        </AccessibilityContext.Provider>
    );
}

// Własny Hook dla łatwiejszego użycia w innych komponentach
export function useAccessibility() {
    const context = useContext(AccessibilityContext);
    if (context === undefined) {
        throw new Error("useAccessibility musi być użyte wewnątrz AccessibilityProvider");
    }
    return context;
}