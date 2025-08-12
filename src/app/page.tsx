"use client";

import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import { Sun, Moon } from "lucide-react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-orbitron",
});

const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    text: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    text: "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Opportunities don't happen, you create them.",
    author: "Chris Grosser",
  },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
  },
  {
    text: "Failure is simply the opportunity to begin again, this time more intelligently.",
    author: "Henry Ford",
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "A journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke",
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
  },
  {
    text: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown",
  },
  {
    text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
  },
  { text: "Limit your ‘always’ and your ‘nevers’.", author: "Amy Poehler" },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  {
    text: "Don’t limit your challenges. Challenge your limits.",
    author: "Jerry Dunn",
  },
  {
    text: "A champion is defined not by their wins but by how they can recover when they fall.",
    author: "Serena Williams",
  },
  {
    text: "If you want to achieve greatness stop asking for permission.",
    author: "Anonymous",
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  {
    text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    author: "Unknown",
  },
  {
    text: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou",
  },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  { text: "Make each day your masterpiece.", author: "John Wooden" },
  {
    text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
  },
  {
    text: "Small deeds done are better than great deeds planned.",
    author: "Peter Marshall",
  },
  {
    text: "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    text: "Motivation is what gets you started. Habit is what keeps you going.",
    author: "Jim Ryun",
  },
  {
    text: "Don’t wish it were easier. Wish you were better.",
    author: "Jim Rohn",
  },
  {
    text: "With the new day comes new strength and new thoughts.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
    author: "William James",
  },
  {
    text: "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
];

export default function Home() {
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(
    null
  );
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState<typeof quotes>([]);

  useEffect(() => {
    const savedQuote = localStorage.getItem("lastQuote");
    const savedTheme = localStorage.getItem("theme");
    if (savedQuote) {
      try {
        setQuote(JSON.parse(savedQuote));
      } catch {
        setQuote(quotes[0]);
      }
    }
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  const getNewQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[index];
    setQuote(newQuote);
    localStorage.setItem("lastQuote", JSON.stringify(newQuote));
    toast.success("New quote loaded!");
  };

  const copyToClipboard = () => {
    if (!quote) return;
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    toast.success("Quote copied to clipboard!");
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleSearch = () => {
    const filtered = quotes.filter(
      (q) =>
        q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuotes(filtered);
    if (filtered.length === 0) toast.error("No matching quotes found!");
  };

  return (
    <div
      className={`
      ${isDark ? "text-white" : "text-[#E0F7FA]"}
      min-h-screen flex flex-col transition-colors
      bg-no-repeat bg-cover bg-center bg-fixed
      ${
        isDark
          ? "bg-[url('/cyberdarktheme.png')]"
          : "bg-[url('/cyberlighttheme.png')]"
      }
    `}
    >
      {/* Header */}
      <header
        className={`
    ${orbitron.className} 
    ${isDark ? "bg-[#0D0D2B] text-[#FF0066]" : "bg-[#0F1B2B] text-[#00FFFF]"}
    text-center text-2xl sm:text-4xl font-bold py-4 sm:py-6 tracking-wide 
    drop-shadow-[0_0_8px] 
    flex justify-center items-center relative px-4
  `}
      >
        CYBERVERSE.QUOTES
        <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
          <Button
            onClick={toggleTheme}
            variant="ghost"
            className="rounded-full p-2 shadow-none focus:outline-none focus:ring-0 border-none"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-[#FF0066]" />
            ) : (
              <Moon className="w-5 h-5 text-[#00FFFF]" />
            )}
          </Button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center px-4 py-6 sm:py-10">
        <div
          className={`
            ${
              isDark
                ? "bg-white/5 border border-white/10"
                : "bg-white/5 shadow-md"
            } 
            w-full max-w-2xl p-6 sm:p-8 rounded-lg text-center backdrop-blur-md
          `}
        >
          {quote && (
            <blockquote className={`mb-6 ${orbitron.className}`}>
              <p
                className={`text-xl sm:text-2xl md:text-3xl ${
                  isDark ? "text-[#FF0066]" : "text-[#00FFFF]"
                }`}
              >
                &quot;{quote.text}&quot;
              </p>
              <cite className="block mt-4 text-base sm:text-lg not-italic text-gray-400">
                — {quote.author}
              </cite>
            </blockquote>
          )}

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-4">
            <Button
              onClick={getNewQuote}
              className={`w-full sm:w-auto ${
                isDark
                  ? "bg-[#FF0066] hover:bg-[#e6005c]"
                  : "bg-[#00FFFF] hover:bg-[#00dddd]"
              } text-white`}
            >
              New Quote
            </Button>
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className={`
                w-full sm:w-auto
                ${
                  isDark
                    ? "text-[#FF0066] border-[#FF0066] hover:bg-[#FF0066] hover:text-white"
                    : "text-[#00FFFF] border-[#00FFFF] hover:bg-[#00FFFF] hover:text-white"
                }
              `}
            >
              Copy
            </Button>
          </div>

          <div className="mt-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by word or author..."
              className={`w-full px-4 py-2 rounded-md border mt-2 mb-4 text-sm sm:text-base ${
                isDark
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-gray-100 text-black border-gray-300"
              }`}
            />
            <Button
              onClick={handleSearch}
              className={`w-full ${
                isDark
                  ? "bg-[#FF0066] hover:bg-[#e6005c]"
                  : "bg-[#00FFFF] hover:bg-[#00dddd]"
              } text-white`}
            >
              Search
            </Button>
          </div>

          {filteredQuotes.length > 0 && (
            <div className="mt-6 text-left space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">
                Search Results:
              </h3>
              {filteredQuotes.map((q, idx) => (
                <div
                  key={idx}
                  className={`
    p-3 sm:p-4 border rounded-md bg-opacity-10 
    ${isDark ? "border-[#FF0066]" : "border-[#00FFFF]"}
  `}
                >
                  <p className="text-sm sm:text-md">&quot;{q.text}&quot;</p>
                  <p className="text-xs sm:text-sm mt-1 text-gray-500">
                    — {q.author}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`
    w-full text-center px-4 py-4 sm:py-6 border-t shadow-[0_-2px_15px_rgba(255,0,102,0.2)] 
    ${
      isDark
        ? "text-[#FF0066] bg-[#0D0D0D] border-[#FF0066]/30 shadow-[0_-2px_25px_rgba(255,0,102,0.4)]"
        : "text-white bg-black border-gray-700"
    }
  `}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <div className="text-xs sm:text-sm tracking-widest font-mono">
            © 2025{" "}
            <span
              className={`${
                isDark ? "text-[#FF0066]" : "text-cyan-400"
              } font-bold`}
            >
              CyberQuote
            </span>{" "}
            — All rights reserved.
          </div>

          <div className="flex gap-3 sm:gap-4 text-lg sm:text-xl">
            <a
              href="#"
              className={`transition-all duration-300 ${
                isDark ? "hover:text-[#FF0066]" : "hover:text-cyan-400"
              }`}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className={`transition-all duration-300 ${
                isDark ? "hover:text-[#FF0066]" : "hover:text-cyan-400"
              }`}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="#"
              className={`transition-all duration-300 ${
                isDark ? "hover:text-[#FF0066]" : "hover:text-cyan-400"
              }`}
            >
              <i className="fab fa-discord"></i>
            </a>
          </div>

          <div
            className={`text-xs uppercase font-semibold tracking-wide ${
              isDark ? "text-[#FF0066]" : "text-cyan-400"
            }`}
          >
            &quot;Hack the Norm.&quot;
          </div>
        </div>
      </footer>
    </div>
  );
}
