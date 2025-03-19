
import React from "react";
import { ArrowUpRight, Mail, Github, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 relative border-t border-white/10">
      <div className="absolute inset-0 z-[-1] opacity-15">
        <img 
          src="/lovable-uploads/9e42dcbd-b765-4255-9896-4dac9a21f21b.png" 
          alt="Footer background" 
          className="w-full h-40 object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-hackathon-dark"></div>
      </div>

      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center">
              <span className="text-hackathon-accent mr-1">H</span>ackathon
            </h3>
            <p className="text-hackathon-light/70 mb-8 max-w-md text-sm">
              The world's largest hackathon, bringing together innovators to build the future of technology. Join us in exploring the frontiers of what's possible.
            </p>
            <div className="flex space-x-5">
              {socialIcons.map((icon, index) => (
                <a 
                  key={index}
                  href={icon.href} 
                  className="text-hackathon-light/70 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={icon.label}
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3 md:ml-auto">
            <h4 className="text-base font-display mb-6 text-white/90">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-hackathon-light/70 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-base font-display mb-6 text-white/90">Contact</h4>
            <a 
              href="mailto:info@hackathon.dev"
              className="text-hackathon-accent hover:text-hackathon-accent-light transition-colors duration-200 flex items-center mb-6"
            >
              <Mail size={16} className="mr-2" />
              info@hackathon.dev
            </a>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-hackathon-light/50">
                © {new Date().getFullYear()} Hackathon.dev <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const socialIcons = [
  {
    icon: <Twitter size={18} />,
    href: "#",
    label: "Twitter"
  },
  {
    icon: <Github size={18} />,
    href: "#",
    label: "GitHub"
  },
  {
    icon: <Instagram size={18} />,
    href: "#",
    label: "Instagram"
  }
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Prizes", href: "#prizes" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Judges", href: "#judges" },
  { label: "FAQ", href: "#faq" }
];

export default Footer;
