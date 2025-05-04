import { Card, CardBody, Divider, Button, Link } from "@heroui/react";
import { ContactInfoItem } from "./ContactInfoItem";
import { MdEmail, MdLocationOn, MdPerson } from "react-icons/md";
import { SiGithub, SiLinkedin, SiInstagram, SiPexels } from "react-icons/si";

export function ContactInfoCard() {
  return (
    <Card className="h-full overflow-hidden border border-[#5ad6ff]/30 bg-white/80 shadow-lg backdrop-blur-sm">
      <CardBody className="p-8">
        <h2 className="mb-6 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text text-2xl font-bold text-transparent">
          Contact Information
        </h2>

        <div className="flex flex-col gap-6">
          <ContactInfoItem
            icon={<MdPerson className="h-5 w-5" />}
            title="Name"
            iconClass="bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#5ad6ff]"
          >
            <p className="text-gray-700">Perry Zhu</p>
          </ContactInfoItem>

          <ContactInfoItem
            icon={<MdLocationOn className="h-5 w-5" />}
            title="Location"
            iconClass="bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#fb9ac7]"
          >
            <p className="text-gray-700">
              Vancouver, BC, Canada / Harbin, China
            </p>
          </ContactInfoItem>

          <ContactInfoItem
            icon={<MdEmail className="h-5 w-5" />}
            title="Email"
            iconClass="bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#5ad6ff]"
          >
            <Link
              href="mailto:perryzhu2004@outlook.com"
              className="text-[#5ad6ff] hover:text-[#fb9ac7]"
              target="_blank"
            >
              perryzhu2004@outlook.com
            </Link>
          </ContactInfoItem>
        </div>

        <Divider className="my-8 h-[2px] bg-gradient-to-r from-[#5ad6ff]/30 to-[#fb9ac7]/30" />

        <div>
          <h2 className="mb-6 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text text-2xl font-bold text-transparent">
            Connect With Me
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button
              as="a"
              href="https://github.com/Perry2004"
              className="flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5ad6ff] hover:to-[#fb9ac7] hover:text-white hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="h-5 w-5" />
              <span>GitHub</span>
            </Button>

            <Button
              as="a"
              href="https://www.linkedin.com/in/perry-z/"
              className="flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5ad6ff] hover:to-[#fb9ac7] hover:text-white hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Button>

            <Button
              as="a"
              href="https://www.instagram.com/perryzhu2004/"
              className="flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5ad6ff] hover:to-[#fb9ac7] hover:text-white hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="h-5 w-5" />
              <span>Instagram</span>
            </Button>

            <Button
              as="a"
              href="https://www.pexels.com/@perry-z-1662054943/"
              className="flex items-center gap-2 border border-[#5ad6ff]/50 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5ad6ff] hover:to-[#fb9ac7] hover:text-white hover:shadow-md"
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
