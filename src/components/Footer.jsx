import React from "react";
import logo from "../assets/logo.png";
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const socialMediaIcons = [
  { Icon: Facebook, url: "https://www.facebook.com/Giftlayaco/" },
  { Icon: Twitter, url: "https://x.com/giftlaya" },
  { Icon: Instagram, url: "https://www.instagram.com/giftlayaofficial/" },
  { Icon: Linkedin, url: "https://www.linkedin.com/company/giftlaya-com/" },
  {
    Icon: Youtube,
    url: "https://www.youtube.com/channel/UCMnCWe4Mn5AcC5T8Q0Jil4g",
  },
];

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-[95%] md:w-[100%] mx-auto flex flex-col md:flex-row gap-20 md:justify-between mb-10">
        <div>
          <div className="mb-4">
            <img
              src={logo}
              alt="Balloon Decor"
              className="h-9 md:h-9 w-auto object-contain cursor-pointer"
            />
          </div>
          <div className="mb-4">
            <p className="text-sm">
              EC-91, Salt Lake Rd, EC Block,
              <br />
              Sector 1, Bidhannagar,
              <br />
              Kolkata, West Bengal 700136
            </p>
          </div>
          <div className="flex space-x-5 mb-5">
            {socialMediaIcons.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2 rounded-full bg-gray-200">
                  <Icon className="w-5 h-5 text-gray-600 hover:text-blue-500" />
                </div>
              </a>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Copyright © 2025 giftlaya.com</span>
            <span className="text-sm">All rights reserved.</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-14 md:gap-20">
          <div>
            <span className="font-medium text-lg">Specials</span>
            <div>
              <p className="my-2 text-gray-600">Ring Platter</p>
              <p className="my-2 text-gray-600">Hampers</p>
              <p className="my-2 text-gray-600">Gift Trays</p>
              <p className="my-2 text-gray-600">Corporate</p>
              <p className="my-2 text-gray-600">Plants</p>
            </div>
          </div>
          <div>
            <span className="font-medium text-lg">Info</span>
            <div className="">
              <p className="my-2 text-gray-600">About Us</p>
              <p className="my-2 text-gray-600">Latest Blogs</p>
              <p className="my-2 text-gray-600">Contact Us</p>
              <p className="my-2 text-gray-600">Vendor</p>
              <p className="my-2 text-gray-600">Sitemap</p>
            </div>
          </div>
          <div>
            <span className="font-medium text-lg">Policies</span>
            <div className="">
              <p className="my-2 text-gray-600">Terms & Conditions</p>
              <p className="my-2 text-gray-600">Privacy Policy</p>
              <p className="my-2 text-gray-600">Disclaimers</p>
              <p className="my-2 text-gray-600">Shipping Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
