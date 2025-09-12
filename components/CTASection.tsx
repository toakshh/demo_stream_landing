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
            Ready to Build?
          </h2>
          
          <p className="text-xl text-white/80 mb-12 font-montreal max-w-2xl mx-auto">
            Join thousands of developers creating the next generation of games with cross-platform avatars. 
            Get started today and bring your players' digital identities to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-4 bg-[#6542FF] text-white rounded-full font-medium text-lg hover:bg-purple-600 transition-all duration-300 hover:shadow-[0_0_79.6px_0_#3C2EFF,_0_0_26.533px_0_#6542FF] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#6542FF] focus:ring-opacity-50">
              Start Building Now
            </button>
            <button className="px-8 py-4 border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors">
              View Documentation
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-monument">Free</div>
              <div className="text-white/70 font-montreal">to get started</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-monument">5 min</div>
              <div className="text-white/70 font-montreal">integration time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-monument">24/7</div>
              <div className="text-white/70 font-montreal">developer support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}