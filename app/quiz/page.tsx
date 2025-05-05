'use client';
import { useState } from 'react';
import QuizCard from '@/components/quizcard';

const perguntas = [
  {
    pergunta: 'Qual dessas atitudes economiza água?',
    opcoes: ['Lavar carro com mangueira', 'Reaproveitar água da chuva', 'Deixar torneira aberta'],
    resposta: 1
  },
  {
    pergunta: 'A falta de saneamento pode causar:',
    opcoes: ['Problemas respiratórios', 'Infecções intestinais', 'Dor de cabeça'],
    resposta: 1
  }
];

export default function QuizPage() {
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  function responder(indiceSelecionado: number) {
    if (indiceSelecionado === perguntas[indice].resposta) setPontos(p => p + 1);
    const proximo = indice + 1;
    if (proximo < perguntas.length) setIndice(proximo);
    else setFinalizado(true);
  }

  return (
    <div className="max-w-2xl py-20 mx-auto">
      {finalizado ? (
        <p className="text-3xl text-center font-medium text-green-700">
          Você acertou <strong>{pontos}</strong> de <strong>{perguntas.length}</strong> perguntas!
        </p>
        ): (
        <QuizCard dados={perguntas[indice]} aoResponder={responder} />
      )}
    </div>
  );
}