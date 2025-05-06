'use client';
import { useState, useEffect } from 'react';
import QuizCard from '@/components/quizcard';
import { supabase } from '@/lib/supabase';

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
  const [iniciado, setIniciado] = useState(false);
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [nome, setNome] = useState('');
  const [ranking, setRanking] = useState<{ nome: string; pontos: number }[]>([]);
  const [resultadoSalvo, setResultadoSalvo] = useState(false);

  useEffect(() => {
    const dados = localStorage.getItem('rankingQuiz');
    if (dados) setRanking(JSON.parse(dados));
  }, []);

  const salvarResultado = async () => {
    if (!nome.trim()) return;
  
    const { error } = await supabase.from('ranking').insert([{ nome, pontos }]);
    if (error) {
      console.error('Erro ao salvar resultado:', error.message);
      return;
    }
  
    setResultadoSalvo(true);
    carregarRanking(); // Atualiza a lista
  };

  const carregarRanking = async () => {
    const { data, error } = await supabase
      .from('ranking')
      .select('*')
      .order('pontos', { ascending: false })
      .limit(10);
  
    if (error) {
      console.error('Erro ao carregar ranking:', error.message);
      return;
    }
  
    setRanking(data || []);
  };
  
  useEffect(() => {
    carregarRanking();
  }, []);
  
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
          <p className="text-gray-700 mb-6">
            Ao final, você verá sua pontuação e poderá entrar no ranking da comunidade!
          </p>
          <button
            onClick={() => setIniciado(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
          >
            Começar Quiz
          </button>
        </section>
      ) : finalizado ? (
        <div className="text-center mt-10">
          <p className="text-3xl font-medium text-green-700 mb-4">
            Você acertou <strong>{pontos}</strong> de <strong>{perguntas.length}</strong> perguntas!
          </p>

          {!resultadoSalvo ? (
            <>
              <input
                className="border p-2 rounded w-full max-w-sm mb-4"
                placeholder="Digite seu nome para salvar no ranking"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
              <br />
              <button
                onClick={salvarResultado}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Salvar Resultado
              </button>
            </>
          ) : (
            <div className="mt-8 text-left">
              <h2 className="text-xl font-bold mb-4">🏆 Ranking (Top 10)</h2>
              <ul className="space-y-2">
                {ranking.map((item, i) => (
                  <li key={i} className="bg-gray-100 px-4 py-2 rounded">
                    <strong>{i + 1}º</strong> - {item.nome}: {item.pontos} ponto(s)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <QuizCard dados={perguntas[indice]} aoResponder={responder} />
      )}
    </div>
  );
}