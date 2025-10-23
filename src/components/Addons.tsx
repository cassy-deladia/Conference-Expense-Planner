
import Heading from "./Heading";
import ItemCard from "./ItemCard";

export interface AddonItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

type AddonProps = {
  data: AddonItem[];
  quantityOnChange: (index: number, value: number) => void;
}

export default function Addons({ data, quantityOnChange }: AddonProps) {
  const total = data.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="pt-6 text-white">
      <Heading>Add-ons</Heading>

      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {data.map((item, index) => (
            <ItemCard
              key={index}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
              quantityOnChange={quantityOnChange}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <p className="px-8 py-3 rounded-full text-lg font-semibold bg-white/10 border border-white/20 backdrop-blur-sm">
          Total Cost: <span className="font-bold">${total.toFixed(2)}</span>
        </p>
      </div>
    </section>
  );
}
