import { Card, CardBody, Divider, Button, Link } from "@heroui/react";
import { ContactInfoItem } from "./ContactInfoItem";
import { MdEmail, MdLocationOn, MdPerson } from "react-icons/md";
import { SiGithub, SiLinkedin, SiInstagram, SiPexels } from "react-icons/si";

export function ContactInfoCard() {
  return (
    <Card className="card-base-responsive h-full">
      <CardBody className="p-8">
        <h2 className="gradient-text-responsive mb-6 text-2xl font-bold">
          Contact Information
        </h2>

        <div className="flex flex-col gap-6">
          <ContactInfoItem icon={<MdPerson className="h-5 w-5" />} title="Name">
            <p className="text-gray-700 dark:text-gray-200">Perry Zhu</p>
          </ContactInfoItem>

          <ContactInfoItem
            icon={<MdLocationOn className="h-5 w-5" />}
            title="Location"
            iconClass="info-icon-gradient-light info-icon-secondary-light dark:info-icon-gradient-dark dark:info-icon-secondary-dark"
          >
            <p className="text-gray-700 dark:text-gray-200">
              Vancouver, BC, Canada / Harbin, China
            </p>
          </ContactInfoItem>

          <ContactInfoItem icon={<MdEmail className="h-5 w-5" />} title="Email">
            <Link
              href="mailto:perryzhu2004@outlook.com"
              className="link-colored-responsive"
              target="_blank"
            >
              perryzhu2004@outlook.com
            </Link>
          </ContactInfoItem>
        </div>

        <Divider className="card-divider-responsive my-8" />

        <div>
          <h2 className="gradient-text-responsive mb-6 text-2xl font-bold">
            Connect With Me
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button
              as="a"
              href="https://github.com/Perry2004"
              className="gradient-button-hover-responsive flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="h-5 w-5" />
              <span>GitHub</span>
            </Button>

            <Button
              as="a"
              href="https://www.linkedin.com/in/perry-z/"
              className="gradient-button-hover-responsive flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Button>

            <Button
              as="a"
              href="https://www.instagram.com/perryzhu2004/"
              className="gradient-button-hover-responsive flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="h-5 w-5" />
              <span>Instagram</span>
            </Button>

            <Button
              as="a"
              href="https://www.pexels.com/@perry-z-1662054943/"
              className="gradient-button-hover-responsive flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiPexels className="h-5 w-5" />
              <span>Pexels</span>
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
