import Image from 'next/image'

const streamingTools = [
  {
    title: "Stream Studio",
    description: "Complete streaming environment for creating and managing AI companion characters",
    image: "/images/images-dev-studio-flip.webp",
    features: ["Visual character editor", "Personality customization", "Real-time preview", "Stream integration"]
  },
  {
    title: "Platform Integration", 
    description: "Easy-to-use plugins for Twitch, YouTube, OBS Studio, and streaming platforms",
    image: "/images/images-sdk-flip.webp",
    features: ["Multi-platform support", "One-click setup", "Live documentation", "Stream overlays"]
  },
  {
    title: "Creator Tools",
    description: "AI-powered content creation tools for building custom streaming experiences",
    image: "/images/images-ugc-tools-flip.webp",
    features: ["AI character generation", "Voice customization", "Audience analytics", "Content marketplace"]
  }
]

export default function DeveloperToolsSection() {
  return (
    <>
      <section 
        className="mx-auto pb-16 md:pb-24"
        style={{
          background: "linear-gradient(180deg, #000 0%, rgba(13, 14, 18, 0.00) 100%), #db21bc"
        }}
      >
        <div className="container m-auto px-4">
          <div className="text-center mb-16 pt-16">
            <h2 
              className="font-raging text-[clamp(3.5rem,15vw,6.25rem)] uppercase leading-tight text-white mb-6"
              style={{ fontFeatureSettings: "'ss01' on" }}
            >
              Creator Tools
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-montreal">
              Everything you need to enhance your streams with AI companions, from studio tools to platform integrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {streamingTools.map((tool, index) => (
              <div key={index} className="group">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 font-monument uppercase">
                      {tool.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 font-montreal">
                      {tool.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#db21bc] rounded-full mr-3 flex-shrink-0" />
                          <span className="font-montreal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full px-4 py-2 bg-white text-[#db21bc] rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12" style={{ background: '#db21bc' }}>
        <div className="w-[1px] h-32 md:h-64 m-auto bg-white" />
      </section>
    </>
  )
}