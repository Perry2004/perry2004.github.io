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
      >
        <p className="text-gray-600">
          &copy; {currentYear}, Perry Zhu. All rights reserved.
        </p>
        <p className="mt-2 text-gray-600">
          Code licensed under{" "}
          <IconedLink
            href="https://github.com/Perry2004/perry2004.github.io/blob/main/LICENSE"
            className="text-blue-600"
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
    <ContactInfoItem icon={<MdInfo className="h-5 w-5" />} title="Attribution">
      <div className="mt-2 text-gray-600">
        <p>
          This page UI is designed and developed by Perry Zhu using React,
          Tailwind CSS, HeroUI, and React Bits.
        </p>
        <p className="mt-2">
          Additional libraries used include: Axios, Framer Motion, Embla
          Carousel, Fullpage.js, and React Chrono.
        </p>
        <p className="mt-2">
          The fonts used on this site are from{" "}
          <Link
            href="https://fonts.google.com/"
            className="text-blue-600"
            target="_blank"
          >
            Google Fonts
          </Link>
          .
        </p>
        <p className="mt-2">
          This website uses icons from React Icons and Lucide React.
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
      >
        <p className="text-gray-600">
          The source code for this website is available on{" "}
          <Link
            href="https://github.com/Perry2004/perry2004.github.io"
            className="text-blue-600"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </p>
        <p>
          Spot an issue? Open an{" "}
          <Link
            href="https://github.com/Perry2004/perry2004.github.io/issues/new"
            target="_blank"
            className="text-blue-600"
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
    <Card className="h-full overflow-hidden bg-white/80 shadow-lg backdrop-blur-sm">
      <CardBody className="p-8">
        <h2 className="mb-6 text-2xl font-bold">About This Site</h2>
        <CopyrightSection currentYear={currentYear} />
        <AttributionSection />
        <OpenSourceSection />
      </CardBody>
    </Card>
  );
}
