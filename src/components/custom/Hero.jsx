import { Link } from "react-router";

function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center mx-10 mt-10 gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left md:max-w-lg">
          <h1 className="font-extrabold text-[40px] md:text-[50px] leading-tight">
            <span className="inline-block bg-gradient-to-tl from-[#28b487] to-[#7dd56f] transform -skew-x-12 px-4 py-2 text-white">
              Discover Your Next Adventure with AI:
            </span>

            <br />
            <span className="text-gray-800">
              Your ultimate travel buddy is just a click away!
            </span>
          </h1>
          <p className="text-gray-600 mt-5 text-lg">
            Plan smarter, travel better. Tripify simplifies trip planning with
            AI, so you can focus on making memories.
          </p>
          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <Link to={"/create-trip"}>
              <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg shadow-md font-bold">
                Get started, It's Free
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="\travelplanner.jpg" // Replace this with your hero image
            alt="Adventure illustration"
            className="rounded-lg shadow-md w-[80%] md:w-auto"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="mt-16 px-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Why Choose Tripify?
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Feature 1 */}
          <div className="flex items-center gap-4 bg-white shadow-md p-6 rounded-lg">
            <div className="bg-green-100 text-green-600 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 12h6a1 1 0 010 2H9a1 1 0 010-2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Smart Itinerary</h3>
              <p className="text-gray-600 text-sm">
                Let AI craft the perfect travel plan for your unique needs.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center gap-4 bg-white shadow-md p-6 rounded-lg">
            <div className="bg-green-100 text-green-600 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 12h6a1 1 0 010 2H9a1 1 0 010-2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">
                Personalized Recommendations
              </h3>
              <p className="text-gray-600 text-sm">
                Discover destinations and activities tailored to your
                preferences.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center gap-4 bg-white shadow-md p-6 rounded-lg">
            <div className="bg-green-100 text-green-600 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 12h6a1 1 0 010 2H9a1 1 0 010-2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Hassle-Free Booking</h3>
              <p className="text-gray-600 text-sm">
                Book flights, hotels, and experiences seamlessly in one
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-gray-800 py-8 w-full">
        <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row px-4">
          <p className="text-white text-center sm:text-left">
            © 2025 Tripify. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Hero;
