import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";


export function CreateAdBanner() {
  return (
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

        <Dialog.Trigger className="py-3 px-4 bg-red-700 text-white rounded hover:bg-red-900 transition-colors flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}