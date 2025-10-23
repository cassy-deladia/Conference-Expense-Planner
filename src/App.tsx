import { useState } from 'react';
import Home from './components/Home.tsx'

function App() {
  const [isHome, setIsHome] = useState(true);

  const handleIsHomeChange = () => {
    setIsHome(e => !e);
  }

  const handleQuantityOnChange = (setter: React.Dispatch<React.SetStateAction<any[]>>) => {
    return (index: number, value: number) => {
      setter(prev => {
        const newItem = [...prev]
        newItem[index].quantity = value;
        return newItem;
      });
    }
  }

  return (
    <div className="relative min-h-screen bg-[#242424]">

      <div className="relative z-10">
        {isHome && <Home onClick={handleIsHomeChange} />}

      </div>
    </div>
  )
}

export default App
