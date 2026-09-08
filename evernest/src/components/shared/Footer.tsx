import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/data/site"

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/brand/evernest-logo-white.png" 
                alt="EN Consultants (Pvt) Ltd." 
                width={616} 
                height={536}
                className="h-16 w-auto object-contain"
                sizes="64px"
              />
            </Link>
            <p className="text-brand-ice/80 text-sm mt-4 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <p className="text-brand-ice/60 text-xs leading-relaxed max-w-xs">
              EverNest Consultants is the trading name of {siteConfig.legalName}.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3 text-brand-ice/80 text-sm">
              <li><Link href="/study-visas" className="hover:text-white transition-colors">Study Visas</Link></li>
              <li><Link href="/study-visa-consultants-karachi" className="hover:text-white transition-colors">Karachi Office</Link></li>
              <li><Link href="/immigration" className="hover:text-white transition-colors">Immigration</Link></li>
              <li><Link href="/b2b-partnerships" className="hover:text-white transition-colors">B2B Partnerships</Link></li>
              <li><Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-brand-ice/80 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-brand-ice/80 text-sm">
              <li><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a></li>
              <li><a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-white transition-colors">{siteConfig.contact.phone}</a></li>
              <li>
                <strong>{siteConfig.satelliteContacts[0].label}:</strong><br />
                <a href={`tel:${siteConfig.satelliteContacts[0].phoneHref}`} className="hover:text-white transition-colors">
                  {siteConfig.satelliteContacts[0].phone}
                </a>
                <div className="mt-1 text-brand-ice/60">
                  {siteConfig.satelliteContacts[0].manager} - {siteConfig.satelliteContacts[0].managerTitle}
                </div>
              </li>
              <li>
                <strong>{siteConfig.satelliteContacts[1].label}:</strong><br />
                <a href={`tel:${siteConfig.satelliteContacts[1].phoneHref}`} className="hover:text-white transition-colors">
                  {siteConfig.satelliteContacts[1].phone}
                </a>
                <div className="mt-1 text-brand-ice/60">
                  {siteConfig.satelliteContacts[1].manager} - {siteConfig.satelliteContacts[1].managerTitle}
                </div>
              </li>
              <li className="pt-4">
                <strong>{siteConfig.pakistanOffice.label}:</strong><br />
                {siteConfig.pakistanOffice.address}
              </li>
              {siteConfig.offices.map((office) => (
                <li key={office.label}>
                  <strong>{office.label}:</strong><br />
                  {office.address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-ice/60">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
