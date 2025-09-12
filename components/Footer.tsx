import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  products: [
    { name: 'Developer Studio', href: '/developer-studio' },
    { name: 'Avatar Creator', href: '/avatar-creation' },
    { name: 'Avatar Portability', href: '/interoperability' },
    { name: 'AI-powered UGC tools', href: '/ugc-tools' }
  ],
  developers: [
    { name: 'Documentation', href: 'https://docs.readyplayer.me/', external: true },
    { name: 'Forums', href: 'https://forum.readyplayer.me/', external: true }
  ],
  company: [
    { name: 'About us', href: '/about-us' }
  ],
  social: [
    { name: 'X', href: 'https://x.com/readyplayerme', external: true },
    { name: 'LinkedIn', href: 'https://ee.linkedin.com/company/readyplayerme', external: true }
  ],
  legal: [
    { name: 'Terms of use', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-8 mb-16">
          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-montreal uppercase">Products</h3>
            <ul className="space-y-2 md:space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-gray-300 transition-colors text-base font-montreal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-montreal uppercase">Developers</h3>
            <ul className="space-y-2 md:space-y-4">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors text-base font-montreal"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-white hover:text-gray-300 transition-colors text-base font-montreal"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-montreal uppercase">Company</h3>
            <ul className="space-y-2 md:space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-gray-300 transition-colors text-base font-montreal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-montreal uppercase">Social</h3>
            <ul className="space-y-2 md:space-y-4">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors text-base font-montreal"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-montreal uppercase">Legal</h3>
            <ul className="space-y-2 md:space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-gray-300 transition-colors text-base font-montreal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="block">
                <Image
                  src="/images/images-rpm-logo.svg"
                  alt="Ready Player Me"
                  width={150}
                  height={30}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="text-white/60 text-sm font-montreal">
              © {new Date().getFullYear()} Ready Player Me. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}