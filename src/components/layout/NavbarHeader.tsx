import { useActiveAnchor } from "@/hooks";
import { useTheme } from "@/hooks";
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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

export function NavbarHeader({ anchors }: { anchors: string[] }) {
  const navbarAnchorMap: { [key: string]: string } = {
    home: "Home",
    "about-me": "About Me",
    projects: "Projects",
    "work-experiences": "Work Experiences",
    skills: "Skills",
    contacts: "Contacts",
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const activeAnchor = useActiveAnchor(anchors);
  const { theme, setTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <FaSun className="h-4 w-4 text-amber-400" />;
      case "dark":
        return <FaMoon className="h-4 w-4 text-[#5ad6ff]" />;
      case "system":
        return (
          <FaComputer className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        );
    }
  };

  return (
    <div className="navbar-gradient-responsive fixed top-0 z-10 w-full border-b border-[#5ad6ff]/30 opacity-90 shadow-sm backdrop-blur-md">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className=""
      >
        <NavbarBrand>
          <p className="gradient-text-responsive font-great-vibes text-3xl font-bold">
            Perry Zhu
          </p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-[#5ad6ff] sm:hidden"
          />
          {anchors.map((anchor) => (
            <NavbarItem key={anchor} className="hidden sm:block">
              <Link href={`#${anchor}`} target="_self">
                <Button
                  className={
                    "text-md relative overflow-hidden font-medium transition-all duration-300 ease-in-out " +
                    (activeAnchor === anchor
                      ? "scale-105 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] text-white shadow-md"
                      : "bg-transparent text-gray-700 hover:scale-105 hover:bg-[#5ad6ff]/10 hover:text-[#46a8ff] hover:shadow-sm dark:text-gray-300 dark:hover:bg-[#5ad6ff]/20 dark:hover:shadow-[#5ad6ff]/30")
                  }
                >
                  <span className="relative z-10">
                    {navbarAnchorMap[anchor]}
                  </span>
                  {activeAnchor === anchor && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] opacity-100 transition-opacity duration-300 dark:from-[#749bff] dark:to-[#b45ca7]"></span>
                  )}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] transition-all duration-300 group-hover:w-full dark:from-[#749bff] dark:to-[#b45ca7]"></span>
                </Button>
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem className="hidden sm:flex">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button
                  variant="light"
                  isIconOnly
                  className="rounded-full border border-[#5ad6ff]/50 bg-white/50 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#5ad6ff]/10 hover:shadow-md dark:bg-gray-800/50 dark:hover:bg-[#5ad6ff]/20"
                  aria-label="Toggle theme mode"
                >
                  {getThemeIcon()}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Theme options" className="shadow-lg">
                <DropdownItem
                  key="light"
                  startContent={<FaSun className="h-4 w-4 text-amber-400" />}
                  onPress={() => setTheme("light")}
                  className={
                    theme === "light"
                      ? "bg-[#5ad6ff]/10 text-[#5ad6ff]"
                      : "hover:bg-[#5ad6ff]/10"
                  }
                >
                  Light
                </DropdownItem>
                <DropdownItem
                  key="dark"
                  startContent={<FaMoon className="h-4 w-4 text-[#5ad6ff]" />}
                  onPress={() => setTheme("dark")}
                  className={
                    theme === "dark"
                      ? "bg-[#5ad6ff]/10 text-[#5ad6ff]"
                      : "hover:bg-[#5ad6ff]/10"
                  }
                >
                  Dark
                </DropdownItem>
                <DropdownItem
                  key="system"
                  startContent={
                    <FaComputer className="h-4 w-4 text-gray-500" />
                  }
                  onPress={() => setTheme("system")}
                  className={
                    theme === "system"
                      ? "bg-[#5ad6ff]/10 text-[#5ad6ff]"
                      : "hover:bg-[#5ad6ff]/10"
                  }
                >
                  System
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="border-t border-[#5ad6ff]/30 bg-white/95 backdrop-blur-lg dark:bg-gray-900/95">
          {anchors.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={
                  "relative w-full overflow-hidden transition-all duration-300 ease-in-out " +
                  (activeAnchor === item
                    ? "translate-x-1 transform bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] text-white"
                    : "text-gray-700 hover:translate-x-1 hover:bg-[#5ad6ff]/10 hover:text-[#5ad6ff] dark:text-gray-300 dark:hover:bg-[#5ad6ff]/20")
                }
                href={`#${item}`}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{navbarAnchorMap[item]}</span>
                {activeAnchor === item && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] opacity-100 transition-opacity duration-300"></span>
                )}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <div className="flex items-center gap-2">
              <FaSun className="h-4 w-4 text-amber-400" />
              <Button
                className="w-full justify-start pl-2 text-gray-700 hover:bg-[#5ad6ff]/10 hover:text-[#5ad6ff] dark:text-gray-300 dark:hover:bg-[#5ad6ff]/20"
                variant="light"
                onPress={() => setTheme("light")}
              >
                Light
              </Button>
            </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <div className="flex items-center gap-2">
              <FaMoon className="h-4 w-4 text-[#5ad6ff]" />
              <Button
                className="w-full justify-start pl-2 text-gray-700 hover:bg-[#5ad6ff]/10 hover:text-[#5ad6ff] dark:text-gray-300 dark:hover:bg-[#5ad6ff]/20"
                variant="light"
                onPress={() => setTheme("dark")}
              >
                Dark
              </Button>
            </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <div className="flex items-center gap-2">
              <FaComputer className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Button
                className="w-full justify-start pl-2 text-gray-700 hover:bg-[#5ad6ff]/10 hover:text-[#5ad6ff] dark:text-gray-300 dark:hover:bg-[#5ad6ff]/20"
                variant="light"
                onPress={() => setTheme("system")}
              >
                System
              </Button>
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
