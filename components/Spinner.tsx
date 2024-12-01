"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Spinner = () => {
  const messages = ["Loading", "Still Loading", "Almost There"]; // Messages to cycle through
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1500); // Change every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={"/loading.gif"} alt="loading..." width={50} height={50} />
      <p className="mt-4 text-sm text-gray-600">
        {messages[currentMessageIndex]}...
      </p>
    </div>
  );
};

export default Spinner;