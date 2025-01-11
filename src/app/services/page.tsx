import Navbar from '@/components/navbar/index';
import SesaBG from '@/components/sesa_background';
import ServicesSideNav from '@/components/side_navbar/services-sidenav';
import Footer from '@/components/Footer';

// Import service components and their data
import JavadocSection, { JavadocService } from '@/components/services/JavadocService';
import TestSection, { TestService } from '@/components/services/TestService';
import NitoraSection, { NitoraService } from '@/components/services/NitoraService';
import IdGeneratorSection, { IdGeneratorService } from '@/components/services/IdGeneratorService';

// Combine all services
const services = [IdGeneratorService, JavadocService, TestService, NitoraService];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <SesaBG />
      <Navbar />
      <div className="flex-grow flex">
        <ServicesSideNav services={services} />

        {/*--------------------------------------------- Main body ---------------------------------------------*/}
        <main className="flex-grow lg:ml-72 px-6 py-16 relative z-10">
          <div id="id-generator" className="scroll-mt-32">
            <IdGeneratorSection service={IdGeneratorService} />
          </div>
          <div id="javadoc-repository" className="scroll-mt-32">
            <JavadocSection service={JavadocService} />
          </div>
          <div id="test-service-2" className="scroll-mt-32">
            <TestSection service={TestService} />
          </div>
          <div id="nitora" className="scroll-mt-32">
            <NitoraSection service={NitoraService} />
          </div>
        </main>
      </div>

      {/*--------------------------------------------- footer ---------------------------------------------*/}
      <Footer />
    </div>
  );
}
