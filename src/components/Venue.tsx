
import Heading from "./Heading";
import ItemCard from "./ItemCard";

export interface VenueItem {
  name: string;
  capacity: number;
  price: number;
  quantity: number;
  image: string;
}

type VenueProps = {
  data: VenueItem[];
  quantityOnChange: (index: number, value: number) => void;
};

export default function Venue({ data, quantityOnChange }: VenueProps) {
  const total = data.reduce((sum, venue) => sum + venue.price * venue.quantity, 0);

  return (
    <section className="pt-6">
      <Heading>Venue</Heading>

      <div className="flex justify-center">
        <div className="flex flex-wrap gap-4 pt-6 w-[66rem]">
          {data.map((venue, index) => (
            <ItemCard
              key={index}
              name={venue.name}
              price={venue.price}
              capacity={venue.capacity}
              quantity={venue.quantity}
              image={venue.image}
              quantityOnChange={quantityOnChange}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <p className="p-4 px-8 rounded-full text-lg m-8 bg-gray-100 text-gray-900 font-semibold border border-gray-300 shadow-sm">
          Total Cost: ${total}
        </p>
      </div>
    </section>
  );
}
