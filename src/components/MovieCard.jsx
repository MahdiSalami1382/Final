export default function MovieCard({ title, rating, image }) {
  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-282 h-480 object-cover" />
      <div className="absolute top-2 left-2 bg-black/70  px-2 py-1 rounded-lg text-xs text-yellow-400 font-bold">
        ⭐ {rating}
      </div>
      <div className="p-3 text-white text-sm font-medium">{title}</div>
    </div>
  );
}
