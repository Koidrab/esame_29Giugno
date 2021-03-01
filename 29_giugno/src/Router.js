import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Home from "./Home";
import {BrowserRouter, Link} from "react-router-dom";
import React, {useContext} from "react";
import {StateContext} from "./App";
import Category from "./Category";
import {Col} from "react-bootstrap";

export default function Router() {
    const [state, dispatch] = useContext(StateContext);
    return <BrowserRouter>
        <Switch>
            {
                state.categorie.map(c => <Route exact path={`/${c.nomeCategoria}`}><Category categoria={c}/></Route>)
            }
            <Route exact path={'/'}><Home/></Route>
        </Switch>
    </BrowserRouter>
}