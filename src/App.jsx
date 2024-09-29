import "./i18n/i18n.js";
import { useTranslation } from "react-i18next";
import { stack, templateSettings } from "./data/stack";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import { fetchDog } from "./lib/dog-api/dogApiService.js";
import { useBearStore } from "./store/useBearStore.js";

function App() {
  const { bears, increasePopulation, decreasePopulation } = useBearStore();
  const { t } = useTranslation();
  const { data, refetch, isFetching } = useQuery({
    queryKey: ["demo"],
    queryFn: fetchDog,
    staleTime: 1000 * 10,
  });

  const dog = data?.message;
  const btnStyle =
    "min-w-[80px] text-white bg-pink-400 hover:bg-pink-500 font-bold rounded-full text-xl px-5 py-2.5 text-center";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 py-10">
      <p className="mb-6 flex text-center text-4xl font-black text-emerald-300">
        {t("welcome")}
      </p>
      <div className="flex items-center text-xl font-semibold text-white">
        Vite <TbBrandVite className="ml-2 mt-1 animate-pulse" size={24} />{" "}
        <span className="mx-1 text-emerald-300">+</span> React
        <FaReact className="ml-2 mt-1 animate-spin-slow" size={24} />
        <span className="mx-1 text-emerald-300">+</span> Tailwind CSS
        <RiTailwindCssFill className="mx-2 mt-1 animate-pulse" size={24} />
      </div>
      <div className="text-white">
        <p className="my-4 text-center text-xl font-bold text-pink-400 underline underline-offset-4">
          {t("description")}
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

        <hr className="my-8" />

        {dog && (
          <div className="flex flex-col items-center">
            <p className="pb-4 text-lg font-bold text-pink-400">
              React query demo
            </p>

            <img
              className="h-24 w-24 rounded-full border-4 border-emerald-300 bg-gray-800 object-cover"
              src={data?.message}
            />

            <p className="text-md mt-5 font-semibold text-white">
              <button
                disabled={isFetching}
                onClick={refetch}
                className={`${btnStyle} my-5 cursor-pointer text-sm`}
              >
                {isFetching ? "Fetching..." : "🐶 Refetch ?"}
              </button>
            </p>
          </div>
        )}
        <hr className="my-8" />
        <div className="flex flex-col items-center justify-center text-white">
          <p className="pb-4 text-lg font-bold text-pink-400">Zustand demo</p>
          <div className="text-3xl font-bold">Bears counter : {bears}</div>
          <div className="flex gap-5 py-5 text-2xl font-bold">
            <button className={btnStyle} onClick={decreasePopulation}>
              -
            </button>
            <button className={btnStyle} onClick={increasePopulation}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
