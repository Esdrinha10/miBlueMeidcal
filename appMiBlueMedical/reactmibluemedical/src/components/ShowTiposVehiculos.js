

import MaterialReactTable from 'material-react-table';


import React, {useEffect, useState, useMemo} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

const endpoint = 'http://localhost:8000/api'


const ShowTiposVehiculos = () => {
    const [ tiposVehiculos, setTiposVehoculos] = useState([])
    useEffect (()=>{
        getAllTiposVehiculos()
    }, [])

    const getAllTiposVehiculos = async() => {
        const response = await axios.get(`${endpoint}/tiposVehiculos`)
        setTiposVehoculos(response.data)
    }
/*const deleteAllTiposVehiculos = async(id) => {
        await axios.delete(`${endpoint}/tipoVehiculo/${id}`)
        getAllTiposVehiculos()
    }*/

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'Id',
              },
          {
            accessorKey: 'descripcion', //access nested data with dot notation
            header: 'Descripción',
          },
          
          {
            accessorKey: 'tarifaMin', //normal accessorKey
            header: 'Tarifa por Minutos',
          },
          {
           
            id: 'accciones', //id is still required when using accessorFn instead of accessorKey
            header: 'Acciones',
            size: 250,
            Cell: ({ cell, row }) => {
                console.log(row, 'row')
                console.log(cell, 'cell')
                return <Link to={`edit/${row.original.id}`} className='btn btn-warning'>Editar</Link>
            },
          },
        ],
        [],
      );

  return (
    
    
    <div className='row'>
       
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>      
        <h4>Tipos de Vehículos</h4>
            <div className='card'>
                <div className='card-header' style={{textAlign: 'left'}}>
                    <Link to="/create" className='btn btn-success'>Nuevo</Link> 
                   
                </div >
                <div className='card-body'>
                    <MaterialReactTable columns={columns} data={tiposVehiculos} />
                </div>
                
            </div>
            </div>
            <div className='col-lg-2'></div>

    </div>

  )
}

export default ShowTiposVehiculos