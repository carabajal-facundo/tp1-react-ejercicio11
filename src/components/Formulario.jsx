import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import ListadoNoticias from './ListadoNoticias';

const Formulario = () => {

    const [noticias,setNoticias] = useState([]);

    const consultaAPI = async ()=>{
        const consulta = await fetch('https://newsdata.io/api/1/news?apikey=pub_24075474f026b0a805d5d0ba3a266e07cc5e1&language=es');
        console.log(consulta);
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        consultaAPI();
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='d-flex my-4'>
                <Form.Label >Buscar por una categoria</Form.Label>
                <Form.Select >
                    <option>Seleccione una opcion</option>
                    <option value="ciencia">Ciencia</option>
                    <option value="deporte">Deporte</option>
                    <option value="economia">Economia</option>
                    <option value="politica">Politica</option>
                </Form.Select>
                <Button variant='success' type='submit'>Filtrar</Button>
            </Form.Group>
        </Form>
        <ListadoNoticias className="row"/>
        </>
    );
};

export default Formulario;