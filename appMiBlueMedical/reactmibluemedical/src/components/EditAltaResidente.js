import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/altaResidente/'


export const EditAltaResidente = () => {
    const [placa, setPlaca] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            placa: placa
        })
        navigate('/altaResidente')
    }
    
    useEffect( () =>{
        const getTAltaResidenteById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setPlaca(response.data.placa)
        }
        getTAltaResidenteById()
    }, [] )

  return (
    <div>
    <div className='row'>
      
      <div className='col-lg-2'></div>
      <div className='col-lg-8'>      
     
          <div className='card'>
              <div className='card-header' style={{textAlign: 'left'}}>
              <h4>Alta Vehículo Residente</h4>
                     
                 
              </div >
              <div className='card-body'>
    <form onSubmit={update}>
    <div className='row'>
                <div className="col-md-6" style={{textAlign: 'left'}}>
                <label className='form-label'>Placa</label>
            <input 
                value={placa}
                onChange={ (e)=> setPlaca(e.target.value)}
                type='text'
                className='form-control'
            />
                </div>
                

            </div>
      
            <br></br>
            <div style={{textAlign: 'left'}}>
            <button type='submit' className='btn btn-primary'>Dar de Alta</button> {tab}
                <Link to="/altaResidente" className=''>Cancelar</Link> 
        
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

export default EditAltaResidente