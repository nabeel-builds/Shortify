import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#ead7f7] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-12">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black">
            Contact Us
          </h1>

         
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* GitHub */}
          <a
            href="https://github.com/nabeel-builds"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-[#ead7f7] hover:bg-purple-200 transition p-6 rounded-2xl shadow-md"
          >
            <FaGithub className="text-5xl text-black" />

            <div>
              <h2 className="text-2xl font-bold">GitHub</h2>
              <p className="text-gray-600">
                github.com/nabeel-builds
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nabeel-ahmad-6b4133413/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-[#ead7f7] hover:bg-purple-200 transition p-6 rounded-2xl shadow-md"
          >
            <FaLinkedin className="text-5xl text-blue-600" />

            <div>
              <h2 className="text-2xl font-bold">LinkedIn</h2>
              <p className="text-gray-600">
                linkedin.com/in/nabeel-ahmad
              </p>
            </div>
          </a>

        </div>

      

      </div>
    </section>
  );
}