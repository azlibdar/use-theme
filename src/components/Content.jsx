import { useTheme } from "react-customs";

function Content() {
  const { theme, setTheme, toggleTheme } = useTheme();

  const setDark = () => setTheme("dark");
  const setLight = () => setTheme("light");
  const toggle = () => toggleTheme();

  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="mt-6 flex flex-col gap-8">
          <div className="w-full aspect-video flex items-center justify-center bg-zinc-200 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50 rounded-lg text-base uppercase font-bold">
            {theme}
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={setLight}
              className="w-full py-4 bg-emerald-500 text-sm rounded-lg text-black font-semibold hover:opacity-90 transition active:translate-y-[1px]"
            >
              Set to light
            </button>
            <button
              onClick={setDark}
              className="w-full py-4 bg-rose-400 text-sm rounded-lg text-black font-semibold hover:opacity-90 transition active:translate-y-[1px]"
            >
              Set to Dark
            </button>
            <button
              onClick={toggle}
              className="w-full py-4 bg-yellow-400 text-sm rounded-lg text-black font-semibold hover:opacity-90 transition active:translate-y-[1px]"
            >
              Toggle
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
