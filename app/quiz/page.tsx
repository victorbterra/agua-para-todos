'use client';
import { useState } from 'react';
import QuizCard from '@/components/quizcard';

const perguntas = [
  {
    pergunta: 'Qual dessas atitudes economiza água?',
    opcoes: ['Lavar carro com mangueira', 'Reaproveitar água da chuva', 'Deixar torneira aberta'],
    resposta: 1,
  },
  {
    pergunta: 'A falta de saneamento pode causar:',
    opcoes: ['Problemas respiratórios', 'Infecções intestinais', 'Dor de cabeça'],
    resposta: 1,
  },
];

export default function QuizPage() {
  const [iniciado, setIniciado] = useState(false); // 👈 novo estado de introdução
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  function responder(índiceSelecionado: number) {
    if (índiceSelecionado === perguntas[indice].resposta) {
      setPontos(p => p + 1);
    }
    const proximo = indice + 1;
    if (proximo < perguntas.length) {
      setIndice(proximo);
    } else {
      setFinalizado(true);
    }
  }

  return (
      <div className="max-w-2xl py-20 px-4 mx-auto">
        {!iniciado ? (
          <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold text-blue-800 mb-4">💧 Introdução ao Quiz</h1>
            <p className="text-gray-700 mb-2">
              Antes de começar, que tal testar seus conhecimentos sobre saneamento básico e o uso consciente da água?
            </p>
            <p className="text-gray-700 mb-2">
              Este quiz foi criado para <strong>ensinar de forma leve e divertida</strong> os cuidados essenciais com a água e a importância de um ambiente limpo e saudável para todos.
            </p>
            <p className="text-gray-700 mb-6">
              Ao final, você ainda receberá um resumo com dicas valiosas para aplicar no seu dia a dia. Preparado(a)? Então bora começar!
            </p>
            <button
              onClick={() => setIniciado(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition-all duration-200"
            >
              Começar Quiz
            </button>
          </section>
        ) : finalizado ? (
          <div className="text-center mt-10">
            <p className="text-3xl font-medium text-green-700">
              Você acertou <strong>{pontos}</strong> de <strong>{perguntas.length}</strong> perguntas!
            </p>
          </div>
        ) : (
          <QuizCard dados={perguntas[indice]} aoResponder={responder} />
        )}
      </div>
  );
}