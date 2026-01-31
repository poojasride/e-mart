import letter from "../assets/love-letter.png";

function ContactSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#EEF2FF] to-[#F8FAFC]">
      {/* Glass Card */}
      <div className="relative mx-auto max-w-3xl rounded-3xl bg-white/80 backdrop-blur-xl border border-[#E5E7EB] shadow-[0_20px_40px_rgba(15,23,42,0.08)] p-10 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <img src={letter} alt="Newsletter" className="w-16 h-16" />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
          Subscribe to our Newsletter
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm md:text-base text-[#475569] max-w-xl mx-auto">
          Get the latest product updates, exclusive offers, and curated deals
          delivered straight to your inbox.
        </p>

        {/* Input + Button */}
        <div className="mt-8 flex items-center max-w-xl mx-auto bg-white rounded-full border border-[#E5E7EB] overflow-hidden shadow-sm">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 text-sm text-[#0F172A] placeholder-[#475569] outline-none"
          />
          <button className="bg-[#4F46E5] text-white px-6 py-3 text-sm font-medium hover:bg-[#3730A3] transition">
            Subscribe
          </button>
        </div>

        {/* Privacy Note */}
        <p className="mt-4 text-xs text-[#475569]">
          We respect your privacy. No spam, ever.
        </p>

        {/* Divider */}
        <div className="my-8 h-px bg-[#E5E7EB]" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#475569]">
          <p>© 2026 UrbanCart. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#4F46E5] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#4F46E5] transition">
              Terms
            </a>
            <a href="#" className="hover:text-[#4F46E5] transition">
              Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
