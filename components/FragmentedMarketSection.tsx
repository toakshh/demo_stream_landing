export default function FragmentedMarketSection() {
  return (
    <>
      <section className="relative w-full bg-white md:bg-transparent mb-16 md:mb-0">
        <svg
          className="hidden md:block w-full h-auto"
          viewBox="0 0 1425 778"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ minHeight: '100px' }}
        >
          <path
            d="M1694.5 777.159C1569.98 704.537 1168.53 651.371 692.53 651.371C259.128 651.371 -112.467 695.447 -269.501 758.153V19.8447C-112.467 82.5513 259.128 126.628 692.53 126.628C1168.53 126.628 1569.97 73.4628 1694.5 0.84082V777.159Z"
            fill="white"
          />
        </svg>
        
        <div className="md:absolute md:inset-0 flex flex-col justify-center items-center px-4 py-12 md:py-0">
          <div className="text-center mx-auto max-w-5xl">
            <h2 
              className="font-raging text-[clamp(3.5rem,15vw,6.25rem)] 2xl:text-[185px] text-[#db21bc] uppercase leading-tight md:leading-[120px] xl:leading-[166px] mb-4 md:mb-6"
              style={{ fontFeatureSettings: "'ss01' on" }}
            >
              streaming evolved
            </h2>
            
            <p className="max-w-[854px] mx-auto text-center justify-center text-black text-sm md:text-lg lg:text-xl font-normal font-montreal leading-6 md:leading-7">
              Content creation is more competitive than ever - different platforms, audiences, and engagement strategies. 
              Standing out requires more than just gameplay: you need personality, interaction, and entertainment value. 
              Ultron Stream solves this with AI companions designed for modern streaming. Our technology delivers 
              real-time commentary, audience engagement, and co-streaming features - ensuring your content stays 
              fresh, interactive, and entertaining across all platforms.
            </p>
          </div>
        </div>
      </section>
      
      <section className="pt-0 md:pt-4 bg-black">
        <div className="w-[1px] h-32 md:h-64 m-auto bg-white" />
      </section>
    </>
  )
}