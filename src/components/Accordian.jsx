import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Update height when content changes or accordion opens/closes
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="w-full mb-2 border-b border-gray-100">
      <div
        className="flex justify-between py-4 px-2 md:p-6 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-sm font-medium">{title}</h3>
        <button
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <Plus className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: `${height}px`,
          // maxHeight: 200,
          // opacity: isOpen ? 1 : 0,
          opacity: 1,
        }}
      >
        <div ref={contentRef} className="p-4 pt-0 text-gray-600 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
