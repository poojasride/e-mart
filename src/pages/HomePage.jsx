import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            Shop Smarter with
            <span className="text-[#4F46E5]"> UrbanCart</span>
          </h1>

          <p className="mt-6 text-[#475569] text-base md:text-lg max-w-xl leading-relaxed">
            Discover premium products, seamless shopping experience, and
            exclusive deals — all in one modern ecommerce platform built for
            performance and simplicity.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-[#4F46E5] text-white px-7 py-3 rounded-xl font-medium 
                         hover:bg-[#3730A3] transition
                         shadow-[0_10px_25px_rgba(79,70,229,0.25)]"
            >
              Explore Products
            </Link>

            <Link
              to="/cart"
              className="bg-white border border-[#E5E7EB] px-7 py-3 rounded-xl font-medium 
                         text-[#0F172A] hover:border-[#4F46E5] hover:text-[#4F46E5] transition"
            >
              View Cart
            </Link>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="bg-gradient-to-br from-white to-[#F1F5F9] 
                     rounded-3xl p-10
                     border border-[#E5E7EB]
                     shadow-[0_30px_60px_rgba(15,23,42,0.12)]"
        >
          <ul className="space-y-6 text-[#0F172A] text-base">
            <li className="flex gap-4">
              <span className="text-[#4F46E5] text-xl">✔</span>
              Premium quality products curated for you
            </li>
            <li className="flex gap-4">
              <span className="text-[#4F46E5] text-xl">✔</span>
              Secure payments with fast checkout experience
            </li>
            <li className="flex gap-4">
              <span className="text-[#4F46E5] text-xl">✔</span>
              Clean, modern & fully responsive UI
            </li>
            <li className="flex gap-4">
              <span className="text-[#4F46E5] text-xl">✔</span>
              Built using React & modern web technologies
            </li>
          </ul>
        </div>

      </div>

      {/* Stats Section */}
      <div className="bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight">
              10K+
            </h3>
            <p className="text-sm text-[#475569] mt-2">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight">
              500+
            </h3>
            <p className="text-sm text-[#475569] mt-2">
              Premium Products
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight">
              24/7
            </h3>
            <p className="text-sm text-[#475569] mt-2">
              Customer Support
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight">
              100%
            </h3>
            <p className="text-sm text-[#475569] mt-2">
              Secure Payments
            </p>
          </div>

        </div>
      </div>

    

    </section>
  );
}

export default HomePage;
