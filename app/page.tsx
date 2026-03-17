import WhoWeAreSection from "@/component/about";
import CarRentalHero from "@/component/banner";
import FurtherQuestionsBanner from "@/component/contact";
import MedicalLabSection from "@/component/doctor-section";
import FAQSection from "@/component/faq";
import CTASection from "@/component/cta-section";
import Footers from "@/component/footer";
import HairTreatmentProcedure from "@/component/hair-treatment-procedure";
import IframeTwoColumnSection from "@/component/iframe";
import Navbar from "@/component/navbar";
import MedicalServicesComponent from "@/component/our-team";
import HairFallTreatmentSection from "@/component/service";
import HealthcareFeaturesSection from "@/component/service-two";
import ClinicVideosSection from "@/component/videosection";
import Image from "next/image";

export default function page() {
  return (
      <div>
      <Navbar />
      <CarRentalHero/>
      <WhoWeAreSection />
      <HairTreatmentProcedure />
      <HairFallTreatmentSection />
      <MedicalLabSection />

      <HealthcareFeaturesSection />
      {/* <ClinicVideosSection /> */}
      <MedicalServicesComponent />
      <FAQSection />
      <IframeTwoColumnSection />
      {/* <FurtherQuestionsBanner />   */}
      <CTASection />
      <Footers />
      </div>
  );
}
