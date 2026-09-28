export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#3b3028]">

      <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-[#2f2925] text-[#f4efe6]">
        <h1 className="text-2xl md:text-3xl font-serif font-bold">
          Areeba&apos;s Framely
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-[#c9a66b]">
            Home
          </a>
          <a href="#frames" className="hover:text-[#c9a66b]">
            Frames
          </a>
          <a href="#about" className="hover:text-[#c9a66b]">
            About
          </a>
          <a href="#contact" className="hover:text-[#c9a66b]">
            Contact
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-16 py-16"
      >
        <div>
          <p className="text-[#9a7138] font-semibold mb-4">
            Timeless • Elegant • Vintage
          </p>

          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            Frame Your
            <span className="block text-[#9a7138]">
              Beautiful Memories
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#66584e] leading-relaxed">
            Welcome to Areeba&apos;s Framely — where memories meet
            timeless design. Discover beautifully crafted vintage
            frames made to turn your favorite moments into elegant
            pieces of art.
          </p>

          <a
            href="#frames"
            className="inline-block mt-8 bg-[#9a7138] text-white px-7 py-3 rounded-md font-semibold hover:bg-[#79572b]"
          >
            Explore Frames
          </a>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&q=85"
            alt="Vintage frames"
            className="w-full h-[450px] object-cover shadow-2xl border-[10px] border-[#b28a52]"
          />
        </div>
      </section>

      <section className="bg-[#2f2925] text-[#f4efe6] px-6 md:px-16 py-14">
        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <div className="text-4xl">🖼️</div>
            <h3 className="text-xl font-serif font-bold mt-3">
              Timeless Designs
            </h3>
            <p className="mt-3 text-[#d7cbbb]">
              Classic designs that never go out of style.
            </p>
          </div>

          <div>
            <div className="text-4xl">✨</div>
            <h3 className="text-xl font-serif font-bold mt-3">
              Crafted With Care
            </h3>
            <p className="mt-3 text-[#d7cbbb]">
              Every frame is selected with attention to detail.
            </p>
          </div>

          <div>
            <div className="text-4xl">🤎</div>
            <h3 className="text-xl font-serif font-bold mt-3">
              Made For Memories
            </h3>
            <p className="mt-3 text-[#d7cbbb]">
              Beautiful frames for your most special moments.
            </p>
          </div>

        </div>
      </section>

      <section id="frames" className="px-6 md:px-16 py-20">

        <div className="text-center mb-12">
          <p className="text-[#9a7138] font-semibold">
            OUR COLLECTION
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
            Vintage Frames
          </h2>

          <p className="mt-4 text-gray-600">
            Elegant frames to make your favorite memories timeless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=85"
              alt="Classic gold frame"
              className="w-full h-64 object-cover"
            />

            <h3 className="text-2xl font-serif font-bold mt-5">
              Classic Gold
            </h3>

            <p className="mt-2 text-gray-600">
              A timeless golden frame for precious memories.
            </p>
          </div>

          <div className="bg-white p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800&q=85"
              alt="Antique frame"
              className="w-full h-64 object-cover"
            />

            <h3 className="text-2xl font-serif font-bold mt-5">
              Antique Charm
            </h3>

            <p className="mt-2 text-gray-600">
              Vintage-inspired details for an elegant home.
            </p>
          </div>

          <div className="bg-white p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=85"
              alt="Heritage frame"
              className="w-full h-64 object-cover"
            />

            <h3 className="text-2xl font-serif font-bold mt-5">
              Heritage Frame
            </h3>

            <p className="mt-2 text-gray-600">
              Classic style designed for unforgettable moments.
            </p>
          </div>

        </div>
      </section>

      <section
        id="about"
        className="px-6 md:px-16 py-20 bg-[#e5dacb] text-center"
      >
        <p className="text-[#9a7138] font-semibold">
          OUR STORY
        </p>

        <h2 className="text-4xl font-serif font-bold mt-3">
          More Than Just A Frame
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
          At Areeba&apos;s Framely, we believe every photograph deserves
          a beautiful home. Our vintage-inspired frames combine classic
          elegance with thoughtful design to preserve your most special
          memories.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div>
            <div className="text-4xl">🌟</div>
            <h3 className="text-xl font-bold mt-3">
              Elegant
            </h3>
            <p className="mt-2 text-gray-600">
              Designs inspired by timeless beauty.
            </p>
          </div>

          <div>
            <div className="text-4xl">🎨</div>
            <h3 className="text-xl font-bold mt-3">
              Unique
            </h3>
            <p className="mt-2 text-gray-600">
              Frames that add personality to your space.
            </p>
          </div>

          <div>
            <div className="text-4xl">❤️</div>
            <h3 className="text-xl font-bold mt-3">
              Memorable
            </h3>
            <p className="mt-2 text-gray-600">
              Made to preserve moments worth remembering.
            </p>
          </div>

        </div>
      </section>

      <section
        id="contact"
        className="px-6 py-20 text-center bg-[#f4efe6]"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold">
          Give Your Memories A Beautiful Frame
        </h2>

        <p className="mt-5 text-lg text-gray-600">
          Beautiful vintage frames for your beautiful moments.
        </p>

        <button className="mt-8 bg-[#9a7138] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#79572b]">
          Order Your Frame
        </button>
      </section>

      <footer className="bg-[#2f2925] text-white text-center py-7">
        <h3 className="text-xl font-serif font-bold">
          Areeba&apos;s Framely
        </h3>

        <p className="mt-2 text-gray-300">
          Preserving memories, one beautiful frame at a time. 🤎
        </p>

        <p className="mt-4 text-sm text-gray-400">
          © 2026 Areeba&apos;s Framely. All rights reserved.
        </p>
      </footer>

    </main>
  );
}