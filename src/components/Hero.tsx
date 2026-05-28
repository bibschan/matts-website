import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background image */}
      <Image
        src="/1.jpeg"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark gradient overlay — heavier on the left where the text lives */}
      <div className="absolute inset-0 bg-linear-to-r from-navy/95 via-navy/75 to-navy/10" />
      {/* Bottom fade so it blends into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pt-20">
        <p className="font-mono text-accent text-sm md:text-base mb-5 tracking-widest">
          Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-bright leading-none mb-4">
          Matt Carolan.
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted leading-tight mb-8">
          Cloud &amp; AI Technology Leader.
        </h2>

        <p className="max-w-xl text-muted text-base md:text-lg leading-relaxed mb-12">
          Inspiring others and enabling businesses globally to gain a competitive
          advantage with Cloud and AI. Based in{" "}
          <span className="text-accent">Vancouver, Canada</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#experience"
            className="font-mono text-sm text-accent border border-accent rounded px-8 py-4 hover:bg-accent/10 transition-colors duration-200 text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="font-mono text-sm text-faint border border-dim rounded px-8 py-4 hover:border-accent hover:text-accent transition-colors duration-200 text-center"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Social links - vertical on the side for desktop */}
      <div className="hidden lg:flex fixed left-12 bottom-0 flex-col items-center gap-6 z-20 after:content-[''] after:block after:w-px after:h-24 after:bg-muted after:mt-2">
        <a
          href="https://www.linkedin.com/in/matthewcarolan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent hover:-translate-y-1 transition-all duration-200"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="https://twitter.com/TheMattCarolan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent hover:-translate-y-1 transition-all duration-200"
          aria-label="Twitter"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://discord.gg/wg372JtEK8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent hover:-translate-y-1 transition-all duration-200"
          aria-label="Discord"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.022.015.04.032.05a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.04.001-.088-.041-.104a13.2 13.2 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@TheMattCarolan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent hover:-translate-y-1 transition-all duration-200"
          aria-label="YouTube"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>

      {/* Email - vertical on the right for desktop */}
      <div className="hidden lg:flex fixed right-12 bottom-0 flex-col items-center gap-4 z-20 after:content-[''] after:block after:w-px after:h-24 after:bg-muted after:mt-2">
        <a
          href="mailto:matt@mattcarolan.net"
          className="font-mono text-xs text-muted hover:text-accent hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl] tracking-widest"
        >
          matt@mattcarolan.net
        </a>
      </div>
    </section>
  );
}
