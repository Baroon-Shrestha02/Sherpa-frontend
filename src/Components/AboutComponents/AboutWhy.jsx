import React, { useState } from "react";
import {
  Mountain,
  Wifi,
  ShieldCheck,
  Smile,
  MapPin,
  Globe,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// Buddhist-inspired palette
const SAFFRON = "#F6A823"; // marigold/saffron
const MAROON = "#7B2D26"; // monk robe maroon
const IVORY = "#FFFBF5"; // soft background

function Badge({ children }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium mr-2 mb-2 transition-all hover:scale-105"
      style={{
        color: MAROON,
        border: `1px solid ${MAROON}40`,
        background: `${SAFFRON}15`,
        boxShadow: `0 2px 4px ${MAROON}10`,
      }}
    >
      {children}
    </span>
  );
}

export default function AboutWhy() {
  // Mock translation function for demo

const {t} = useTranslation()
  const [showMoreLangs, setShowMoreLangs] = useState(false);

  const features = [
    {
      title: t("aboutWhy.authenticSherpaLifestyle.title"),
      description: t("aboutWhy.authenticSherpaLifestyle.description"),
      icon: Mountain,
    },
    {
      title: t("aboutWhy.primeThamelLocation.title"),
      description: t("aboutWhy.primeThamelLocation.description"),
      icon: MapPin,
    },
    {
      title: t("aboutWhy.guestAmenities.title"),
      description: t("aboutWhy.guestAmenities.description"),
      icon: Smile,
    },
    {
      title: t("aboutWhy.airportPickupForInternationalGuests.title"),
      description: t("aboutWhy.airportPickupForInternationalGuests.description"),
      icon: Globe,
    },
    {
      title: t("aboutWhy.foreignCurrencyExchange.title"),
      description: t("aboutWhy.foreignCurrencyExchange.description"),
      icon: Wifi,
    },
    {
      title: t("aboutWhy.cleanAndSecure.title"),
      description: t("aboutWhy.cleanAndSecure.description"),
      icon: ShieldCheck,
    },
  ];

  return (
    <section 
      className="py-12 relative overflow-hidden" 
      style={{ background: `linear-gradient(135deg, ${IVORY} 0%, #ffffff 100%)` }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, ${SAFFRON} 1px, transparent 1px), radial-gradient(circle at 80% 50%, ${MAROON} 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 80px 80px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Enhanced Heading Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div 
              className="h-px flex-1 max-w-20"
              style={{ background: `linear-gradient(to right, transparent, ${SAFFRON})` }}
            />

            <div 
              className="h-px flex-1 max-w-20"
              style={{ background: `linear-gradient(to left, transparent, ${SAFFRON})` }}
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("aboutWhy.whyChoose")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F79724] to-[#2CACE2]">
              {t("aboutWhy.sherpaSoul")}
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("aboutWhy.subtitle")}
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center">
            <div 
              className="h-1 w-20 rounded-full"
              style={{ background: `linear-gradient(to right, ${SAFFRON}, ${MAROON})` }}
            />
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isMultilingual = feature.title === t("aboutWhy.multilingualSupport.title");
            
            return (
              <div
                key={index}
                className="group relative rounded-3xl p-8 bg-white/90 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-0 overflow-hidden"
                style={{
                  boxShadow: `0 8px 25px ${MAROON}15, 0 0 0 1px ${MAROON}08`,
                }}
              >
                {/* Animated background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${SAFFRON}05, ${MAROON}05)`,
                  }}
                />
                
                {/* Corner accent */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10"
                  style={{ background: SAFFRON }}
                />

                <div className="relative z-10">
                  {/* Enhanced Icon */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${SAFFRON}, ${MAROON})`,
                        boxShadow: `0 8px 16px ${SAFFRON}30`,
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Floating ring animation */}
                    <div 
                      className="absolute inset-0 w-16 h-16 rounded-2xl border-2 opacity-0 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500"
                      style={{ borderColor: SAFFRON }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Multilingual Section */}
                  {isMultilingual && (
                    <div className="space-y-4">
                      {/* Primary Languages */}
                      <div className="flex flex-wrap">
                        {feature.primaryLangs.map((l, i) => (
                          <Badge key={i}>{l.label}</Badge>
                        ))}
                      </div>

                      {/* Toggle Button */}
                      <button
                        type="button"
                        onClick={() => setShowMoreLangs((s) => !s)}
                        className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                        style={{ 
                          color: MAROON,
                          background: `${SAFFRON}10`,
                          border: `1px solid ${MAROON}20`
                        }}
                        aria-expanded={showMoreLangs}
                      >
                        <MessageCircle className="w-4 h-4" />
                        {showMoreLangs
                          ? t("aboutWhy.hideOtherLanguages")
                          : t("aboutWhy.showOtherLanguages")}
                        {showMoreLangs ? (
                          <ChevronUp className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                        ) : (
                          <ChevronDown className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                        )}
                      </button>

                      {/* Collapsible Languages */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          showMoreLangs ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pt-2 flex flex-wrap">
                          {feature.otherLangs.map((name, i) => (
                            <Badge key={i}>{name}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Enhanced Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div 
                    className="h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: `linear-gradient(to right, ${SAFFRON}, ${MAROON})` }}
                  />
                  <div 
                    className="h-1 w-full opacity-30"
                    style={{ background: SAFFRON }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}