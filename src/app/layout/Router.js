import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import DataKaryawan from '../DataKaryawan';
import DataDiv from '../DataDiv';
import DataJabatan from '../DataJabatan';
import DataPekerjaan from '../DataPekerjaan';



const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/dataKaryawan' component={DataKaryawan}/>
    <Route path='/dataDivisi' component={DataDiv}/>
    <Route path='/dataJabatan' component={DataJabatan}/>
    <Route path='/dataPekerjaan' component={DataPekerjaan}/>
  </Switch>
)
export default Router