import MaterialReactTable from 'material-react-table';


import React, {useEffect, useState, useMemo} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import jsPDF from 'jspdf'

const endpoint = 'http://localhost:8000/api'

const PagosResidente = () => {const [ altaOficial, setAltaOficial] = useState([])
    useEffect (()=>{
        getAllAltaOficial()
    }, [])

    const getAllAltaOficial = async() => {
        const response = await axios.get(`${endpoint}/pagoNoResidente/10`)
        setAltaOficial(response.data)
    }
    const generatePDFAll = () => {
        var doc = new jsPDF('p', 'pt');
        
        doc.text(20, 20, 'Núm. Placa         Tiempo Estacionamient(Min)')
        doc.addFont('helvetica', 'normal')
        doc.text(20, 60,  altaOficial.data + ' - ' + altaOficial.entrada)
        doc.text(20, 100, 'This is the thrid title.')      
        
        doc.save('pagoNoResidente.pdf')
  }

     
    

    const columns = useMemo(
        
        () => [
            
            {
                accessorKey: 'placa',
                header: 'Placa',
              },
          
          {
            accessorKey: 'estadiaMin', //normal accessorKey
            header: 'Minutos',
          },
          {
            accessorKey: 'totalPagar', //normal accessorKey
            header: 'Toltal a Pagar',
          },
          {
           
            id: 'accciones', //id is still required when using accessorFn instead of accessorKey
            header: 'Acciones',
            size: 250,
            Cell: ({ cell, row }) => {
                console.log(row, 'row')
                console.log(cell, 'cell')
                const generatePDF = () => {
                        var doc = new jsPDF('p', 'pt');

                doc.text(20, 20, '')
                doc.text(20, 20, 'Núm. Placa           Tiempo Estacionamient(Min)             Cantidad a Pagar')
                doc.addFont('helvetica', 'normal')
                doc.text(20, 60,  row.original.placa + '                            ' + row.original.estadiaMin  + '                                           ' + row.original.totalPagar)
                 
                
                doc.save('pagoNoResidente' + row.original.placa + '.pdf')
                }
                return   <button onClick={generatePDF} className='btn btn-warning'>Descargar PDF</button> 
                /* <Link to={`/AltaOficial/${row.original.placa}`} className='btn btn-warning'>Editar</Link>*/
            },
          },
        ],
        [],
      );

  return (
    
    <div className='row'>
       
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>      
        <h4>Pagos Residente</h4>
            <div className='card'>
                <div className='card-header' style={{textAlign: 'left'}}>
                <button onClick={generatePDFAll} type="primary">Descargar Todo</button> 
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

export default PagosResidente