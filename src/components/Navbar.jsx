import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 text-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[url('../images/icon.jpg')] flex items-center justify-center">
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-10 text-gray-300">
        <li className="hover:text-white cursor-pointer">Movies</li>
        <li className="hover:text-white cursor-pointer">TV Shows</li>
        <li className="hover:text-white cursor-pointer">Suggest me →</li>
      </ul>

      <Menu className="md:hidden text-gray-300" />
    </nav>
  );
}
