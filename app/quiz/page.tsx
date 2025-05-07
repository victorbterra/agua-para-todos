"use client";
import { useState, useEffect } from "react";
import QuizCard from "@/components/quizcard";
import { supabase } from "@/lib/supabase";
import Ranking from "@/components/ranking";

const perguntas = [
  {
    pergunta: "Qual dessas atitudes economiza água?",
    opcoes: [
      "Lavar carro com mangueira",
      "Reaproveitar água da chuva",
      "Deixar torneira aberta",
    ],
    resposta: 1,
  },
  {
    pergunta: "A falta de saneamento pode causar:",
    opcoes: [
      "Problemas respiratórios",
      "Infecções intestinais",
      "Dor de cabeça",
    ],
    resposta: 1,
  },
];

export default function QuizPage() {
  const [iniciado, setIniciado] = useState(false);
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [nome, setNome] = useState("");
  const [ranking, setRanking] = useState<{ nome: string; pontos: number }[]>([]);
  const [resultadoSalvo, setResultadoSalvo] = useState(false);

  useEffect(() => {
    carregarRanking();
  }, []);

  const carregarRanking = async () => {
    const { data, error } = await supabase
      .from('ranking')
      .select('*')
      .order('pontos', { ascending: false })
      .limit(10);
  
    if (error) {
      console.error('Erro ao carregar ranking:', error.message);
    } else {
      console.log('Ranking carregado:', data);
      setRanking(data || []);
    }
  };

  const salvarResultado = async () => {
    if (!nome.trim()) return;

    const { error } = await supabase
      .from("ranking")
      .insert([{ nome: nome.trim(), pontos }]);

    if (error) {
      console.error("Erro ao salvar resultado:", error.message);
      return;
    }

    setResultadoSalvo(true);
    await carregarRanking();
  };

  const responder = (indiceSelecionado: number) => {
    if (indiceSelecionado === perguntas[indice].resposta) {
      setPontos((p) => p + 1);
    }

    const proximo = indice + 1;
    if (proximo < perguntas.length) {
      setIndice(proximo);
    } else {
      setFinalizado(true);
    }
  };

  return (
    <div className="max-w-2xl py-20 px-4 mx-auto">
      {!iniciado ? (
        <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-blue-800 mb-4">
            💧 Introdução ao Quiz
          </h1>
          <p className="text-gray-700 mb-2">
            Antes de começar, que tal testar seus conhecimentos sobre saneamento
            básico e o uso consciente da água?
          </p>
          <p className="text-gray-700 mb-6">
            Ao final, você verá sua pontuação e poderá entrar no ranking da
            comunidade!
          </p>
          <button
            onClick={() => setIniciado(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
          >
            Começar Quiz
          </button>
        </section>
      ) : finalizado ? (
        <div className="mt-10 space-y-6">
          <p className="text-3xl text-center font-medium text-green-700">
            Você acertou <strong>{pontos}</strong> de <strong>{perguntas.length}</strong> perguntas!
          </p>
      
          <div className="bg-white rounded-lg shadow p-6 border">
            <h2 className="text-2xl text-center font-bold mb-2 text-blue-800">Ranking da Comunidade</h2>
            <p className="text-center">o top 10 do ranking da comunidade</p>
      
            {!resultadoSalvo && (
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Digite seu nome..."
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={salvarResultado}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Salvar resultado
                </button>
              </div>
            )}
      
            {ranking.length > 0 ? (
              <Ranking ranking={ranking} />
            ) : (
              <p className="text-gray-500 text-center">Seja o primeiro a entrar no ranking!</p>
            )}
          </div>
        </div>
      ) : (
        <QuizCard dados={perguntas[indice]} aoResponder={responder} />
      )}
    </div>
  );
}
