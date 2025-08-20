import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: MessageCircle, // TikTok icon placeholder
      href: "#",
      label: "TikTok",
      color: "hover:text-pink-500"
    },
    {
      icon: MessageCircle, // WhatsApp icon
      href: "https://wa.me/9779851234567", // Replace with actual WhatsApp number
      label: "WhatsApp",
      color: "hover:text-green-500"
    },
    {
      icon: Mail,
      href: "mailto:info@hotelsherpasoul.com", // Replace with actual email
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white font-sans">
      {/* Main footer content */}
      <div className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top section with brand and quick info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-[#AB8865] mb-4">
                {t("footer.brand.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t("footer.brand.description")}
              </p>
              
              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-[#AB8865] uppercase tracking-wide">
                  {t("footer.followUs.title")}
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`p-2 bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#AB8865]">
                {t("footer.quickLinks.title")}
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/", key: "home" },
                  { to: "/about", key: "aboutUs" },
                  { to: "/rooms", key: "rooms" },
                  { to: "/gallery", key: "gallery" },
                  { to: "/contact", key: "contact" }
                ].map((link) => (
                  <li key={link.key}>
                    <Link 
                      to={link.to} 
                      className="text-gray-300 hover:text-[#AB8865] transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#AB8865] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {t(`footer.quickLinks.links.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#AB8865]">
                {t("footer.contactUs.title")}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#AB8865] transition-colors duration-300">
                    <Phone size={16} />
                  </div>
                  <span>{t("footer.contactUs.phone")}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#AB8865] transition-colors duration-300">
                    <Mail size={16} />
                  </div>
                  <a 
                    href="mailto:info@hotel.com" 
                    className="hover:underline"
                  >
                    {t("footer.contactUs.email")}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#AB8865] transition-colors duration-300">
                    <MapPin size={16} />
                  </div>
                  <span>{t("footer.contactUs.address")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 bg-[#111111]">
        <div className="px-6 md:px-20 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              {t("footer.copyright.prefix")} {new Date().getFullYear()} {t("footer.copyright.hotelName")}.{" "}
              {t("footer.copyright.suffix")}
            </div>
            
            {/* Additional links */}
            <div className="flex gap-6 text-sm text-gray-400">
              <Link 
                to="/privacy" 
                className="hover:text-[#AB8865] transition-colors duration-300"
              >
                {t("footer.legal.privacy", "Privacy Policy")}
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-[#AB8865] transition-colors duration-300"
              >
                {t("footer.legal.terms", "Terms of Service")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}