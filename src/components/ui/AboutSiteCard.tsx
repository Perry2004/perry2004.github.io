import { Card, CardBody, Link } from "@heroui/react";
import { IconedLink } from "./IconedLink";
import { ContactInfoItem } from "./ContactInfoItem";
import { MdCopyright, MdInfo } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

interface AboutSiteCardProps {
  currentYear: number;
}

function CopyrightSection({ currentYear }: { currentYear: number }) {
  return (
    <div className="mb-6">
      <ContactInfoItem
        icon={<MdCopyright className="h-5 w-5" />}
        title="Copyright"
        iconClass="bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#5ad6ff] dark:from-[#5ad6ff]/30 dark:to-[#fb9ac7]/30 dark:text-[#64d1ff]"
      >
        <p className="text-gray-700 dark:text-gray-200">
          &copy; {currentYear}, Perry Zhu. All rights reserved.
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-200">
          Code licensed under{" "}
          <IconedLink
            href="https://github.com/Perry2004/perry2004.github.io/blob/main/LICENSE"
            className="text-[#5ad6ff] hover:text-[#fb9ac7] dark:text-[#64d1ff] dark:hover:text-[#fab7ff]"
          >
            GPL v3
          </IconedLink>
          .
        </p>
      </ContactInfoItem>
    </div>
  );
}

function AttributionSection() {
  return (
    <ContactInfoItem
      icon={<MdInfo className="h-5 w-5" />}
      title="Attribution"
      iconClass="bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#fb9ac7] dark:from-[#5ad6ff]/30 dark:to-[#fb9ac7]/30 dark:text-[#fab7ff]"
    >
      <div className="mt-2 text-gray-700 dark:text-gray-200">
        <p>
          This page UI is designed and developed by Perry Zhu using React,
          Tailwind CSS, HeroUI, and React Bits.
        </p>
        <p className="mt-2">
          The fonts used on this site are from{" "}
          <Link
            href="https://fonts.google.com/"
            className="text-[#5ad6ff] hover:text-[#fb9ac7] dark:text-[#64d1ff] dark:hover:text-[#fab7ff]"
            target="_blank"
          >
            Google Fonts
          </Link>
          .
        </p>
        <p className="mt-2">
          This website uses icons from React Icons and Lucide React.
        </p>
        <p className="mt-2">
          Additional libraries used include: Axios, Framer Motion, Embla
          Carousel, Fullpage.js, and React Chrono.
        </p>
      </div>
    </ContactInfoItem>
  );
}

function OpenSourceSection() {
  return (
    <div className="mb-6">
      <ContactInfoItem
        icon={<FaGithub className="h-5 w-5" />}
        title="Open Source"
        iconClass="bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#5ad6ff] dark:from-[#5ad6ff]/30 dark:to-[#fb9ac7]/30 dark:text-[#64d1ff]"
      >
        <p className="text-gray-700 dark:text-gray-200">
          The source code for this website is available on{" "}
          <Link
            href="https://github.com/Perry2004/perry2004.github.io"
            className="text-[#5ad6ff] hover:text-[#fb9ac7] dark:text-[#64d1ff] dark:hover:text-[#fab7ff]"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          Spot an issue? Open an{" "}
          <Link
            href="https://github.com/Perry2004/perry2004.github.io/issues/new"
            target="_blank"
            className="text-[#5ad6ff] hover:text-[#fb9ac7] dark:text-[#64d1ff] dark:hover:text-[#fab7ff]"
          >
            issue
          </Link>
          .
        </p>
      </ContactInfoItem>
    </div>
  );
}

export function AboutSiteCard({ currentYear }: AboutSiteCardProps) {
  return (
    <Card className="h-full overflow-hidden border border-[#5ad6ff]/30 bg-white/80 shadow-lg backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/80 dark:shadow-md">
      <CardBody className="p-8">
        <h2 className="mb-6 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text text-2xl font-bold text-transparent dark:from-[#64d1ff] dark:to-[#fab7ff]">
          About This Site
        </h2>
        <CopyrightSection currentYear={currentYear} />
        <AttributionSection />
        <OpenSourceSection />
      </CardBody>
    </Card>
  );
}
