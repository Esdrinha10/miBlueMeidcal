import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/registroEntrada'

export const CreateRegistroEntrada = () => {
    const [placa, setPlaca] = useState('')
    const navigate = useNavigate()

    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {placa: placa})
        navigate('/registrosEntradas')
    }

  return (
    <div>
     <div className='row'>
       
       <div className='col-lg-2'></div>
       <div className='col-lg-8'>      
      
           <div className='card'>
               <div className='card-header' style={{textAlign: 'left'}}>
               <h4>Registrar Entrada</h4>
                      
                  
               </div >
               <div className='card-body'>
        <form onSubmit={store}>
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
            <button type='submit' className='btn btn-primary'>Guardar</button> {tab}
                <Link to="/registrosEntradas" className=''>Cancelar</Link> 
        
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
