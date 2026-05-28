export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      <a
        href="https://www.mattcarolan.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200 leading-relaxed"
      >
        <div>Designed &amp; Built by Matt Carolan</div>
        <div className="text-dim mt-1">mattcarolan.com</div>
      </a>
    </footer>
  );
}
