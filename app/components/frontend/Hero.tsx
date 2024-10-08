import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import HeroImage from '@/public/Architecture.png';
import { ThemeToggle } from './ThemeToggle';

export function Hero() {
  return (
    <>
      <div className="relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <h4 className="text-3xl font-semibold">
              Converse<span className="text-[#a002e0]">AI</span>
            </h4>
          </Link>
          <div className="md:hidden"><ThemeToggle /></div>
        </div>

        <nav className="hidden md:flex md:justify-end md:space-x-4">
          <ThemeToggle />
          <Button variant="secondary">Sign in</Button>
          <Button>Sign up</Button>
        </nav>
      </div>

      <section className="relative flex items-center justify-center">
        <div className="relative items-center w-full py-12 lg:py-20">
          <div className="text-center">
            <span className="text-sm text-[#a002e0] font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
              🎉 Cutting-Edge AI Chatbot Solution
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none">
              Power Your Conversations{' '}
              <span className="block text-[#a002e0] font-bold">with Converse AI!</span>
            </h1>

            <p className="max-w-xl mx-auto mt-4 text-base font-light lg:text-lg text-muted-foreground tracking-tighter">
              Transform how you interact with users through seamless, intelligent conversations.
              Converse AI makes it simple to integrate and elevate your chatbot experience.
            </p>
            <div className="flex items-center gap-x-5 w-full justify-center mt-5 ">
              {/* <LoginLink> */}
              <Button variant="secondary">Sign in</Button>
              {/* </LoginLink> */}
              {/* <RegisterLink> */}
              <Button className="bg-primary">Try for free</Button>
              {/* </RegisterLink> */}
            </div>
          </div>

          <div className="relative items-center w-full py-12 mx-auto mt-12">
            <svg
              className="absolute -mt-24 blur-2xl"
              fill="none"
              viewBox="0 0 400 400"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a002e0" />
                  <stop offset="50%" stopColor="#7C87F8" />
                  <stop offset="100%" stopColor="#4C65E4" />
                </linearGradient>
                <filter
                  id="filter0_f_10_20"
                  x="-160.333"
                  y="-160.333"
                  width="720.666"
                  height="720.666"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_10_20" />
                </filter>
              </defs>
              <g clipPath="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="url(#gradient1)" />
                  <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="url(#gradient1)" />
                  <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="url(#gradient1)" />
                  <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="url(#gradient1)" />
                </g>
              </g>
            </svg>

            <Image
              src={HeroImage}
              alt="Hero image"
              priority
              className="relative object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
