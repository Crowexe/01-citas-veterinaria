import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {

  return (
    <>
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10 font-bold">
      Administra tus {''}
        <span className="text-indigo-600">Pacientes y Citas</span>
      </p>	

      {pacientes.map( paciente => (
          <Paciente                                                         
              paciente={paciente}                                                   
          />                    
          )) 
      }

      <Paciente />

        </div>
    </>
  )
}

export default ListadoPacientes