import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-[#ead7f7]">
      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          <div>
            <h1 className="text-5xl font-bold text-black mb-8">
              About Shortify
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Shortify is a free and secure URL shortening platform designed to
              make sharing links simple and fast. We believe everyone deserves
              an easy way to create clean, memorable URLs without unnecessary
              signup requirements.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Unlike many URL shorteners, we focus on simplicity, speed, and
              privacy. No complicated dashboards. No unwanted tracking. Just
              shorten your links in seconds.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-3xl font-bold text-purple-700">We are getting started</h2>
                <p className="text-gray-600 mt-2">Links Shortened</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-3xl font-bold text-purple-700">99.9%</h2>
                <p className="text-gray-600 mt-2">Uptime</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-3xl font-bold text-purple-700">100%</h2>
                <p className="text-gray-600 mt-2">Free to Use</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-3xl font-bold text-purple-700">24/7</h2>
                <p className="text-gray-600 mt-2">Available</p>
              </div>

            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/About-Us-Page.png"
              width={550}
              height={550}
              alt="About"
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}