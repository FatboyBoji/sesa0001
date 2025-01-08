import Navbar from '@/components/navbar';
import SesaBG from '@/components/sesa_background';
import ServicesSideNav from '@/components/services-sidenav';
import Footer from '@/components/Footer';

// Import service components and their data
import JavadocSection, { JavadocService } from '@/components/services/JavadocService';
import TestSection, { TestService } from '@/components/services/TestService';
import NitoraSection, { NitoraService } from '@/components/services/NitoraService';

// Combine all services
const services = [JavadocService, TestService, NitoraService];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <SesaBG />
      <Navbar />
      <div className="flex-grow flex">
        <ServicesSideNav services={services} />

        {/*--------------------------------------------- Main body ---------------------------------------------*/}
        <main className="flex-grow lg:ml-72 px-6 py-16 relative z-10">
          <JavadocSection service={JavadocService} />
          <TestSection service={TestService} />
          <NitoraSection service={NitoraService} />
        </main>
      </div>

      {/*--------------------------------------------- footer ---------------------------------------------*/}
      <Footer />
    </div>
  );
}
