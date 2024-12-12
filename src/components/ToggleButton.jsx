import React, { useEffect, useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = async () => {
    const newValue = !isOn;
    setIsOn(newValue);

    try {
      await fetch("https://toggle-server.onrender.com/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: newValue ? 1 : 0 }),
      });
    } catch (error) {
      console.error("Error saving toggle value:", error);
    }
  };

  useEffect(() => {
    fetch("https://toggle-server.onrender.com/toggle")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.value === "number") {
          setIsOn(data.value === 1);
        }
      })
      .catch((error) => {
        console.error("Error fetching toggle value:", error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-96">
      <button
        onClick={handleToggle}
        className={`px-6 py-3 rounded-full font-bold transition-all duration-500 transform relative overflow-hidden focus:outline-none ${
          isOn
            ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg scale-110"
            : "bg-gradient-to-r from-gray-400 to-gray-600 text-gray-100 shadow-md scale-100"
        } hover:shadow-2xl hover:scale-115 focus:ring-4 focus:ring-green-300`}
      >
        <span
          className={`absolute inset-0 w-full h-full transition-all duration-700 rounded-full ${
            isOn ? "bg-green-100 opacity-10" : "bg-gray-100 opacity-5"
          }`}
        />
        <span className="relative">{isOn ? "ON" : "OFF"}</span>
      </button>
    </div>
  );
}

export default ToggleButton;
