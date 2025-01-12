import React, { useState } from "react";
import {
  Menu,
  X,
  ListPlus,
  ChevronRight,
  FileClock,
  CircleUserRound,
  LockKeyhole,
  Gift,
  Wallet,
  MapPinned,
  Truck,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";
import logo from "../../assets/logo.png";
import SearchBox from "./components/SearchBox";
import ShoppingCartWithBadge from "./components/ShoppingCartWithBadge";
import { useCartStore } from "../../store/useCartStore";

const MenuItem = ({ icon: Icon, text }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-gray-100 rounded-lg p-2">
        <Icon className="text-gray-500 h-5 w-5" />
      </div>
      <p className="text-lg text">{text}</p>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [exitDirection, setExitDirection] = useState(false);
  const { cartValue } = useCartStore();

  const toggleSidebar = () => {
    if (!isOpen) {
      setExitDirection(false);
    }
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: FileClock, text: "Orders" },
    { icon: MapPinned, text: "Addresses" },
    { icon: Wallet, text: "Wallet" },
    { icon: Gift, text: "E-Gift Cards" },
    { icon: LockKeyhole, text: "Account" },
    { icon: CircleUserRound, text: "Logout" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full border-b z-50 bg-white h-32 md:h-[90px]">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-[95%] mx-auto h-full items-center justify-between">
        <div className="flex gap-5 items-center">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Balloon Decor"
              className="h-8 md:h-6 w-auto object-contain cursor-pointer"
            />
          </div>
          {/* Location Selector */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 md:bg-white rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <Truck className="text-gray-600 h-5 w-5 md:hidden" />
            <div className="flex flex-col">
              <p className="text-xs text-gray-500">For delivery</p>
              <div className="flex items-center gap-1">
                <p className="text-sm font-medium">Set Location</p>
                <ChevronDown className="h-4 w-4 text-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-[52%]">
          <SearchBox />
        </div>

        {/* Login & Cart */}
        <div className="flex items-center gap-10">
          <button className="flex items-center gap-2 hover:text-gray-700 transition-colors">
            <CircleUserRound className="h-5 w-5 hover:text-gray-700" />
            <span className="font-medium">Account</span>
          </button>
          <button className="bg-shoppingCartGreen hover:bg-green-800 flex items-center gap-2 text-white transition-colors py-2 px-4 rounded-lg">
            <ShoppingCart className="h-5 w-5" />
            <div className="flex gap-1">
              <span className="font-medium text-lg">₹0.00</span>
              <span className="font-medium text-lg">{`(${cartValue})`}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-[95%] mx-auto pt-4 flex flex-col gap-[16px]">
        <div className="w-full flex items-center justify-between">
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              <Menu className="h-[34px] w-[34px] text-black cursor-pointer pt-2" />
            </button>
          </div>
          <div>
            <img
              src={logo}
              alt="Balloon Decor"
              className="h-7 w-auto object-contain"
            />
          </div>
          <ShoppingCartWithBadge itemCount={cartValue} />
        </div>
        <div className="w-[99%] mx-auto md:hidden">
          <SearchBox />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-screen bg-white transform duration-500 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : exitDirection
            ? "translate-x-full"
            : "-translate-x-full"
        } z-50`}
      >
        <div className="p-6 flex flex-col gap-7">
          <div className="flex items-center justify-between border-b pb-6">
            <div>
              <p className="font-semibold text-lg">Menu</p>
            </div>
            <button onClick={toggleSidebar}>
              <X className="h-7 w-7 text-black cursor-pointer" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">Shop</p>
            <div className="bg-gray-100 rounded-lg px-4 py-3 flex gap-3 items-center">
              <div className="p-3 rounded-full bg-white">
                <Truck className="text-gray-600 h-7 w-7" />
              </div>
              <div className="flex flex-col">
                <p className="text-[12px]">For delivery,</p>
                <div className="flex gap-2 items-center">
                  <p className="text-sm font-medium">Set Location</p>
                  <ChevronDown className="text-gray-600 h-5 w-5" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="bg-gray-100 rounded-lg p-2">
                  <ListPlus className="text-gray-500 h-5 w-5" />
                </div>
                <p className="text-lg text">Categories</p>
              </div>
              <ChevronRight className="text-gray-500 h-5 w-5" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-400 text-sm">Your Information</p>
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <MenuItem key={index} icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
