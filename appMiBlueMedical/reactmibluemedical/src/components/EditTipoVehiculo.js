import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/tipoVehiculo/'


export const EditTipoVehiculo = () => {
    const [descripcion, setDescripcion] = useState('')
    const [tarifaMin, setTarifaMin] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            descripcion: descripcion,
            tarifaMin: tarifaMin
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getTipoVehiculoById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescripcion(response.data.descripcion)
            setTarifaMin(response.data.tarifaMin)
        }
        getTipoVehiculoById()
    }, [] )

  return (
    <div>
    <div className='row'>
      
      <div className='col-lg-2'></div>
      <div className='col-lg-8'>      
     
          <div className='card'>
              <div className='card-header' style={{textAlign: 'left'}}>
              <h4>Editar Tipo de Vehículo</h4>
                     
                 
              </div >
              <div className='card-body'>
    <form onSubmit={update}>
    <div className='row'>
                <div className="col-md-6" style={{textAlign: 'left'}}>
                <label className='form-label'>Descripción</label>
            <input 
                value={descripcion}
                onChange={ (e)=> setDescripcion(e.target.value)}
                type='text'
                className='form-control'
            />
                </div>
                <div className="col-md-6" style={{textAlign: 'left'}}>
                <label className='form-label'>Tarifa por Minuto</label>
            <input 
                value={tarifaMin}
                onChange={ (e)=> setTarifaMin(e.target.value)}
                type='number'
                className='form-control'
            />
                </div>

            </div>
      
            <br></br>
            <div style={{textAlign: 'left'}}>
            <button type='submit' className='btn btn-primary'>Editar</button> {tab}
                <Link to="/" className=''>Cancelar</Link> 
        
        </div>
    </form>
    </div>
                
                </div>
                </div>
                <div className='col-lg-2'></div>
    
        </div>
    </div>
  )
}

export default EditTipoVehiculo