"use client"

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/index';
import SesaBG from '@/components/sesa_background';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';
import { newsService, NewsUpdate, NewsType } from '@/services/api';

type Language = 'en' | 'de' | 'bg';

const content = {
  de: {
    title: 'Neuigkeiten & Updates',
    subtitle: 'Bleiben Sie auf dem Laufenden',
    mission: {
      title: 'Unsere Mission',
      text: 'Die Automatisierung und der Wandel stellen die Gesellschaften weltweit vor neuen Herausforderungen. Seit 2007 arbeiten wir kontinuierlich in Frankfurt am Main und bleiben an der vordersten Front der Softwaretechnologie. Wir glauben fest daran, dass der technologische Fortschritt die Lösung von vielen oft in der Vergangenheit unlösbare Probleme darstellt.',
      subtext: 'Zusammen mit unseren Kunden erstellen wir Softwaresysteme in Europa. Gemeinsames Vertrauen bildet die Basis für unsere Arbeit - das ist der Leitsatz für uns, wenn wir neue Softwaresysteme entwickeln oder bestehende Systeme erweitern. Wir haben uns zum Ziel gesetzt die Lebensqualität der Menschen zu verbessern, indem wir auf die erkannten Problemen von Unternehmen in Softwarebereich europaweit und weltweit reagieren.'
    },
    filters: {
      all: 'Alle',
      news: 'Neuigkeiten',
      release: 'Releases',
      framework: 'Frameworks',
      announcement: 'Ankündigungen'
    }
  },
  en: {
    title: 'News & Updates',
    subtitle: 'Stay up to date',
    mission: {
      title: 'Our Mission',
      text: 'Automation and change present new challenges to societies worldwide. Since 2007, we have been working continuously in Frankfurt am Main and remain at the forefront of software technology. We firmly believe that technological progress represents the solution to many problems that were often unsolvable in the past.',
      subtext: 'Together with our customers, we create software systems in Europe. Mutual trust forms the basis for our work - this is our guiding principle when we develop new software systems or expand existing systems. We have set ourselves the goal of improving people\'s quality of life by responding to the identified problems of companies in the software sector throughout Europe and worldwide.'
    },
    filters: {
      all: 'All',
      news: 'News',
      release: 'Releases',
      framework: 'Frameworks',
      announcement: 'Announcements'
    }
  },
  bg: {
    title: 'Новини и Актуализации',
    subtitle: 'Бъдете информирани',
    mission: {
      title: 'Нашата Мисия',
      text: 'Автоматизацията и промяната поставят нови предизвикателства пред обществата по целия свят. От 2007 г. работим непрекъснато във Франкфурт на Майн и оставаме на челно място в софтуерните технологии. Ние твърдо вярваме, че технологичният прогрес представлява решение на много проблеми, които често са били нерешими в миналото.',
      subtext: 'Заедно с нашите клиенти създаваме софтуерни системи в Европа. Взаимното доверие е основата на нашата работа - това е нашият водещ принцип, когато разработваме нови софтуерни системи или разширяваме съществуващи системи. Поставили сме си за цел да подобрим качеството на живот на хората, като реагираме на идентифицираните проблеми на компаниите в софтуерния сектор в цяла Европа и по света.'
    },
    filters: {
      all: 'Всички',
      news: 'Новини',
      release: 'Версии',
      framework: 'Рамки',
      announcement: 'Съобщения'
    }
  }
};

export default function NewsAndUpdates() {
  const [currentLang, setCurrentLang] = useState<Language>('de');
  const [filter, setFilter] = useState<NewsType | 'all'>('all');
  const [updates, setUpdates] = useState<NewsUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const data = await newsService.getAll(filter === 'all' ? undefined : filter);
        setUpdates(data);
        setError('');
      } catch (err) {
        setError('Failed to load news updates');
        console.error('Error loading news:', err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [filter]);

  const formatDate = (dateString: string | Date): string => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 z-0">
        <SesaBG />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              >
                {content[currentLang].title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600"
              >
                {content[currentLang].subtitle}
              </motion.p>
            </div>

            {/* Language Selection */}
            <div className="mb-8 flex justify-center space-x-4">
              {(Object.keys(content) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                           ${currentLang === lang 
                             ? 'bg-white text-gray-900 shadow-md transform scale-105' 
                             : 'text-gray-600 hover:bg-white/50 hover:text-gray-900'}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                         ${filter === 'all' 
                           ? 'bg-white text-gray-900 shadow-md transform scale-105' 
                           : 'bg-white/50 text-gray-600 hover:bg-white hover:text-gray-900'}`}
              >
                {content[currentLang].filters.all}
              </button>
              {(['neuigkeiten', 'releases', 'frameworks', 'ankündigungen'] as NewsType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                           ${filter === type 
                             ? 'bg-white text-gray-900 shadow-md transform scale-105' 
                             : 'bg-white/50 text-gray-600 hover:bg-white hover:text-gray-900'}`}
                >
                  {content[currentLang].filters[type === 'neuigkeiten' ? 'news' :
                                               type === 'releases' ? 'release' :
                                               type === 'frameworks' ? 'framework' :
                                               'announcement']}
                </button>
              ))}
            </div>

            {/* Updates Grid */}
            <div className="grid gap-6 max-w-4xl mx-auto">
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>
              ) : error ? (
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-red-700 text-center shadow-sm">
                  {error}
                </div>
              ) : updates.length === 0 ? (
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl text-gray-600 text-center shadow-sm">
                  No updates found.
                </div>
              ) : (
                updates.map((update, index) => (
                  <motion.div
                    key={update.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-8">
                      {/* Header with date and type */}
                      <div className="flex justify-between items-center mb-6">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-medium
                          ${update.type === 'neuigkeiten' ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-600/10' :
                            update.type === 'releases' ? 'bg-green-50 text-green-700 ring-1 ring-green-600/10' :
                            update.type === 'frameworks' ? 'bg-purple-50 text-purple-700 ring-1 ring-purple-600/10' :
                            'bg-orange-50 text-orange-700 ring-1 ring-orange-600/10'}`}
                        >
                          {content[currentLang].filters[update.type === 'neuigkeiten' ? 'news' :
                                                      update.type === 'releases' ? 'release' :
                                                      update.type === 'frameworks' ? 'framework' :
                                                      'announcement']}
                        </span>
                        <time className="text-sm text-gray-500 tabular-nums font-medium">
                          {formatDate(update.published_at || '')}
                        </time>
                      </div>

                      {/* Title and Version */}
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                          {update.title}
                          {update.version && (
                            <span className="ml-3 text-base font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                              v{update.version}
                            </span>
                          )}
                        </h3>
                      </div>

                      {/* Content */}
                      <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed"
                           dangerouslySetInnerHTML={{ __html: update.content }} />
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </main>

        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop threshold={400} />
      </div>
    </div>
  );
}
