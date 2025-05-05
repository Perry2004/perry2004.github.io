import { NavbarPlaceholder } from "../layout";
import { AboutSiteCard, ContactInfoCard } from "@/components/ui";

export function Contacts() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="gradient-bg-responsive min-h-screen">
      <NavbarPlaceholder />

      <div className="container mx-auto px-4 py-8">
        <h1 className="gradient-text-responsive text-center font-great-vibes text-5xl leading-normal">
          Contact Me
        </h1>
        <div className="gradient-divider-responsive mx-auto mb-8 w-40"></div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="transform-gpu transition-all duration-500 hover:scale-[1.02]">
            <ContactInfoCard />
          </div>

          <div className="transform-gpu transition-all duration-500 hover:scale-[1.02]">
            <AboutSiteCard currentYear={currentYear} />
          </div>
        </div>
      </div>
    </div>
  );
}
