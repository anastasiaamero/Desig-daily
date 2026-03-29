import { Link, useLocation } from "react-router";
import { Home, Grid3x3, Info } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Today", icon: Home },
    { path: "/categories", label: "Archive", icon: Grid3x3 },
    { path: "/about", label: "Info", icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-safe">
      <div className="w-full max-w-md bg-background border-t border-foreground mx-4 mb-4">
        <div className="flex items-center justify-around h-16">
          {links.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center justify-center gap-1 px-6 transition-colors ${
                  isActive ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[10px] uppercase tracking-widest">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
