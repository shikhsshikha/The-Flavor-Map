import { useState, useMemo } from "react";
import { menuData } from "../../data/menuData";
import RegionSelector from "../RegionSelector/RegionSelector";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import Bill from "../Bill/Bill";

const RestaurantApp = () => {
  const [region, setRegion] = useState(null);
  const [items, setItems] = useState([]);

  const selectRegion = (key) => {
  if (!region) {
    setRegion(key);
    setItems([
      {
        ...menuData[key].compulsory,
        compulsory: true,
        quantity: 1
      }
    ]);
    return;
  }

  if (region === key) return;

  const confirmChange = window.confirm(
    "Changing the region will clear your current selection. Do you want to continue?"
  );

  if (!confirmChange) return;

  setRegion(key);
  setItems([
    {
      ...menuData[key].compulsory,
      compulsory: true,
      quantity: 1
    }
  ]);
};

  const addDish = (dish) => {
    const existing = items.find(i => i.id === dish.id);

    if (existing) {
      setItems(
        items.map(i =>
          i.id === dish.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setItems([
        ...items,
        {
          ...dish,
          compulsory: false,
          quantity: 1
        }
      ]);
    }
  };

  const removeDish = (id) => {
    const item = items.find(i => i.id === id);
    if (!item) return;

    if (item.compulsory && item.quantity === 1) return;

    if (item.quantity > 1) {
      setItems(
        items.map(i =>
          i.id === id
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
      );
    } else {
      setItems(items.filter(i => i.id !== id));
    }
  };

  const total = useMemo(() => (
    items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  ), [items]);

  return (
    <div className="min-h-screen bg-gray-100 p-20">
      <h1 className="text-3xl font-bold text-center mb-16">THE FLAVOR HUB</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <RegionSelector menuData={menuData} selectRegion={selectRegion} />

        {region && (
          <>
            <Menu region={menuData[region]} addDish={addDish} />
            <Cart items={items} addDish={addDish} removeDish={removeDish} />
            <Bill total={total} />
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantApp;
