import { useState } from "react";
import { ACTORS } from "../../data/actors";
import { WORLDS } from "../../data/worlds";

type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export function EcosystemVisualization() {
  const [level, setLevel] = useState<Level>(1);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col">
      <header className="p-4 border-b border-slate-800 flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          Cartographie de l'écosystème musical
        </h1>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l as Level)}
              className={`px-3 py-1 rounded text-sm ${
                level === l
                  ? "bg-slate-100 text-slate-900"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`}
            >
              Niv {l}
            </button>
          ))}
        </div>
      </header>
      <div className="relative w-full h-[600px]">
        {WORLDS.filter(w => w.level <= level).map(world => (
          <div
            key={world.id}
            className="absolute p-4 rounded border border-slate-700 flex flex-col justify-center items-center"
            style={{
              backgroundColor: world.color,
              height: "160px",
              width: "160px",
              left: `${world.x}%`,
              top: `${world.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <h2 className="font-semibold text-slate-900 text-center text-xl">{world.name}</h2>
            {world.subtitle && (
              <p className="text-md text-slate-900 opacity-80 text-center mt-1">
                {world.subtitle}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {ACTORS.filter(actor => actor.level === level).map(actor => (
    <div
      key={actor.id}
      className="p-4 bg-slate-800 rounded border border-slate-700"
    >
      <h2 className="font-semibold">{actor.name}</h2>
      <p className="text-sm text-slate-400">Chaîne de valeur : {actor.valueChainPosition}</p>
    </div>
  ))}
</div>
    </div>
  );
}