import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

interface DataForm {
  name: string;
  surname: string;
  age: number;
  isOlder: boolean;
}
export default function Home() {

  const [nome, setNome] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  const handleIsOlder = (age >= 18 ? 'maior de idade' : 'menor de idade');

  return (
    <main className='flex flex-col justify-center items-center '>
      <h1 className='my-8 text-slate-100'>Olá Typescript</h1>

      <article className='flex flex-col justify-center items-center '>
        <label className='m-2  text-cyan-500'>Nome</label>
        <input className='rounded-sm h-8 p-2' type="text" onChange={(e) => setNome(e.target.value)} />

        <label className='m-2 text-red-700'>Surname</label>
        <input className='rounded-sm h-8 p-2' type="text" onChange={(e) => setSurname(e.target.value)} />

        <label className='m-2 text-green-500'>Age</label>
        <input className='rounded-sm h-8 p-2' type="text" onChange={(e) => setAge(parseFloat(e.target.value))} />

        <p className='my-10 text-green-500 '>{`Seu nome é: ${nome} ${surname} e você é ${handleIsOlder}`}</p>
      </article>
    </main>
  )
}
