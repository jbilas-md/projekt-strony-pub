"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Jeśli nie masz lucide-react: npm install lucide-react

export default function FloatingBackButton() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Link
            href="/blog"
            className={`
        fixed left-0 top-1/2 -translate-y-1/2 z-50
        flex items-center gap-3 py-4 transition-all duration-500 ease-in-out
        bg-nova-blue text-white shadow-2xl rounded-r-2xl
        ${isScrolled ? "px-3 translate-x-[-5px]" : "px-6 translate-x-0"}
        group hover:translate-x-0
      `}
        >
            <ArrowLeft size={20} className="shrink-0" />
            <span
                className={`
          font-black uppercase tracking-widest text-xs overflow-hidden transition-all duration-500
          ${isScrolled ? "max-w-0 opacity-0" : "max-w-[150px] opacity-100"}
          group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2
        `}
            >
                Powrót
            </span>
        </Link>
    );
}