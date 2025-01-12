import React, { useState } from "react";
import ImageViewer from "./components/ImageViewer";
import StarRating from "./components/StarRating";
import {
  ChevronDown,
  Award,
  Globe,
  CircleCheckBig,
  Truck,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import RippleAnimation from "../../components/RippleAnimation";
import Accordion from "../../components/Accordian";
import { useGetAllProductsQuery } from "../../queries";
import { useMemo } from "react";
import { getRandomNumberInRange } from "../../lib/utils";
import { useCartStore } from "../../store/useCartStore";
import ProductCard from "./components/ProductCard";
import Img1 from "../../assets/ImagesForViewer/Img1.png";
import Img2 from "../../assets/ImagesForViewer/Img2.png";
import Img3 from "../../assets/ImagesForViewer/Img3.png";
import Img4 from "../../assets/ImagesForViewer/Img4.png";
import Img5 from "../../assets/ImagesForViewer/Img5.png";
import Img6 from "../../assets/ImagesForViewer/Img6.png";
import Img7 from "../../assets/ImagesForViewer/Img7.png";
import Footer from "../../components/Footer";

const Home = () => {
  const [quantity, setQuantity] = useState(1);
  const { data: allProducts, isLoading: isAllProductsLoading } =
    useGetAllProductsQuery();
  const { setCartValue, cartValue } = useCartStore();

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const accordionData = [
    {
      title: "What types of events do you provide balloon decoration for?",
      description:
        "We offer balloon decoration services for birthdays, anniversaries, baby showers, weddings, corporate events, festivals, and more.",
    },
    {
      title: "How far in advance should I book your service?",
      description:
        "We recommend booking at least 3-7 days in advance to ensure availability and a smooth experience. However, for urgent requests, you can contact us, and we'll try our best to accommodate your needs.",
    },
    {
      title: "Do you provide customized balloon decoration?",
      description:
        "Yes, we specialize in personalized balloon decorations tailored to your event's theme, color preferences, and specific requirements.",
    },
    {
      title: "Can I cancel or reschedule my booking?",
      description:
        "Yes, you can cancel or reschedule your booking. Please refer to our cancellation policy for details. Rescheduling is subject to availability.",
    },
    {
      title: "What areas do you provide services in?",
      description:
        "We provide balloon decoration services in 100+ cities across India. You can contact us to check availability in your location.",
    },
    {
      title: "What payment methods do you accept?",
      description:
        "We accept online payments, UPI, bank transfers, and cash payments.",
    },
  ];

  const randomProduct = useMemo(() => {
    if (!allProducts || !allProducts.length) return;
    const productLength = allProducts.length;
    const randomIndex = getRandomNumberInRange(0, productLength);
    return allProducts[randomIndex];
  }, [allProducts]);

  if (isAllProductsLoading) return <div>Loading...</div>;

  const handleScroll = (direction) => {
    const container = document.getElementById("slider-container");
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const imageArray = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  return (
    <div className="pt-[145px] md:pt-[110px] w-full">
      <div className="w-[90%] mx-auto">
        {/* Product showcase */}
        <div className="flex flex-col md:flex-row relative mb-5">
          {/* Breadcrumb and image showcase */}
          <div className="flex flex-col md:w-[50%] md:sticky md:top-[110px] md:h-[calc(100vh-110px)]">
            {/* Breadcrumb */}
            <div className="mb-5">
              <span className="text-[12px] md:text-sm text-black">
                Home&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Birthday
                Decorations&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Black Gold
                Birthday Decor
              </span>
            </div>
            {/* Image Showcase */}
            <div className="mb-12 md:mb-0 md:flex-1 md:overflow-auto">
              <ImageViewer />
            </div>
          </div>
          {/* product and rest of the page */}
          <div className="flex flex-col md:w-[50%]">
            {/* Product Header Details */}
            <div className="mb-10 md:mb-5 md:pt-12">
              <div className="mb-2">
                <span className="text-2xl md:text-3xl">
                  {randomProduct.ProductName}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">
                  ₹<span className="font-bold">{randomProduct.NewPrice}</span>
                </span>
                <span className="line-through text-gray-500">
                  ₹{randomProduct.OldPrice}
                </span>
                <div className="text-white text-[12px] font-semibold bg-shoppingCartGreen px-2 py-1 rounded-3xl">
                  {randomProduct.PercentageOff}% off
                </div>
              </div>
              <div className="mb-3">
                <span className="text-[12px]">
                  MRP (Inclusive of all taxes)
                </span>
              </div>
              <div className="">
                <StarRating rating={randomProduct.Rating} size={14} />
              </div>
            </div>
            {/* Set Quantity */}
            <div className="flex flex-col gap-2 mb-8 md:mb-5">
              <span className="font-semibold text-sm">Quantity</span>
              <div className="flex items-center gap-4 border border-gray-300 w-fit rounded-md">
                <button
                  onClick={handleDecrement}
                  className="w-7 h-7 flex items-center justify-center text-xl hover:bg-gray-100"
                >
                  -
                </button>
                <span className="font-medium">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="w-7 h-7 flex items-center justify-center text-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            {/* Delivery & Contact Block */}
            <div className="flex flex-col gap-2 mb-5 ">
              <div className="flex">
                <div className="flex w-[10%] md:w-[5%] items-center justify-between">
                  <CircleCheckBig className="h-5 w-5" />
                </div>
                <div className="flex w-[90%] md:w-[95%]">
                  <span className="text-[13px] md:text-sm md:text-gray-800">
                    Express Dispatch within 24 hours*. Delivery within 2 to 6
                    Days, after the day of Order Placement
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[10%] md:w-[5%] items-center justify-between">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="flex w-[90%] md:w-[95%]">
                  <span className="text-[13px] md:text-[15px] md:text-gray-800">
                    Free Shipping Across India, For International Shipping,
                    Whtsapp at +91 7011 7111 76
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[10%] md:w-[5%] items-center justify-between">
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex w-[90%] md:w-[95%]">
                  <span className="text-[13px] md:text-[15px] md:text-gray-800">
                    Product Display on Whatsapp Video-Call Available
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[10%] md:w-[5%] items-center justify-between">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="flex w-[90%] md:w-[95%]">
                  <span className="text-[13px] md:text-[15px] md:text-gray-800">
                    Customer Care Support - For Any Queries, Call or Whatsapp
                    at: +91 7011 7111 76
                  </span>
                </div>
              </div>
            </div>
            {/* Set Location Dropdown */}
            <div className="flex items-center justify-between px-2 py-1 border border-gray-300 rounded-md mb-10 md:mb-7">
              <div className="flex gap-2 items-center">
                <div>
                  <RippleAnimation />
                </div>
                <span className="font-medium text-sm text-gray-600">
                  Select your location for delivery
                </span>
              </div>
              <div>
                <ChevronDown className="text-gray-500" />
              </div>
            </div>
            {/* Choose Product Variant */}
            <div className="flex flex-col gap-2 mb-6">
              <span className="font-semibold text-sm">Choose Variants</span>
              <div className="flex items-center justify-between px-2 py-1 gap-4 border border-gray-300 rounded-md">
                <span className="font-medium text-sm text-gray-600">
                  Select same as image
                </span>
                <ChevronDown className="text-gray-500" />
              </div>
            </div>
            {/* Add to cart and Buy now buttons */}
            <div className="w-full flex flex-col md:flex-row gap-3 mb-10">
              <button
                onClick={() => {
                  setCartValue(cartValue + quantity);
                }}
                className="w-full border border-black py-3 font-semibold"
              >
                Add To Cart
              </button>
              <button className="text-white text-lg w-full bg-primaryAccentColor py-3 font-semibold">
                Buy Now
              </button>
            </div>
            {/* Product Description with Delivery terms and conditions */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-medium text-gray-800 text-sm">
                  Product Details
                </span>
                <p className="text-sm">{randomProduct.ProductDetails}</p>
              </div>
              {/* Product Care Information */}
              <div className="flex flex-col gap-2">
                <span className="font-medium text-gray-800 text-sm">
                  Care Information
                </span>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium">Avoid Direct Sunlight</span>:
                    Keep the balloons away from direct sunlight or excessive
                    heat to prevent them from popping or deflating.
                  </li>
                  <li>
                    <span className="font-medium">
                      Indoor Placement Preferred
                    </span>
                    : For longer-lasting decoration, place the balloons indoors
                    in a cool and dry environment.
                  </li>
                  <li>
                    <span className="font-medium">Avoid Sharp Objects</span>:
                    Keep balloons away from sharp objects, rough surfaces, and
                    pets to prevent accidental popping.
                  </li>
                  <li>
                    <span className="font-medium">Supervise Children</span>:
                    Balloons can be a choking hazard; keep an eye on young
                    children around the decoration.
                  </li>
                  <li>
                    <span className="font-medium">Longevity</span>: Latex
                    balloons typically last 8–12 hours when air-filled and up to
                    24 hours with helium; foil balloons last longer.
                  </li>
                  <li>
                    <span className="font-medium">Handle with Care</span>: While
                    moving or rearranging decorations, handle the balloons
                    gently to avoid damage.
                  </li>
                </ul>
              </div>
              {/* Delivery Details */}
              <div className="flex flex-col gap-2 mb-5">
                <span className="font-medium text-gray-800 text-sm">
                  Delivery Details
                </span>
                <ul className="list-disc pl-3 space-y-2 text-sm">
                  <li>The image displayed is indicative in nature.</li>
                  <li>
                    Actual product may vary in shape, colour or design as per
                    the availability.
                  </li>
                  <li>
                    Our balloon expert will come to your home at your chosen
                    slot, and set up the balloons as shown in the images.
                  </li>
                  <li>You’ll need to provide a stool to reach the ceiling.</li>
                  <li>
                    We can decorate a hotel room if you gain permission from the
                    hotel.
                  </li>
                  <li>
                    All the items used in the decoration are on rental basis and
                    will be taken back on the next day of the event.
                  </li>
                  <li>
                    If case of a complaint, notice must be given within 2 hours
                    of the delivery time of the experience.
                  </li>
                  <li>
                    No rescheduling or cancellation is possible after the
                    decoration has been attempted.
                  </li>
                </ul>
              </div>
              {/* FAQ */}
              <div className="flex flex-col mb-5">
                <span className="font-medium text-gray-800 text-sm">FAQ</span>
                <div className="flex flex-col">
                  {accordionData.map((item, index) => (
                    <Accordion
                      key={index}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div className="mb-14 border border-gray-300 py-8 md:py-6 px-6">
          <div className="flex flex-col gap-2 md:gap-0">
            <div className="flex flex-col gap-2 md:gap-1">
              <span className="text-xl md:text-2xl font-serif">
                Customer Reviews
              </span>
              <div className="flex gap-4 items-center">
                <div className="flex gap-1">
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                </div>
                <span className="text-sm">Be the first to write a review</span>
              </div>
            </div>
            <div className="flex md:justify-end">
              <button className="w-full md:w-fit md:px-3 border border-black py-2 md:py-1 font-semibold">
                Write a review
              </button>
            </div>
          </div>
        </div>

        {/* similar products */}
        <div className="mb-20">
          <div className="mb-4">
            <span className="text-lg md:text-2xl md:font-normal font-medium">
              Similar products
            </span>
          </div>

          <div className="relative w-full">
            <button
              onClick={() => handleScroll("left")}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleScroll("right")}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              id="slider-container"
              className="flex gap-4 md:gap-7 overflow-x-auto scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {[...Array(10)].map((_, index) => (
                <div key={index}>
                  <ProductCard
                    image={
                      imageArray[Math.floor(Math.random() * imageArray.length)]
                    }
                    name={randomProduct.ProductName}
                    oldPrice={randomProduct.OldPrice}
                    newPrice={randomProduct.NewPrice}
                    rating={randomProduct.Rating}
                    percentageOff={randomProduct.PercentageOff}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* People also viewed */}
        <div className="">
          <div className="mb-4">
            <span className="text-lg md:text-2xl md:font-normal font-medium">
              People also viewed
            </span>
          </div>

          <div className="relative w-full">
            <button
              onClick={() => handleScroll("left")}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleScroll("right")}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              id="slider-container"
              className="flex gap-4 md:gap-7 overflow-x-auto scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {[...Array(10)].map((_, index) => (
                <div key={index}>
                  <ProductCard
                    image={
                      imageArray[Math.floor(Math.random() * imageArray.length)]
                    }
                    name={randomProduct.ProductName}
                    oldPrice={randomProduct.OldPrice}
                    newPrice={randomProduct.NewPrice}
                    rating={randomProduct.Rating}
                    percentageOff={randomProduct.PercentageOff}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Design */}
      <div className="w-[90%] mx-auto mt-32 mb-16 border-b border-gray-300">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
