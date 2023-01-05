import {useEffect} from 'react'

const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
    
    const handleEliminar = () => {
        console.log("Eliminando")
        const respuesta = confirm("¿Deseas eliminar este paciente?")

        if(respuesta){
            eliminarPaciente(paciente.id)
        }
    }
   
  return (
    <div className='m-4 bg-white shadow-md px-5 py-10 rounded-xl '>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
            <span className='font-normal normal-case'>{paciente.nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {""}
            <span className='font-normal normal-case'>{paciente.propietario}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""}
            <span className='font-normal normal-case'>{paciente.email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha: {""}
            <span className='font-normal normal-case'>{paciente.fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {""}
            <span className='font-normal normal-case'>{paciente.sintomas}</span>
        </p>
        <div className='flex justify-between mt-10'>
            <button 
            className='py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase rounded-md'
            type='button' onClick={()=> setPaciente(paciente)}>
                Editar
            </button>
            <button 
            className='py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-md'
            type='button' onClick={handleEliminar}>
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Pacientes