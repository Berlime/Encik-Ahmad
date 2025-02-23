export function toggleTheme() {
  const root = window.document.documentElement;
  root.classList.toggle("dark");

  const isDark = root.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export function initTheme() {
  const root = window.document.documentElement;
  const theme = localStorage.getItem("theme") || "light";

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}
