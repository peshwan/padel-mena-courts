
import { Link } from "react-router-dom";

interface FooterProps {
  isArabic?: boolean;
}

const Footer = ({ isArabic = true }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-court">
              {isArabic ? "بادل الشرق الأوسط وشمال أفريقيا" : "MENA Padel"}
            </h3>
            <p className="text-gray-300">
              {isArabic 
                ? "المنصة الرائدة لاكتشاف رياضة البادل في الشرق الأوسط وشمال أفريقيا."
                : "The premier platform for discovering padel in the Middle East and North Africa."}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">
              {isArabic ? "استكشف" : "Explore"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courts" className="text-gray-300 hover:text-white transition-colors">
                  {isArabic ? "الملاعب" : "Courts"}
                </Link>
              </li>
              <li>
                <Link to="/coaches" className="text-gray-300 hover:text-white transition-colors">
                  {isArabic ? "المدربين" : "Coaches"}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {isArabic ? "عن البادل" : "About Padel"}
                </Link>
              </li>
              <li>
                <Link to="/how-to-play" className="text-gray-300 hover:text-white transition-colors">
                  {isArabic ? "كيف تلعب" : "How to Play"}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-medium">Email:</span> info@menapadel.com
              </li>
              <li className="text-gray-300">
                <span className="font-medium">{isArabic ? "هاتف" : "Phone"}:</span> +971 4 123 4567
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">
              {isArabic ? "تابعنا" : "Follow Us"}
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            {isArabic 
              ? "© 2025 بادل الشرق الأوسط وشمال أفريقيا. جميع الحقوق محفوظة."
              : "© 2025 MENA Padel. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
