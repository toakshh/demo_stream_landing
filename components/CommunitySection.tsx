import { Users, MessageCircle, BookOpen, Github } from 'lucide-react'

const communityStats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "50,000+",
    label: "Creators",
    description: "Active streamers using Ultron Stream AI"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    number: "100M+",
    label: "Interactions",
    description: "AI-powered chat interactions generated"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    number: "500+",
    label: "Platforms",
    description: "Streaming platforms and tools integrated"
  },
  {
    icon: <Github className="w-8 h-8" />,
    number: "24/7",
    label: "Live Support",
    description: "Community support and assistance"
  }
]

export default function CommunitySection() {
  return (
    <section 
      className="mx-auto py-16 md:py-24"
      style={{
        background: "radial-gradient(48.62% 45.53% at 118.91% 41.61%, #db21bc 0%, #000 100%), radial-gradient(43.82% 47.01% at -22.63% 51.19%, #db21bc 0%, #000 100%)",
        backgroundBlendMode: "screen, screen, normal"
      }}
    >
      <div className="container m-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="font-raging text-[clamp(3.5rem,15vw,6.25rem)] uppercase leading-tight text-white mb-6"
            style={{ fontFeatureSettings: "'ss01' on" }}
          >
            Join Our Community
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-montreal">
            Connect with thousands of creators building the future of streaming
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex justify-center mb-4 text-white group-hover:text-[#db21bc] transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 font-monument">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2 font-montreal">
                  {stat.label}
                </div>
                <div className="text-sm text-white/70 font-montreal">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4 font-monument uppercase">
              Creator Community
            </h3>
            <p className="text-white/80 mb-6 font-montreal">
              Get help, share ideas, and connect with other streamers in our active creator community.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <div className="w-2 h-2 bg-[#db21bc] rounded-full mr-3 flex-shrink-0" />
                <span className="font-montreal">Streaming support</span>
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <div className="w-2 h-2 bg-[#db21bc] rounded-full mr-3 flex-shrink-0" />
                <span className="font-montreal">AI companion tips</span>
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <div className="w-2 h-2 bg-[#db21bc] rounded-full mr-3 flex-shrink-0" />
                <span className="font-montreal">Creator showcases</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white text-[#db21bc] rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Join Community
            </button>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4 font-monument uppercase">
              Documentation
            </h3>
            <p className="text-white/80 mb-6 font-montreal">
              Comprehensive guides, API references, and tutorials to get you started quickly.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <div className="w-2 h-2 bg-[#6542FF] rounded-full mr-3 flex-shrink-0" />
                <span className="font-montreal">Quick start guides</span>
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <div className="w-2 h-2 bg-[#6542FF] rounded-full mr-3 flex-shrink-0" />
                <span className="font-montreal">API documentation</span>
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <div className="w-2 h-2 bg-[#6542FF] rounded-full mr-3 flex-shrink-0" />
                <span className="font-montreal">Video tutorials</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              View Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}