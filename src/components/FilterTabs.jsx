import { useState } from "react";

export default function FilterTabs() {
  const [active, setActive] = useState("All");
  const tabs = ["All", "Movies", "TV Shows"];

  return (
    <div className="flex gap-4 mt-8 p-2 rounded-xl bg-black/15 w-[368px]  items-center justify-center">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-6 py-2  rounded-xl text-sm font-medium ${
            active === tab
              ? "bg-purple-600 text-white"
              : " text-gray-300 hover:bg-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
