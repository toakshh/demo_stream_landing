import Image from 'next/image'

export default function AvatarShowcaseSection() {
  return (
    <>
      <section className="w-full">
        <div className="media flex justify-center items-start py-6 md:py-12 px-2.5 self-stretch gap-2.5">
          <Image
            src="/images/images-Posed-GroupShot.webp"
            alt="Ready Player Me avatar group shot"
            width={1920}
            height={1080}
            className="w-full h-auto max-w-full object-contain"
            sizes="100vw"
          />
        </div>
      </section>
      
      <section 
        className="container mx-auto px-4"
        style={{
          backgroundImage: "url('https://media.readyplayer.me/webpage/images/webpage-background-colorful-dots.svg')",
          backgroundRepeat: 'repeat'
        }}
      >
        <h2 
          className="text-center font-raging text-[clamp(3.5rem,15vw,6.25rem)] leading-tight md:leading-[120px] xl:leading-[140px] uppercase"
          style={{ fontFeatureSettings: "'ss01' on" }}
        >
          <span className="text-white">any asset. </span>
          <span className="text-gradient">any avatar.</span>
        </h2>
        
        <div className="pt-12 md:pt-20 pb-16 md:pb-24 flex flex-col md:flex-row justify-center gap-8 md:gap-12">
          <div className="w-full max-w-[460px] flex gap-4 md:gap-8">
            <div className="w-[1px] bg-white flex-shrink-0" />
            <div className="text-white">
              <p className="uppercase font-monument text-2xl md:text-4xl font-bold leading-tight md:leading-[35px]">
                expand your audience
              </p>
              <p className="font-montreal text-lg md:text-xl leading-6 md:leading-7">
                Bring any avatar or asset into your game without rebuilding your pipeline. We handle style translation,
                auto-rigging, and optimization behind the scenes, translating them to fit your game&apos;s specs.
              </p>
            </div>
          </div>
          
          <div className="w-full max-w-[460px] flex gap-4 md:gap-8">
            <div className="w-[1px] bg-white flex-shrink-0" />
            <div className="text-white">
              <p className="uppercase font-monument text-2xl md:text-4xl font-bold leading-tight md:leading-[35px]">
                monetize creativity
              </p>
              <p className="font-montreal text-lg md:text-xl leading-6 md:leading-7">
                Turn user-generated content into revenue streams. Our platform enables seamless asset trading,
                customization marketplaces, and premium avatar features that drive engagement and profits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}