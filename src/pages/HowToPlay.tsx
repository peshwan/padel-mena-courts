
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowToPlay = () => {
  const [isArabic, setIsArabic] = useState(true);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  return (
    <div className="flex flex-col min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar isArabic={isArabic} onToggleLanguage={toggleLanguage} />

      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">
              {isArabic ? "كيف تلعب البادل" : "How to Play Padel"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic 
                ? "دليل شامل للمبتدئين لتعلم لعبة البادل الممتعة والمثيرة." 
                : "A comprehensive beginner's guide to learn this exciting and engaging sport."}
            </p>
          </div>

          <Tabs defaultValue="basics" className="mb-12">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 h-auto p-1">
              <TabsTrigger value="basics">
                {isArabic ? "أساسيات اللعبة" : "Game Basics"}
              </TabsTrigger>
              <TabsTrigger value="rules">
                {isArabic ? "قواعد البادل" : "Rules & Scoring"}
              </TabsTrigger>
              <TabsTrigger value="techniques">
                {isArabic ? "التقنيات الأساسية" : "Basic Techniques"}
              </TabsTrigger>
              <TabsTrigger value="equipment">
                {isArabic ? "المعدات اللازمة" : "Equipment"}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="basics" className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    {isArabic ? "ما هي لعبة البادل؟" : "What is Padel?"}
                  </h2>
                  <p className="mb-4">
                    {isArabic 
                      ? "البادل هي رياضة مضرب تجمع بين عناصر التنس والاسكواش. يتم لعبها في زوجي على ملعب مغلق يبلغ حجمه حوالي ثلث حجم ملعب التنس." 
                      : "Padel is a racquet sport that combines elements of tennis and squash. It's played in doubles on an enclosed court about 1/3 the size of a tennis court."}
                  </p>
                  <p className="mb-4">
                    {isArabic
                      ? "يتم استخدام الجدران كجزء من اللعبة، مما يجعلها أكثر سهولة ويضيف بعدًا استراتيجيًا يجعلها ممتعة وجذابة للاعبين من جميع المستويات."
                      : "The walls are used as part of the game, making it more accessible and adding a strategic dimension that makes it addictive and fun for players of all levels."}
                  </p>
                  <p className="mb-4">
                    {isArabic
                      ? "نشأت اللعبة في المكسيك في الستينيات، وانتشرت بشكل كبير في إسبانيا والأرجنتين. في السنوات الأخيرة، ازداد انتشارها بشكل كبير في منطقة الشرق الأوسط وشمال أفريقيا."
                      : "The sport originated in Mexico in the 1960s and became widely popular in Spain and Argentina. In recent years, it has seen explosive growth in the Middle East and North Africa region."}
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80" 
                    alt={isArabic ? "ملعب بادل" : "Padel court"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  {isArabic ? "مميزات لعبة البادل" : "Benefits of Playing Padel"}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center mb-2">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-court/10 text-court mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
                        </div>
                        <h4 className="font-bold text-lg mb-1">
                          {isArabic ? "سهلة التعلم" : "Easy to Learn"}
                        </h4>
                        <p className="text-muted-foreground">
                          {isArabic
                            ? "أسهل من التنس للمبتدئين، مع منحنى تعلم أقل حدة."
                            : "Easier than tennis for beginners, with a gentler learning curve."}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center mb-2">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"/><line x1="16" x2="2" y1="8" y2="22"/><line x1="17.5" x2="9" y1="15" y2="15"/></svg>
                        </div>
                        <h4 className="font-bold text-lg mb-1">
                          {isArabic ? "اجتماعية" : "Social"}
                        </h4>
                        <p className="text-muted-foreground">
                          {isArabic
                            ? "تلعب دائمًا في أزواج، مما يجعلها رياضة اجتماعية ممتعة."
                            : "Always played in pairs, making it a fun social sport."}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center mb-2">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand/10 text-sand-dark mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5A6 6 0 0 1 17.2 14H22"/><path d="M17.5 17.5A6 6 0 0 1 6.8 10H2"/><path d="M12 22v-4"/><path d="M12 6V2"/></svg>
                        </div>
                        <h4 className="font-bold text-lg mb-1">
                          {isArabic ? "تمرين رائع" : "Great Workout"}
                        </h4>
                        <p className="text-muted-foreground">
                          {isArabic
                            ? "توفر تمرينًا للجسم بالكامل مع تأثير أقل على المفاصل."
                            : "Provides a full-body workout with less impact on joints."}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="rules" className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    {isArabic ? "قواعد اللعب والتسجيل" : "Rules & Scoring"}
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-bold mb-2">
                        {isArabic ? "التسجيل" : "Scoring"}
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          {isArabic
                            ? "يتبع نظام التسجيل نفس نظام التنس: 15، 30، 40، الفوز بالشوط."
                            : "Scoring follows the same system as tennis: 15, 30, 40, game."}
                        </li>
                        <li>
                          {isArabic
                            ? "يتم لعب المباريات عادة على أفضل من 3 مجموعات."
                            : "Matches are typically played as best of 3 sets."}
                        </li>
                        <li>
                          {isArabic
                            ? "يتم لعب التعادل 40-40 مع نقطة حاسمة، حيث يختار الفريق المستقبل الجانب."
                            : "A 40-40 tie is played with a deciding point, where the receiving team chooses the side."}
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-bold mb-2">
                        {isArabic ? "الإرسال" : "Serving"}
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          {isArabic
                            ? "يجب أن يتم الإرسال بضربة تحت مستوى الخصر."
                            : "The serve must be hit underhand, below waist level."}
                        </li>
                        <li>
                          {isArabic
                            ? "يجب أن ترتد الكرة أولاً في مربع الإرسال المقابل."
                            : "The ball must first bounce in the opposite service box."}
                        </li>
                        <li>
                          {isArabic
                            ? "بعد الإرسال، يمكن أن ترتد الكرة من الجدران."
                            : "After the serve, the ball can bounce off the walls."}
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-bold mb-2">
                        {isArabic ? "خلال اللعب" : "During Play"}
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          {isArabic
                            ? "يسمح للكرة بالارتداد مرة واحدة على الأرض قبل ضربها."
                            : "The ball is allowed to bounce once on the ground before hitting it."}
                        </li>
                        <li>
                          {isArabic
                            ? "يمكن استخدام الجدران في اللعب بعد أن ترتد الكرة على الأرض."
                            : "Walls can be used in play after the ball bounces on the ground."}
                        </li>
                        <li>
                          {isArabic
                            ? "لا يمكن ضرب الكرة مباشرة على الجدران الخلفية ولا شبكة الجدار العلوي."
                            : "The ball cannot be hit directly into the back walls or the upper wall mesh."}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80" 
                      alt={isArabic ? "لاعبي بادل" : "Padel players"}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="bg-court/5 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">
                      {isArabic ? "نصائح للمبتدئين" : "Tips for Beginners"}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-court text-white flex items-center justify-center mr-2 mt-0.5">1</div>
                        <p>
                          {isArabic
                            ? "تعلم استخدام الجدران لصالحك، فهي ميزة فريدة في البادل."
                            : "Learn to use the walls to your advantage - it's a unique feature in padel."}
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-court text-white flex items-center justify-center mr-2 mt-0.5">2</div>
                        <p>
                          {isArabic
                            ? "التواصل مع شريكك أمر بالغ الأهمية في هذه الرياضة الزوجية."
                            : "Communication with your partner is crucial in this doubles sport."}
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-court text-white flex items-center justify-center mr-2 mt-0.5">3</div>
                        <p>
                          {isArabic
                            ? "ابدأ بالتركيز على إعادة الكرة بأمان قبل تطوير ضربات أكثر تقدمًا."
                            : "Start by focusing on safely returning the ball before developing more advanced shots."}
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-court text-white flex items-center justify-center mr-2 mt-0.5">4</div>
                        <p>
                          {isArabic
                            ? "تذكر أن الضربات عالية الجودة أكثر أهمية من القوة في البادل."
                            : "Remember that quality shots are more important than power in padel."}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="techniques" className="pt-6">
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-2xl font-bold mb-4">
                      {isArabic ? "التقنيات الأساسية" : "Basic Techniques"}
                    </h2>
                    <p className="mb-6">
                      {isArabic
                        ? "إتقان هذه التقنيات الأساسية سيساعدك على بناء أساس قوي كلاعب بادل. تذكر أن التناسق والدقة أكثر أهمية من القوة الخام."
                        : "Mastering these basic techniques will help you build a strong foundation as a padel player. Remember that consistency and accuracy are more important than raw power."}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-bold mb-2">
                          {isArabic ? "ضربة الإرسال" : "The Serve"}
                        </h3>
                        <p>
                          {isArabic
                            ? "يتم تنفيذ الإرسال بضربة تحت مستوى الخصر، مع توجيه الكرة للارتداد في مربع الإرسال المقابل. الهدف هو الدقة وليس القوة."
                            : "The serve is executed with an underhand stroke, aiming for the ball to bounce in the opposite service box. The objective is accuracy rather than power."}
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-bold mb-2">
                          {isArabic ? "الضربة الأمامية والخلفية" : "Forehand & Backhand"}
                        </h3>
                        <p>
                          {isArabic
                            ? "تشبه الضربات الأساسية في البادل نظيراتها في التنس، لكن مع مساحة أقل للتأرجح. أمسك المضرب بقبضة أقوى وحافظ على وضعية متوازنة."
                            : "Basic strokes in padel are similar to their tennis counterparts, but with less space for the swing. Hold the racquet with a firmer grip and maintain a balanced stance."}
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-bold mb-2">
                          {isArabic ? "ضربات الجدار" : "Wall Shots"}
                        </h3>
                        <p>
                          {isArabic
                            ? "تعلم كيفية قراءة وتوقع ارتداد الكرة من الجدران أمر أساسي. يمكن استخدام الجدران للدفاع أو الهجوم."
                            : "Learning to read and anticipate the ball's rebound from the walls is essential. Walls can be used both defensively and offensively."}
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-bold mb-2">
                          {isArabic ? "ضربة الفولي" : "Volley"}
                        </h3>
                        <p>
                          {isArabic
                            ? "ضرب الكرة قبل أن ترتد على الأرض، وهي تقنية مهمة عندما تكون قريبًا من الشبكة. يتطلب توقيتًا جيدًا وردود فعل سريعة."
                            : "Hitting the ball before it bounces on the ground, a crucial technique when you're close to the net. It requires good timing and quick reflexes."}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1623603807271-21a9ccc7325c?auto=format&fit=crop&w=800&q=80" 
                        alt={isArabic ? "تقنيات البادل" : "Padel techniques"}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {isArabic ? "تقنيات متقدمة" : "Advanced Techniques"}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-lg mb-2">
                          {isArabic ? "باندخا (Bandeja)" : "Bandeja"}
                        </h4>
                        <p className="text-muted-foreground">
                          {isArabic
                            ? "ضربة دفاعية تستخدم كرد على كرات الخصم العالية، تمكنك من إبقاء اللعب مستمرًا."
                            : "A defensive shot used in response to high balls from opponents, allowing you to keep the rally going."}
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-lg mb-2">
                          {isArabic ? "فيبوراسيون (Vibora)" : "Vibora"}
                        </h4>
                        <p className="text-muted-foreground">
                          {isArabic
                            ? "ضربة هجومية ذات دوران علوي قوي توجه الكرة نحو أسفل، يصعب على الخصوم ردها."
                            : "An offensive shot with heavy topspin that directs the ball downward, making it difficult for opponents to return."}
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-lg mb-2">
                          {isArabic ? "سماش (Smash)" : "Smash"}
                        </h4>
                        <p className="text-muted-foreground">
                          {isArabic
                            ? "ضربة قوية لإنهاء النقطة، مثل الإرسال العلوي في التنس، تستخدم ضد كرات الخصم العالية."
                            : "A powerful shot to end the point, similar to an overhead serve in tennis, used against high balls from opponents."}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="equipment" className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    {isArabic ? "المعدات اللازمة" : "Equipment You Need"}
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border flex items-start">
                      <div className="bg-court/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-court"><circle cx="12" cy="12" r="10"/></svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">
                          {isArabic ? "مضرب البادل" : "Padel Racquet"}
                        </h3>
                        <p className="text-muted-foreground">
                          {isArabic
                            ? "مضرب البادل أقصر وأثقل من مضرب التنس، مع سطح مثقب وبدون أوتار. للمبتدئين، ابحث عن مضرب بشكل قطرة الماء مع توازن متوسط."
                            : "A padel racquet is shorter and heavier than a tennis racquet, with a perforated surface and no strings. For beginners, look for a teardrop-shaped racquet with medium balance."}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border flex items-start">
                      <div className="bg-teal/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 9.17-4.24-4.24"/><path d="m9.17 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24-4.24"/><path d="m4.93 19.07 4.24-4.24"/></svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">
                          {isArabic ? "كرات البادل" : "Padel Balls"}
                        </h3>
                        <p className="text-muted-foreground">
                          {isArabic
                            ? "كرات البادل تشبه كرات التنس ولكنها ذات ضغط أقل، مما يؤدي إلى ارتداد أبطأ. هذا يجعل اللعبة أكثر سهولة للمبتدئين."
                            : "Padel balls resemble tennis balls but have less pressure, resulting in a slower bounce. This makes the game more accessible to beginners."}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border flex items-start">
                      <div className="bg-sand/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sand-dark"><path d="M12.5 3 L8 3 L8 19 L12.5 21 L17 19 L17 3 L12.5 3 Z"/><path d="M8 8 L17 8"/><path d="M8 13 L17 13"/></svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">
                          {isArabic ? "الأحذية المناسبة" : "Proper Shoes"}
                        </h3>
                        <p className="text-muted-foreground">
                          {isArabic
                            ? "أحذية التنس أو الرياضات المتعددة مناسبة لملاعب البادل. ابحث عن أحذية توفر الدعم الجانبي الجيد والثبات للحركات السريعة."
                            : "Tennis or multi-sport shoes are suitable for padel courts. Look for shoes that provide good lateral support and stability for quick movements."}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border flex items-start">
                      <div className="bg-court/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-court"><path d="m6 18 6-6-6-6"/><path d="m18 18-6-6 6-6"/></svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">
                          {isArabic ? "ملابس مريحة" : "Comfortable Clothing"}
                        </h3>
                        <p className="text-muted-foreground">
                          {isArabic
                            ? "ارتدِ ملابس رياضية خفيفة ومريحة تسمح بحرية الحركة. يفضل ارتداء ملابس تمتص العرق خلال اللعب."
                            : "Wear lightweight, comfortable sportswear that allows freedom of movement. Moisture-wicking fabrics are preferable during play."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1621935833283-28fbb0834e76?auto=format&fit=crop&w=800&q=80" 
                      alt={isArabic ? "معدات البادل" : "Padel equipment"}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="bg-gradient-to-r from-court/10 to-teal/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">
                      {isArabic ? "نصائح لاختيار المضرب" : "Tips for Choosing a Racquet"}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-court text-white flex items-center justify-center mr-3 mt-0.5">1</div>
                        <div>
                          <h4 className="font-bold">
                            {isArabic ? "شكل المضرب" : "Shape"}
                          </h4>
                          <p className="text-sm">
                            {isArabic
                              ? "المضارب على شكل قطرة الماء (أوسع في الأعلى) توفر قوة أكبر، بينما المضارب على شكل الماسة تعطي تحكمًا أفضل."
                              : "Teardrop shapes (wider at the top) provide more power, while diamond shapes offer better control."}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-court text-white flex items-center justify-center mr-3 mt-0.5">2</div>
                        <div>
                          <h4 className="font-bold">
                            {isArabic ? "وزن المضرب" : "Weight"}
                          </h4>
                          <p className="text-sm">
                            {isArabic
                              ? "المضارب الأخف (340-360 جرام) أسهل في المناورة، بينما الأثقل توفر قوة أكبر."
                              : "Lighter racquets (340-360g) are easier to maneuver, while heavier ones provide more power."}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-court text-white flex items-center justify-center mr-3 mt-0.5">3</div>
                        <div>
                          <h4 className="font-bold">
                            {isArabic ? "نوع القلب" : "Core Type"}
                          </h4>
                          <p className="text-sm">
                            {isArabic
                              ? "قلب ناعم (EVA) يوفر راحة أكبر وامتصاص للصدمات، بينما القلب الصلب يوفر قوة وتحكم أكبر."
                              : "A soft core (EVA) provides more comfort and shock absorption, while a hard core offers more power and control."}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-court text-white flex items-center justify-center mr-3 mt-0.5">4</div>
                        <div>
                          <h4 className="font-bold">
                            {isArabic ? "سعر البداية" : "Starting Price"}
                          </h4>
                          <p className="text-sm">
                            {isArabic
                              ? "للمبتدئين، ضع في اعتبارك مضربًا متوسط السعر (50-100 دولار) بدلاً من المضارب الاحترافية الباهظة الثمن."
                              : "For beginners, consider a mid-range racquet ($50-100) rather than expensive professional models."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-court hover:bg-court-dark"
              onClick={() => window.location.href = "/courts"}
            >
              {isArabic ? "ابحث عن ملاعب البادل القريبة منك" : "Find Padel Courts Near You"}
            </Button>
          </div>
        </div>
      </main>

      <Footer isArabic={isArabic} />
    </div>
  );
};

export default HowToPlay;
