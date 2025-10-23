import { useState } from 'react';
import Home from './components/Home.tsx'
import NavBar from './components/NavBar.tsx';
import Venue, { type VenueItem } from './components/Venue.tsx';

import mealItems from './data/mealItems.ts'
import venueItems from './data/venueItems.ts'
import type { AddonItem } from './components/Addons.tsx';
import Addons from './components/Addons.tsx';
import addonItems from './data/addonItems.ts'
// import Summary from './components/Summary.tsx';

function App() {
  // const [meals, setMeals] = useState<MealItem[]>(mealItems);
  const [venues, setVenues] = useState<VenueItem[]>(venueItems);
  const [addons, setAddons] = useState<AddonItem[]>(addonItems);

  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [isHome, setIsHome] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [route, setRoute] = useState<'venue' | 'addons' | 'meals'>('venue');

  const toggleSummary = () => {
    setShowSummary(e => !e);
  }

  // const handleMealChange = (index: number) => {
  //   setMeals(prevmeals => {
  //     const newmeals = [...prevmeals];
  //     newmeals[index].selected = !newmeals[index].selected;
  //     return newmeals;
  //   })
  // }

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
    <div className="relative min-h-screen bg-[#fff]">

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

            {route === 'venue' && (
              <Venue
                data={venues}
                quantityOnChange={handleQuantityOnChange(setVenues)}
              />
            )}

            {route === 'addons' && (
              <Addons
                data={addons}
                quantityOnChange={handleQuantityOnChange(setAddons)}
              />
            )}


          </div>
        )}

      </div>
    </div>
  )
}

export default App
