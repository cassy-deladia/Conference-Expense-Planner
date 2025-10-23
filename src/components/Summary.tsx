
import type { VenueItem } from "./Venue";
import type { AddonItem } from "./Addons";
import type { MealItem } from "./Meals";

type SummaryProps = {
  venues: VenueItem[];
  addons: AddonItem[];
  meals: MealItem[];
  mealsNoOfPeople: number;
  toggle: () => void;
};

export default function Summary({
  venues,
  addons,
  meals,
  mealsNoOfPeople,
  toggle,
}: SummaryProps) {
  let grandTotal = 0;

  venues.forEach((v) => (grandTotal += v.quantity * v.price));
  addons.forEach((a) => (grandTotal += a.quantity * a.price));
  meals.forEach((m) => {
    if (m.selected) grandTotal += mealsNoOfPeople * m.price;
  });

  return (
    <div
      onClick={toggle}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 text-white backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black text-white w-[800px] max-h-[80vh] overflow-auto rounded-xl border border-white/20 shadow-xl p-8 flex flex-col items-center gap-6 transition-all"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-xl font-semibold tracking-wide">
            Total Cost for the Event
          </h1>
          <h2 className="text-5xl font-bold mt-2">${grandTotal}</h2>
        </div>

        {/* Table */}
        <div className="w-full overflow-auto rounded-lg border border-white/20">
          <table className="min-w-full text-sm">
            <thead className="bg-white/10 sticky top-0">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Name</th>
                <th className="px-4 py-2 text-right font-semibold">Unit Cost</th>
                <th className="px-4 py-2 text-right font-semibold">Quantity</th>
                <th className="px-4 py-2 text-right font-semibold">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {/* Venues */}
              {venues.map(
                (v, i) =>
                  v.quantity > 0 && (
                    <tr key={`venue-${i}`}>
                      <td className="px-4 py-2">{v.name}</td>
                      <td className="px-4 py-2 text-right">${v.price}</td>
                      <td className="px-4 py-2 text-right">{v.quantity}</td>
                      <td className="px-4 py-2 text-right">
                        ${v.price * v.quantity}
                      </td>
                    </tr>
                  )
              )}

              {/* Add-ons */}
              {addons.map(
                (a, i) =>
                  a.quantity > 0 && (
                    <tr key={`addon-${i}`}>
                      <td className="px-4 py-2">{a.name}</td>
                      <td className="px-4 py-2 text-right">${a.price}</td>
                      <td className="px-4 py-2 text-right">{a.quantity}</td>
                      <td className="px-4 py-2 text-right">
                        ${a.price * a.quantity}
                      </td>
                    </tr>
                  )
              )}

              {/* Meals */}
              {meals.map(
                (m, i) =>
                  m.selected &&
                  mealsNoOfPeople > 0 && (
                    <tr key={`meal-${i}`}>
                      <td className="px-4 py-2">{m.name}</td>
                      <td className="px-4 py-2 text-right">${m.price}</td>
                      <td className="px-4 py-2 text-right">
                        For {mealsNoOfPeople} people
                      </td>
                      <td className="px-4 py-2 text-right">
                        ${m.price * mealsNoOfPeople}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>

        {/* Close Button */}
        <button
          onClick={toggle}
          className="mt-6 px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
