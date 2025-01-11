import Navbar from '../../components/navbar/index';
import SesaBG from '../../components/sesa_background';
import SesaIcon from '../../components/icons/sesalogoComb';
import Footer from '@/components/Footer';


export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SesaBG />

      {/* My Navbar */}
      <Navbar />

      {/*--------------------------------------------- Main body ---------------------------------------------*/}
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-black mb-12">
          Who are We?
        </h1>

        <div className="flex w-full h-full p-6">
          <SesaIcon className="text-black w-auto h-auto" />            
        </div>

        <div className="ml-5 md:ml-10">
          <p className="text-responsive text-black font-bold capitalize">
            We supply software systems for your business.
          </p>
        </div>
      </main>

      {/* My Footer */}
      <Footer />
    </div>
  );
}
