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
import { useEffect, useState } from "react";
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

  // Adjusted breakpoints for responsive behavior
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsMobile] = useState(false);
  const activeAnchor = useActiveAnchor(anchors);
  const { theme, setTheme } = useTheme();

  // Check screen size
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", checkSize);
    checkSize(); // Initial check

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <FaSun className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />;
      case "dark":
        return <FaMoon className="h-4 w-4 text-[#5ad6ff] sm:h-5 sm:w-5" />;
      case "system":
        return (
          <FaComputer className="h-4 w-4 text-gray-500 dark:text-gray-400 sm:h-5 sm:w-5" />
        );
    }
  };

  return (
    <div className="navbar-gradient-responsive fixed top-0 z-50 w-full border-b border-[#5ad6ff]/30 opacity-90 shadow-sm backdrop-blur-md">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="py-1 sm:py-2"
      >
        <NavbarBrand>
          <p className="gradient-text-responsive font-great-vibes text-2xl font-bold sm:text-4xl">
            Perry Zhu
          </p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-[#5ad6ff] lg:hidden"
          />
          {anchors.map((anchor) => (
            <NavbarItem key={anchor} className="hidden lg:flex">
              <Link href={`#${anchor}`} target="_self">
                <Button
                  size="md"
                  className={
                    "relative overflow-hidden text-sm font-medium transition-all duration-300 ease-in-out md:text-2xl lg:text-lg " +
                    (activeAnchor === anchor
                      ? "scale-105 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] text-white shadow-md"
                      : "bg-transparent text-gray-700 hover:scale-105 hover:bg-[#5ad6ff]/10 hover:text-[#46a8ff] hover:shadow-sm dark:text-gray-300 dark:hover:bg-[#5ad6ff]/20 dark:hover:shadow-[#5ad6ff]/30")
                  }
                >
                  <span className="relative z-10 md:text-xl">
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
                  size="md"
                  className="rounded-full border border-[#5ad6ff]/50 bg-white/50 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#5ad6ff]/10 hover:shadow-md dark:bg-gray-800/50 dark:hover:bg-[#5ad6ff]/20"
                  aria-label="Toggle theme mode"
                >
                  {getThemeIcon()}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Theme options" className="shadow-lg">
                <DropdownItem
                  key="light"
                  startContent={
                    <FaSun className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />
                  }
                  onPress={() => setTheme("light")}
                  className={
                    theme === "light"
                      ? "bg-[#5ad6ff]/10 text-sm text-[#5ad6ff] sm:text-base"
                      : "text-sm hover:bg-[#5ad6ff]/10 sm:text-base"
                  }
                >
                  Light
                </DropdownItem>
                <DropdownItem
                  key="dark"
                  startContent={
                    <FaMoon className="h-4 w-4 text-[#5ad6ff] sm:h-5 sm:w-5" />
                  }
                  onPress={() => setTheme("dark")}
                  className={
                    theme === "dark"
                      ? "bg-[#5ad6ff]/10 text-sm text-[#5ad6ff] sm:text-base"
                      : "text-sm hover:bg-[#5ad6ff]/10 sm:text-base"
                  }
                >
                  Dark
                </DropdownItem>
                <DropdownItem
                  key="system"
                  startContent={
                    <FaComputer className="h-4 w-4 text-gray-500 sm:h-5 sm:w-5" />
                  }
                  onPress={() => setTheme("system")}
                  className={
                    theme === "system"
                      ? "bg-[#5ad6ff]/10 text-sm text-[#5ad6ff] sm:text-base"
                      : "text-sm hover:bg-[#5ad6ff]/10 sm:text-base"
                  }
                >
                  System
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="max-h-[calc(100vh-64px)] overflow-auto border-t border-[#5ad6ff]/30 bg-white/95 pt-2 backdrop-blur-lg dark:bg-gray-900/95">
          {anchors.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={
                  "relative w-full overflow-hidden rounded-lg p-2 transition-all duration-300 ease-in-out" +
                  (activeAnchor === item
                    ? "translate-x-1 transform bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] text-white dark:from-[#749bff] dark:to-[#b45ca7]"
                    : "text-gray-700 hover:translate-x-1 hover:bg-[#5ad6ff]/10 hover:text-[#5ad6ff] dark:text-gray-300 dark:hover:bg-[#5ad6ff]/20")
                }
                href={`#${item}`}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{navbarAnchorMap[item]}</span>
                {activeAnchor === item && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] opacity-100 transition-opacity duration-300 dark:from-[#749bff] dark:to-[#b45ca7]"></span>
                )}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="mx-2 my-2 border-t border-[#5ad6ff]/20"></div>
          <p className="mx-4 mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            Theme
          </p>
          <NavbarMenuItem>
            <Button
              className={
                "mx-2 flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 " +
                (theme === "light"
                  ? "bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#5ad6ff] shadow-sm"
                  : "bg-transparent text-gray-700 hover:bg-[#5ad6ff]/10 hover:text-[#5ad6ff] hover:shadow-sm dark:text-gray-300 dark:hover:bg-[#5ad6ff]/20")
              }
              variant="light"
              onPress={() => setTheme("light")}
            >
              <FaSun className="h-5 w-5 text-amber-400" />
              <span className="text-base">Light</span>
              {theme === "light" && (
                <span className="ml-auto rounded-full bg-[#5ad6ff]/20 px-2 py-0.5 text-sm text-[#5ad6ff]">
                  Active
                </span>
              )}
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              className={
                "mx-2 flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 " +
                (theme === "dark"
                  ? "bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#5ad6ff] shadow-sm"
                  : "bg-transparent text-gray-700 hover:bg-[#5ad6ff]/10 hover:text-[#5ad6ff] hover:shadow-sm dark:text-gray-300 dark:hover:bg-[#5ad6ff]/20")
              }
              variant="light"
              onPress={() => setTheme("dark")}
            >
              <FaMoon className="h-5 w-5 text-[#5ad6ff]" />
              <span className="text-base">Dark</span>
              {theme === "dark" && (
                <span className="ml-auto rounded-full bg-[#5ad6ff]/20 px-2 py-0.5 text-sm text-[#5ad6ff]">
                  Active
                </span>
              )}
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              className={
                "mx-2 flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 " +
                (theme === "system"
                  ? "bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 text-[#5ad6ff] shadow-sm"
                  : "bg-transparent text-gray-700 hover:bg-[#5ad6ff]/10 hover:text-[#5ad6ff] hover:shadow-sm dark:text-gray-300 dark:hover:bg-[#5ad6ff]/20")
              }
              variant="light"
              onPress={() => setTheme("system")}
            >
              <FaComputer className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-base">System</span>
              {theme === "system" && (
                <span className="ml-auto rounded-full bg-[#5ad6ff]/20 px-2 py-0.5 text-sm text-[#5ad6ff]">
                  Active
                </span>
              )}
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
