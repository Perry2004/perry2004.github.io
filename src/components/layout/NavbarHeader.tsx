import { useActiveAnchor } from "@/hooks";
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

export function NavbarHeader({ anchors }: { anchors: string[] }) {
  const navbarAnchorMap: { [key: string]: string } = {
    home: "Home",
    "about-me": "About Me",
    projects: "Projects",
    "work-experiences": "Work Experiences",
    skills: "Skills",
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const activeAnchor = useActiveAnchor(anchors);
  // React.useEffect(() => {
  //   console.log("activeAnchor", activeAnchor);
  // }, [activeAnchor]);

  return (
    <div className="fixed top-0 z-10 w-full bg-opacity-20">
      <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
        <NavbarBrand>
          <p className="font-great-vibes text-2xl font-bold">Perry Zhu</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          {anchors.map((anchor) => (
            <NavbarItem key={anchor} className="hidden sm:block">
              <Link href={`#${anchor}`} target="_blank">
                <Button
                  className={
                    "text-md" +
                    " " +
                    (activeAnchor === anchor ? "bg-indigo-300" : "")
                  }
                >
                  {navbarAnchorMap[anchor]}
                </Button>
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenu>
          {anchors.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={
                  "w-full" +
                  " " +
                  (activeAnchor === item ? "bg-indigo-300" : "")
                }
                href={`#${item}`}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                {navbarAnchorMap[item]}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
