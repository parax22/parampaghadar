"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false); // ✅ NEW

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const appliedTheme = savedTheme || "light";
    setTheme(appliedTheme);

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(appliedTheme);
    setMounted(true); // ✅ mark as mounted
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) return null; // ✅ prevent mismatch

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 transition-transform hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 transition-opacity" />
      ) : (
        <Sun className="h-4 w-4 transition-opacity" />
      )}
    </Button>
  );
}
