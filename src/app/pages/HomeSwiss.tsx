import { useState } from "react";
import { getTodaysWork, works } from "../data/works";
import { ArrowRight, Menu } from "lucide-react";
import svgPaths from "../../imports/svg-hnp1vz6cdf";

export function HomeSwiss() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"En" | "Ru">("En");

  const currentWork = works[currentIndex];

  const nextWork = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevWork = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "En" ? "Ru" : "En"));
  };

  return (
    <div className="min-h-screen bg-background relative">
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
      <div className="max-w-md mx-auto px-3 pt-20 pb-8">
        {/* Image Card */}
        <div className="relative bg-[#d9d9d9] aspect-[4/5] mb-6">
          <img
            src={currentWork.imageUrl}
            alt={currentWork.title}
            className="w-full h-full object-cover"
          />
          {/* Close Button */}
          <button
            onClick={prevWork}
            className="absolute top-4 right-4 w-5 h-5"
            aria-label="Previous"
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

          {/* Next Button */}
          <button
            onClick={nextWork}
            className="w-16 h-16 rounded-full border-[3px] border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            aria-label="Next work"
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
