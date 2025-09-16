import Image from 'next/image'

const partnerLogos = [
  '/images/647798cf71ec2048ea89ab07-67f6f72743c73ea8afe4daae_Image%20%5Bw-node-_6895ccef-607c-8236-0819-0edde373fac8-e373fabf%5D-1.avif',
  '/images/647798cf71ec2048ea89ab07-67f7dcd54e2de99a1f39d2dc_Image%20%5Bw-node-_6895ccef-607c-8236-0819-0edde373faca-e373fabf%5D-1.avif',
  '/images/647798cf71ec2048ea89ab07-67f7dcd58f3e573963e868a3_Image%20%5Bw-node-_6895ccef-607c-8236-0819-0edde373facb-e373fabf%5D-1.avif',
  '/images/647798cf71ec2048ea89ab07-67f7dcd66350f25882e580f7_Image%20%5Bw-node-_6895ccef-607c-8236-0819-0edde373facc-e373fabf%5D-1.avif',
  '/images/647798cf71ec2048ea89ab07-67f7dcd4a06ef34912b8ee91_Image%20%5Bpartner_image%5D.avif',
  '/images/647798cf71ec2048ea89ab07-67f7dcd5f980a473e4e9d61c_Image%20%5Bw-node-_6895ccef-607c-8236-0819-0edde373fac7-e373fabf%5D%20(1).avif',
]

export default function TrustedBySection() {
  return (
    <section className="w-full pt-16 md:pt-24 pb-16 md:pb-24 bg-black">
      <div className="container text-center mx-auto px-4">
        <h2 
          className="font-monument font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl uppercase leading-tight md:leading-[73px]"
          style={{
            background: 'linear-gradient(180deg, #FFF -27.86%, #db21bc 99.8%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Powering the future of streaming for 2+ years
        </h2>
        <p className="font-montreal text-lg md:text-xl uppercase text-white mt-6 md:mt-10">
          Trusted by 50,000+ content creators worldwide
        </p>
      </div>
      
      <div className="mt-12 md:mt-24">
        <section className="partners mx-auto">
          <div className="group flex overflow-hidden p-2 [gap:var(--gap)] flex-row [--duration:20s] [--gap:70px]">
            {/* First marquee group */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {partnerLogos.map((logo, index) => (
                <div key={`first-${index}`} className="logo-marquee_item">
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    width={200}
                    height={100}
                    className="logo-marquee_img h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Second marquee group for seamless loop */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {partnerLogos.map((logo, index) => (
                <div key={`second-${index}`} className="logo-marquee_item">
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    width={200}
                    height={100}
                    className="logo-marquee_img h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Third marquee group for seamless loop */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {partnerLogos.map((logo, index) => (
                <div key={`third-${index}`} className="logo-marquee_item">
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    width={200}
                    height={100}
                    className="logo-marquee_img h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}