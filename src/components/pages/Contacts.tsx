import { NavbarPlaceholder } from "../layout";
import { AboutSiteCard, ContactInfoCard } from "@/components/ui";

export function Contacts() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5ad6ff]/30 via-white to-[#fb9ac7]/30 dark:from-[#1a4d6d]/70 dark:via-[#2a2a3d]/90 dark:to-[#6d1a4a]/70">
      <NavbarPlaceholder />

      <div className="container mx-auto px-4 py-8">
        <h1 className="bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text text-center font-great-vibes text-5xl leading-normal text-transparent dark:from-[#64d1ff] dark:to-[#fab7ff]">
          Contact Me
        </h1>
        <div className="mx-auto mb-8 h-1 w-40 rounded-full bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] dark:from-[#749bff] dark:to-[#b45ca7]"></div>

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
