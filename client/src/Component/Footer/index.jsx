import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Section 1 */}
        <div>
          <h3 className="font-bold mb-4">Get to Know Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press Releases</a></li>
            <li><a href="#" className="hover:underline">Amazon Science</a></li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="font-bold mb-4">Connect with Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="font-bold mb-4">Make Money with Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
            <li><a href="#" className="hover:underline">Sell under Amazon Accelerator</a></li>
            <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
            <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="font-bold mb-4">Let Us Help You</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Your Account</a></li>
            <li><a href="#" className="hover:underline">Returns Centre</a></li>
            <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
