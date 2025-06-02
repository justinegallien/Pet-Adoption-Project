import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Modal } from "react-bootstrap";

export default function Animals({ show, onHide, form, onChange, onSave }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add A New Animal.</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={form.name} onChange={onChange} />
            </Form.Group>
            <Form.Group controlId="formSpecies">
              <Form.Label>Species</Form.Label>
              <Form.Control
                name="species"
                value={form.species}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control name="age" value={form.age} onChange={onChange} />
            </Form.Group>
            <Form.Group controlId="formImageURL">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="imageURL"
                value={form.imageURL}
                onChange={onChange}
                placeholder="optional link"
              />
            </Form.Group>
            <Form.Group controlId="formKidSafe">
              <Form.Check
                type="checkbox"
                label="Safe For Kids"
                name="safeForKids"
                checked={form.safeForKids}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formVaccinated">
              <Form.Check
                type="checkbox"
                label="Vaccinated"
                name="vaccinated"
                checked={form.vaccinated}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onHide} variant="secondary">Cancel</Button>
          <Button onClick={onSave} variant="primary">Save Animal</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
