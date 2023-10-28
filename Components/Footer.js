import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:mb-4 mb-2">© 2023 Ram Mohan Patel</p>
          <div className="md:ml-auto flex flex-wrap items-center justify-center text-xl font-bold">
            <SocialIcon
              url="https://www.linkedin.com/in/ram-mohan-patel-1b5597220/"
              className="mr-4 hover:text-indigo-500 transition transform hover:scale-110"
              target="_blank"
              fgColor="#fff"
              style={{ height: 45, width: 45 }}
            />
            <SocialIcon
              url="https://github.com/rammohanpatel"
              className="mr-4 hover:text-indigo-500 transition transform hover:scale-110"
              target="_blank"
              fgColor="#fff"
              style={{ height: 45, width: 45 }}
            />
            <SocialIcon
              network="x"
              url="https://twitter.com/crazyrammohan"
              className="mr-4 hover:text-indigo-500 transition transform hover:scale-110"
              target="_blank"
              fgColor="#fff"
              style={{ height: 45, width: 45 }}
            />
            <SocialIcon
              url="https://www.facebook.com/profile.php?id=100065251880041"
              className="mr-4 hover:text-indigo-500 transition transform hover:scale-110"
              target="_blank"
              fgColor="#fff"
              style={{ height: 45, width: 45 }}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
