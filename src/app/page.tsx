'use client';
import Input from "@/components/Input"
import Button from "@/components/Button"
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [degraus, setDegraus] = useState(0)
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <div className="padding_5 py-3.5 flex flex-col gap-4 items-center justify-center border rounded-2xl bg-[#010188]">
        <h1 className="font-bold text-white">Conversor de Celsius para Fahrenheit</h1>
        <Input degraus={degraus} setDegraus={setDegraus}/>
        <Button degraus={degraus}/>
      </div>
      <div>
        <p>Desenvolvido por <Link href="https://devalexsandersautier.vercel.app/" target="_blank">Alexsander Sautier</Link> </p>
      </div>
    </main>
  );
}
