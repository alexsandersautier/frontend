import Input from "@/components/Input"
import Button from "@/components/Button"
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <div className="padding_5 py-3.5 flex flex-col gap-4 items-center justify-center border rounded-2xl bg-[#010188]">
        <h1 className="font-bold text-white">Conversor de Celsius para Fahrenheit</h1>
        <Input />
        <Button />
      </div>
    </main>
  );
}
