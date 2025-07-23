export default function Projects() {
  const projects = [
    {
      name: "LinkTree Clone",
      description: "A bio page generator with Stripe paywall integration.",
      link: "#",
    },
    {
      name: "Resume Builder",
      description: "PDF resume creator with live preview and export.",
      link: "#",
    },
    {
      name: "Portfolio Generator",
      description: "Create and deploy your own portfolio in minutes.",
      link: "#",
    },
    {
      name: "Markdown Blog",
      description: "A minimal markdown-powered blog platform.",
      link: "#",
    },
  ];
  return (
    <section className="max-w-2xl mx-auto space-y-6 pt-24">
      <h2 className="text-3xl font-extrabold mb-2">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className="block rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-primary group"
            tabIndex={0}
          >
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-200">{project.name}</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}