
type ItemCardProps = {
  index: number;
  name: string;
  capacity?: number;
  price: number;
  image?: string;
  quantity: number;
  quantityOnChange: (index: number, newQuantity: number) => void;
};

export default function ItemCard({
  index,
  name,
  capacity,
  price,
  image,
  quantity,
  quantityOnChange,
}: ItemCardProps) {
  const handleIncrement = () => quantityOnChange(index, quantity + 1);
  const handleDecrement = () => quantityOnChange(index, quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="w-64 bg-white rounded-2xl shadow-md border border-gray-200 text-gray-900 font-sans text-center flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image || '/public/icons/default-item.png'}
        alt={name}
        className="w-full h-40 object-cover bg-gray-100"
      />
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        {capacity !== undefined && (
          <p className="text-sm text-gray-500">Capacity: {capacity}</p>
        )}
        <p className="text-lg font-bold text-gray-800">${price}</p>

        <div className="flex items-center justify-center gap-4 mt-3">
          <button
            className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-800 font-bold rounded-lg px-3 py-1 transition-colors"
            onClick={handleDecrement}
            aria-label="Decrease quantity"
          >
            <img
              src="/public/icons/minus-button.svg"
              alt="remove quantity"
              className="w-4 h-4"
            />
          </button>
          <span className="text-lg font-semibold min-w-[24px]">{quantity}</span>
          <button
            className="bg-black hover:bg-gray-800 active:bg-gray-700 text-white font-bold rounded-lg px-3 py-1 transition-colors"
            onClick={handleIncrement}
            aria-label="Increase quantity"
          >
            <img
              src="/public/icons/plus-button.svg"
              alt="add quantity"
              className="w-4 h-4 invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
