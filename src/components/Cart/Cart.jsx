export default function Cart({ items, addDish, removeDish }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold mb-10 text-center">ITEMS</h2>

      {items.map(item => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-3"
        >
          <div>
            <p className="font-medium">
              {item.name}
              {item.compulsory && (
                <span className="text-sm text-red-800">
                  {" "} (Compulsory)
                </span>
              )}
            </p>

            <p className="text-sm text-gray-500">
              ₹{item.price} × {item.quantity}
            </p>
          </div>

          {!item.compulsory && (
            <div className="flex gap-2">
              <button
                onClick={() => removeDish(item.id)}
                className="px-2 bg-red-800 text-white rounded"
              >
                −  
              </button>

              <button
                onClick={() => addDish(item)}
                className="px-2 bg-teal-700 text-white rounded"
              >
                +
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
