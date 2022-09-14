import { MagnifyingGlassPlus } from 'phosphor-react';

import "./styles/main.css";

import logoImg from "./assets/logo-esports.svg";


function App() {
  return (
    <div className="max-w-[84rem] mx-auto flex items-center flex-col my-20">
      <img 
        src={logoImg} 
        alt="Logo eSports Meet" 
      />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-clip-text bg-red-gradient">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="Game" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className="font-bold text-base text-white block">Dota 2</strong>
            <span className="font-normal text-sm text-neutral-300 block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 mt-8 bg-galaxy-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-neutral-800 px-8 py-6 flex items-center justify-between">
          <div>
            <strong className="font-black text-2xl text-white block">
              Não encontrou seu duo?
            </strong>

            <span className="font-normal text-base text-neutral-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-red-700 text-white rounded hover:bg-red-900 transition-colors flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
