import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from "recharts";

const energyData = [
  { day: "M", kWh: 120 },
  { day: "T", kWh: 180 },
  { day: "W", kWh: 90 },
  { day: "T", kWh: 220 },
  { day: "F", kWh: 160 },
  { day: "S", kWh: 80 },
  { day: "Today", kWh: 130 },
];

const footfallData = [
  { day: "M", value: 130 },
  { day: "T", value: 120 },
  { day: "W", value: 125 },
  { day: "T", value: 115 },
  { day: "F", value: 110 },
  { day: "S", value: 135 },
  { day: "Today", value: 105 },
];

export default function App() {
  const [lightsOn, setLightsOn] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white font-poppins flex">

      <aside className="hidden lg:flex flex-col w-36 m-4 rounded-3xl
        bg-gradient-to-b from-[#0E2B2A] via-[#071716] to-black
        border border-white/5 backdrop-blur-xl">
        <nav className="flex-1 flex flex-col items-center gap-10 pt-6">
          <button className="relative flex flex-col items-center gap-2 text-teal-400 font-medium">
            <div className="absolute inset-0 rounded-2xl bg-teal-400/10 blur-xl"></div>
            <div className="relative flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-teal-400/10">
              <img src="/ui_design_resources/nav-icons/home.svg" className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </div>
          </button>

          <button className="flex flex-col items-center gap-2 text-gray-400 hover:text-white">
            <img src="/ui_design_resources/nav-icons/pie.svg" className="w-6 h-6" />
            <span className="text-xs">Analyse</span>
          </button>

          <button className="flex flex-col items-center gap-2 text-gray-400 hover:text-white">
            <img src="/ui_design_resources/nav-icons/tiles.svg" className="w-6 h-6" />
            <span className="text-xs">Control</span>
          </button>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-10 py-6">
          <div className="flex items-center gap-3">
            <img
              src="/ui_design_resources/ds-logo.svg"
              alt="DigiSpace"
              className="h-9"
            />
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-teal/40">
            <img
              src="https://i.pravatar.cc/40?u=digi"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <main className="flex-1 px-10 pb-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 bg-gradient-to-br from-[#0E2B2A] to-black border border-white/5 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <img src="ui_design_resources\air.png" alt="" className="w-4 " />
                  </div>
                  Lights
                </div>
                <label className="relative inline-flex cursor-pointer">
                  <input type="checkbox" checked={lightsOn} onChange={() => setLightsOn(!lightsOn)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-teal-400"></div>
                  <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${lightsOn ? "translate-x-5" : ""}`} />
                </label>
              </div>

              <div className="flex justify-center items-center h-48">
                <svg viewBox="0 0 200 100" className="w-full">
                  <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="#1f2937" strokeWidth="16" />
                  <path
                    d="M20 100 A80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#3FFDE0"
                    strokeWidth="16"
                    strokeDasharray="251"
                    strokeDashoffset="60"
                    strokeLinecap="round"
                  />
                  <circle cx="161" cy="48" r="8" fill="#3FFDE0" stroke="white" strokeWidth="3" />
                </svg>
              </div>

              <div className="text-center text-4xl font-bold text-teal-300">4300k</div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>2700k</span>
                <span>5000k</span>
              </div>
            </div>

            <div
              className="col-span-1 rounded-3xl p-6
  bg-[radial-gradient(circle_at_top_left,#1e4f4a,#020202)]
  border border-white/10"
            >

              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <img src="ui_design_resources\drop.png" alt="" className="w-3 " />
                  </div>
                  Water Consumption
                </div>

                <span className="px-4 py-1 rounded-full bg-white/10 text-xs text-gray-300">
                  Yesterday
                </span>
              </div>

              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center">
                  <img src="ui_design_resources\Humid.png" alt="" />
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <div className="px-10 py-4 rounded-full bg-[#144b45] text-4xl font-semibold text-white">
                  8.42<span className="text-xl font-normal">m³</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-teal-400/15 text-teal-300 text-sm">
                  <span className="text-lg">↓</span>
                  1.2m³ less water used compare to last tuesday
                </div>
              </div>
            </div>

            <div className="col-span-1 bg-gradient-to-br from-[#0E2B2A] to-black 
border border-white/5 rounded-3xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span><img src="ui_design_resources\air.png" alt="" className="w-4" /></span>
                  </div>
                  <span className="text-lg font-medium">Carbon Intensity</span>
                </div>
                <span className="px-4 py-1 rounded-full bg-white/10 text-sm">
                  Current
                </span>
              </div>

              <div className="relative w-64 h-64 mx-auto">
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#8B4A42"
                    strokeWidth="30" strokeDasharray="131 439" strokeDashoffset="0" />
                

                  <circle cx="100" cy="100" r="70" fill="none" stroke="#F4A64F"
                    strokeWidth="30" strokeDasharray="87 483" strokeDashoffset="-131" />
                

                  <circle cx="100" cy="100" r="70" fill="none" stroke="#9C4DE8"
                    strokeWidth="30" strokeDasharray="87 483" strokeDashoffset="-218" />
                

                  <circle cx="100" cy="100" r="70" fill="none" stroke="#2EE6D6"
                    strokeWidth="30" strokeDasharray="65 505" strokeDashoffset="-305" />
                

                  <circle cx="100" cy="100" r="70" fill="none" stroke="#F05454"
                    strokeWidth="30" strokeDasharray="65 505" strokeDashoffset="-370" />
                
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-6 py-3 rounded-full bg-white text-black font-semibold flex items-baseline gap-2">
                    <span className="text-xl">95gm</span>
                    <span className="text-sm text-gray-600">CO₂/kWh</span>
                  </div>
                </div>

                <div className="absolute top-2 left-20 bg-white text-black text-xs px-3 py-1 rounded-full">
                  30%<br />Coal
                </div>

                <div className="absolute top-16 right-2 bg-white text-black text-xs px-3 py-1 rounded-full">
                  20%<br />Hydro
                </div>

                <div className="absolute bottom-16 right-4 bg-white text-black text-xs px-3 py-1 rounded-full">
                  20%<br />Nuclear
                </div>

                <div className="absolute bottom-2 left-24 bg-white text-black text-xs px-3 py-1 rounded-full">
                  15%<br />Wind
                </div>

                <div className="absolute bottom-16 left-2 bg-white text-black text-xs px-3 py-1 rounded-full">
                  15%<br />Solar
                </div>
              </div>
            </div>

            <div className="col-span-1 bg-gradient-to-br from-[#0E2B2A] to-black border border-white/5 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <img src="ui_design_resources\flash.png" alt="" className="w-4 " />
                  </div>
                  Energy Consumption
                </div>
                 <span className="px-4 py-1 rounded-full bg-white/10 text-xs text-gray-300">
                  Last 7 days
                </span>
              </div>
              <div className="h-72">
                <ResponsiveContainer>
                  <BarChart data={energyData}>
                    <XAxis dataKey="day" tick={{ fill: "#9ca3af" }} />
                    <Bar dataKey="kWh" fill="#3FFDE0" radius={6} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="col-span-1 bg-gradient-to-br from-[#0E2B2A] to-black border border-white/5 rounded-3xl p-6">
               <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <img src="ui_design_resources\users.png" alt="" className="w-4 " />
                  </div>
                  Football
                </div>
                 <span className="px-4 py-1 rounded-full bg-white/10 text-xs text-gray-300">
                  Last 7 days
                </span>
              </div>
              <div className="h-72">
                <ResponsiveContainer>
                  <LineChart data={footfallData}>
                    <XAxis dataKey="day" tick={{ fill: "#9ca3af" }} />
                    <YAxis tick={{ fill: "#9ca3af" }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3FFDE0" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
