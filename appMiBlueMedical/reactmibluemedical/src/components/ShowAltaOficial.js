import MaterialReactTable from 'material-react-table';


import React, {useEffect, useState, useMemo} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowAltaOficial = () => {const [ altaOficial, setAltaOficial] = useState([])
    useEffect (()=>{
        getAllAltaOficial()
    }, [])

    const getAllAltaOficial = async() => {
        const response = await axios.get(`${endpoint}/AltaOficial`)
        setAltaOficial(response.data)
    }
const alta = async(id) => {
        await axios.put(`${endpoint}/AltaOficial/${id}`)
        getAllAltaOficial()
    }

    const columns = useMemo(
        () => [
            {
                accessorKey: 'placa',
                header: 'Placa',
              },
          {
            accessorKey: 'id_tipo', //access nested data with dot notation
            header: 'id Tipo',
          },
          {
            accessorKey: 'tipo', //normal accessorKey
            header: 'Tipo de Vehículo',
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
                return <Link to={`/AltaOficial/${row.original.placa}`} className='btn btn-warning'>Dar de alta</Link>
            },
          },
        ],
        [],
      );

  return (
    
    <div className='row'>
       
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>      
        
            <div className='card'>
                <div className='card-header' style={{textAlign: 'left'}}>
                <h4>Dar de Alta Oficial</h4>
                </div >
                <div className='card-body'>
                <MaterialReactTable columns={columns} data={altaOficial} />
                </div>
                
            </div>
            </div>
            <div className='col-lg-2'></div>

    </div>
  )
}

export default ShowAltaOficial