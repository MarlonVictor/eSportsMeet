interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img 
        src={props.bannerUrl} 
        alt={props.title}
      />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
        <strong className="font-bold text-base text-white block">
          {props.title}
        </strong>

        <span className="font-normal text-sm text-neutral-300 block">
          {props.adsCount} {props.adsCount <= 1 ? 'anuncio' : 'anúncios'}
        </span>
      </div>
    </a>
  )
}