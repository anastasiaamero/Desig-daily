import { useParams, Link } from "react-router";
import { getWorkById } from "../data/works";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function WorkDetail() {
  const { id } = useParams();
  const work = getWorkById(Number(id));

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Work Not Found</h1>
          <Link to="/" className="text-accent hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-6 left-6 z-40"
      >
        <Link
          to="/"
          className="w-12 h-12 flex items-center justify-center bg-accent text-accent-foreground hover:scale-110 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[60vh] bg-secondary overflow-hidden"
      >
        <img
          src={work.imageUrl}
          alt={work.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-32" />
      </motion.div>

      {/* Content */}
      <div className="px-6 -mt-16 relative z-10">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Category Tag */}
            <div className="inline-block bg-accent text-accent-foreground px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              {work.category}
            </div>

            {/* Title Section */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl tracking-tight leading-[0.95]">
                {work.title}
              </h1>
              <div className="flex items-baseline gap-4 text-xl">
                <span className="text-foreground">{work.artist}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{work.year}</span>
              </div>
              {work.medium && (
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {work.medium}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="border-t border-foreground/10 pt-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                {work.description}
              </p>
            </div>

            {/* Meta Information */}
            <div className="border-t border-foreground/10 pt-8 space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Category
                </div>
                <div className="text-base">{work.category}</div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Year
                </div>
                <div className="text-base">{work.year}</div>
              </div>

              {work.medium && (
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Medium
                  </div>
                  <div className="text-base">{work.medium}</div>
                </div>
              )}
            </div>

            {/* Spacer for visual breathing room */}
            <div className="h-12" />

            {/* Share/External */}
            <div className="border-t border-foreground/10 pt-8">
              <button className="flex items-center gap-3 text-accent hover:gap-4 transition-all">
                <span className="text-sm uppercase tracking-widest">
                  Share This Work
                </span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Browse More */}
            <div className="mt-12 pt-8 border-t border-foreground/10">
              <Link
                to="/categories"
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
              >
                ← Browse More Works
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
