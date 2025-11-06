import React, { useState } from 'react';
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';
import { addItem } from '../Utils/utils'; 

function ModalFormularioAsistente({ show, handleClose, onAsistenteAdded }) {
    
    const [asistente, setAsistente] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        email: '',
        telefono: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAsistente(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        

        const nuevoAsistente = { ...asistente };

        try {
            addItem('asistentes', nuevoAsistente);
            
            setAsistente({ nombre: '', apellido: '', dni: '', email: '', telefono: '' });
            handleClose(); 
            
            if (onAsistenteAdded) {
                onAsistenteAdded(); 
            }

        } catch (error) {
            alert("Error al registrar el asistente. Revisa la consola.");
            console.error(error);
        }
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            aria-labelledby="modal-registro-asistente-title"
        >
            <Modal.Header closeButton className="bg-success text-white">
                <Modal.Title id="modal-registro-asistente-title">
                    Registrar Nuevo Asistente
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formNombreAsistente">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ej: Juan" 
                                name="nombre"
                                value={asistente.nombre}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formApellidoAsistente">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ej: Pérez" 
                                name="apellido"
                                value={asistente.apellido}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formDNI">
                            <Form.Label>DNI</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ej: 30123456" 
                                name="dni"
                                value={asistente.dni}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formTelefono">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control 
                                type="tel" 
                                placeholder="Ej: 3815123456" 
                                name="telefono"
                                value={asistente.telefono}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Ej: juan.perez@email.com" 
                            name="email"
                            value={asistente.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="success" type="submit" className="w-100 mt-3">
                        REGISTRAR ASISTENTE
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalFormularioAsistente;