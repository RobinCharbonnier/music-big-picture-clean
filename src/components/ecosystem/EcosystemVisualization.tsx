import { useState } from "react";
import { ACTORS } from "../../data/actors";
import { WORLDS } from "../../data/worlds";

type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export function EcosystemVisualization() {
  const [level, setLevel] = useState<Level>(1);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col">
      {/* HEADER */}
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

      {/* SPATIAL MAP */}
      <div
        className="relative w-full h-[600px] origin-top-left"
        style={{ transform: "scale(var(--zoom))" }}
      >
        {WORLDS.filter((w) => w.level <= level).map((world) => (
          <div
            key={world.id}
            className="absolute p-4 rounded border border-slate-700 flex flex-col items-center"
            style={{
              backgroundColor: world.color,
              minHeight: "200px",
              minWidth: "200px",
              left: `${world.x}%`,
              top: `${world.y}%`,
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingBottom: "12px",
            }}
          >
            <h2 className="font-semibold text-slate-900 text-center text-xl">
              {world.name}
            </h2>

            {world.subtitle && (
              <p className="text-md text-slate-900 opacity-80 text-center mt-1">
                {world.subtitle}
              </p>
            )}

            {/* ACTORS INSIDE WORLDS — ONLY FROM LEVEL 3 */}
            {level >= 3 && (
              <div className="mt-3 flex flex-col gap-2 w-full">
                {ACTORS.filter((actor) => actor.worldId === world.id)
                  .sort(
                    (a, b) => a.valueChainPosition - b.valueChainPosition
                  )
                  .map((actor) => (
                    <div
                      key={actor.id}
                      className="w-full p-2 bg-slate-800 text-slate-100 rounded border border-slate-700 text-xs"
                    >
                      {actor.name}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}