import React, {useContext, useState} from "react";
import {StateContext} from './App';
import Reducer from "./Reducer";
import Purchase from "./Purchase";
import {Row, Col, Button, Alert} from "react-bootstrap";
import {Link} from "react-router-dom";
import {addSpesa} from "./Actions";
import moment from "moment";
import DatePicker from 'react-date-picker';


export default function Category({categoria}) {
    const [state, dispatch] = useContext(StateContext);
    const [value, onChange] = useState({date: '', name: '', price: ''});
    const totale = state.purchases.filter(p => p.idCat === categoria.id).map(p => p.price).reduce((a, b) => {
            return a + b
        }, 0)
    return <div className='App'>
        <h2>
            {categoria.nomeCategoria}
        </h2>
        <Purchase categoria={categoria}/>
        <div style={{marginTop: '15px'}}>
            {totale===0 ? <span>Nessuna spesa per questa categoria</span> : <span>Totale spese per la categoria <span style={{fontWeight: 'bold'}}>{categoria.nomeCategoria}</span>: {totale}€</span>}
        </div>
        <Row style={{marginTop: '15px'}}>
            <Col>
                <input id='nome' placeholder='Nome spesa' onChange={e => onChange({...value, name: e.target.value})} value={value.name}/>
            </Col>
            <Col>
                <input id='data' type='date' placeholder='Data' onChange={e => onChange({...value, date: e.target.value})} value={value.date}/>
            </Col>
            <Col>
                <input id='prezzo' placeholder='Prezzo spesa' onChange={e => onChange({...value, price: e.target.value})} value={value.price}/>
            </Col>
        </Row>
        <Button style={{marginTop: '20px'}} onClick={e => {
            if (moment(value.date).format() <= moment().format() && value.name !== '' && value.price > 0)
                dispatch(addSpesa(categoria.id, value.name, value.date, Number(value.price)))
            else if (moment(value.date).format() > moment().format())
                alert(" 'Strade?! Dove stiamo andando non c'è bisogno di strade!'")
            else if (value.name === '')
                alert('Inserisci un nome valido per la spesa.')
            else if (value.price < 0)
                alert("Prezzo non valido. Il prezzo non può essere negativo o nullo.")
            onChange({date: '', name: '', price: ''})
        }}>Aggiungi spesa</Button>
        <Link to={'/'}>Torna all'elenco</Link>
    </div>
}