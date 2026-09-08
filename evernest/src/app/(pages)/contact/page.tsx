import type { Metadata } from "next"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { ContactInquiryForm } from "@/components/shared/ContactInquiryForm"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  // This page draws the second-most impressions on the site at position ~11
  // but had a 0% CTR over 90 days: it ranks for local "consultants in
  // Karachi" intent while the old title just said "Contact". Title and
  // description now answer that query instead.
  title: "Contact Us — Karachi & Lahore Offices",
  description:
    "Visit or call EverNest Consultants in Karachi and Lahore for a free study visa and immigration consultation. 13+ years, British Council certified.",
  path: "/contact",
  keywords: [
    "study visa consultants in Karachi",
    "immigration consultants in Karachi",
    "study visa consultants Lahore",
    "Contact EverNest Consultants",
    "free visa consultation Pakistan",
  ],
})

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-ice overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-brand-blue mb-6">
              Let&apos;s map out your <span className="text-brand-red">future.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-2xl">
              Whether you&apos;re looking to study abroad, immigrate, or partner with us, our experts are ready to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Details & Offices */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-brand-blue mb-6">Get in Touch</h2>
                <p className="text-foreground/70 mb-6 max-w-xl leading-relaxed">
                  Choose the contact method that works best for you. Share your
                  details and our team will guide you through the next step with
                  clear, profile-based advice.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-brand-neutral flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-blue">Pakistan Main Number</div>
                      <a href={`tel:${siteConfig.contact.phoneHref}`} className="text-foreground/70 hover:text-brand-red transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-brand-neutral flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-blue">WhatsApp Inquiries</div>
                      <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="text-foreground/70 hover:text-brand-red transition-colors">
                        {siteConfig.contact.whatsappDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-brand-neutral flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-blue">{siteConfig.satelliteContacts[0].label}</div>
                      <a href={`tel:${siteConfig.contact.northAmericaPhoneHref}`} className="text-foreground/70 hover:text-brand-red transition-colors">
                        {siteConfig.contact.northAmericaPhone}
                      </a>
                      <p className="text-sm text-foreground/60 mt-1">
                        {siteConfig.satelliteContacts[0].manager} - {siteConfig.satelliteContacts[0].managerTitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-brand-neutral flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-blue">{siteConfig.satelliteContacts[1].label}</div>
                      <a href={`tel:${siteConfig.contact.europePhoneHref}`} className="text-foreground/70 hover:text-brand-red transition-colors">
                        {siteConfig.contact.europePhone}
                      </a>
                      <p className="text-sm text-foreground/60 mt-1">
                        {siteConfig.satelliteContacts[1].manager} - {siteConfig.satelliteContacts[1].managerTitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-brand-neutral flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-blue">Email</div>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-foreground/70 hover:text-brand-red transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border-subtle">
                <h2 className="text-2xl font-display font-bold text-brand-blue mb-6">Our Offices</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-brand-neutral p-6 rounded-2xl border border-border-subtle">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-brand-red" />
                      <h3 className="font-bold text-brand-blue">{siteConfig.pakistanOffice.label}</h3>
                    </div>
                    <div className="text-sm font-semibold text-foreground/80 mb-1">{siteConfig.pakistanOffice.city}, {siteConfig.pakistanOffice.country}</div>
                    <p className="text-sm text-foreground/60">{siteConfig.pakistanOffice.address}</p>
                  </div>

                  {siteConfig.offices.map((office, i) => (
                    <div key={i} className="bg-brand-neutral p-6 rounded-2xl border border-border-subtle">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-5 w-5 text-brand-blue" />
                        <h3 className="font-bold text-brand-blue">{office.label}</h3>
                      </div>
                      <div className="text-sm font-semibold text-foreground/80 mb-1">{office.city}, {office.country}</div>
                      <p className="text-sm text-foreground/60">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <ContactInquiryForm />

          </div>
        </div>
      </section>
    </>
  )
}
