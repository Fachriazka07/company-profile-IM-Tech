'use client';

import { Button } from '@/components/ui/button';

export function Hero() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center p-6"
        >
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/hero-bg.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 container mx-auto text-center text-white">
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight">
                        Solusi Digital untuk Web dan Mobile App Bisnismu
                    </h1>
                    <p className="text-lg md:text-xl font-medium text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        I’M Tech Solution bantu bisnis anda tampil
                        profesional lewat website dan aplikasi mobile yang cepat aman
                        dan user friendly dari ide sampai launch
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
                        <Button
                            onClick={() => scrollToSection('#contact')}
                            className="bg-white hover:bg-gray-100 text-black font-semibold text-base px-8 py-7 rounded-sm min-w-[200px]"
                        >
                            Mulai Proyek Anda
                        </Button>
                        <Button
                            onClick={() => scrollToSection('#contact')}
                            variant="outline"
                            className="border-white/50 bg-black/20 text-white hover:bg-white hover:text-black font-medium text-base px-8 py-7 rounded-sm min-w-[200px]"
                        >
                            Konsultasi Gratis
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
