
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-teal to-court text-white py-16 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Discover Padel Courts Across MENA
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Find and book the best padel courts in the Middle East and North Africa region. Connect with coaches to improve your game.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/courts">
                <Button size="lg" className="bg-white text-court hover:bg-sand hover:text-white">
                  Find Courts
                </Button>
              </Link>
              <Link to="/coaches">
                <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-court">
                  Meet Coaches
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
                  src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80" 
                  alt="Padel court" 
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
