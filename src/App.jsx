import { useState } from 'react'
import RestaurantApp from "./components/RestaurantApp/RestaurantApp";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RestaurantApp />;
    </>
  )
}

export default App
