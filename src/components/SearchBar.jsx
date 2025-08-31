export default function SearchBar() {
  return (
    <div className="mt-6 w-full md:w-1/2">
      <input
        type="text"
        placeholder="Search Movies or TV Shows"
        className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
      />
    </div>
  );
}
