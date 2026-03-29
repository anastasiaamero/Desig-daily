import { Outlet } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Outlet />
    </div>
  );
}