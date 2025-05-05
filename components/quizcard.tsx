export default function QuizCard({ dados, aoResponder }: {
    dados: { pergunta: string; opcoes: string[] },
    aoResponder: (opcao: number) => void
  }) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">{dados.pergunta}</h2>
        <div className="space-y-2">
          {dados.opcoes.map((opcao, index) => (
            <button
              key={index}
              onClick={() => aoResponder(index)}
              className="block w-full bg-blue-100 hover:bg-blue-200 p-2 rounded shadow"
            >
              {opcao}
            </button>
          ))}
        </div>
      </div>
    );
  }