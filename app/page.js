import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function Home() {
  return (
    <main className="bg-purple-300">
      <section className="grid grid-cols-2 h-[70vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL shortner in the Market.
          </p>
          <p className="px-18 text-center">
            We are the most straight forward URL Shortner in the world. Most of the url shortners will track you or ask you to give your details for login. We understand your needs and hence we created this url shortner.
          </p>
          <div className='flex gap-3'>
            <Link href="/shorten"><button className='cursor-pointer bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>Try Now</button></Link>
            <Link target="_blank" href={"https://github.com/nabeel-builds"}><button className='cursor-pointer bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start px-20 relative">
          <Image alt="An Image of a Vector" src={"/vector.jpg"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} className="mix-blend-darken" />
        </div>
      </section>
    </main>
  );
}
