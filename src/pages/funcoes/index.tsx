import { useState } from "react";

export default function Funcoes() {

  const [primeiroNumero, setPrimeiroNumero] = useState<number>(0);
  const [segundoNumero, setSegundoNumero] = useState<number>(0);

  const soma = (primeiroNumero + segundoNumero);
  const subtracao = (primeiroNumero - segundoNumero);
  const multiplicacao = (primeiroNumero * segundoNumero);
  const divisao = (primeiroNumero / segundoNumero);

  return (
    <main className='flex flex-col justify-center items-center '>
      <h1 className='my-8 text-slate-100'>Olá Typescript</h1>

      <article className='flex flex-col justify-center items-center '>
        <label className='m-2  text-cyan-500'>Informe um número</label>
        <input className='rounded-sm h-8 p-2' type="text" onChange={(e) => setPrimeiroNumero(parseFloat(e.target.value))} />

        <label className='m-2 text-red-700'>Informe outro número</label>
        <input className='rounded-sm h-8 p-2' type="text" onChange={(e) => setSegundoNumero(parseFloat(e.target.value))} />

        <p className='my-10 text-green-500 '>{`A soma dos números é: ${soma}`}</p>
        <p className='my-10 text-green-500 '>{`A subtracao dos números é: ${subtracao}`}</p>
        <p className='my-10 text-green-500 '>{`A multiplicacao dos números é: ${multiplicacao}`}</p>
        <p className='my-10 text-green-500 '>{`A divisao dos números é: ${divisao}`}</p>
      </article>
    </main>
  )

}

