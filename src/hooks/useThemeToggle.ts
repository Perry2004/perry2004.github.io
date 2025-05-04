import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export function useThemeToggle() {
  const getSystemTheme = (): "light" | "dark" => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Sync initial theme with localStorage
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem(
      "perryz.net-theme-preference",
    ) as Theme | null;
    if (
      savedTheme &&
      (savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system")
    ) {
      return savedTheme;
    }

    // default
    return "system";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(
    theme === "system" ? getSystemTheme() : (theme as "light" | "dark"),
  );

  // Apply theme to HTML document and save to localStorage
  useEffect(() => {
    localStorage.setItem("perryz.net-theme-preference", theme);

    const newResolvedTheme =
      theme === "system" ? getSystemTheme() : (theme as "light" | "dark");
    setResolvedTheme(newResolvedTheme);

    // the theme class is applied to the root <html> element
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newResolvedTheme);
  }, [theme]);

  // sync with system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        const newResolvedTheme = getSystemTheme();
        setResolvedTheme(newResolvedTheme);

        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(newResolvedTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    isDark: resolvedTheme === "dark",
  };
}
