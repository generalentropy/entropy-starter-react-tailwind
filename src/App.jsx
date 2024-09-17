import { stack, templateSettings } from "./data/stack";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 py-12">
      <div className="text-xl font-semibold text-white">
        Entropy&lsquo;s React ⚛️ + Tailwind CSS Template 🚀
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
