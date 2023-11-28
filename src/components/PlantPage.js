import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(setPlants);
  }, []);

  const displayPlantName = plants.filter(plant =>
    plant.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={displayPlantName} />
    </main>
  );
}

export default PlantPage;
