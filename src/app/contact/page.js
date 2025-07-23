export default function Contact() {
  return (
    <section className="max-w-lg mx-auto space-y-6 pt-24">
      <h2 className="text-3xl font-extrabold mb-2">Contact</h2>
      <p className="text-zinc-600 dark:text-zinc-300 text-base mb-4">Feel free to reach out for collaborations, questions, or just to say hi!</p>
      <form
        action="https://formsubmit.co/your@email.com"
        method="POST"
        className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-lg shadow-md hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary active:scale-95"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}