import React, { useState } from "react";
import ImageViewer from "./components/ImageViewer";
import StarRating from "./components/StarRating";
import { ChevronDown, Award, Globe, CircleCheckBig, Truck } from "lucide-react";
import RippleAnimation from "../../components/RippleAnimation";
import Accordion from "../../components/Accordian";

const Home = () => {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="pt-[145px] md:pt-[110px] w-full">
      <div className="w-[90%] mx-auto">
        {/* Product showcase */}
        <div className="flex flex-col md:flex-row relative">
          {/* Breadcrumb and image showcase */}
          <div className="flex flex-col md:w-[53%] md:sticky md:top-[110px] md:h-[calc(100vh-110px)]">
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
          <div className="flex flex-col md:w-[47%]">
            {/* Product Header Details */}
            <div className="mb-10 md:mb-5 md:pt-12">
              <div className="mb-2">
                <span className="text-2xl md:text-3xl">
                  Black Gold Birthday Decor
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">
                  ₹<span className="font-bold">12999.00</span>
                </span>
                <span className="line-through text-gray-500">₹12999.00</span>
                <div className="text-white text-[12px] font-semibold bg-shoppingCartGreen px-2 py-1 rounded-3xl">
                  50% off
                </div>
              </div>
              <div className="mb-3">
                <span className="text-[12px]">
                  MRP (Inclusive of all taxes)
                </span>
              </div>
              <div className="">
                <StarRating rating={3.5} size={14} />
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
            <div className="flex flex-col gap-2 mb-8">
              <span className="font-semibold text-sm">Choose Variants</span>
              <div className="flex items-center justify-between px-2 py-1 gap-4 border border-gray-300 rounded-md">
                <span className="font-medium text-sm text-gray-600">
                  Select same as image
                </span>
                <ChevronDown className="text-gray-500" />
              </div>
            </div>
            {/* Add to cart and Buy now buttons */}
            <div className="flex flex-col gap-3 mb-10">
              <button className="border border-black py-3 font-semibold">
                Add To Cart
              </button>
              <button className="text-white bg-primaryAccentColor py-3 font-semibold">
                Buy Now
              </button>
            </div>
            {/* Product Description with Delivery terms and conditions */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-medium text-gray-800 text-sm">
                  Product Details
                </span>
                <p className="text-sm">
                  A hassle-free decoration service where our team comes to your
                  location and sets up personalized decor for any occasion, such
                  as birthdays, anniversaries, or proposals. The package
                  includes balloon decorations on the ceiling and around the
                  room, foil banners, age-specific number balloons, frill
                  ribbons, and additional decorative props. Custom themes can be
                  arranged based on your preferences. We handle the entire
                  setup, ensuring your space is ready for celebration without
                  any effort on your part.
                </p>
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
        {/* Space for additional content (Similar Products, Footer, etc.) */}
        <div className="w-[90%] mx-auto mt-12">
          {/* Add your Similar Products and Footer components here */}
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
