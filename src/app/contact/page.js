export default function Contact() {
  return (
    <form
      action="https://formsubmit.co/your@email.com"
      method="POST"
      className="max-w-xl mx-auto space-y-4"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="name" placeholder="Your name" className="w-full px-4 py-2 rounded bg-white text-black" required />
      <input type="email" name="email" placeholder="Your email" className="w-full px-4 py-2 rounded bg-white text-black" required />
      <textarea name="message" placeholder="Your message" rows="5" className="w-full px-4 py-2 rounded bg-white text-black" required></textarea>
      <button type="submit" className="px-4 py-2 bg-foreground text-background rounded">Send</button>
    </form>
  );
}