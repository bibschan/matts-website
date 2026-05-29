type Event = {
  name: string;
  role: string;
  description: string;
  url?: string;
};

const events: Event[] = [
  {
    name: "Cloud Summit",
    role: "Organizer & Speaker",
    description:
      "Co-organizer of Cloud Summit, bringing together cloud professionals from across the Pacific Northwest for a premier cloud computing conference.",
    url: "https://cloudsummit.ca/",
  },
  {
    name: "HackerRivals",
    role: "Creator",
    description:
      "Creator of HackerRivals — the world's first esports-style hackathon, blending competitive coding with the energy and format of professional esports events.",
    url: "https://hackerrivals.com/",
  },
  {
    name: "AWS Community Day",
    role: "Speaker & Leader",
    description:
      "Regular speaker and community leader at AWS Community Day events across Canada, driving education and connection in the AWS ecosystem.",
    url: "https://www.awsday.ca/",
  },
  {
    name: "AWS User Groups",
    role: "Leader",
    description:
      "Active leadership role in AWS User Groups, facilitating regular meetups that help practitioners share knowledge and advance their cloud skills.",
    url: "https://awscanada.ca/",
  },
  {
    name: "Azure Canada User Group",
    role: "Speaker & Community Builder",
    description:
      "Contributing speaker and community builder for the Azure Canada User Group, helping Microsoft Azure practitioners connect and grow.",
    url: "https://www.azurecanada.ca/",
  },
];

const media = [
  {
    outlet: "CBC The Early Edition",
    host: "Stephen Quinn",
    topic: "AI & Society",
    description: "Discussed the implications of AI and OpenAI's developments on everyday Canadians.",
  },
  {
    outlet: "CBC On the Island",
    host: "Gregor Craigie",
    topic: "Technology & Loneliness",
    description: "Featured discussion on technology's role in addressing loneliness as a global health concern.",
  },
  {
    outlet: "CBC Daybreak Series",
    host: "Carolina de Ryk · Chris Walker · Shelly Joyce",
    topic: "AI Impact",
    description: "Contributed expert commentary on artificial intelligence's growing impact across Canadian communities.",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20"
    >
      <h2 className="section-heading">
        <span className="font-mono text-accent text-base">04.</span>
        Community &amp; Speaking
      </h2>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Events */}
        <div>
          <h3 className="font-mono text-faint text-sm uppercase tracking-widest mb-6">
            Events &amp; Conferences
          </h3>
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.name}
                className="border-l-2 border-surface2 hover:border-accent pl-6 transition-colors duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  {event.url ? (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bright font-semibold group-hover:text-accent transition-colors duration-200 hover:underline inline-flex items-center gap-1"
                    >
                      {event.name}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ) : (
                    <h4 className="text-bright font-semibold group-hover:text-accent transition-colors duration-200">
                      {event.name}
                    </h4>
                  )}
                  <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded self-start sm:self-auto">
                    {event.role}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          {/* Discord CTA */}
          <div className="mt-8 bg-surface rounded-lg p-6 border border-surface2 hover:border-accent/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent flex-shrink-0">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.022.015.04.032.05a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.04.001-.088-.041-.104a13.2 13.2 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              <h4 className="text-bright font-semibold">Join the Community</h4>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Connect with cloud professionals, ask questions, and stay up to
              date with the latest in Cloud &amp; AI.
            </p>
            <a
              href="https://discord.gg/wg372JtEK8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent hover:underline inline-flex items-center gap-2"
            >
              Join Discord Server
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Media */}
        <div>
          <h3 className="font-mono text-faint text-sm uppercase tracking-widest mb-6">
            Media Appearances
          </h3>
          <div className="space-y-5">
            {media.map((item) => (
              <div
                key={item.outlet}
                className="bg-surface rounded-lg p-5 border border-surface2 hover:border-accent/30 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  </svg>
                  <span className="text-bright font-semibold text-sm group-hover:text-accent transition-colors duration-200">
                    {item.outlet}
                  </span>
                  <span className="font-mono text-xs text-muted bg-surface2 px-2 py-0.5 rounded ml-auto">
                    {item.topic}
                  </span>
                </div>
                <p className="font-mono text-xs text-accent/70 mb-2 pl-7">
                  with {item.host}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* YouTube CTA */}
          <div className="mt-5 bg-surface rounded-lg p-6 border border-surface2 hover:border-[#ff0000]/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#ff0000] flex-shrink-0">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <h4 className="text-bright font-semibold">YouTube Channel</h4>
              <span className="font-mono text-xs text-[#ff0000] bg-[#ff0000]/10 px-2 py-0.5 rounded ml-auto">10K+</span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Cloud &amp; AI tutorials, deep dives, and industry insights to help
              you get ahead in the world of modern technology.
            </p>
            <a
              href="https://www.youtube.com/@PublicCloudNinja"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-[#ff0000] hover:underline inline-flex items-center gap-2"
            >
              Watch on YouTube
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
