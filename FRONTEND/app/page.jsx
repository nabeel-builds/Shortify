import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-300">
      <section className="min-h-[70vh] px-6 py-12 sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto grid min-h-[60vh] max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
          
          {/* Left Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            
            <p
              className={`${poppins.className} text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl`}
            >
              The Best URL Shortener in the Market.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-6 sm:text-base">
              We are the most straightforward URL Shortener in the world.
              Most URL shorteners track you or ask you to create an account.
              We understand your needs, and hence we created this URL
              shortener.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/shorten">
                <button className="w-full cursor-pointer rounded-lg bg-purple-600 px-7 py-3 font-bold text-white shadow-lg transition hover:bg-purple-700 hover:shadow-xl sm:w-auto">
                  Try Now →
                </button>
              </Link>

              <Link
                target="_blank"
                href="https://github.com/nabeel-builds"
              >
                <button className="w-full cursor-pointer rounded-lg border-2 border-purple-600 px-7 py-3 font-bold text-purple-900 transition hover:bg-purple-600 hover:text-white sm:w-auto">
                  GitHub
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - CSS Visual */}
          <div className="flex items-center justify-center">
            <div className="relative flex h-64 w-full max-w-md items-center justify-center rounded-3xl bg-purple-200/60 shadow-2xl backdrop-blur-sm sm:h-72">
              
              <div className="absolute -left-5 top-8 h-20 w-20 rounded-full bg-purple-400/50 blur-2xl" />
              <div className="absolute -right-5 bottom-8 h-24 w-24 rounded-full bg-purple-500/40 blur-2xl" />

              <div className="relative z-10 rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="mt-5 h-3 w-48 rounded-full bg-purple-100" />
                <div className="mt-3 h-3 w-36 rounded-full bg-purple-100" />

                <div className="mt-6 rounded-lg bg-purple-600 px-5 py-3 text-center text-sm font-bold text-white">
                  Shorten URL →
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}