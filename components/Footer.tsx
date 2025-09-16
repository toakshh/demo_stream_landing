import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  features: [
    { name: 'AI Companions', href: '/ai-companions' },
    { name: 'Stream Studio', href: '/stream-studio' },
    { name: 'Platform Integration', href: '/integrations' },
    { name: 'Creator Tools', href: '/creator-tools' }
  ],
  creators: [
    { name: 'Documentation', href: 'https://docs.ultronstream.com/', external: true },
    { name: 'Community', href: 'https://community.ultronstream.com/', external: true },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'API Reference', href: '/api' }
  ],
  company: [
    { name: 'About us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' }
  ],
  social: [
    { name: 'X', href: 'https://x.com/ultronstream', external: true },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ultronstream', external: true },
    { name: 'Discord', href: 'https://discord.gg/ultronstream', external: true },
    { name: 'YouTube', href: 'https://youtube.com/@ultronstream', external: true }
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-8 mb-16">
          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-montreal uppercase">Features</h3>
            <ul className="space-y-2 md:space-y-4">
              {footerLinks.features.map((link) => (
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

          {/* Creators */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-montreal uppercase">Creators</h3>
            <ul className="space-y-2 md:space-y-4">
              {footerLinks.creators.map((link) => (
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
                <div className="text-xl font-bold text-white font-monument">
                  <span className="text-[#db21bc]">ULTRON</span> STREAM
                </div>
              </Link>
            </div>
            <div className="text-white/60 text-sm font-montreal">
              © {new Date().getFullYear()} Ultron Stream. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}