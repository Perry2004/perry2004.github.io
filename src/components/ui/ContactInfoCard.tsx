import { Card, CardBody, Divider, Button, Link } from "@heroui/react";
import { ContactInfoItem } from "./ContactInfoItem";
import { MdEmail, MdLocationOn, MdPerson } from "react-icons/md";
import { SiGithub, SiLinkedin, SiInstagram, SiPexels } from "react-icons/si";

export function ContactInfoCard() {
  return (
    <Card className="h-full overflow-hidden border border-[#5ad6ff]/30 bg-white/80 shadow-lg backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/80 dark:shadow-md">
      <CardBody className="p-8">
        <h2 className="mb-6 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text text-2xl font-bold text-transparent dark:from-[#64d1ff] dark:to-[#fab7ff]">
          Contact Information
        </h2>

        <div className="flex flex-col gap-6">
          <ContactInfoItem
            icon={<MdPerson className="h-5 w-5" />}
            title="Name"
            iconClass="bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#5ad6ff] dark:from-[#5ad6ff]/30 dark:to-[#fb9ac7]/30 dark:text-[#64d1ff]"
          >
            <p className="text-gray-700 dark:text-gray-200">Perry Zhu</p>
          </ContactInfoItem>

          <ContactInfoItem
            icon={<MdLocationOn className="h-5 w-5" />}
            title="Location"
            iconClass="bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#fb9ac7] dark:from-[#5ad6ff]/30 dark:to-[#fb9ac7]/30 dark:text-[#fab7ff]"
          >
            <p className="text-gray-700 dark:text-gray-200">
              Vancouver, BC, Canada / Harbin, China
            </p>
          </ContactInfoItem>

          <ContactInfoItem
            icon={<MdEmail className="h-5 w-5" />}
            title="Email"
            iconClass="bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#5ad6ff] dark:from-[#5ad6ff]/30 dark:to-[#fb9ac7]/30 dark:text-[#64d1ff]"
          >
            <Link
              href="mailto:perryzhu2004@outlook.com"
              className="text-[#5ad6ff] hover:text-[#fb9ac7] dark:text-[#64d1ff] dark:hover:text-[#fab7ff]"
              target="_blank"
            >
              perryzhu2004@outlook.com
            </Link>
          </ContactInfoItem>
        </div>

        <Divider className="my-8 h-[2px] bg-gradient-to-r from-[#5ad6ff]/30 to-[#fb9ac7]/30 dark:from-[#5ad6ff]/40 dark:to-[#fb9ac7]/40" />

        <div>
          <h2 className="mb-6 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text text-2xl font-bold text-transparent dark:from-[#64d1ff] dark:to-[#fab7ff]">
            Connect With Me
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button
              as="a"
              href="https://github.com/Perry2004"
              className="flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5ad6ff] hover:to-[#fb9ac7] hover:text-white hover:shadow-md dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200 dark:hover:from-[#749bff] dark:hover:to-[#b45ca7]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="h-5 w-5" />
              <span>GitHub</span>
            </Button>

            <Button
              as="a"
              href="https://www.linkedin.com/in/perry-z/"
              className="flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5ad6ff] hover:to-[#fb9ac7] hover:text-white hover:shadow-md dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200 dark:hover:from-[#749bff] dark:hover:to-[#b45ca7]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Button>

            <Button
              as="a"
              href="https://www.instagram.com/perryzhu2004/"
              className="flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5ad6ff] hover:to-[#fb9ac7] hover:text-white hover:shadow-md dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200 dark:hover:from-[#749bff] dark:hover:to-[#b45ca7]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="h-5 w-5" />
              <span>Instagram</span>
            </Button>

            <Button
              as="a"
              href="https://www.pexels.com/@perry-z-1662054943/"
              className="flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5ad6ff] hover:to-[#fb9ac7] hover:text-white hover:shadow-md dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200 dark:hover:from-[#749bff] dark:hover:to-[#b45ca7]"
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
