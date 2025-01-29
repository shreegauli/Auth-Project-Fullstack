import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 MyWebsite. All rights reserved.</p>
        <p className="text-sm">
          Follow us on{" "}
          <a
            href="#"
            className="text-blue-400 hover:underline"
          >
            Facebook
          </a>,{" "}
          <a
            href="#"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>,{" "}
          <a
            href="#"
            className="text-blue-400 hover:underline"
          >
            Instagram
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
