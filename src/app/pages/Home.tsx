import { Link } from "react-router";
import { getTodaysWork } from "../data/works";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Home() {
  const work = getTodaysWork();
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="min-h-screen pb-32 pt-8 px-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Design Daily
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {formattedDate}
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tight leading-[0.9] mt-8">
            Work<br />of the<br />Day
          </h1>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link to={`/work/${work.id}`} className="block group">
            {/* Image */}
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-secondary">
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full p-6">
                <div className="bg-accent text-accent-foreground px-3 py-1 text-xs uppercase tracking-widest inline-block">
                  {work.category}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <h2 className="text-3xl tracking-tight leading-none">
                    {work.title}
                  </h2>
                  <span className="text-sm text-muted-foreground ml-4">
                    {work.year}
                  </span>
                </div>
                <div className="text-lg text-muted-foreground">
                  {work.artist}
                </div>
              </div>

              <p className="text-base leading-relaxed text-foreground/80">
                {work.description}
              </p>

              <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all">
                <span className="text-sm uppercase tracking-widest">
                  View Details
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-foreground/10"
        >
          <p className="text-xs text-muted-foreground leading-relaxed">
            A new work is featured every day. Explore the archive to discover more contemporary design, architecture, and visual culture.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
