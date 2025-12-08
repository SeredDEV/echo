import React, { useState, useRef, useEffect } from "react";

export type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

const options: { value: SortOption; label: string; icon: JSX.Element }[] = [
  {
    value: "default",
    label: "Destacados",
    icon: <span className="mr-2">⭐</span>,
  },
  {
    value: "price-asc",
    label: "Menor precio",
    icon: <span className="mr-2">💰</span>,
  },
  {
    value: "price-desc",
    label: "Mayor precio",
    icon: <span className="mr-2">💎</span>,
  },
  {
    value: "name-asc",
    label: "A-Z",
    icon: <span className="mr-2"><span className="inline-block bg-blue-100 text-blue-600 rounded px-1 text-xs font-bold">abc</span></span>,
  },
  {
    value: "name-desc",
    label: "Z-A",
    icon: <span className="mr-2"><span className="inline-block bg-blue-100 text-blue-600 rounded px-1 text-xs font-bold">abc</span></span>,
  },
];

interface CustomDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selected = options.find((opt) => opt.value === value);

  return (
    <div ref={ref} className="relative w-[180px]">
      <button
        type="button"
        className={`w-full flex items-center justify-between px-3 py-2.5 border-2 border-[#0FA6D1] rounded-xl bg-white text-sm font-semibold cursor-pointer shadow-sm hover:border-[#009ec2] transition-all focus:outline-none focus:ring-2 focus:ring-[#0FA6D1] ${open ? 'ring-2 ring-[#0FA6D1]' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">{selected?.icon}{selected?.label}</span>
        <svg className="w-4 h-4 text-[#0FA6D1] ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className={`absolute z-10 mt-2 w-full transition-all duration-200 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`} style={{minWidth: '180px'}}>
        <ul className="bg-white border border-gray-100 rounded-xl shadow-xl text-sm overflow-hidden">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`flex items-center px-4 py-2 cursor-pointer transition-all select-none ${value === opt.value ? "bg-[#0FA6D1] text-white font-bold" : "hover:bg-[#F0FAFF] text-gray-700"}`}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              role="option"
              aria-selected={value === opt.value}
            >
              <span className={`mr-2 text-lg ${value === opt.value ? 'text-yellow-300' : ''}`}>{opt.icon}</span>
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomDropdown;
