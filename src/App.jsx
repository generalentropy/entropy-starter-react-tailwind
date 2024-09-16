import { stack } from "../data/stack";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-800">
      <div className="text-xl font-semibold text-white">
        Entropy&lsquo;s React ⚛️ + Tailwind CSS Template 🚀
      </div>
      <div className="text-white">
        <p className="my-4 text-center text-xl font-bold text-pink-400 underline underline-offset-4">
          Stack list
        </p>
        <ul className="list-decimal">
          {stack.map((el, i) => (
            <li key={i}>
              <span className="font-semibold">{el[0]}</span> :{" "}
              <span>{el[1]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
