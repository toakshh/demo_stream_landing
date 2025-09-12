import Image from 'next/image'

const developerTools = [
  {
    title: "Developer Studio",
    description: "Complete development environment for creating and managing cross-game avatars",
    image: "/images/images-dev-studio-flip.webp",
    features: ["Visual avatar editor", "Asset management", "Real-time preview", "Export tools"]
  },
  {
    title: "SDK Integration", 
    description: "Easy-to-use SDKs for Unity, Unreal Engine, React Native, and web platforms",
    image: "/images/images-sdk-flip.webp",
    features: ["Multi-platform support", "Simple API", "Documentation", "Code examples"]
  },
  {
    title: "UGC Tools",
    description: "AI-powered user-generated content tools for creating custom avatars and assets",
    image: "/images/images-ugc-tools-flip.webp",
    features: ["AI generation", "User-friendly interface", "Content moderation", "Asset marketplace"]
  }
]

export default function DeveloperToolsSection() {
  return (
    <>
      <section 
        className="mx-auto pb-16 md:pb-24"
        style={{
          background: "linear-gradient(180deg, #000 0%, rgba(13, 14, 18, 0.00) 100%), #6542FF"
        }}
      >
        <div className="container m-auto px-4">
          <div className="text-center mb-16 pt-16">
            <h2 
              className="font-raging text-[clamp(3.5rem,15vw,6.25rem)] uppercase leading-tight text-white mb-6"
              style={{ fontFeatureSettings: "'ss01' on" }}
            >
              Developer Tools
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-montreal">
              Everything you need to integrate avatars into your game, from SDKs to visual tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developerTools.map((tool, index) => (
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
                          <div className="w-1.5 h-1.5 bg-[#6542FF] rounded-full mr-3 flex-shrink-0" />
                          <span className="font-montreal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full px-4 py-2 bg-white text-[#6542FF] rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12" style={{ background: '#6542FF' }}>
        <div className="w-[1px] h-32 md:h-64 m-auto bg-white" />
      </section>
    </>
  )
}