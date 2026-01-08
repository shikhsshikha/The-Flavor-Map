export default function Menu({ region, addDish }) {
  return ( 
    <div className="bg-white rounded-xl shadow p-4">
      <h1 className="font-semibold mb-14 text-center">MENU</h1>

      {region.dishes.map(dish => (
        <div key={dish.id} className="flex justify-between mb-6">
          <span>{dish.name} ₹{dish.price}</span>
          <button 
            onClick={() => addDish(dish)}
            className="px-5 py-1 bg-teal-700 text-white rounded hover:bg-teal-950"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
