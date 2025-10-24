import React, { useState } from 'react';
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';

import { addItem } from '../Utils/utils'; 


function ModalFormularioEvento({ show, handleClose, onEventAdded }) {
    const [evento, setEvento] = useState({
        nombre: '',
        fecha: '',
        lugar: '',
        cupo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvento(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const cupoNumerico = parseInt(evento.cupo, 10);

        if (isNaN(cupoNumerico) || cupoNumerico <= 0) {
            alert("El cupo debe ser un número positivo.");
            return;
        }

        const nuevoEvento = { 
            nombre: evento.nombre, 
            fecha: evento.fecha, 
            lugar: evento.lugar, 
            cupo: cupoNumerico, 
            artistas: [], 
            asistentes: [] 
        };

        try {
            addItem('eventos', nuevoEvento);
            

            setEvento({ nombre: '', fecha: '', lugar: '', cupo: '' });
            handleClose(); 
            if (onEventAdded) {
                onEventAdded(); 
            }

        } catch (error) {
            alert("Error al registrar el evento. Revisa la consola.");
            console.error(error);
        }
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            aria-labelledby="modal-registro-evento-title"
        >
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title id="modal-registro-evento-title">
                    Registrar Nuevo Evento
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Nombre del Evento</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ej: Festival de Jazz en la plaza" 
                            name="nombre"
                            value={evento.nombre}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFecha">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="fecha"
                                value={evento.fecha}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formCupo">
                            <Form.Label>Cupo Máximo</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="500" 
                                name="cupo"
                                value={evento.cupo}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </Form.Group>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="formLugar">
                        <Form.Label>Lugar</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ej: Centro Cultural" 
                            name="lugar"
                            value={evento.lugar}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="success" type="submit" className="w-100 mt-3">
                        REGISTRAR EVENTO
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalFormularioEvento; 