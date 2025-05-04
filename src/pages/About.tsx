
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { isArabic } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">
              {isArabic ? "عن رياضة البادل" : "About Padel Tennis"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic 
                ? "تعرف على المزيد حول الرياضة الأسرع نمواً في الشرق الأوسط وشمال أفريقيا" 
                : "Learn more about the fastest growing sport in the Middle East and North Africa"}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {isArabic ? "ما هو البادل؟" : "What is Padel?"}
                </h2>
                <p className="mb-4">
                  {isArabic 
                    ? "البادل هي رياضة مضرب تجمع بين عناصر التنس والاسكواش. عادة ما تُلعب في أزواج على ملعب مغلق بحجم ثلث ملعب التنس تقريباً."
                    : "Padel is a racquet sport that combines elements of tennis and squash. It's typically played in doubles on an enclosed court about one-third the size of a tennis court."}
                </p>
                <p>
                  {isArabic 
                    ? "يحتوي الملعب على جدران يمكن للاعبين استخدامها بطريقة مشابهة للاسكواش. يُلعب البادل بمضرب مثقب وكرة تنس منخفضة الضغط. نظام التسجيل هو نفسه المستخدم في التنس."
                    : "The court has walls, which players can use similarly to squash. Padel is played with a perforated paddle and a depressurized tennis ball. The scoring system is the same as tennis."}
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80" 
                  alt={isArabic ? "ملعب بادل" : "Padel court"} 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>

            <Separator className="my-12" />

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                {isArabic ? "تاريخ البادل" : "History of Padel"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {isArabic ? "النشأة" : "Origins"}
                  </h3>
                  <p>
                    {isArabic 
                      ? "تم اختراع البادل من قبل إنريكي كوركويرا في أكابولكو، المكسيك عام 1969. قام بإنشاء ملعب في منزله بسبب عدم وجود مساحة لملعب تنس، مضيفاً الجدران للحفاظ على الكرة داخل اللعب."
                      : "Padel was invented by Enrique Corcuera in Acapulco, Mexico in 1969. He created a court in his home due to lack of space for a tennis court, adding walls to keep the ball in play."}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {isArabic ? "الانتشار العالمي" : "Global Spread"}
                  </h3>
                  <p>
                    {isArabic 
                      ? "تم نقل الرياضة إلى إسبانيا في سبعينيات القرن الماضي من قبل ألفونسو دي هوهينلوي، الذي بنى أول ملاعب بادل في نادي ماربيلا. ومن إسبانيا، انتشرت إلى الأرجنتين ثم في جميع أنحاء أمريكا الجنوبية."
                      : "The sport was brought to Spain in the 1970s by Alfonso de Hohenlohe, who built the first padel courts in the Marbella Club. From Spain, it spread to Argentina and then throughout South America."}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {isArabic ? "النمو الحديث" : "Modern Growth"}
                  </h3>
                  <p>
                    {isArabic 
                      ? "في السنوات الأخيرة، شهدت رياضة البادل نمواً متسارعاً على مستوى العالم، خاصة في منطقة الشرق الأوسط وشمال أفريقيا حيث تجعل الظروف المناخية والجوانب الاجتماعية للعبة جاذبة للغاية."
                      : "In recent years, padel has experienced explosive growth globally, especially in the MENA region where climate conditions and social aspects of the game make it highly appealing."}
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                {isArabic ? "قواعد البادل" : "Rules of Padel"}
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {isArabic ? "الملعب" : "The Court"}
                  </h3>
                  <p>
                    {isArabic 
                      ? "ملعب البادل عرضه 10م وطوله 20م، محاط بجدران. ارتفاع الجدار الخلفي 3م، بينما تنخفض الجدران الجانبية من 3م إلى 2م. ينقسم الملعب بشبكة، مشابهة للتنس."
                      : "A padel court is 10m wide and 20m long, enclosed by walls. The back wall is 3m high, while the side walls step down from 3m to 2m. The court is divided by a net, similar to tennis."}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {isArabic ? "نظام التسجيل" : "Scoring"}
                  </h3>
                  <p>
                    {isArabic 
                      ? "نظام التسجيل مطابق للتنس: 15، 30، 40، شوط. المباريات عادة ما تكون الأفضل من 3 مجموعات، مع فاصل تعادل عند 6-6 في كل مجموعة. يفوز اللاعبون بنقطة عندما ترتد الكرة مرتين على جانب الخصم."
                      : "Scoring is identical to tennis: 15, 30, 40, game. Matches are typically best of 3 sets, with a tie-break at 6-6 in each set. Players win a point when the ball bounces twice on the opponent's side."}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {isArabic ? "لعب الكرة" : "Playing the Ball"}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      {isArabic 
                        ? "يجب أن يتم إرسال الكرة بشكل قطري، بحيث ترتد مرة واحدة في مربع الإرسال."
                        : "The ball must be served diagonally, bouncing once in the service box."}
                    </li>
                    <li>
                      {isArabic 
                        ? "بعد الإرسال، يمكن لعب الكرة بعد ارتدادها مرة واحدة أو مباشرة من الجدران."
                        : "After the serve, the ball can be played after it bounces once or directly from the walls."}
                    </li>
                    <li>
                      {isArabic 
                        ? "يمكن ضرب الكرة على جدرانك الخاصة قبل أن تعبر الشبكة."
                        : "The ball can be hit against your own walls before going over the net."}
                    </li>
                    <li>
                      {isArabic 
                        ? "إذا ضربت الكرة الشبكة السلكية أو الجدران في جانب الخصم قبل الارتداد، تُفقد النقطة."
                        : "If the ball hits the wire mesh or walls on the opponent's side before bouncing, the point is lost."}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator className="my-12" />

            <div>
              <h2 className="text-2xl font-bold mb-6">
                {isArabic ? "البادل في منطقة الشرق الأوسط وشمال أفريقيا" : "Padel in the MENA Region"}
              </h2>
              <p className="mb-6">
                {isArabic 
                  ? "شهدت رياضة البادل نمواً هائلاً في منطقة الشرق الأوسط وشمال أفريقيا في السنوات الأخيرة. تبنت دول مثل الإمارات العربية المتحدة والمملكة العربية السعودية وقطر هذه الرياضة مع استثمارات كبيرة في المرافق والبطولات."
                  : "Padel has experienced tremendous growth in the Middle East and North Africa in recent years. Countries like the UAE, Saudi Arabia, and Qatar have embraced the sport with significant investments in facilities and tournaments."}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {isArabic ? "عوامل النمو" : "Growth Factors"}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{isArabic ? "ظروف مناخية مثالية للعب الداخلي والخارجي" : "Climate conditions ideal for both indoor and outdoor play"}</li>
                    <li>{isArabic ? "جانب اجتماعي قوي يتماشى مع الثقافة المحلية" : "Strong social aspect that aligns with local culture"}</li>
                    <li>{isArabic ? "استثمار كبير في البنية التحتية الرياضية" : "Significant investment in sports infrastructure"}</li>
                    <li>{isArabic ? "شعبية بين المواطنين والمغتربين" : "Popularity among both locals and expatriates"}</li>
                    <li>{isArabic ? "مبادرات حكومية تعزز الرياضة وأنماط الحياة الصحية" : "Government initiatives promoting sports and healthy lifestyles"}</li>
                    <li>{isArabic ? "استضافة بطولات ومعارض دولية" : "Hosting of international tournaments and exhibitions"}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {isArabic ? "تطورات بارزة" : "Notable Developments"}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{isArabic ? "دبي تستضيف العديد من فعاليات جولة البادل العالمية" : "Dubai hosts multiple World Padel Tour events"}</li>
                    <li>{isArabic ? "استثمرت المملكة العربية السعودية بكثافة في البنية التحتية للبادل" : "Saudi Arabia has invested heavily in padel infrastructure"}</li>
                    <li>{isArabic ? "دمجت قطر البادل في استراتيجيتها للتنمية الرياضية" : "Qatar has integrated padel into its sports development strategy"}</li>
                    <li>{isArabic ? "تشهد مصر نمواً سريعاً في مرافق البادل الحضرية" : "Egypt is seeing rapid growth in urban padel facilities"}</li>
                    <li>{isArabic ? "البطولات المحلية تنمو في الشعبية والمشاركة" : "Local tournaments are growing in popularity and participation"}</li>
                    <li>{isArabic ? "يتم إنشاء برامج تدريب احترافية" : "Professional coaching programs are being established"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-teal text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {isArabic ? "مستعد لبدء اللعب؟" : "Ready to Start Playing?"}
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              {isArabic 
                ? "ابحث عن ملعب قريب منك وانضم إلى آلاف عشاق البادل في جميع أنحاء منطقة الشرق الأوسط وشمال أفريقيا."
                : "Find a court near you and join the thousands of padel enthusiasts across the MENA region."}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/courts" className="bg-white text-teal px-6 py-3 rounded-md font-medium hover:bg-sand hover:text-white transition-colors">
                {isArabic ? "البحث عن ملعب" : "Find a Court"}
              </a>
              <a href="/coaches" className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-teal transition-colors">
                {isArabic ? "البحث عن مدرب" : "Find a Coach"}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
