
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { isArabic } = useLanguage();
  
  return (
    <div className="bg-gradient-to-r from-teal to-court text-white py-16 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6" dir={isArabic ? "rtl" : "ltr"}>
            <h1 className="text-4xl md:text-6xl font-bold">
              {isArabic 
                ? "اكتشف ملاعب البادل في الشرق الأوسط وشمال إفريقيا"
                : "Discover Padel Courts Across MENA"}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {isArabic 
                ? "ابحث واحجز أفضل ملاعب البادل في منطقة الشرق الأوسط وشمال إفريقيا. تواصل مع المدربين لتحسين لعبتك."
                : "Find and book the best padel courts in the Middle East and North Africa region. Connect with coaches to improve your game."}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/courts">
                <Button size="lg" className="bg-white text-court hover:bg-sand hover:text-white">
                  {isArabic ? "ابحث عن الملاعب" : "Find Courts"}
                </Button>
              </Link>
              <Link to="/coaches">
                <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-court">
                  {isArabic ? "تعرف على المدربين" : "Meet Coaches"}
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-sand rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-desert rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
              <div className="bg-white p-4 rounded-2xl shadow-xl transform rotate-3">
                <img 
                  src="/lovable-uploads/368c8e6c-61c1-4346-831e-87e8d67e30bb.png" 
                  alt={isArabic ? "ملعب بادل" : "Padel court"} 
                  className="rounded-lg object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
