import { NavbarPlaceholder } from "../layout";
import { AboutSiteCard, ContactInfoCard } from "@/components/ui";

export function Contacts() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="gradient-bg-responsive min-h-screen">
      <NavbarPlaceholder />

      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8">
        <h1 className="gradient-text-responsive text-center font-great-vibes text-4xl !leading-normal sm:text-5xl">
          Contact Me
        </h1>
        <div className="gradient-divider-responsive mx-auto mb-4 w-28 sm:mb-6 sm:w-32 md:mb-8 md:w-40"></div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
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
