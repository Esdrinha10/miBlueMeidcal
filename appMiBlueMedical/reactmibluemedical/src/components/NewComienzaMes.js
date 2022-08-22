
import React, {useEffect, useState, useMemo} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const NewComienzaMes = () => {const [ altaOficial, setAltaOficial] = useState([])
    useEffect (()=>{
        getAllAltaOficial()
    }, [])

    const getAllAltaOficial = async() => {
        const response = await axios.get(`${endpoint}/comienzaMes`)
        setAltaOficial(response.data)
    }
    

  return (
    
    <div className='row'>
       
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>      
        
            <div className='card'>
                <div className='card-header' style={{textAlign: 'left'}}>
                <h4>Comienza Mes</h4>
                </div >
                <div className='card-body'>
                    <h1>COMENZÓ EL MES CORRECTAMENTE</h1>
                    <Link to="/Inicio" className=''>SALIR</Link> 
                </div>
                
            </div>
            </div>
            <div className='col-lg-2'></div>

    </div>
  )
}

export default NewComienzaMes