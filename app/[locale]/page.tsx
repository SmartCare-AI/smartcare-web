import Hero from "@/components/sections/Hero";
import HealthFeatures from "@/components/sections/HealthFeatures";
import PatientJourneySection from "@/components/sections/PatientJourneySection";
import SmartCare from "@/components/sections/SmartCare";
import PlatformSections from "@/components/sections/PlatformSections";

export default async function LocaleHome({ params }: PageProps<"/[locale]">) {
  await params;

  return (
    <div>
      <Hero />
      <PatientJourneySection />
      <HealthFeatures />
      <SmartCare />
      <PlatformSections />
    </div>
  );
}
