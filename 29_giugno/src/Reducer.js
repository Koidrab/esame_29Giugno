import {ADDCATEGORIA, ADDSPESA, REMOVECATEGORIA, REMOVESPESA} from "./Actions";
import {nanoid} from "nanoid";
import moment from 'moment';


export const InitialState = {
    categorie: [],
    purchases: []
}

export default function Reducer(state, action) {
    switch (action.type){

        case ADDCATEGORIA :
            return {...state, categorie: [...state.categorie, {nomeCategoria: action.nomeCategoria, id: nanoid()}]}

        case ADDSPESA :
            return {...state, purchases: [
                    ...state.purchases, {id: nanoid(), idCat: action.idCategoria, tipoSpesa: action.tipoSpesa, price: action.price, date: moment(action.dataSpesa).format('DD-MM-YYYY')}
                ]}

        case REMOVECATEGORIA :
            return {...state, categorie: state.categorie.filter(c => c.id!==action.id)}

        case REMOVESPESA :
            return {...state, purchases: state.purchases.filter(p => p.id!==action.id)}


    }
}