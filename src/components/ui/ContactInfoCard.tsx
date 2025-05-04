import { Card, CardBody, Divider, Button } from "@heroui/react";
import { IconedLink } from "./IconedLink";
import { ContactInfoItem } from "./ContactInfoItem";
import { MdEmail, MdLocationOn, MdPerson } from "react-icons/md";
import { SiGithub, SiLinkedin, SiInstagram, SiPexels } from "react-icons/si";

export function ContactInfoCard() {
  return (
    <Card className="h-full overflow-hidden bg-white/80 shadow-lg backdrop-blur-sm">
      <CardBody className="p-8">
        <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

        <div className="flex flex-col gap-6">
          <ContactInfoItem icon={<MdPerson className="h-5 w-5" />} title="Name">
            <p className="text-gray-600">Perry Zhu</p>
          </ContactInfoItem>

          <ContactInfoItem
            icon={<MdLocationOn className="h-5 w-5" />}
            title="Location"
          >
            <p className="text-gray-600">
              Vancouver, BC, Canada / Harbin, China
            </p>
          </ContactInfoItem>

          <ContactInfoItem icon={<MdEmail className="h-5 w-5" />} title="Email">
            <IconedLink href="mailto:perryzhu2004@outlook.com">
              perryzhu2004@outlook.com
            </IconedLink>
          </ContactInfoItem>
        </div>

        <Divider className="my-8" />

        <div>
          <h2 className="mb-6 text-2xl font-bold">Connect With Me</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              as="a"
              href="https://github.com/Perry2004"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="h-5 w-5" />
              <span>GitHub</span>
            </Button>

            <Button
              as="a"
              href="https://www.linkedin.com/in/perry-z/"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Button>

            <Button
              as="a"
              href="https://www.instagram.com/perryzhu2004/"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="h-5 w-5" />
              <span>Instagram</span>
            </Button>

            <Button
              as="a"
              href="https://www.pexels.com/@perry-z-1662054943/"
              className="flex items-center gap-2"
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
