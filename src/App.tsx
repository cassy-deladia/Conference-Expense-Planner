import { useState } from 'react';
import Home from './components/Home.tsx'
import NavBar from './components/NavBar.tsx';

function App() {
  const [isHome, setIsHome] = useState(true);
  const [route, setRoute] = useState<'venue' | 'addons' | 'meals'>('venue');

  const handleIsHomeChange = () => {
    setIsHome(e => !e);
  }

  return (
    <div className="relative min-h-screen bg-[#242424]">

      <div className="relative z-10">
        {isHome && <Home onClick={handleIsHomeChange} />}

        {!isHome && (
          <div className="min-h-screen">
            <NavBar
              onClick={handleIsHomeChange}
              toAddons={() => {
                setRoute('addons')
              }}
              toVenue={() => {
                setRoute('venue')
              }}
              toMeals={() => {
                setRoute('meals')
              }}
              toSummary={() => () => { }}
            />
          </div>
        )}

      </div>
    </div>
  )
}

export default App
