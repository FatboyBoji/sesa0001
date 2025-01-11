import SesaBG from '../components/sesa_background';
import Navbar from '../components/navbar/index';
import Footer from '@/components/Footer';
import HomeContent from '@/components/home/HomeContent';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col relative">
      {/* My Costumized Background ------------ Waterprint SESA Style -------------------------------------- */}
      <div className="absolute inset-0">
        <SesaBG />
      </div>

      {/* My Navbar */}
      <Navbar />

      {/*--------------------------------------------- Main body ---------------------------------------------*/}
      <HomeContent />
    
      {/* My Footer */}
      <Footer />
    </div>
  );
}