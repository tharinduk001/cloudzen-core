import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Courses", path: "/courses" },
    { label: "Projects", path: "/projects" },
  ],
  Resources: [
    { label: "Blog", path: "/blog" },
    { label: "Events", path: "/events" },
    { label: "Contact Us", path: "/consultations" },
  ],
  Company: [
    { label: "About", path: "/about" },
    { label: "Instructors", path: "/instructors" },
    { label: "Contact", path: "/contact" },
  ],
  Legal: [
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Refund & Returns", path: "/refund" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand + Newsletter */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg">
                <span className="text-sm font-bold text-white">CZ</span>
              </div>
              <span>Cloud<span className="gradient-text">Zen</span></span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Master Cloud & DevOps with hands-on projects, expert-led courses, and Open Badge 3.0 credentials.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="max-w-[220px]" />
                <Button size="sm" className="gradient-bg text-white border-0">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold mb-4 text-sm">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CloudZen. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
