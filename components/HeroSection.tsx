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
          AI Companions that
        </p>
        <h1 
          className="font-raging uppercase font-black text-7xl sm:text-8xl md:text-[120px] lg:text-[160px] xl:text-[190px] text-white select-none pointer-events-none leading-none text-center text-balance"
          style={{ 
            fontFeatureSettings: "'ss01' on",
            textShadow: '0 0 250px rgba(219, 33, 188, 0.44), 0 0 31px rgba(219, 33, 188, 0.44), 0 0 250px rgba(219, 33, 188, 0.80), 0 0 50px rgba(219, 33, 188, 0.40), 0 0 44.9px rgba(219, 33, 188, 0.44)'
          }}
        >
          ELEVATE YOUR STREAM
        </h1>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-[150%] sm:w-full max-w-none sm:max-w-[1920px] sm:mx-auto sm:px-4 mx-[-44%]">
          {/* <Image
            alt="Avatar characters with dramatic lighting"
            src="/images/images-rpm-hero-header.webp"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
            sizes="(max-width: 640px) 150vw, 100vw"
          /> */}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
      
      <div className="absolute bottom-[15%] md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 px-4">
        <div className="w-full max-w-sm md:max-w-96 inline-flex flex-col justify-start items-center gap-3 md:gap-4">
          <div className="self-stretch h-auto md:h-20 text-center justify-center text-white text-sm md:text-xl font-normal font-montreal leading-5 md:leading-7">
            Top streamers worldwide use Ultron Stream AI companions to boost engagement and entertainment
          </div>
          <button className="font-montreal text-base px-7 py-3 border-white border rounded-3xl text-white font-medium transition-all duration-300 ease-out hover:bg-[#db21bc] hover:shadow-[0_0_79.6px_0_#db21bc,_0_0_26.533px_0_#db21bc] hover:border-[#db21bc] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#db21bc] focus:ring-opacity-50 cursor-pointer">
            Start Streaming Now
          </button>
        </div>
      </div>
    </section>
  )
}