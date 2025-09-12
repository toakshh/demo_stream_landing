import Image from 'next/image'

const techStackItems = [
  {
    title: "Restyle",
    description: "Transform any avatar to match your game's art style with AI-powered restyling technology.",
    image: "/images/images-restyle.webp",
    features: ["AI-powered style transfer", "Maintains avatar identity", "Real-time processing"]
  },
  {
    title: "Asset Morphing", 
    description: "Seamlessly adapt assets between different game engines and platforms.",
    image: "/images/images-asset_morphing.webp",
    features: ["Cross-platform compatibility", "Automatic optimization", "Format conversion"]
  },
  {
    title: "Shape3D",
    description: "Advanced 3D shape manipulation and optimization for avatars and assets.",
    image: "/images/images-shape3d.webp", 
    features: ["3D mesh optimization", "LOD generation", "Performance tuning"]
  }
]

export default function TechStackSection() {
  return (
    <>
      <section 
        className="container m-auto py-16 md:py-24 px-4"
        style={{
          backgroundImage: "url('https://media.readyplayer.me/webpage/images/webpage-background-colorful-dots.svg')",
          backgroundRepeat: 'repeat'
        }}
      >
        <div className="text-center mb-16">
          <h2 
            className="block text-transparent font-raging text-[clamp(3.5rem,15vw,6.25rem)] uppercase leading-tight"
            style={{ 
              fontFeatureSettings: "'ss01' on",
              background: "linear-gradient(180deg, #FFF 0%, #5C33FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            AI POWERED TECH stack
          </h2>
        </div>
        
        <section className="py-8 md:py-16 lg:py-24">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStackItems.map((item, index) => (
                <div key={index} className="group perspective-1000">
                  <div className="relative w-full h-[400px] transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                    {/* Front of card */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10">
                      <div className="relative h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-3 font-monument uppercase">
                              {item.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed font-montreal">
                              {item.description}
                            </p>
                          </div>
                          <div className="mt-4">
                            <button className="text-[#6542FF] hover:text-white transition-colors text-sm font-medium">
                              Learn more →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-[#6542FF] to-purple-800 border border-purple-400/20">
                      <div className="p-6 h-full flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-white mb-4 font-monument uppercase">
                          {item.title} Features
                        </h3>
                        <ul className="space-y-3">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-white">
                              <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0" />
                              <span className="text-sm font-montreal">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="mt-6 px-4 py-2 bg-white text-[#6542FF] rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  )
}