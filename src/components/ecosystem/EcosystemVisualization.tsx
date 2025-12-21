import { useState } from "react";
import { WORLDS } from "../../data/worlds";
import { ACTORS } from "../../data/actors";
import { FLOWS } from "../../data/flows";

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

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {level === 1 && (
          <p className="text-slate-300">
            Ici on affichera les 4 mondes principaux (Artistes, Musique
            enregistrée, Live, Édition) avec des blocs symétriques.
          </p>
        )}
        {level === 2 && (
          <p className="text-slate-300">
            Ici on affichera l'écosystème étendu (ajout Audiovisuel, Autres
            diffuseurs, État).
          </p>
        )}
        {level === 3 && (
          <p className="text-slate-300">
            Ici on affichera le détail des mondes avec les acteurs (vue
            "galaxie").
          </p>
        )}
        {level === 4 && (
          <p className="text-slate-300">
            Ici on affichera les flux financiers entre acteurs.
          </p>
        )}
        {level === 5 && (
          <p className="text-slate-300">
            Ici on affichera les liens contractuels entre acteurs.
          </p>
        )}
        {level === 6 && (
          <p className="text-slate-300">
            Ici on affichera les flux de data entre acteurs.
          </p>
        )}
        {level === 7 && (
          <p className="text-slate-300">
            Ici on affichera la vue experte avec tous les flux et tous les
            acteurs.
          </p>
        )}
      </main>
    </div>
  );
}