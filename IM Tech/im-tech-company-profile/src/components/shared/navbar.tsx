'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';


const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans',
                isScrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className={cn(
                        'flex items-center gap-2 font-bold text-3xl transition-colors',
                        isScrolled ? 'text-gray-900' : 'text-white'
                    )}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span>IM Tech</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className={cn(
                                'text-[16px] font-medium transition-colors hover:text-[#00AAFF]',
                                isScrolled ? 'text-black' : 'text-white'
                            )}
                        >
                            {link.label}
                        </button>
                    ))}
                    <Button
                        onClick={() => scrollToSection('#contact')}
                        className={cn(
                            "rounded-md px-6 py-5 text-sm font-bold transition-all",
                            isScrolled
                                ? "bg-black text-white hover:bg-gray-800"
                                : "bg-white text-black hover:bg-gray-100"
                        )}
                    >
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                isScrolled ? 'text-gray-900' : 'text-white'
                            )}
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                        <VisuallyHidden>
                            <SheetTitle>Menu</SheetTitle>
                        </VisuallyHidden>

                        <div className="flex flex-col gap-6 mt-12">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-lg font-light text-gray-800 hover:text-[#00AAFF] text-left transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <Button
                                onClick={() => scrollToSection('#contact')}
                                className="bg-black hover:bg-gray-800 text-white rounded-md w-full py-6 mt-4"
                            >
                                Get Started
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
