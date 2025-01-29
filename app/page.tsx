import AboutUs from "./components/AboutUs";
import DownloadAppSection from "./components/DownloadAppSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/Hero";


export default function page() {
  return (
   <div className="bg-gray-100 min-h-screen">
    <Header/>
   <Hero/>
   <GallerySection/>
   <AboutUs/>
   <DownloadAppSection/>
   <Footer/>

   </div>
  
  );
}
