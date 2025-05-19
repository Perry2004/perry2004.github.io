import { NavbarPlaceholder } from "../layout";
import { AboutSiteCard, ContactInfoCard } from "@/components/ui";
import { useDevice } from "@/hooks";

export function Contacts() {
  const { isDesktop } = useDevice();
  const currentYear = new Date().getFullYear();

  return (
    <div className="gradient-bg-responsive min-h-screen pb-12">
      {isDesktop && <NavbarPlaceholder />}

      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col justify-center px-4 py-4 sm:py-6 md:py-8">
        <h1 className="gradient-text-responsive text-center font-great-vibes text-4xl !leading-normal sm:text-6xl md:mt-0">
          Contact Me
        </h1>
        <div className="gradient-divider-responsive mx-auto mb-10 w-28 sm:mb-6 sm:w-32 md:mb-8 md:w-40"></div>

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
