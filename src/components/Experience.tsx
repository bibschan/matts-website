import Image from "next/image";

const clients = [
  {
    name: "NASA",
    category: "Aerospace & Government",
    description:
      "Delivered cloud strategy and architecture consulting for one of the world's most mission-critical organizations.",
    url: "https://www.nasa.gov",
    logo: "/logos/nasa.svg",
  },
  {
    name: "Deutsche Bank",
    category: "Financial Services",
    description:
      "Guided cloud migration and modernization initiatives for a global financial institution with strict compliance requirements.",
    url: "https://www.db.com",
    logo: "/logos/deutschebank.png",
  },
  {
    name: "McDonald's",
    category: "Retail & Consumer",
    description:
      "Supported cloud transformation at global scale, enabling faster innovation and improved customer experiences.",
    url: "https://www.mcdonalds.com",
    logo: "/logos/mcdonalds.svg",
  },
  {
    name: "Brookfield",
    category: "Asset Management",
    description:
      "Partnered on cloud infrastructure and AI adoption strategies for one of the world's largest alternative asset managers.",
    url: "https://www.brookfield.com",
    logo: "/logos/brookfield.png",
  },
  {
    name: "WorkSafeBC",
    category: "Public Sector",
    description:
      "Led cloud enablement and digital transformation initiatives to modernize critical public-sector services in British Columbia.",
    url: "https://www.worksafebc.com",
    logo: "/logos/worksafebc.jpg",
  },
  {
    name: "BlueCross BlueShield",
    category: "Healthcare",
    description:
      "Enabled secure, compliant cloud adoption for one of the largest healthcare insurance providers in North America.",
    url: "https://www.bcbs.com",
    logo: "/logos/bcbs.png",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20"
    >
      <h2 className="section-heading">
        <span className="font-mono text-accent text-base">02.</span>
        Experience
      </h2>

      <p className="text-muted max-w-2xl mb-12 leading-relaxed">
        Trusted by global enterprises across industries to navigate complex cloud
        and AI transformations. Here are some of the organizations I&apos;ve
        had the privilege of working with.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <a
            key={client.name}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface rounded-lg p-6 border border-surface2 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-mono text-xs text-muted bg-surface2 px-2 py-1 rounded">
                {client.category}
              </span>
            </div>
            <h3 className="text-bright font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
              {client.name}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </h3>
            <p className="text-muted text-sm leading-relaxed mt-auto">
              {client.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
