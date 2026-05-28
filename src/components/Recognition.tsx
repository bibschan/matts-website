const awards = [
  {
    title: "Microsoft MVP",
    org: "Microsoft",
    stat: "8 Years",
    statLabel: "consecutive award",
    description:
      "Microsoft Most Valuable Professional — awarded to technology experts who actively share knowledge with the community. Recognized for 8 consecutive years for outstanding contributions in Microsoft Azure and cloud technologies.",
    icon: (
      <svg viewBox="0 0 23 23" fill="currentColor" className="w-7 h-7">
        <path d="M0 0h11v11H0z" fill="#f25022" />
        <path d="M12 0h11v11H12z" fill="#7fba00" />
        <path d="M0 12h11v11H0z" fill="#00a4ef" />
        <path d="M12 12h11v11H12z" fill="#ffb900" />
      </svg>
    ),
    accentColor: "#00a4ef",
    borderColor: "hover:border-[#00a4ef]/50",
    glowColor: "group-hover:shadow-[0_0_30px_-8px_#00a4ef33]",
  },
  {
    title: "AWS Community Leader",
    org: "Amazon Web Services",
    stat: "Canada",
    statLabel: "community region",
    description:
      "Recognized as a leader within the AWS community in Canada, organizing and driving initiatives that help cloud practitioners learn, connect, and grow across the AWS ecosystem.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.319-.08-.063-.056-.12-.16-.151-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.51.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.542-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.157.167z" />
      </svg>
    ),
    accentColor: "#ff9900",
    borderColor: "hover:border-[#ff9900]/50",
    glowColor: "group-hover:shadow-[0_0_30px_-8px_#ff990033]",
  },
  {
    title: "Google Leader",
    org: "Google Cloud",
    stat: "GCP",
    statLabel: "platform expertise",
    description:
      "Recognized by Google as a community leader in the Google Cloud space, contributing to the growth of cloud knowledge and best practices across the ecosystem.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285f4"/>
      </svg>
    ),
    accentColor: "#4285f4",
    borderColor: "hover:border-[#4285f4]/50",
    glowColor: "group-hover:shadow-[0_0_30px_-8px_#4285f433]",
  },
  {
    title: "YouTube Creator",
    org: "YouTube",
    stat: "10K+",
    statLabel: "subscribers",
    description:
      "Reached 10,000 subscribers on YouTube — a testament to the value of cloud and AI education content shared on the channel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    accentColor: "#ff0000",
    borderColor: "hover:border-[#ff0000]/50",
    glowColor: "group-hover:shadow-[0_0_30px_-8px_#ff000033]",
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20"
    >
      <h2 className="section-heading">
        <span className="font-mono text-accent text-base">03.</span>
        Recognition &amp; Awards
      </h2>

      <p className="text-muted max-w-2xl mb-12 leading-relaxed">
        Recognized across the world&apos;s top cloud platforms for expertise,
        community contributions, and thought leadership.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {awards.map((award) => (
          <div
            key={award.title}
            className={`bg-surface rounded-xl p-8 border border-surface2 ${award.borderColor} ${award.glowColor} hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-6`}
          >
            {/* Top row: icon + stat */}
            <div className="flex items-start justify-between">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${award.accentColor}18` }}
              >
                <span style={{ color: award.accentColor }}>{award.icon}</span>
              </div>
              <div className="text-right">
                <div
                  className="text-3xl font-bold font-mono leading-none"
                  style={{ color: award.accentColor }}
                >
                  {award.stat}
                </div>
                <div className="text-muted text-xs font-mono mt-1 uppercase tracking-wider">
                  {award.statLabel}
                </div>
              </div>
            </div>

            {/* Bottom: org + title + description */}
            <div>
              <div className="font-mono text-xs text-muted mb-1 uppercase tracking-widest">
                {award.org}
              </div>
              <h3 className="text-bright font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-200">
                {award.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
