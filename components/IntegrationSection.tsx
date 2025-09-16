import { Code, Gamepad2, Smartphone, Globe } from 'lucide-react'

const integrationExamples = [
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "OBS Studio Plugin",
    description: "Get started with our OBS plugin in minutes",
    code: `// Initialize Ultron Stream
const ultronAI = new UltronCompanion();
ultronAI.startStream({
  personality: 'gaming',
  voice: 'energetic'
});`,
    platform: "OBS Studio"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Twitch Integration",
    description: "Native Twitch bot integration for chat interaction",
    code: `// Connect to Twitch chat
const twitchBot = new UltronTwitchBot();
twitchBot.enableChatResponses();
twitchBot.startCommentary();`,
    platform: "Twitch"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Streaming",
    description: "Cross-platform mobile streaming companion",
    code: `// Mobile streaming setup
import { UltronMobile } from '@ultronstream/mobile';
const companion = new UltronMobile();
companion.startMobileStream();`,
    platform: "Mobile"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Dashboard",
    description: "Browser-based control panel for stream management",
    code: `// Web dashboard integration
import { UltronDashboard } from '@ultronstream/web';
const dashboard = new UltronDashboard();
dashboard.connectToStream(streamKey);`,
    platform: "Web"
  }
]

export default function IntegrationSection() {
  return (
    <>
      <section 
        className="mx-auto py-16 md:py-24"
        style={{
          background: "linear-gradient(0deg, #000 0%, rgba(13, 14, 18, 0.00) 100%), #db21bc"
        }}
      >
        <div className="container m-auto px-4">
          <div className="text-center mb-16">
            <h2 
              className="font-raging text-[clamp(3.5rem,15vw,6.25rem)] uppercase leading-tight text-white mb-6"
              style={{ fontFeatureSettings: "'ss01' on" }}
            >
              Easy Setup
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-montreal">
              Start streaming with Ultron AI companions on your preferred platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationExamples.map((example, index) => (
              <div key={index} className="group">
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/10 rounded-lg mr-4 text-white">
                        {example.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-monument uppercase">
                          {example.title}
                        </h3>
                        <p className="text-gray-300 text-sm font-montreal">
                          {example.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-black/60 rounded-lg p-4 border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400 font-mono">{example.platform}</span>
                        <button className="text-xs text-white/60 hover:text-white transition-colors">
                          Copy
                        </button>
                      </div>
                      <pre className="text-sm text-green-400 font-mono overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                    
                    <div className="mt-4 flex gap-3">
                      <button className="flex-1 px-4 py-2 bg-white text-[#db21bc] rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                        View Docs
                      </button>
                      <button className="px-4 py-2 border border-white/20 text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-colors">
                        Try Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-[#db21bc] rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
              View All Documentation
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12" style={{ background: '#000' }}>
        <div className="w-[1px] h-32 md:h-64 m-auto bg-white" />
      </section>
    </>
  )
}