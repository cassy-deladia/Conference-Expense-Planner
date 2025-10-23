import type { MealItem } from "./Meals";

type MealListingProps = {
  meal: MealItem;
  index: number;
  onChangeMealSelected: (idx: number) => void;
};

export default function MealListing({ meal, index, onChangeMealSelected }: MealListingProps) {
  
  function handleClick() {
    onChangeMealSelected(index);
  }

  return (
    <div
      onClick={() => handleClick()}
      className={`flex items-center gap-4 px-4 py-3 min-w-40 rounded-lg cursor-pointer border transition-all 
        ${meal.selected
          ? "bg-white text-black border-white"
          : "bg-black text-white border-gray-600 hover:border-white/60"
        }`}
    >

      <input
        id={`check${index}`}
        type="checkbox"
        checked={meal.selected}
        onChange={(e) => e.stopPropagation()}
        className="w-4 h-4 accent-white cursor-pointer"
      />

      <div>
        <p className="font-semibold">{meal.name}</p>
        <p className="text-sm opacity-80">${meal.price}</p>
      </div>

    </div>
  );
}
