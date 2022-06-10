import React from "react";
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from "./pages/Repositories";
import Home from "./pages/Home";

export default function Routes() {
  return ( //Fazendo codigo para rotas para mudar de pagina no react
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='repositories/' element={<Repositories/>}/>
      </Switch>
    </BrowserRouter>
  )
}