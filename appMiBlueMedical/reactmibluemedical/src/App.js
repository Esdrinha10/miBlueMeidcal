
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


import ShowTiposVehiculos  from './components/ShowTiposVehiculos';
import { CreateTipoVehiculo } from './components/CreateTipoVehiculo';
import { EditTipoVehiculo } from './components/EditTipoVehiculo';
import { Inicio } from './components/Inicio';

import  ShowAltaOficial from './components/ShowAltaOficial';
import  EditAltaOficial from './components/EditAltaOficial';

import  ShowRegistrosEntradas from './components/ShowRegistrosEntradas';
import  EditRegistroSalida from './components/EditRegistroSalida';

import  ShowAltaResidente from './components/ShowAltaResidente';
import  EditAltaResidente from './components/EditAltaResidente';
import  {CreateRegistroEntrada} from './components/CreateRegistroEntrada';

import  PagosResidentes from './components/PagosResidentes';


import  NewComienzaMes from './components/NewComienzaMes';


function App() {
  return (
   <div >
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowTiposVehiculos/>}/>
          <Route path='/create' element={<CreateTipoVehiculo/>}/>
          <Route path='/edit/:id' element={<EditTipoVehiculo/>} />
          <Route path='/Inicio' element={<Inicio/>} />
          <Route path='/altaOficial' element={<ShowAltaOficial/>} />
          <Route path='/AltaOficial/:id' element={<EditAltaOficial/>} />

          <Route path='/registrosEntradas' element={<ShowRegistrosEntradas/>} />
          <Route path='/editRegistroSalida/:id' element={<EditRegistroSalida/>} />
          <Route path='/createRegistroEntrada' element={<CreateRegistroEntrada/>} />

          <Route path='/altaResidente' element={<ShowAltaResidente/>} />
          <Route path='/altaResidente/:id' element={<EditAltaResidente/>} />

          <Route path='/pagosResidente' element={<PagosResidentes/>} />
          <Route path='/comienzaMes' element={<NewComienzaMes/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
