import { useState } from "react";
import { works } from "../data/works";
import { Menu } from "lucide-react";
import svgPaths from "../../imports/svg-hnp1vz6cdf";

export function HomeSwiss() {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * works.length));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"En" | "Ru">("En");
  const [hasStarted, setHasStarted] = useState(false);

  const currentWork = works[currentIndex];

  const randomWork = () => {
    let newIndex: number;
    do {
      newIndex = Math.floor(Math.random() * works.length);
    } while (newIndex === currentIndex && works.length > 1);
    setCurrentIndex(newIndex);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "En" ? "Ru" : "En"));
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          {/* Menu Button */}
          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 text-background" strokeWidth={2} />
            </button>
          )}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="font-black text-lg tracking-tight"
          >
            En/Ru
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-md mx-auto px-3 pt-20 pb-8 w-full">
        {!hasStarted ? (
          /* Initial Screen - TAP HERE */
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="font-black text-[48px] leading-none tracking-tight mb-8 text-center">
              Design Daily
            </h1>
            <button
              onClick={() => {
                randomWork();
                setHasStarted(true);
              }}
              className="border-[3px] border-foreground px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors active:scale-95"
            >
              TAP HERE
            </button>
            <p className="mt-6 text-sm text-muted-foreground text-center">
              {language === "En" ? "Random design project" : "Случайный проект"}
            </p>
          </div>
        ) : (
          /* Project View */
          <div>
            {/* Image Card */}
            <div className="relative bg-[#d9d9d9] aspect-[4/5] mb-6">
              <img
                src={currentWork.imageUrl}
                alt={currentWork.title}
                className="w-full h-full object-cover"
              />
              {/* Close Button */}
              <button
                onClick={randomWork}
                className="absolute top-4 right-4 w-5 h-5"
                aria-label="Random"
              >
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 23.4318 23.4318"
                >
                  <g>
                    <path
                      d={svgPaths.p292ee900}
                      stroke="black"
                      strokeWidth="3"
                    />
                    <path
                      d={svgPaths.p3ee42a80}
                      stroke="black"
                      strokeWidth="3"
                    />
                  </g>
                </svg>
              </button>
            </div>

            {/* Title */}
            <h1 className="font-black text-[28px] leading-tight mb-4 tracking-tight">
              {language === "En"
                ? currentWork.title
                : `Работа ${currentWork.artist.split(" ")[0]}`}
            </h1>

            {/* Description */}
            <p className="font-light text-base leading-relaxed mb-8 text-foreground/90">
              {language === "En"
                ? currentWork.description
                : `Описание работы ${currentWork.description.slice(0, 100)}...`}
            </p>

            {/* Year and Category */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-black text-[28px] leading-tight mb-1">
                  {currentWork.year}
                </p>
                <p className="font-black text-[28px] leading-tight uppercase">
                  {currentWork.category.replace(" ", "")}
                </p>
              </div>

              {/* Random Button */}
              <button
                onClick={randomWork}
                className="w-16 h-16 rounded-full border-[3px] border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                aria-label="Random work"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 32.2284 22.0919"
                >
                  <path
                    d={svgPaths.p1728c00}
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="px-3 py-4 max-w-md mx-auto w-full">
        <p className="text-xs text-muted-foreground text-center">
          ©anastasiaamero
        </p>
      </footer>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex items-center justify-center">
          <div className="max-w-md w-full px-8">
              <nav className="space-y-6">
              {works.map((work, index) => (
                <button
                  key={work.id}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left"
                >
                  <div className="flex items-baseline gap-4 border-b border-foreground pb-4">
                    <span className="font-black text-2xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="font-black text-xl mb-1">{work.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {work.artist}, {work.year}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
