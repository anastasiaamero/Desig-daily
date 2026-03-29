import { useState } from "react";
import { Link } from "react-router";
import { categories, getWorksByCategory } from "../data/works";
import { motion } from "motion/react";

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const works = getWorksByCategory(selectedCategory);

  return (
    <div className="min-h-screen pb-32 pt-8 px-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Archive
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tight leading-[0.9]">
            Explore<br />by<br />Category
          </h1>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 space-y-0 border-y border-foreground py-6"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left py-3 px-0 transition-colors border-b border-foreground/10 last:border-0 ${
                selectedCategory === category
                  ? "text-accent"
                  : "text-foreground hover:text-accent"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-lg uppercase tracking-wide">
                  {category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Works Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            {works.length} {works.length === 1 ? "Work" : "Works"}
          </div>

          <div className="space-y-12">
            {works.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link to={`/work/${work.id}`} className="block group">
                  <div className="flex gap-4 items-start">
                    {/* Number */}
                    <div className="text-sm text-muted-foreground pt-1 min-w-[2rem]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Image */}
                    <div className="w-24 h-32 flex-shrink-0 overflow-hidden bg-secondary">
                      <img
                        src={work.imageUrl}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl mb-1 leading-tight group-hover:text-accent transition-colors">
                        {work.title}
                      </h3>
                      <div className="text-sm text-muted-foreground mb-2">
                        {work.artist}, {work.year}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-accent">
                        {work.category}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
