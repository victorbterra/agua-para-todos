export default function DicasPage() {
    const dicas = [
        'Feche a torneira ao escovar os dentes.',
        'Reaproveite a água da máquina de lavar.',
        'Verifique vazamentos com frequência.',
        'Evite jogar lixo em bueiros.',
        'Capte e use água da chuva para regar plantas.'
    ];
  
    return (
        <>
            <h2 className="text-2xl font-semibold">Faça boas práticas de uso consciente da água</h2>
            <p>Cuidados com a água em casa</p>
            <ul className="list-disc pl-5 space-y-2">
            {dicas.map((dica, i) => (
                <li key={i}>{dica}</li>
            ))}
            </ul>
        </>
    );
}