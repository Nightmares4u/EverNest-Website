"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { buildInquiryMessage, buildWhatsAppHref } from "@/lib/contact"

const services = [
  { value: "Study Visa", label: "Study Visa" },
  { value: "Immigration", label: "Immigration" },
  { value: "B2B Partnership", label: "B2B Partnership" },
  { value: "Other Inquiry", label: "Other Inquiry" },
] as const

export function ContactInquiryForm() {
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [service, setService] = React.useState("")
  const [destination, setDestination] = React.useState("")
  const [message, setMessage] = React.useState("")

  const fullName = [firstName.trim(), lastName.trim()].filter(Boolean).join(" ")
  const inquiryMessage = buildInquiryMessage({
    lines: [
      "Source: Website Contact Form",
      `Name: ${fullName}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Interested service: ${service}`,
      `Interested country/destination: ${destination.trim()}`,
      `Message: ${message.trim() || "Not provided"}`,
    ],
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!event.currentTarget.reportValidity()) {
      return
    }

    window.open(buildWhatsAppHref(inquiryMessage), "_blank", "noopener,noreferrer")
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-border-subtle shadow-card h-fit">
      <h2 className="text-2xl font-display font-bold text-brand-blue mb-2">
        Share your inquiry details
      </h2>
      <p className="text-foreground/60 mb-6 leading-relaxed">
        Share your details and our team will guide you through the next step.
        This website opens WhatsApp with your inquiry details and does
        not submit data directly yet.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="contact-first-name"
              className="text-sm font-medium text-foreground/80"
            >
              First Name *
            </label>
            <input
              id="contact-first-name"
              required
              autoComplete="given-name"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="contact-last-name"
              className="text-sm font-medium text-foreground/80"
            >
              Last Name *
            </label>
            <input
              id="contact-last-name"
              required
              autoComplete="family-name"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="contact-email"
              className="text-sm font-medium text-foreground/80"
            >
              Email *
            </label>
            <input
              id="contact-email"
              required
              autoComplete="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="contact-phone"
              className="text-sm font-medium text-foreground/80"
            >
              Phone / WhatsApp *
            </label>
            <input
              id="contact-phone"
              required
              autoComplete="tel"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-service"
            className="text-sm font-medium text-foreground/80"
          >
            Service Interested In *
          </label>
          <select
            id="contact-service"
            required
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none"
          >
            <option value="">Select a service</option>
            {services.map((serviceOption) => (
              <option key={serviceOption.value} value={serviceOption.value}>
                {serviceOption.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-destination"
            className="text-sm font-medium text-foreground/80"
          >
            Interested Country / Destination *
          </label>
          <input
            id="contact-destination"
            required
            type="text"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            placeholder="Canada, Italy, Australia, or another destination"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-message"
            className="text-sm font-medium text-foreground/80"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full p-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
            placeholder="Tell us about your goals, timeline, or questions."
          />
        </div>

        <div className="pt-2 space-y-3">
          <Button
            type="submit"
            className="w-full h-12 text-base"
          >
            Continue on WhatsApp
          </Button>
          <p className="text-xs text-center text-foreground/50">
            Your message will open in WhatsApp to
            <span className="font-medium"> +92 310 1076201</span> for review
            before you send it.
          </p>
        </div>
      </form>
    </div>
  )
}
