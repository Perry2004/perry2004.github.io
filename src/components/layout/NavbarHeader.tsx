import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import React from "react";
export default function NavbarHeader({ anchors }: { anchors: string[] }) {
  const navbarAnchorMap: { [key: string]: string } = {
    home: "Home",
    "about-me": "About Me",
    projects: "Projects",
    "work-experiences": "Work Experiences",
    skills: "Skills",
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-0 z-10 w-full bg-opacity-20">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarBrand>
          <p className="font-bold">Perry Zhu</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          {anchors.map((anchor) => (
            <NavbarItem key={anchor}>
              <Link href={`#${anchor}`}>
                <Button>{navbarAnchorMap[anchor]}</Button>
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenu>
          {anchors.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href={`#${item}`} size="lg">
                {navbarAnchorMap[item]}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
