
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { objetoservices } from '../../services/objeto';

const Home = () => {
  // En caso de que sea un array, si no quitar []
  const [objetos, setObjetos] = useState([]);


  useEffect(() => {
    objetoservices.getAllobjetos(setObjetos);
  }, [])

  return (
    <>
      <div className="card my-3" >
        <div className="card-body"></div>
        <h1 className="card-title">Examen</h1>

        <div className='container-general'>
          <div className='py-4'>
            <ul className='lista'>
              {objetos?.map(objeto =>
                // Si no es _id cambiarlo por el id que tenga
                <li key={objeto._id}>
                  {/* AQUÍ DEBERÍA DE MOSTRAR <OBJETO ELEMENT /> */}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
