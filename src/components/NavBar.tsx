
type NavBarProps = {
  onClick: () => void;
  toVenue: () => void;
  toAddons: () => void;
  toMeals: () => void;
  toSummary: () => void;
}

export default function NavBar({
  onClick,
  toVenue,
  toAddons,
  toMeals,
  toSummary,
}: NavBarProps) {
  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 px-8 py-4 shadow-sm">
      {/* Brand */}
      <button
        className="font-bold text-2xl text-gray-900 hover:text-gray-700 transition-colors"
        onClick={onClick}
      >
        Aurora Events
      </button>

      {/* Navigation Links */}
      <div className="flex gap-4">
        <button
          className="text-gray-700 hover:text-black font-medium px-4 py-2 rounded-lg transition-colors"
          onClick={toVenue}
        >
          Venue
        </button>
        <button
          className="text-gray-700 hover:text-black font-medium px-4 py-2 rounded-lg transition-colors"
          onClick={toAddons}
        >
          Add-ons
        </button>
        <button
          className="text-gray-700 hover:text-black font-medium px-4 py-2 rounded-lg transition-colors"
          onClick={toMeals}
        >
          Meals
        </button>
        <button
          className="bg-black text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-800 transition-colors"
          onClick={toSummary}
        >
          Show Details
        </button>
      </div>
    </nav>
  )
}
