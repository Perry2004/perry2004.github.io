import { Card, CardBody, Divider, Button, Link } from "@heroui/react";
import { ContactInfoItem } from "./ContactInfoItem";
import { MdEmail, MdLocationOn, MdPerson } from "react-icons/md";
import { SiGithub, SiLinkedin, SiInstagram, SiPexels } from "react-icons/si";

export function ContactInfoCard() {
  return (
    <Card className="card-base-responsive h-full">
      <CardBody className="p-6 sm:p-8">
        <h2 className="gradient-text-responsive mb-5 text-xl font-bold sm:text-2xl">
          Contact Information
        </h2>

        <div className="flex flex-col gap-5">
          <ContactInfoItem icon={<MdPerson className="h-5 w-5" />} title="Name">
            <p className="text-sm text-gray-700 dark:text-gray-200 sm:text-base">
              Perry Zhu
            </p>
          </ContactInfoItem>

          <ContactInfoItem
            icon={<MdLocationOn className="h-5 w-5" />}
            title="Location"
            iconClass="info-icon-gradient-light info-icon-secondary-light dark:info-icon-gradient-dark dark:info-icon-secondary-dark"
          >
            <p className="text-sm text-gray-700 dark:text-gray-200 sm:text-base">
              Vancouver, BC, Canada / Harbin, China
            </p>
          </ContactInfoItem>

          <ContactInfoItem icon={<MdEmail className="h-5 w-5" />} title="Email">
            <Link
              href="mailto:perryzhu2004@outlook.com"
              className="link-colored-responsive text-sm sm:text-base"
              target="_blank"
            >
              perryzhu2004@outlook.com
            </Link>
          </ContactInfoItem>
        </div>

        <Divider className="card-divider-responsive my-6" />

        <div>
          <h2 className="gradient-text-responsive mb-5 text-xl font-bold sm:text-2xl">
            Connect With Me
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button
              as="a"
              href="https://github.com/Perry2004"
              className="gradient-button-hover-responsive flex items-center gap-1.5 border border-[#5ad6ff]/50 bg-white px-3 py-2 text-xs text-gray-700 shadow-sm dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200 sm:px-4 sm:py-2 sm:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>GitHub</span>
            </Button>

            <Button
              as="a"
              href="https://www.linkedin.com/in/perry-z/"
              className="gradient-button-hover-responsive flex items-center gap-1.5 border border-[#5ad6ff]/50 bg-white px-3 py-2 text-xs text-gray-700 shadow-sm dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200 sm:px-4 sm:py-2 sm:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>LinkedIn</span>
            </Button>

            <Button
              as="a"
              href="https://www.instagram.com/perryzhu2004/"
              className="gradient-button-hover-responsive flex items-center gap-1.5 border border-[#5ad6ff]/50 bg-white px-3 py-2 text-xs text-gray-700 shadow-sm dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200 sm:px-4 sm:py-2 sm:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Instagram</span>
            </Button>

            <Button
              as="a"
              href="https://www.pexels.com/@perry-z-1662054943/"
              className="gradient-button-hover-responsive flex items-center gap-1.5 border border-[#5ad6ff]/50 bg-white px-3 py-2 text-xs text-gray-700 shadow-sm dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200 sm:px-4 sm:py-2 sm:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiPexels className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Pexels</span>
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
