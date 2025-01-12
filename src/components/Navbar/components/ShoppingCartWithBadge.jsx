import React from "react";
import { ShoppingCart } from "lucide-react";

const ShoppingCartWithBadge = ({ itemCount = 1 }) => {
  return (
    <div className="">
      <button className="relative">
        <ShoppingCart className="h-[30px] w-[30px] text-black cursor-pointer pt-2" />
        {itemCount >= 0 && (
          <div className="absolute top-1 right-0 h-[14px] w-[14px] rounded-full bg-primaryAccentColor flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {itemCount > 99 ? "99+" : itemCount}
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ShoppingCartWithBadge;
