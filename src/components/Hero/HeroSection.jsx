import heroImg from "../../assets/HeroSection.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    // hero section
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 gap-10 py-10 pt-24">
        {/* content section */}
        <div>
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full font-semibold inline-block">
            Export Best Quality...
          </span>

          <h1 className="md:text-7xl text-4xl text-zinc-800 leading-tight font-bold mt-4">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span> In Your City
          </h1>

          <p className="text-lg text-zinc-600 mt-4 font-medium">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>

          <div className="mt-6">
            <Link to="/AllProducts">
              <Button content="Shop Now" />
            </Link>
          </div>
        </div>

        {/* img section */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Fresh Fruits Basket"
            className="w-full max-w-[480px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
