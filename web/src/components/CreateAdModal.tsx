import { Check, GameController } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { Input } from "./Form/Input";
import { useEffect, useState } from "react";


interface IGame {
  id: string;
  title: string;
}

export function CreateAdModal() {
  const [games, setGames] = useState<IGame[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-gray-800 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[38rem] shadow-xl">
        <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>

        <form action="" className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">Qual o game?</label>
            <select id="game" className="bg-gray-900 py-3 px-4 rounded text-sm appearance-none" defaultValue="">
              <option value="" disabled>Selecione o game que deseja jogar</option>

              {games.map(game => <option key={game.id} value={game.id}>{game.title}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">Seu nome (ou nickname)</label>
            <Input
              type="text"
              id="name"
              placeholder="Como te chamam dentro do game?"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying" className="font-semibold">Joga há quantos anos?</label>
              <Input
                type="number"
                id="yearsPlaying"
                placeholder="Tudo bem ser ZERO"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord" className="font-semibold">Qual seu Discord?</label>
              <Input
                type="string"
                id="discord"
                placeholder="Usuario#0000"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays" className="font-semibold">Quando costuma jogar?</label>

                <ToggleGroup.Root type="multiple" className="grid grid-cols-7 gap-2" onValueChange={setWeekDays} value={weekDays}>

                  <ToggleGroup.Item value="0" className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-red-600' : 'bg-gray-900'}`} title="Domingo">D</ToggleGroup.Item>
                  <ToggleGroup.Item value="1" className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-red-600' : 'bg-gray-900'}`} title="Segunda">S</ToggleGroup.Item>
                  <ToggleGroup.Item value="2" className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-red-600' : 'bg-gray-900'}`} title="Terça">T</ToggleGroup.Item>
                  <ToggleGroup.Item value="3" className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-red-600' : 'bg-gray-900'}`} title="Quarta">Q</ToggleGroup.Item>
                  <ToggleGroup.Item value="4" className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-red-600' : 'bg-gray-900'}`} title="Quinta">Q</ToggleGroup.Item>
                  <ToggleGroup.Item value="5" className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-red-600' : 'bg-gray-900'}`} title="Sexta">S</ToggleGroup.Item>
                  <ToggleGroup.Item value="6" className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-red-600' : 'bg-gray-900'}`} title="Sábado">S</ToggleGroup.Item>

                </ToggleGroup.Root>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="hourStart">Qual horário do dia?</label>

              <div className="grid grid-cols-2 gap-6">
                <Input type="time" id="hourStart" placeholder="De" />
                <Input type="time" id="hourEnd" placeholder="Até" />
              </div>
            </div>
          </div>

          <label className="mt-2 flex items-center gap-2 text-sm">
            <Checkbox.Root className="w-6 h-6 p-1 bg-gray-900">
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close type="button" className="bg-gray-500 px-5 h-12 rounded-md font-semibold hover:bg-gray-600 transition-colors">
              Cancelar
            </Dialog.Close>

            <button className="bg-red-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-red-700 transition-colors" type="submit">
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}