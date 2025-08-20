import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  X,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Calendar,
  Clock,

} from "lucide-react";
import { motion as Motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BookingModal from "../HelperComponents/BookingModal";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function HomeIntro() {
  const { t, i18n } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your opening date here
  const openingDate = new Date("2025-08-30T00:00:00");

  const heroSlides = [
    {
      image: "/singlesitter.jpg",
      subtitle: t("home.hero.subtitle"),
    },
    {
      image: "/sitter2.jpg",
      subtitle: t("home.hero.subtitle"),
    },
    {
      image: "/singlesitter.jpg",
      subtitle: t("home.hero.subtitle"),
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1JYojEJGiL/", label: "Facebook", text : "blue" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@sherpa.soul?_t=ZS-8ytRMKvOf4a&_r=1", label: "Tiktok" },
    {   
      icon: FaWhatsapp,
      href: "https://wa.me/9779818739823?text=Hello",
      label: "Whatsapp",
      text : "green"
    },
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = openingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [openingDate]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, heroSlides.length]);

  const openModal = () => {
    setIsModalOpen(true);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(true);
  };

  const isArabic = i18n.language.toLowerCase() === "ar";

  return (
    <div
      className={`relative ${isArabic ? "direction-rtl" : "direction-ltr"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <section className="w-screen h-screen relative overflow-hidden flex">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Opening Soon Banner */}
        {/* Opening Soon Banner */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[15%] left-1/2 transform -translate-x-1/2 z-20 rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Background image + overlay */}
          <div
            className="relative px-8 py-6 text-center"
            style={{
              backgroundImage: "url('flag2.jpg')", // replace with your image path
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div> {/* overlay */}
            <div className="relative text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-amber-300">
                Opening Soon
              </h2>
              <p className="text-sm opacity-80 mb-4">
                {openingDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              {/* Countdown Timer */}
              <div className="flex justify-center space-x-4 text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-xl font-bold">{timeLeft.days}</div>
                  <div className="text-xs opacity-70">Days</div>
                </div>
                <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-xl font-bold">{timeLeft.hours}</div>
                  <div className="text-xs opacity-70">Hours</div>
                </div>
                <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-xs opacity-70">Min</div>
                </div>
                <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-xs opacity-70">Sec</div>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Vertical Social Media Links */}
        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`absolute ${
            isArabic ? "left-8" : "right-8"
          } bottom-8 z-20 hidden md:block`}
        >
          {/* "SOCIAL" text vertically */}
          <div className="mb-6 text-center">
            <div className="flex flex-col space-y-1 text-white/60 text-sm font-light tracking-widest">
              <span>S</span>
              <span>O</span>
              <span>C</span>
              <span>I</span>
              <span>A</span>
              <span>L</span>
            </div>
            <div className="mt-4 h-8 w-px bg-white/40 mx-auto"></div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="group w-10 h-10 bg-white backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <IconComponent className={`w-6 h-6 text-${social.text}-500 group-hover:text-amber-300 transition-colors duration-300`} />
                </Motion.a>
              );
            })}
          </div>

          {/* Bottom decorative line */}
          <div className="mt-6 h-8 w-px bg-white/40 mx-auto"></div>
        </Motion.div>

        {/* Content Panel */}
        <div
          className={`relative z-10 w-full flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-2 md:pb-12 max-w-6xl text-white ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Text + Buttons container */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              {/* Text Block */}
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
                  {t("home.hero.title")}
                </h1>
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  {t("home.hero.paragraph")}
                </p>
              </div>

              {/* Buttons Block */}
              <div
                className={`flex flex-col justify-between gap-4 ${
                  isArabic ? "sm:flex-row-reverse" : ""
                }`}
              >
                <button
                  onClick={() => {
                    setIsBookingModalOpen(true);
                    setIsModalOpen(false);
                  }}
                  className="group bg-white text-gray-800 px-6 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>{t("home.hero.bookButton")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button
                  onClick={openModal}
                  className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>{t("home.hero.tourButton")}</span>
                </button>
              </div>

            </div>

            <div className="flex gap-4 md:hidden space-y-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="group w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-white group-hover:text-amber-300 transition-colors duration-300" />
                  </Motion.a>
                );
              })}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-12 right-4 z-50 bg-white hover:bg-white/90 text-red-500 p-2 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/8IoDrKmbeBs?si=fQZBO4KHYiGJvmt4"
                title="Hotel Sherpa Soul Virtual Tour"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 bg-gradient-to-r from-amber-900/50 to-amber-800/50">
              <h3 className="text-xl font-bold text-white mb-2">
                {t("home.hero.modalTitle")}
              </h3>
              <p className="text-white/80">{t("home.hero.modalDesc")}</p>
            </div>
          </div>
        </div>
      )}

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedLanguage={i18n.language.toUpperCase()}
      />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
