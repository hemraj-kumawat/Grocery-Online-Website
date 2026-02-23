import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-zinc-200">
      {/* Top Footer */}
      <div className="px-6 md:px-10 py-12 border-b border-zinc-300">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

          {/* Logo & About */}
          <div className="text-center">
            <a
              href="#"
              className="text-zinc-700 font-bold text-2xl md:text-3xl tracking-wide"
            >
              Gr<span className="text-orange-500 uppercase">o</span>cery Online
            </a>
            <p className="text-zinc-600 mt-4 font-semibold leading-relaxed">
              Grocery Online is your trusted destination for fresh groceries,
              daily essentials, and quality products delivered to your doorstep.
            </p>
          </div>

          {/* Company */}
          <div className="text-center">
            <h4 className="text-zinc-700 text-xl font-bold">Company</h4>
            <ul className="mt-4 space-y-3">
              {["About", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-zinc-600 hover:text-orange-500 transition font-semibold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-center">
            <h4 className="text-zinc-700 text-xl font-bold">Support</h4>
            <ul className="mt-4 space-y-3">
              {["Support Center", "Feedback"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-zinc-600 hover:text-orange-500 transition font-semibold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="text-center">
            <h4 className="text-zinc-700 text-xl font-bold">
              Stay Connected
            </h4>

            <p className="mt-4 text-zinc-600 font-semibold">
              Subscribe for updates & offers
            </p>

            <p className="mt-2 text-zinc-600 font-semibold">
              Get the best deals delivered to your inbox.
            </p>

            <div className="flex items-center mt-4 bg-white rounded-md p-1 w-full max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 h-10 focus:outline-none placeholder-zinc-400 rounded-md"
              />
              <button className="bg-orange-500 p-2 text-2xl text-white rounded-lg transition hover:bg-amber-600">
                <IoIosArrowForward />
              </button>
            </div>

            <p className="mt-4 text-zinc-600 text-xs">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-zinc-700 text-center text-sm px-5 py-4 font-semibold">
        Privacy Policy | Terms & Conditions | Refund Policy • © 2026 Hemraj
        Kumawat
      </div>
    </footer>
  );
}

export default Footer;