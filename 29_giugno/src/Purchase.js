import {StateContext} from "./App";
import React, {useContext} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {removeSpesa} from "./Actions";
import cestino from './cestino.png'
import moment from "moment";

export default function Purchase({categoria}) {
    const [state, dispatch] = useContext(StateContext)

    return <div>{state.purchases.filter(p => p.idCat === categoria.id).map(p => <Row
        style={{marginTop: '20px'}}>
        <Col style={{fontWeight: 'bold'}}>{p.tipoSpesa}</Col>
        <Col xs='auto'><span style={{color: 'grey'}}>Effettuata in data: </span>{` ${moment(p.date).format('MM/DD/YYYY')}`}</Col>
        <Col xs='auto'><span style={{color: 'grey'}}>Prezzo: </span>{` ${p.price}`}€</Col>
        <Col><img src={cestino} style={{width: '24px', height: '24px'}} onClick={() =>{dispatch(removeSpesa(p.id))}}/></Col>
    </Row>)}
    </div>
}

