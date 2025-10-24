import React, { useState } from 'react';
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';
import { addItem } from '../Utils/utils'; 

function ModalFormularioArtista({ show, handleClose, onArtistaAdded }) {
    
    const [artista, setArtista] = useState({
        nombre: '',
        apellido: '',
        nombreArt: '',
        dni: '',
        fechaNac: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArtista(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevoArtista = { ...artista };

        try {
            addItem('artistas', nuevoArtista);
            setArtista({ nombre: '', apellido: '', nombreArt: '', dni: '', fechaNac: '' });
            handleClose(); 
            
            if (onArtistaAdded) {
                onArtistaAdded(); 
            }

        } catch (error) {
            alert("Error al registrar el Artista. Revisa la consola.");
            console.error(error);
        }
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            aria-labelledby="modal-registro-artista-title"
        >
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title id="modal-registro-artista-title">
                    Registrar Nuevo Artista
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formNombreArt">
                            <Form.Label>Nombre Artístico</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ej: Shakira" 
                                name="nombreArt"
                                value={artista.nombreArt}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formDNI">
                            <Form.Label>DNI</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ej: 30123456" 
                                name="dni"
                                value={artista.dni}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ej: Isabel" 
                                name="nombre"
                                value={artista.nombre}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ej: Mebarak" 
                                name="apellido"
                                value={artista.apellido}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formFechaNac">
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control 
                            type="date"
                            name="fechaNac"
                            value={artista.fechaNac}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        REGISTRAR ARTISTA
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalFormularioArtista;
