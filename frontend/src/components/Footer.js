import React from "react";

const Footer = ()=>{
    return (
        <footer className="bg-gradient-to-r] bg-[#02002e] text-white">
            <div className="md:flex md:justify-between sm:px-12 px-4  py-7">
                <h1 className="lg:text-4xl text-3x1 mb-6 lg:leading-normal font-semibold md:x-2/5 "><span className="text-cyan-400 " > Free </span>feel to contact me if needed</h1>
            </div>

            <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
            </p>
          </div>
          <div className="flex  space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact Me
            </a>
          </div>
        </div>
      </div>

        </footer>
    )
}

export default Footer;