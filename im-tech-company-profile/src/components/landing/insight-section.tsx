'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TitleGradient } from '@/components/shared/title-gradient';

// BACKEND NOTE: Bagian ini nantinya akan dihubungkan ke tabel 'articles' di Supabase.
import insightData from '@/data/insightdummy.json';

interface InsightItem {
    id: number;
    date: string;
    title: string;
    excerpt: string;
    imageUrl: string;
}

export function InsightSection() {
    const insights: InsightItem[] = insightData;

    return (
        <section id="insight" className="bg-white py-32 font-sans">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <TitleGradient as="h2" className="text-3xl lg:text-4xl pb-2">
                        Insight & Artikel
                    </TitleGradient>
                    <p className="text-[20px] font-medium text-black max-w-3xl mx-auto mt-4">
                        Baca artikel terbaru kami tentang tren teknologi, tips pengembangan aplikasi, dan inovasi digital.
                    </p>
                </div>

                {/* Grid System - Responsive: 1 col (mobile), 2 cols (tablet), 4 cols (desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {insights.map((item) => (
                        <div
                            key={item.id}
                            className="w-full max-w-[342px] bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                        >
                            {/* Thumbnail Image */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                {/* Date */}
                                <span className="text-[12px] text-gray-400 mb-3 block">
                                    {item.date}
                                </span>

                                {/* Title */}
                                <h3 className="text-[16px] font-semibold text-black mb-3 leading-snug line-clamp-2">
                                    {item.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                                    {item.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-12">
                    <Link href="/blog">
                        <button className="bg-black text-white font-medium px-8 py-4 rounded-md transition-all duration-200 hover:bg-gray-800 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                            Lihat Semua Artikel
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
