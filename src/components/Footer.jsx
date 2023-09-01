import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-white dark:bg-black dark:text-white shadow-md px-8 py-4 border-gray-200 flex justify-center gap-3">
      <p>&copy; {new Date().getFullYear()} EventEaze. All rights reserved.</p>
      <p>Designed by Burak Cetinkaya</p>
    </div>
  );
};

export default Footer;
