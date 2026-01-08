export default function Bill({ total }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
      <div>
        <h2 className="font-semibold mb-20 text-center">BILL SUMMARY</h2>
        <p className="text-xl font-bold text-center">TOTAL : ₹{total}</p>
      </div>

      <button className="mt-4 py-3 rounded-lg bg-zinc-700 text-white hover:bg-zinc-950">
        CONFIRM ORDER
      </button>
    </div>
  );
}
