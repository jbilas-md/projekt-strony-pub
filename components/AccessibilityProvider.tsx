"use client";
import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type AccessibilityContextType = {
    highContrast: boolean;
    toggleHighContrast: () => void;
    largeText: boolean;
    toggleLargeText: () => void;
    highlightLinks: boolean;
    toggleHighlightLinks: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);
const preferenceEvent = "novamedic:accessibility-preference-change";

function subscribeToPreferences(onChange: () => void) {
    window.addEventListener("storage", onChange);
    window.addEventListener(preferenceEvent, onChange);

    return () => {
        window.removeEventListener("storage", onChange);
        window.removeEventListener(preferenceEvent, onChange);
    };
}

function readPreference(key: string) {
    return localStorage.getItem(key) === "true";
}

function writePreference(key: string, value: boolean) {
    localStorage.setItem(key, String(value));
    window.dispatchEvent(new Event(preferenceEvent));
}

function usePreference(key: string) {
    return useSyncExternalStore(
        subscribeToPreferences,
        () => readPreference(key),
        () => false,
    );
}

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
    const highContrast = usePreference("wcag-highContrast");
    const largeText = usePreference("wcag-largeText");
    const highlightLinks = usePreference("wcag-highlightLinks");

    const toggleHighContrast = () => writePreference("wcag-highContrast", !highContrast);
    const toggleLargeText = () => writePreference("wcag-largeText", !largeText);
    const toggleHighlightLinks = () => writePreference("wcag-highlightLinks", !highlightLinks);

    useEffect(() => {
        const rootElement = document.documentElement;
        rootElement.classList.toggle("wcag-high-contrast", highContrast);
        rootElement.classList.toggle("wcag-large-text", largeText);
        rootElement.classList.toggle("wcag-highlight-links", highlightLinks);
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

export function useAccessibility() {
    const context = useContext(AccessibilityContext);
    if (context === undefined) {
        throw new Error("useAccessibility musi być użyte wewnątrz AccessibilityProvider");
    }
    return context;
}