import React from "react";

type Props = {
  ranking: { nome: string; pontos: number }[];
};

export default function Ranking({ ranking }: Props) {
  return (
    <section className="mt-10 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      {ranking.length === 0 ? (
        <p className="text-gray-500 text-center">Nenhum resultado ainda.</p>
      ) : (
        <ul className="space-y-2">
          {ranking.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center px-4 py-2 rounded ${
                index === 0
                  ? "bg-yellow-100 font-bold"
                  : index === 1
                  ? "bg-gray-100"
                  : "bg-gray-50"
              }`}
            >
              <span>
                #{index + 1} - {item.nome}
              </span>
              <span className="text-green-600 font-semibold">{item.pontos} pts</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
