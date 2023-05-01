import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


    return (
        <>

                {pacientes && pacientes.length ? (
                    
                    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto scrollbar-w-8 scrollbar-corner-custom-black scrollbar-track-gray-200 scrollbar-thumb-indigo-600 scrollbar-thin">                        
                        <h2 className="font-black text-3xl text-center text-white">Listado de Pacientes</h2>
                        <p className="text-lg mt-5 text-center mb-10 font-bold text-white">
                        Administra tus {''}
                            <span className="text-indigo-600">pacientes y citas</span>
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