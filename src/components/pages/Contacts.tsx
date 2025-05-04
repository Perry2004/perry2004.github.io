import { NavbarPlaceholder } from "../layout";
import { AboutSiteCard, ContactInfoCard } from "@/components/ui";

export function Contacts() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 to-orange-300">
      <NavbarPlaceholder />

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-12 text-center font-great-vibes text-5xl">
          Get In Touch
        </h1>

        <div className="grid gap-8 lg:grid-cols-2">
          <ContactInfoCard />

          <AboutSiteCard currentYear={currentYear} />
        </div>
      </div>
    </div>
  );
}
