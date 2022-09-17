import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import logoImg from "./assets/logo-esports.svg";
import "./styles/main.css";
import { useEffect, useState } from "react";


interface IGame {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<IGame[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

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
        {games.map(game => (
          <GameBanner 
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
