import { useEffect, useState } from "react";
import "./App.css";
import Animals from "./components/Animals";
import { Button } from "react-bootstrap";
import { createAnimal, deleteAnimal, scanAnimals, toggleAdopted } from "./dynamo";
import DisplayAnimals from "./components/DisplayAnimals";

function App() {
  const [form, setform] = useState({
    name: "",
    species: "",
    age: "",
    safeForKids: false,
    vaccinated: false,
    imageURL: "",
  });

  const [animals, setAnimals] = useState([]);
  const [show, setshow] = useState(false);

  useEffect(() => {
    scanAnimals().then(setAnimals);
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setform((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }
  async function handleDelete(id) {
    await deleteAnimal(id);
    setAnimals((prev) => prev.filter (animal => animal.id !== id))
  }

async function handleToggle(animal) {
  await toggleAdopted(animal.id, !animal.adopted);
  setAnimals ((prev) => prev.map((a) => (a.id === animal.id ? { ...a, adopted: !a.adopted } : a)),
  );
}

  async function addAnimal() {
    if (!form.name || !form.species || !form.age) return;
    const animal = {
      id: crypto.randomUUID(),
      name: form.name,
      species: form.species,
      age: form.age,
      safeForKids: false,
      vaccinated: false,
      adopted: false,
      imageURL:
        form.imageURL ||
        "https://unsplash.com/photos/yellow-labrador-retriever-biting-yellow-tulip-flower-Sg3XwuEpybU",
    };

    await createAnimal(animal);
    setAnimals((prev) => [...prev, animal]);
    setshow(false);
  }

  return (
    <>
      <h1>A Pawsitive Match </h1>
      <Button variant="success" onClick={() => setshow(true)}>
        Add Animal
      </Button>

      <Animals
        show={show}
        onHide={() => setshow(false)}
        form={form}
        onChange={handleChange}
        onSave={addAnimal}
      />

      <DisplayAnimals
      onAdoptToggle={handleToggle}
        animals={animals}
        title="Ready To Adopt!"
        onDelete={handleDelete}
      />
    </>
  );
}
export default App;
