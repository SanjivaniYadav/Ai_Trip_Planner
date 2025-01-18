function Footer() {
  return (
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
  );
}

export default Footer;
