import React, { useState, useRef, useEffect } from "react";
import Img1 from "../../../assets/ImagesForViewer/Img1.png";
import Img2 from "../../../assets/ImagesForViewer/Img2.png";
import Img3 from "../../../assets/ImagesForViewer/Img3.png";
import Img4 from "../../../assets/ImagesForViewer/Img4.png";
import Img5 from "../../../assets/ImagesForViewer/Img5.png";
//CommonImagePool

const images = [
  { id: 1, src: Img1, alt: "Product 1" },
  { id: 2, src: Img2, alt: "Product 2" },
  { id: 3, src: Img3, alt: "Product 3" },
  { id: 4, src: Img4, alt: "Product 4" },
  { id: 5, src: Img5, alt: "Product 5" },
];

const ImageViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const imageContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const lastScrollRef = useRef(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    scrollToImage(index);
  };

  const scrollToImage = (index) => {
    if (imageContainerRef.current) {
      const width = imageContainerRef.current.offsetWidth;
      imageContainerRef.current.scrollTo({
        left: index * width,
        behavior: "smooth",
      });
    }
  };

  // Optimized scroll handler with immediate index updates
  const handleScroll = () => {
    if (!isScrolling) {
      setIsScrolling(true);
    }

    // Get current scroll position
    const container = imageContainerRef.current;
    if (container) {
      const width = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const currentTime = Date.now();

      // Update index immediately for better responsiveness
      const newIndex = Math.round(scrollLeft / width);
      setCurrentIndex(newIndex);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Only apply snap correction if scrolling has stopped
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);

        // Ensure proper alignment after scroll ends
        if (Math.abs(scrollLeft - newIndex * width) > 1) {
          scrollToImage(newIndex);
        }
      }, 50); // Reduced timeout for better responsiveness

      lastScrollRef.current = currentTime;
    }
  };

  useEffect(() => {
    const container = imageContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        container.removeEventListener("scroll", handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, []);

  // Prevent scroll-based updates while programmatic scrolling is happening
  useEffect(() => {
    if (!isScrolling) {
      scrollToImage(currentIndex);
    }
  }, [currentIndex, isScrolling]);

  return (
    <div className="max-w-[640px]">
      <div className="flex flex-col md:flex-row gap-1">
        {/* Thumbnails (visible only on desktop) */}
        <div className="hidden md:block w-24">
          <div className="flex flex-col h-[500px] overflow-y-auto scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleThumbnailClick(index)}
                className={`w-20 h-20 mb-3 border-2 rounded transition-colors duration-200 ${
                  currentIndex === index
                    ? "border-primaryAccentColor"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main image container with scroll snap */}
        <div className="flex-1">
          <div className="relative aspect-square overflow-hidden rounded-md">
            <div
              ref={imageContainerRef}
              className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  className="w-full h-full flex-shrink-0 snap-center"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dot pagination (visible only on mobile) */}
          <div className="md:hidden flex justify-center gap-4 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`transition-all duration-200 ${
                  currentIndex === index
                    ? "w-4 h-1 bg-black rounded-full"
                    : "w-1 h-1 bg-gray-300 hover:bg-gray-400 rounded-full"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
