import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoTwitch from '@/images/logos/logos_black/png/twitch.png'
import logoNeflix from '@/images/logos/logos_black/png/neflix.png'
import logoYoutube from '@/images/logos/logos_black/png/youtube.png'
import logoAfreeca from '@/images/logos/logos_black/png/afreecaTV.png'
import logoAppleTv from '@/images/logos/logos_black/appletv.png'
import logoCoupangPlay from '@/images/logos/logos_black/png/coupang-play.png'
import logoDisneyPlus from '@/images/logos/logos_black/png/disney+.png'
import logoHboMax from '@/images/logos/logos_black/png/HBOmax.png'
import logoPrimeVideo from '@/images/logos/logos_black/png/prime-video.png'
import logoTiktok from '@/images/logos/logos_black/png/tiktok.png'
import logoTving from '@/images/logos/logos_black/png/tving.png'
import logoWatcha from '@/images/logos/logos_black/png/watcha.png'
import logoWavve from '@/images/logos/logos_black/png/wavve.png'

const logoList = [
  { name: 'Youtube', logo: logoYoutube },
  { name: 'Neflix', logo: logoNeflix },
  { name: 'Twitch', logo: logoTwitch },
  { name: 'Afreeca', logo: logoAfreeca },
  { name: 'AppleTv', logo: logoAppleTv },
  { name: 'CoupangPlay', logo: logoCoupangPlay },
  { name: 'DisneyPlus', logo: logoDisneyPlus },
  { name: 'HboMax', logo: logoHboMax },
  { name: 'PrimeVideo', logo: logoPrimeVideo },
  { name: 'Tiktok', logo: logoTiktok },
  { name: 'Tving', logo: logoTving },
  { name: 'Watcha', logo: logoWatcha },
  { name: 'Wavve', logo: logoWavve },

  { name: 'Youtube2', logo: logoYoutube },
  { name: 'Neflix2', logo: logoNeflix },
  { name: 'Twitch2', logo: logoTwitch },
  { name: 'Afreeca2', logo: logoAfreeca },
  { name: 'AppleTv2', logo: logoAppleTv },
  { name: 'CoupangPlay2', logo: logoCoupangPlay },
  { name: 'DisneyPlus2', logo: logoDisneyPlus },
  { name: 'HboMax2', logo: logoHboMax },
  { name: 'PrimeVideo2', logo: logoPrimeVideo },
  { name: 'Tiktok2', logo: logoTiktok },
  { name: 'Tving2', logo: logoTving },
  { name: 'Watcha2', logo: logoWatcha },
  { name: 'Wavve2', logo: logoWavve },
]

export function Main({ setIsVideoModal }) {
  return (
    <Container className="py-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl whitespace-nowrap font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
        <p className="break-all">모든 미디어 컨텐츠의 정보</p>{' '}
        <div className="h-2 sm:h-4 md:h-6"></div>
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
            비데오글로
          </span>
        </span>
        에서
      </h1>
      <div className="my-10 flex justify-center gap-x-6">
        <Button onClick={(e) => setIsVideoModal(true)} variant="outline">
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">소개 영상</span>
        </Button>
      </div>

      <div className="mt-24 relative mx-auto h-32 overflow-hidden flex items-center">
        <div className="relative left-0 top-0 flex animate-move-left items-center">
          {logoList.map((i) => (
            <li
              key={i.name}
              className="mx-6 flex w-[100px] list-none items-center md:mx-8 md:w-[140px] sm:w-[120px]"
            >
              <Image src={i.logo} alt={i.name} layout="fill" priority={true}></Image>
            </li>
          ))}
        </div>
      </div>

      {/* <div className="relative w-full h-20 overflow-hidden">
        <div className="absolute left-0 top-0 flex animate-move-left">
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
          <div className="bg-red-500 h-[100px] w-[100px] mx-4"></div>
        </div>
      </div> */}
    </Container>
  )
}
