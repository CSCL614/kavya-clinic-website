"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

/* ─── Provider ─────────────────────────────────────────── */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemeProvider>
  );
}

/* ─── Toggle button (for Navbar) ──────────────────────── */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState("light");

  useEffect(() => {
    setMounted(true);
    const stored = document.documentElement.getAttribute("data-theme");
    if (stored) setThemeState(stored);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  if (!mounted) {
    return (
      <div
        style={{
          width: 36, height: 36, borderRadius: 10,
          background: "rgba(14,165,233,0.07)",
          border: "1px solid rgba(14,165,233,0.14)",
        }}
      />
    );
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        background: theme === "dark"
          ? "rgba(255,255,255,0.08)"
          : "rgba(14,165,233,0.07)",
        border: theme === "dark"
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(14,165,233,0.14)",
        color: theme === "dark" ? "#fbbf24" : "#64748b",
        transition: "background 0.3s, border-color 0.3s, color 0.3s",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex" }}
        >
          {theme === "dark" ? (
            <Sun style={{ width: 16, height: 16 }} />
          ) : (
            <Moon style={{ width: 16, height: 16 }} />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
