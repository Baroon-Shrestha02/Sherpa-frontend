import React from "react";
import { useTranslation } from "react-i18next";

// StarRating component renders 5 stars, filled based on rating prop
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-amber-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Default testimonials data (fallback if translations fail to load)
const defaultTestimonials = [
  {
    id: 1,
    text: "The warmth and hospitality at Sherpa Soul Stay Inn made our trip unforgettable. From the moment we arrived, we felt like family. The traditional welcome ceremony with khada scarves was deeply moving.",
    name: "Emily Dawson",
    title: "Travel Blogger, UK",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    text: "Our stay at Sherpa Soul was a perfect mix of comfort and culture. The staff's genuine kindness made all the difference.",
    name: "Rajiv Kumar",
    title: "Photographer, India",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    text: "Beautiful views, delicious food, and a cozy atmosphere — Sherpa Soul truly felt like a home away from home.",
    name: "Sofia Martinez",
    title: "Travel Enthusiast, Spain",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // Add more testimonials as needed
];

const InfiniteCarousel = () => {
  const { t, i18n } = useTranslation();

  // Load testimonials from i18next translation using the key "homeTestimonial"
  // If not found, fallback to defaultTestimonials
  const testimonials = t("homeTestimonial", {
    returnObjects: true,
    defaultValue: defaultTestimonials,
  });

  // Check if current language is right-to-left
  const isRTL = i18n.language === "ar";

  return (
    <>
      <section
        className="bg-gradient-to-br from-stone-50 to-amber-50/30 py-24 overflow-hidden relative"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>

        <div className="relative">
          <div className="text-center mb-16 px-6 max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-light text-gray-900 tracking-tight">
              {t("storiesFrom", "Stories from the")}{" "}
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-light">
                {t("clients", "Clients")}
              </span>
            </h2>

            <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
              {t(
                "testimonialIntro",
                "Real experiences from travelers who discovered their soul at Sherpa Soul Stay Inn. Each story reflects our commitment to authentic Sherpa hospitality and unforgettable mountain adventures."
              )}
            </p>
          </div>

          <div className="relative w-full overflow-hidden pb-6">
            <div className="animate-scroll flex w-max">
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <div
                  key={`${testimonial.id}-${i}`}
                  className="w-[420px] mx-4 bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex-shrink-0 group hover:-translate-y-2"
                >
                  <StarRating rating={testimonial.rating || 5} />

                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-light">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="relative">
                      <img
                        src={
                          testimonial.avatar || "https://via.placeholder.com/56"
                        }
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-4 ring-amber-100 group-hover:ring-amber-200 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 px-6">
            <p className="text-gray-600 text-lg mb-6">
              {t(
                "button.title",
                "Ready to create your own unforgettable story?"
              )}
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {t("button.but", "Book Your Stay")}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Inline CSS for scroll animation */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-452px * ${testimonials.length}));
            }
          }
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </>
  );
};

export default InfiniteCarousel;
