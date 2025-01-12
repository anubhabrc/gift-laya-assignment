import React from "react";
import StarRating from "./StarRating";
import { Heart } from "lucide-react";

const ProductCard = ({
  image,
  name,
  oldPrice,
  newPrice,
  rating,
  percentageOff,
}) => {
  return (
    <div className="w-[150px] md:w-[220px] md:h-[380px] h-[300px] max-w-sm bg-white border ">
      {/* Product Image with Hover Effect */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
        />
        {percentageOff && (
          <span className="absolute top-1 right-1 bg-gray-50 p-1 rounded-full">
            <Heart className="h-5 w-5 text-primaryAccentColor" />
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col p-3">
        <h3 className="text-[13px] md:text-[15px]">{name}</h3>
        <StarRating rating={rating} size={13} />
        <div className="mt-2">
          <span className="text-[17px] font-medium">₹{newPrice}</span>
        </div>
        <span className="text-gray-500 text-sm line-through">₹{oldPrice}</span>
        <span className="text-[12px] text-primaryAccentColor">
          Save {percentageOff}%
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
