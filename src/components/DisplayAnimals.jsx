import React from "react";
import { Button, Image, ListGroup } from "react-bootstrap";

export default function DisplayAnimals({ animals, title, onDelete, onAdoptToggle }) {
  if (animals.length == 0) return <h2>All Animals Have Found A Home!</h2>;
  return (
    <div>
      <h2>{title}</h2>
      <ListGroup>
        {animals.map((animal) => (
          <ListGroup.Item key={animal.id}>
            <Image
              src={animal.imageURL}
              alt={animal.name}
              rounded
              fluid
              width={100}
            />
            <div>
              <strong>{animal.name}</strong> - {animal.species}, Age:{" "}
              {animal.age}{" "}
            </div>
            <div>
              {animal.safeForKids && "Safe For Kids"}
              {!animal.safeForKids && "Not Safe For Kids"}
            </div>

            <div>
              {animal.vaccinated && "Vaccinated"}
              {!animal.vaccinated && "Not Vaccinated"}
            </div>
            <Button size="sm" onClick={()=> onAdoptToggle(animal)}>
              {animal.adopted && "Make Available"}
              {!animal.adopted && "Adopt"}
          
            </Button>
            <Button
              onClick={() => onDelete(animal.id)}
              variant="danger"
              size="sm"
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
