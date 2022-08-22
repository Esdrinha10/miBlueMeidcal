import MaterialReactTable from 'material-react-table';


import React, {useEffect, useState, useMemo} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'


const ShowTRegistrosEntrada = () => {
    const [ registrosEntradas, setRegistrosEntradas] = useState([])
    useEffect (()=>{
        getAllRegistrosEntradas()
    }, [])

    const getAllRegistrosEntradas = async() => {
        const response = await axios.get(`${endpoint}/registrosEntradas`)
        setRegistrosEntradas(response.data)
    }

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'Id',
              },
          {
            accessorKey: 'placa', //access nested data with dot notation
            header: 'Placa',
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
            accessorKey: 'entrada', //normal accessorKey
            header: 'Entradas',
          },
          {
           
            id: 'accciones', //id is still required when using accessorFn instead of accessorKey
            header: 'Acciones',
            size: 250,
            Cell: ({ cell, row }) => {
                console.log(row, 'row')
                console.log(cell, 'cell')
                return <Link to={`/editRegistroSalida/${row.original.id}`} className='btn btn-warning'>Registrar Salida</Link>
            },
          },
        ],
        [],
      );

  return (
    
    <div className='row'>
       
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>      
        <h4>Registros Entradas y Salidas</h4>
            <div className='card'>
                <div className='card-header' style={{textAlign: 'left'}}>
                    <Link to="/createRegistroEntrada" className='btn btn-success'>Registrar Entrada</Link> 
                       
                   
                </div >
                <div className='card-body'>
                <MaterialReactTable columns={columns} data={registrosEntradas} />
                </div>
                
            </div>
            </div>
            <div className='col-lg-2'></div>

    </div>

  )
}

export default ShowTRegistrosEntrada