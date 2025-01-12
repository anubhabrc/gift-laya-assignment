import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating, size }) => {
  // Ensure rating is between 0 and 5
  const clampedRating = Math.min(5, Math.max(0, rating));

  const renderStar = (position) => {
    // Subtract 1 from position to align with 0-based comparison
    const difference = clampedRating - (position - 1);

    // Full star
    if (difference >= 1) {
      return <Star size={size} className="fill-black text-black" />;
    }

    // Partial star
    if (difference > 0) {
      return (
        <div className="relative">
          {/* Background star */}
          <Star size={size} className="fill-white text-black stroke-2" />
          {/* Foreground star with clip path */}
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: `${difference * 100}%` }}
          >
            <Star size={size} className="fill-black text-black" />
          </div>
        </div>
      );
    }

    // Empty star
    return <Star size={size} className="fill-white text-black stroke-2" />;
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((position) => (
          <div key={position} className="relative">
            {renderStar(position)}
          </div>
        ))}
      </div>
      <p className="text-[12px] text-gray-600">({clampedRating.toFixed(2)})</p>
    </div>
  );
};

export default StarRating;
