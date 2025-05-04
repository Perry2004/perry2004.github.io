import { useActiveAnchor, useThemeToggle } from "@/hooks";
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
  const { theme, setTheme } = useThemeToggle();

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <FaSun className="h-4 w-4 text-yellow-500" />;
      case "dark":
        return <FaMoon className="h-4 w-4 text-blue-500" />;
      case "system":
        return (
          <FaComputer className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        );
    }
  };

  return (
    <div className="fixed top-0 z-10 w-full bg-white/80 backdrop-blur-md dark:bg-gray-900/90">
      <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
        <NavbarBrand>
          <p className="font-great-vibes text-2xl font-bold dark:text-white">
            Perry Zhu
          </p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          {anchors.map((anchor) => (
            <NavbarItem key={anchor} className="hidden sm:block">
              <Link href={`#${anchor}`} target="_self">
                <Button
                  className={
                    "text-md" +
                    " " +
                    (activeAnchor === anchor
                      ? "bg-indigo-300 dark:bg-indigo-600"
                      : "dark:text-white")
                  }
                >
                  {navbarAnchorMap[anchor]}
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
                  className="rounded-full"
                  aria-label="Toggle theme mode"
                >
                  {getThemeIcon()}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Theme options">
                <DropdownItem
                  key="light"
                  startContent={<FaSun className="h-4 w-4 text-yellow-500" />}
                  onPress={() => setTheme("light")}
                  className={
                    theme === "light" ? "bg-gray-100 dark:bg-gray-800" : ""
                  }
                >
                  Light
                </DropdownItem>
                <DropdownItem
                  key="dark"
                  startContent={<FaMoon className="h-4 w-4 text-blue-500" />}
                  onPress={() => setTheme("dark")}
                  className={
                    theme === "dark" ? "bg-gray-100 dark:bg-gray-800" : ""
                  }
                >
                  Dark
                </DropdownItem>
                <DropdownItem
                  key="system"
                  startContent={
                    <FaComputer className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  }
                  onPress={() => setTheme("system")}
                  className={
                    theme === "system" ? "bg-gray-100 dark:bg-gray-800" : ""
                  }
                >
                  System
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="dark:bg-gray-800">
          {anchors.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={
                  "w-full" +
                  " " +
                  (activeAnchor === item
                    ? "bg-indigo-300 dark:bg-indigo-600"
                    : "dark:text-gray-300")
                }
                href={`#${item}`}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                {navbarAnchorMap[item]}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <div className="flex items-center gap-2">
              <FaSun className="h-4 w-4 text-yellow-500" />
              <Button
                className="w-full justify-start pl-2"
                variant="light"
                onPress={() => setTheme("light")}
              >
                Light
              </Button>
            </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <div className="flex items-center gap-2">
              <FaMoon className="h-4 w-4 text-blue-500" />
              <Button
                className="w-full justify-start pl-2"
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
                className="w-full justify-start pl-2"
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
