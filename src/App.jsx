import { stack, templateSettings } from "./data/stack";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 py-12">
      <div className="flex items-center text-xl font-semibold text-white">
        Entropy&lsquo;s starter template : Vite{" "}
        <TbBrandVite className="ml-2 mt-1 animate-pulse" size={24} />{" "}
        <span className="mx-1 text-emerald-300">+</span> React
        <FaReact className="ml-2 mt-1 animate-spin-slow" size={24} />
        <span className="mx-1 text-emerald-300">+</span> Tailwind CSS
        <RiTailwindCssFill className="mx-2 mt-1 animate-pulse" size={24} />
      </div>
      <div className="text-white">
        <p className="my-4 text-center text-xl font-bold text-pink-400 underline underline-offset-4">
          Stack list
        </p>
        <ul className="max-w-2xl list-decimal">
          {stack.map((el, i) => (
            <li key={i}>
              <span className="font-semibold">{el[0]}</span> :{" "}
              <span>{el[1]}</span>
            </li>
          ))}
        </ul>

        <p className="my-4 text-center text-xl font-bold text-pink-400 underline underline-offset-4">
          Custom configuration
        </p>

        {templateSettings.map((el, i) => (
          <div key={i}>
            <p className="my-2 text-center text-lg font-bold text-emerald-300 underline underline-offset-4">
              {el.title}
            </p>
            <ul className="list-inside list-decimal text-center">
              {el.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
