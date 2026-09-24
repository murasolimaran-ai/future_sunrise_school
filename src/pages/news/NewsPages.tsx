import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../../components/layout/PageHero';
import { NEWS_ARTICLES } from '../../data/schoolData';
import { FallbackImage } from '../../components/ui/FallbackImage';
import { Calendar, User, ArrowRight, ArrowLeft, Share2 } from 'lucide-react';

export const NewsListPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="COMMUNICATIONS & PRESS"
        title="School News Desk & Articles"
        subtitle="Official releases, pedagogical insights, student accomplishments, and campus developments."
        breadcrumbs={[{ label: 'News Desk' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:border-[#102A43] transition-all hover:-translate-y-1 flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <FallbackImage
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#102A43] text-white text-xs font-semibold rounded">
                    {news.publishDate}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#D4A72C] tracking-wider block mb-1">
                      {news.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#102A43] group-hover:text-[#1D4ED8] transition-colors mb-2 leading-snug">
                      {news.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {news.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">By {news.author}</span>
                    <Link
                      to={`/news/${news.slug}`}
                      className="text-xs font-bold text-[#102A43] group-hover:text-[#D4A72C] flex items-center gap-1"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const news = NEWS_ARTICLES.find((n) => n.slug === slug) || NEWS_ARTICLES[0];

  return (
    <div>
      <PageHero
        eyebrow={`NEWS · ${news.category.toUpperCase()}`}
        title={news.title}
        subtitle={`${news.publishDate} · By ${news.author}`}
        breadcrumbs={[
          { label: 'News Desk', href: '/news' },
          { label: news.title }
        ]}
        bgImage={news.image}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-3xl space-y-8">
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[16/9]">
            <FallbackImage
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pb-4 border-b border-slate-200">
            <span className="font-medium text-[#102A43]">Published by: {news.author}</span>
            <span>Date: {news.publishDate}</span>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line font-serif">
            {news.content}
          </div>

          <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#102A43] hover:text-[#D4A72C] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to News Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
