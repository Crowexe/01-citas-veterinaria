import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


    return (
        <>

                {pacientes && pacientes.length ? (
                    
                    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">                        
                        <h2 className="font-black text-3xl text-center text-white">Listado de Pacientes</h2>
                        <p className="text-lg mt-5 text-center mb-10 font-bold text-white">
                        Administra tus {''}
                            <span className="text-indigo-600">Pacientes y Citas</span>
                        </p>	

                        {pacientes.map( (paciente ) => (
                            <Paciente
                                key={paciente.id}                                                     
                                paciente={paciente}         
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}                                  
                            />                    
                            ))}
                    </div>

                ) : (
                    <div className="md:w-1/2 lg:w-3/5 md:h-screen">                        
                        <h2 className="font-black text-3xl text-center text-white">No hay pacientes</h2>
                        <p className="text-lg mt-5 text-center mb-10 font-bold text-white">
                        Comienza agregando pacientes {''}
                            <span className="text-indigo-600">y apareceran aquí</span>
                        </p>	
                    </div>
                )}

        </>
    )
}

export default ListadoPacientes