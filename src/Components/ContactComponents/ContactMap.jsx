import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HomeLocation() {
  const { t } = useTranslation();

  return (
    <div className="font-sans text-gray-800">
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#AB8865] mb-6">
            {t("contactMap.en.title")}
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            {t(
              "contactMap.en.description",
              "We are located in Thamel, the bustling heart of Kathmandu — just steps away from cultural landmarks, restaurants, shops, and local experiences."
            )}
          </p>

          <ul className="space-y-4 mt-6">
            <li className="flex items-center gap-3">
              <MapPin className="text-[#AB8865]" />
              <span>{t("contactMap.en.address", "Thamel, Kathmandu, Nepal")}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-[#AB8865]" />
              <span>{t("contactMap.en.phone", "+977-9852030175")}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[#AB8865]" />
              <span>{t("contactMap.en.email", "info@hotelsherpasoul.com")}</span>
            </li>
          </ul>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title={t("contactMap.en.mapTitle", "Hotel Sherpa Soul Location")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.048073916941!2d85.31063177471158!3d27.712934676188135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1978404ce2ab%3A0x4d074729589e3e13!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1692342345678!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
