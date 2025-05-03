
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">About Padel Tennis</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn more about the fastest growing sport in the Middle East and North Africa
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">What is Padel?</h2>
                <p className="mb-4">
                  Padel is a racquet sport that combines elements of tennis and squash. It's typically played in doubles on an enclosed court about one-third the size of a tennis court.
                </p>
                <p>
                  The court has walls, which players can use similarly to squash. Padel is played with a perforated paddle and a depressurized tennis ball. The scoring system is the same as tennis.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80" 
                  alt="Padel court" 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>

            <Separator className="my-12" />

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">History of Padel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Origins</h3>
                  <p>
                    Padel was invented by Enrique Corcuera in Acapulco, Mexico in 1969. He created a court in his home due to lack of space for a tennis court, adding walls to keep the ball in play.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Global Spread</h3>
                  <p>
                    The sport was brought to Spain in the 1970s by Alfonso de Hohenlohe, who built the first padel courts in the Marbella Club. From Spain, it spread to Argentina and then throughout South America.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Modern Growth</h3>
                  <p>
                    In recent years, padel has experienced explosive growth globally, especially in the MENA region where climate conditions and social aspects of the game make it highly appealing.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Rules of Padel</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">The Court</h3>
                  <p>
                    A padel court is 10m wide and 20m long, enclosed by walls. The back wall is 3m high, while the side walls step down from 3m to 2m. The court is divided by a net, similar to tennis.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Scoring</h3>
                  <p>
                    Scoring is identical to tennis: 15, 30, 40, game. Matches are typically best of 3 sets, with a tie-break at 6-6 in each set. Players win a point when the ball bounces twice on the opponent's side.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Playing the Ball</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The ball must be served diagonally, bouncing once in the service box.</li>
                    <li>After the serve, the ball can be played after it bounces once or directly from the walls.</li>
                    <li>The ball can be hit against your own walls before going over the net.</li>
                    <li>If the ball hits the wire mesh or walls on the opponent's side before bouncing, the point is lost.</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator className="my-12" />

            <div>
              <h2 className="text-2xl font-bold mb-6">Padel in the MENA Region</h2>
              <p className="mb-6">
                Padel has experienced tremendous growth in the Middle East and North Africa in recent years. Countries like the UAE, Saudi Arabia, and Qatar have embraced the sport with significant investments in facilities and tournaments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Growth Factors</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Climate conditions ideal for both indoor and outdoor play</li>
                    <li>Strong social aspect that aligns with local culture</li>
                    <li>Significant investment in sports infrastructure</li>
                    <li>Popularity among both locals and expatriates</li>
                    <li>Government initiatives promoting sports and healthy lifestyles</li>
                    <li>Hosting of international tournaments and exhibitions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Notable Developments</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Dubai hosts multiple World Padel Tour events</li>
                    <li>Saudi Arabia has invested heavily in padel infrastructure</li>
                    <li>Qatar has integrated padel into its sports development strategy</li>
                    <li>Egypt is seeing rapid growth in urban padel facilities</li>
                    <li>Local tournaments are growing in popularity and participation</li>
                    <li>Professional coaching programs are being established</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-teal text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Playing?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Find a court near you and join the thousands of padel enthusiasts across the MENA region.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/courts" className="bg-white text-teal px-6 py-3 rounded-md font-medium hover:bg-sand hover:text-white transition-colors">
                Find a Court
              </a>
              <a href="/coaches" className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-teal transition-colors">
                Find a Coach
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
