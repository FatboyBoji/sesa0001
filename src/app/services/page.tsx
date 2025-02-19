import Navbar from '@/components/navbar/index';
import SesaBG from '@/components/sesa_background';
import ServicesSideNav from '@/components/side_navbar/services-sidenav';
import Footer from '@/components/Footer';

// Import service components and their data
import JavadocSection, { JavadocService } from '@/components/services/JavadocService';
import ValentineSection, { ValentineService } from '@/components/services/ValentineService';
import NitoraSection, { NitoraService } from '@/components/services/NitoraService';
import IdGeneratorSection, { IdGeneratorService } from '@/components/services/IdGeneratorService';
import PublicKeySection, { PublicKeyService } from '@/components/services/SesaPublicKey/PublicKeyService';

// Combine all services
const services = [IdGeneratorService, JavadocService, ValentineService, PublicKeyService, NitoraService];

export default function ServicesPage() {
  return (
    <main className="main-content min-h-screen flex flex-col">
      <SesaBG />
      <Navbar />
      <div className="flex-grow flex">
        <ServicesSideNav services={services} />

        {/*--------------------------------------------- Main body ---------------------------------------------*/}
        <main className="flex-grow lg:ml-72 px-6 py-16 relative z-10">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              DevLab Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hier sind freie Ressourcen für Entwickler verfügbar. Entdecken Sie unsere Tools und Services, die Ihnen bei Ihrer Entwicklung helfen.
            </p>
          </div>

          {/* Services Single Column */}
          <div className="space-y-16">
            <div id="id-generator" className="scroll-mt-32 border-b border-gray-200 pb-8">
              <IdGeneratorSection service={IdGeneratorService} />
            </div>
            <div id="javadoc-repository" className="scroll-mt-32 border-b border-gray-200 pb-8">
              <JavadocSection service={JavadocService} />
            </div>
            <div id="valentine" className="scroll-mt-32 border-b border-gray-200 pb-8">
              <ValentineSection service={ValentineService} />
            </div>
            <div id="public-key" className="scroll-mt-32 border-b border-gray-200 pb-8">
              <PublicKeySection service={PublicKeyService} />
            </div>
            <div id="nitora" className="scroll-mt-32 border-b border-gray-200 pb-8">
              <NitoraSection service={NitoraService} />
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Weitere Ressourcen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Documentation */}
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Dokumentation</h3>
                <p className="text-gray-600">Umfassende Dokumentation für alle unsere Services und APIs.</p>
              </div>

              {/* Community */}
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-green-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Tauschen Sie sich mit anderen Entwicklern aus und teilen Sie Ihre Erfahrungen.</p>
              </div>

              {/* Updates */}
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-purple-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Updates</h3>
                <p className="text-gray-600">Bleiben Sie über die neuesten Entwicklungen und Features informiert.</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </main>
  );
}
