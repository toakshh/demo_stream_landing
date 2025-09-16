export default function CTASection() {
  return (
    <section 
      className="mx-auto py-24"
      style={{
        background: '#000',
        backgroundImage: "url('https://media.readyplayer.me/webpage/images/webapge-background-end.svg')",
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover'
      }}
    >
      <div className="container m-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 
            className="font-raging text-[clamp(3.5rem,15vw,6.25rem)] uppercase leading-tight text-white mb-8"
            style={{ fontFeatureSettings: "'ss01' on" }}
          >
            Ready to Stream?
          </h2>
          
          <p className="text-xl text-white/80 mb-12 font-montreal max-w-2xl mx-auto">
            Join thousands of content creators transforming their streams with AI-powered companions. 
            Get started today and bring your audience engagement to the next level.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-4 bg-[#db21bc] text-white rounded-full font-medium text-lg hover:bg-pink-600 transition-all duration-300 hover:shadow-[0_0_79.6px_0_#db21bc,_0_0_26.533px_0_#db21bc] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#db21bc] focus:ring-opacity-50">
              Start Streaming Now
            </button>
            <button className="px-8 py-4 border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-monument">Free</div>
              <div className="text-white/70 font-montreal">to get started</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-monument">2 min</div>
              <div className="text-white/70 font-montreal">setup time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-monument">24/7</div>
              <div className="text-white/70 font-montreal">creator support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}