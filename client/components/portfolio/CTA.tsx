import { Instagram, Youtube, X, Facebook } from "lucide-react";
import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Decorative badge */}
          {/* <div className="mb-6 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Ready to Collaborate?
            </span>
          </div> */}

          {/* Main Heading */}
          {/* <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Let's Work
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
              Together
            </span>
          </h2> */}

          {/* Description */}
          {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and let's
            create something amazing together.
          </p> */}
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-12">
          <p className="text-center text-muted-foreground mb-6">
            Connect with me on social media
          </p>
          <div className="flex items-center justify-center gap-6">
            {[
              {
                icon: <Instagram className="w-6 h-6" />,
                label: "Instagram",
                href: "https://instagram.com",
              },
              {
                icon: <Youtube className="w-6 h-6" />,
                label: "Youtube",
                href: "https://youtube.com",
              },
              {
                icon: <X className="w-6 h-6" />,
                label: "X",
                href: "https://twitter.com",
              },
              {
                icon: <Facebook className="w-6 h-6" />,
                label: "Facebook",
                href: "https://facebook.com",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative backgrounds */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl -z-10" />
    </section>
  );
}
