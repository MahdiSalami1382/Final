import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterTabs from "../components/FilterTabs";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const movies = [
    { title: "Black Widow", rating: 6.8, image: "/src/images/black-widow.jpg" },
    { title: "Shang Chi", rating: 7.9, image: "/src/images/shangchi.jpg" },
    { title: "Loki", rating: 8.4, image: "/src/images/loki.jpg" },
    { title: "How I Met Your Mother", rating: 8.3, image: "/src/images/himym.jpg" },
    { title: "Money Heist", rating: 8.3, image: "/src/images/money-heist.jpg" },
    { title: "Friends", rating: 8.8, image: "/src/images/friends.jpg" },
    { title: "The Big Bang Theory", rating: 8.1, image: "/src/images/bbt.jpg" },
    { title: "Two And A Half Men", rating: 7.0, image: "/src/images/two-half-men.jpg" }
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800  text-white">  
      <Navbar />
      <div className="px-10 mt-10">
        <h1 className="text-4xl font-bold">MaileHereko</h1>
        <p className="text-gray-400 mt-2 max-w-xl">
          List of movies and TV Shows I have watched till date. Explore what I
          have watched and feel free to make a suggestion 😊
        </p>

        <SearchBar />
        <FilterTabs />

        <h2 className="mt-10 text-xl font-semibold">All (120)</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {movies.map((movie, i) => (
            <MovieCard key={i} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
