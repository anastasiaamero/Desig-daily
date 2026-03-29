import { motion } from "motion/react";

export function About() {
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
            Information
          </div>
          <h1 className="text-6xl md:text-7xl tracking-tight leading-[0.85]">
            Design<br />Daily
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-12"
        >
          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight">Mission</h2>
            <p className="text-base leading-relaxed text-foreground/80">
              Design Daily is a curated platform showcasing exceptional contemporary work across graphic design, architecture, typography, and visual culture. Each day, we feature a single piece that exemplifies innovation, craft, and conceptual rigor.
            </p>
          </div>

          {/* Approach */}
          <div className="space-y-4 border-t border-foreground/10 pt-8">
            <h2 className="text-2xl tracking-tight">Approach</h2>
            <p className="text-base leading-relaxed text-foreground/80">
              We believe in the power of focused attention. By presenting one work at a time, we create space for deep engagement with design as both practice and philosophy. Our editorial voice champions experimental thinking and challenges conventional aesthetics.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-4 border-t border-foreground/10 pt-8">
            <h2 className="text-2xl tracking-tight">Categories</h2>
            <ul className="space-y-2 text-base">
              <li className="flex items-baseline gap-3">
                <span className="text-accent">—</span>
                <span>Graphic Design</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-accent">—</span>
                <span>Architecture</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-accent">—</span>
                <span>Installation</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-accent">—</span>
                <span>Product Design</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-accent">—</span>
                <span>Typography</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-accent">—</span>
                <span>Editorial</span>
              </li>
            </ul>
          </div>

          {/* Colophon */}
          <div className="space-y-4 border-t border-foreground/10 pt-8">
            <h2 className="text-2xl tracking-tight">Colophon</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Interface designed with experimental typography and asymmetric layouts inspired by contemporary art spaces and editorial design.
              </p>
              <p>
                Built with React, Motion, and Tailwind CSS.
              </p>
              <p className="text-[10px] uppercase tracking-widest pt-4">
                © 2026 Design Daily
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 border-t border-foreground/10 pt-8">
            <h2 className="text-2xl tracking-tight">Connect</h2>
            <div className="space-y-3">
              <a
                href="mailto:hello@designdaily.com"
                className="block text-accent hover:underline"
              >
                hello@designdaily.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-accent hover:underline"
              >
                @designdaily
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
