export default function RegionSelector({ menuData, selectRegion }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold mb-4 text-center">SELECT REGION</h2>

      {Object.keys(menuData).map(key => (
        <button
          key={key}
          onClick={() => selectRegion(key)}
          className="w-full mb-2 py-2 rounded-lg bg-zinc-700 text-white hover:bg-zinc-900"
        >
          {key}
        </button>
      ))}
    </div>
  );
}
