import Image from 'next/image'

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen overflow-hidden bg-black"
      style={{
        backgroundImage: "url('https://media.readyplayer.me/webpage/images/webpage-background.svg')",
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="absolute inset-x-0 top-[180px] md:top-[160px] flex flex-col items-center justify-center px-4">
        <p className="font-montreal font-medium text-sm md:text-[20px] lg:text-[20px] xl:text-[30px] leading-none uppercase text-center">
          Avatars that go
        </p>
        <h1 
          className="font-raging uppercase font-black text-7xl sm:text-8xl md:text-[120px] lg:text-[200px] xl:text-[290px] text-white select-none pointer-events-none leading-none text-center text-shadow-glow"
          style={{ fontFeatureSettings: "'ss01' on" }}
        >
          BEYD YOUR GAME
        </h1>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-[150%] sm:w-full max-w-none sm:max-w-[1920px] sm:mx-auto sm:px-4 mx-[-44%]">
          <Image
            alt="Avatar characters with dramatic lighting"
            src="/images/images-rpm-hero-header.webp"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
            sizes="(max-width: 640px) 150vw, 100vw"
          />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
      
      <div className="absolute bottom-[15%] md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 px-4">
        <div className="w-full max-w-sm md:max-w-96 inline-flex flex-col justify-start items-center gap-3 md:gap-4">
          <div className="self-stretch h-auto md:h-20 text-center justify-center text-white text-sm md:text-xl font-normal font-montreal leading-5 md:leading-7">
            India&apos;s top streamer use Ultron AI to stream with our avatars
          </div>
          <button className="font-montreal text-base px-7 py-3 border-white border rounded-3xl text-white font-medium transition-all duration-300 ease-out hover:bg-[#6542FF] hover:shadow-[0_0_79.6px_0_#3C2EFF,_0_0_26.533px_0_#6542FF] hover:border-[#6542FF] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#6542FF] focus:ring-opacity-50 cursor-pointer">
            Sign in now
          </button>
        </div>
      </div>
    </section>
  )
}