import Link from 'next/link';

export default function Header() {
  //
  return (
    <header className="bg-blue-800 text-white py-4 px-4">
      <nav className="max-w-6xl mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">Saneamento+</Link>
        <div className="space-x-8">
          <Link href="/aprender" className="underline">O que é saneamento</Link>
        </div>
      </nav>
    </header>
  );
}