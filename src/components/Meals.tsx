
import Heading from "./Heading";
import MealListing from "./MealListing";

export interface MealItem {
  name: string;
  price: number;
  selected: boolean;
}

interface MealsProps {
  data: MealItem[];
  numberOfPeople: number;
  onChangeMealSelected: (index: number) => void;
  onChangeNumberOfPeople: (value: number) => void;
}

export default function Meals({
  data,
  numberOfPeople,
  onChangeMealSelected,
  onChangeNumberOfPeople,
}: MealsProps) {

  const total = data
    .filter((meal) => meal.selected)
    .reduce((sum, meal) => sum + meal.price * numberOfPeople, 0);

  return (
    <section className="pt-6 text-white">
      <Heading>Meals Selection</Heading>

      <div className="flex flex-col items-center gap-10 mt-8">
        {/* Number of people input */}
        <div className="flex items-center gap-4">
          <label htmlFor="nop" className="font-semibold text-black">
            Number of People
          </label>

          <input
            type="number"
            id="nop"
            min={0}
            className="w-28 px-4 py-2 bg-black border border-gray-500 rounded-lg text-center font-medium focus:outline-none focus:ring-1 focus:ring-white"
            value={numberOfPeople}
            onChange={(e) => onChangeNumberOfPeople(Number(e.target.value))}
          />
          
        </div>

        {/* Meal listings */}
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl">
          {data.map((meal, idx) => (
            <MealListing
              key={idx}
              meal={meal}
              index={idx}
              onChangeMealSelected={onChangeMealSelected}
            />
          ))}
        </div>

        {/* Total cost */}
        <div className="mt-4">
          <p className="px-8 py-3 rounded-full text-lg font-semibold bg-white/10 border border-white/20 backdrop-blur-sm text-black">
            Total Cost: <span className="font-bold">${total.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
