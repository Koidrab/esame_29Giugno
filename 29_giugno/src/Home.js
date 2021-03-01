import React, {useContext, useState} from "react";
import {StateContext} from "./App";
import {Link} from "react-router-dom";
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import {addCategoria, removeCategoria, removeSpesa} from "./Actions";
import cestino from './cestino.png'


export default function Home() {
    const [state, dispatch] = useContext(StateContext);

    const [text, setText] = useState('');

    return <div className='App'>
        <h1>Le mie spese</h1>
        <Container style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
            <Row id='listaCategorie' style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                {state.categorie.map(c => {
                    return  <Row style={{marginTop: '20px'}}>
                        <Col style={{textAlign: 'center'}}>
                            <Link class='link' to={`/${c.nomeCategoria}`}>{c.nomeCategoria}</Link>
                        </Col>
                        <Col style={{display: 'flex', justifyContent: 'center'}} xs='auto'>
                            <img src={cestino} style={{width: '24px', height: '24px'}} onClick={() => {
                                state.purchases.filter(p => p.idCat === c.id).map(p => dispatch(removeSpesa(p.id)));
                                dispatch(removeCategoria(c.id))
                            }}/>
                        </Col>
                    </Row>

                })}
            </Row>
            <Row id='form&button' style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <Col xs='auto'>
                    <Form.Control type='text' placeholder='Aggiungi categoria' onChange={t => setText(t.target.value)}/>
                </Col>
                <Col xs='auto'>
                    <Button onClick={() => {
                        let flag = false;

                        state.categorie.map(c => {
                            if (c.nomeCategoria.toLowerCase() === text.toLowerCase())
                                flag = true
                        })

                        if (text === '') alert('Stringa vuota!')
                        else if (flag) alert('Nome categoria già presente!')
                        else {
                            dispatch(addCategoria(text))
                            setText('')
                        }
                    }
                    }>+</Button>
                </Col>
            </Row>
        </Container>
    </div>
}
