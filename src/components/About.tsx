const skills = [
  "Microsoft Azure",
  "Digital Transformation",
  "Amazon Web Services",
  "Google Cloud Platform",
  "Artificial Intelligence",
  "Platform Engineering",
  "Cloud Architecture",
  "FinOps",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20"
    >
      <h2 className="section-heading">
        <span className="font-mono text-accent text-base">01.</span>
        About Me
      </h2>

      <div className="grid md:grid-cols-[3fr_2fr] gap-12 lg:gap-16">
        {/* Bio */}
        <div className="space-y-5 text-muted leading-relaxed">
          <p>
            With over{" "}
            <span className="text-accent font-medium">13+ years </span>{" "}
            dedicated to cloud technology, I&apos;ve built a career at the
            intersection of enterprise technology and real-world business
            outcomes. I help organizations worldwide harness the transformative
            power of Cloud and AI to drive competitive advantage and measurable
            results.
          </p>
          <p>
            Recognized as a{" "}
            <span className="text-faint font-medium">Microsoft MVP</span> and{" "}
            <span className="text-faint font-medium">Google Leader</span>, I
            bring deep multi-cloud expertise and a vendor-agnostic perspective
            to every engagement. I&apos;m passionate about making complex
            technology accessible — whether that&apos;s through advisory work,
            speaking, content creation, or community building.
          </p>
          <p>
            Beyond the technical work, I actively contribute to the global cloud
            community through events like{" "}
            <span className="text-faint">Cloud Summit</span> and{" "}
            <span className="text-faint">AWS Community Day</span>, and have been
            featured on CBC Radio discussing AI&apos;s impact on society. Based
            in Vancouver, Canada.
          </p>

          <div className="pt-2">
            <p className="text-faint mb-4 text-sm font-mono">
              Technologies &amp; Domains:
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-muted">
                  <span className="text-accent text-xs">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats card */}
        <div className="flex flex-col gap-4">
          {/* Book announcement */}
          <div className="bg-surface rounded-lg border border-accent/40 hover:border-accent/70 transition-colors duration-300 overflow-hidden group">
            <div className="bg-accent/10 px-4 py-2 flex items-center justify-between border-b border-accent/20">
              <span className="font-mono text-accent text-xs uppercase tracking-widest font-medium">
                Coming 2026
              </span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-accent"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="p-5">
              <div className="flex gap-4 items-start">
                {/* Mini book spine */}
                <div className="flex-shrink-0 w-12 rounded flex flex-col items-center justify-start border border-accent/30 bg-navy shadow-md shadow-accent/10 pt-3 pb-4 px-1.5 gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <div className="w-6 h-px bg-accent/40" />
                  <div className="w-4 h-px bg-accent/25" />
                  <div className="w-5 h-px bg-accent/25" />
                  <div className="w-3 h-px bg-accent/20" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-sm text-accent uppercase tracking-wider mb-1">
                    New Book
                  </p>
                  <h4 className="text-bright font-bold text-3xl leading-snug mb-1 group-hover:text-accent transition-colors duration-200">
                    5,000 Days in Cloud
                  </h4>
                  <p className="font-mono text-xs text-dim">
                    by Matthew Carolan
                  </p>
                </div>
              </div>
              <p className="text-muted text-xs leading-relaxed mt-4 border-t border-surface2 pt-4">
                Stories, mistakes, and insights from technological disruption.
                What it does to people and organisations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface rounded-lg p-5 border border-surface2 hover:border-accent/30 transition-colors duration-300 text-center">
              <div className="text-2xl font-bold text-bright mb-1">3</div>
              <div className="text-muted text-xs font-mono leading-tight">
                Major Cloud
                <br />
                Platforms
              </div>
            </div>
            <div className="bg-surface rounded-lg p-5 border border-surface2 hover:border-accent/30 transition-colors duration-300 text-center">
              <div className="text-2xl font-bold text-bright mb-1">10K+</div>
              <div className="text-muted text-xs font-mono leading-tight">
                YouTube
                <br />
                Subscribers
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-surface2 hover:border-accent/30 transition-colors duration-300">
            <div className="text-faint text-xs font-mono mb-3 uppercase tracking-widest">
              Location
            </div>
            <div className="text-bright font-medium flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent flex-shrink-0"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Vancouver, Canada
            </div>
            <div className="text-muted text-xs mt-2 font-mono">
              Cloud &amp; AI Technology Leader
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
