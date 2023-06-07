import React from 'react';
import { Card,Button } from 'react-bootstrap';

const Tarjeta = () => {
    return (
        <Card className='my-3 col-3 mx-4'>
            <Card.Img src=""/>
            <Card.Body>
                <Card.Title>Titulo de la noticia</Card.Title>
                <Card.Text>
                    Aqui va un texto no tan largo de la noticia
                </Card.Text>
                <Button variant="primary">Ver mas</Button>
            </Card.Body>
        </Card>
    );
};

export default Tarjeta;