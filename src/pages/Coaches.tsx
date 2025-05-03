
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Coaches = () => {
  const { isArabic } = useLanguage();
  const [searchParams] = useSearchParams();

  return (
    <div className="flex flex-col min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">
              {isArabic ? "دليل مدربي البادل" : "Padel Coaches Directory"}
            </h1>
            <p className="text-muted-foreground mb-8">
              {isArabic 
                ? "ابحث عن مدربين محترفين للبادل في الشرق الأوسط وشمال أفريقيا."
                : "Find professional padel coaches across Middle East and North Africa."}
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className="bg-white rounded-lg shadow-sm border p-16 text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-court/20 p-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-court"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3">
              {isArabic ? "قريباً..." : "Coming Soon..."}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-lg mx-auto">
              {isArabic 
                ? "نحن نعمل على إنشاء قائمة شاملة من مدربي البادل المؤهلين. تحقق مرة أخرى قريبًا!"
                : "We're working on building a comprehensive directory of qualified padel coaches. Check back soon!"}
            </p>
            <Button 
              className="bg-court hover:bg-court-dark"
              onClick={() => window.location.href = '/courts'}
            >
              {isArabic ? "استكشف ملاعب البادل" : "Explore Padel Courts"}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Coaches;
