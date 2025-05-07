import Image from "next/image";
import ilustrationHome from "@/public/images/ilustration-one.svg";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col lg:flex-row space-y-4 items-center py-8">
      <div className="w-full lg:w-1/2 mx-auto p-3">
        <h1 className="text-center lg:text-start text-5xl font-bold text-blue-900">
          Plataforma Educacional de Saneamento
        </h1>
        <p className="text-center lg:text-start text-lg mt-6">
          Aprenda sobre o uso consciente da água e saneamento de forma
          interativa.
        </p>
        <div className="flex items-center lg:justify-start  justify-center mt-4 gap-6">
          <Link href={"/dicas"} className="button-blue">
            Dicas sobre saneamento
          </Link>
          <Link href={"/quiz"} className="button-outline ">
            Começar o Quiz
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mx-auto items-center justify-center">
        <Image
          className="mx-auto"
          src={ilustrationHome}
          alt="Saneamento"
          width={512}
          height={512}
        />
      </div>
    </section>
  );
}
