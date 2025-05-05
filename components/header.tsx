import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white py-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">Saneamento+</Link>
        <div className="space-x-4">
          <Link href="/aprender">Aprender</Link>
          <Link href="/quiz">Quiz</Link>
          <Link href="/dicas">Dicas</Link>
        </div>
      </nav>
    </header>
  );
}