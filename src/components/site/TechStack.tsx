const stack = ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Python", "C", "C++", "Node.js", "Tailwind", "Next.js", "SEO"];

export function TechStack() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Our Toolkit</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Technologies <span className="text-gradient-primary">We Master</span>
          </h2>
        </div>

        <div className="glass-strong rounded-3xl p-8 lg:p-12 shadow-elegant">
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((t) => (
              <span
                key={t}
                className="px-5 py-2.5 rounded-full border border-border bg-card text-sm font-mono hover:bg-gradient-primary hover:border-transparent hover:shadow-glow transition-smooth cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
