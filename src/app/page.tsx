import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import VideoGallery from '@/components/VideoGallery';
import Playground from '@/components/Playground';
import MerchShop from '@/components/MerchShop';
import ParentZone from '@/components/ParentZone';
import SocialsHub from '@/components/SocialsHub';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <VideoGallery />
      <div className="section-divider" />
      <Playground />
      <div className="section-divider" />
      <MerchShop />
      <div className="section-divider" />
      <ParentZone />
      <div className="section-divider" />
      <SocialsHub />
      <div className="section-divider" />
      <Newsletter />
    </>
  );
}
