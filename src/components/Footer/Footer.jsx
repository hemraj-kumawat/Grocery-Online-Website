import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    // Footer Section
    <footer className="bg-zinc-200">
      <div className="mx-10 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-6 py-10 border-b-2 border-zinc-400">
        {/* Logo */}
        <div className="text-center">
          <a
            href="#"
            className="text-zinc-700 font-bold md:text-3xl text-2xl tracking-wide"
          >
            Gr<span className="text-orange-500 uppercase">o</span>cery Online
          </a>
          <p className="text-zinc-600 mt-4 font-semibold">
            Grocery Online is your trusted destination for fresh groceries,
            daily essentials, and quality products delivered to your doorstep.
          </p>
        </div>

        {/* Company */}
        <div className="text-center">
          <h4 className="text-zinc-700 text-2xl font-bold">Company</h4>
          <ul>
            <li>
              <a
                href="#"
                className="inline-block text-zinc-600 hover:text-orange-500 transition-colors duration-300 mt-4 font-semibold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-zinc-600 hover:text-orange-500 transition-colors duration-300 mt-4 font-semibold"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-zinc-600 hover:text-orange-500 transition-colors duration-300 mt-4 font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Supprot */}
        <div className="text-center">
          <h4 className="text-zinc-700 text-2xl font-bold">Support</h4>
          <ul>
            <li>
              <a
                href="#"
                className="inline-block text-zinc-600 hover:text-orange-500 transition-colors duration-300 mt-4 font-semibold"
              >
                Support Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-zinc-600 hover:text-orange-500 transition-colors duration-300 mt-4 font-semibold"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Stay  Connected */}
        <div className="text-center">
          <h4 className="text-zinc-700 text-2xl font-bold">Stay Connected</h4>
          <p className="mt-4 text-zinc-600 font-semibold">Subscribe for updates & offers</p>
          <p className="mt-4 text-zinc-600 font-semibold">Get the best deals delivered to your inbox.</p>
          <div className="flex justify-center items-center mt-4 mx-8 bg-white rounded-md p-1 gap-1">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 px-3 h-10 focus:outline-none placeholder-text-zinc-400 rounded-md"
            />
            <button className="bg-orange-500 p-2 text-2xl text-white rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-amber-600">
              <IoIosArrowForward />
            </button>
          </div>
          {/* Helper-Text */}
          <p className="mt-6 text-zinc-600 text-[12px] font-normal">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-zinc-200 text-zinc-700 md:text-[16px] text-xs text-center px-5 py-4 font-semibold">
        Privacy Policy | Terms & Conditions | Refund Policy • &copy; 2026 Hemraj
        Kumawat
      </div>
    </footer>
  );
}

export default Footer;
