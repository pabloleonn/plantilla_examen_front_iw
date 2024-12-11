import axios from "axios";

const URIobjetos = 'http://localhost:8080/objetos'

const getAllobjetos = async (setobjetos) => {
  try {
    const res = await axios.get(URIobjetos);
    setobjetos(res.data)
  } catch (error) {
    console.error("Error al obtener todas las objetos");
  }
}

const getobjetoById = async (id, setobjeto) => {
  try {
    const res = await axios.get(URIobjetos+'/'+id);
    setobjeto(res.data);
  } catch (error) {
    console.error("Error al obtener objeto:", error);
  }
}

const createobjeto = async(objeto) =>{
  try {
    await axios.post(URIobjetos, objeto);
  } catch (error) {
    console.log("Error al crear objeto")
  }
}

const deleteobjeto = async(id) =>{
  try {
    await axios.delete(URIobjetos+'/'+id);
  } catch (error) {
    console.log("Error al eliminar objeto")
  }
}

export const objetoservices = { getAllobjetos , getobjetoById, createobjeto, deleteobjeto}