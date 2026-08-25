import DoctorsSection from "./DoctorsSection";
import TestimonialsSection from "./TestimonialsSection";
import PartnersSection from "./PartnersSection";
import FaqSection from "./FaqSection";
import SecuritySection from "./SecuritySection";

function PlatformSections() {
  return (
    <div className="overflow-hidden">
      <DoctorsSection />
      <TestimonialsSection />
      <PartnersSection />
      <FaqSection />
      <SecuritySection />
    </div>
  );
}

export default PlatformSections;
