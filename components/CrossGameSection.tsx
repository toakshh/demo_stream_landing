import { ArrowRight } from 'lucide-react'

export default function CrossGameSection() {
  return (
    <>
      <section className="pt-16 md:pt-24">
        <div className="w-[1px] h-32 md:h-64 m-auto bg-white" />
      </section>
      
      <section 
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('https://media.readyplayer.me/webpage/images/webpage-background-colorful-dots.svg')",
          backgroundRepeat: 'repeat'
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:grid-flow-col-dense">
            <div className="relative lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="h-auto object-cover w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="https://media.readyplayer.me/nexus/videos/hero-rpm_out.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <div className="relative lg:order-2">
              <div className="pl-4 md:pl-8 flex flex-col gap-4 md:gap-6">
                <p className="font-montreal uppercase text-lg md:text-xl">
                  your avatar, your identity, any game
                </p>
                
                <div 
                  className="font-raging uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                  style={{ 
                    fontFeatureSettings: "'ss01' on",
                    lineHeight: '0.8',
                    letterSpacing: 'normal'
                  }}
                >
                  <h2 className="text-[clamp(2.5rem,15vw,6.25rem)]">cross-game avatars</h2>
                  <h2 
                    className="text-[clamp(3.5rem,15vw,6.25rem)] text-gradient"
                    style={{ lineHeight: '0.8' }}
                  >
                    made easy.
                  </h2>
                </div>
                
                <p className="font-montreal text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Ready Player Me provides developers with the tools and infrastructure to power
                  cross-game avatars, build fully customizable avatar creators, and unlock new ways to
                  engage and monetize players.
                </p>
                
                <div>
                  <button className="font-montreal text-base px-7 py-3 rounded-3xl border-white border text-white font-medium relative overflow-hidden transition-all duration-300 ease-out hover:pr-16 focus:outline-none focus:ring-2 focus:ring-[#6542FF] focus:ring-opacity-50 group cursor-pointer">
                    <span className="relative">
                      <span className="transition-all duration-300 ease-out">Try the demo</span>
                      <span className="absolute right-[-50px] top-0 bottom-0 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 flex items-center">
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}