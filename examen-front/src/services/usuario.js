import axios from "axios";

const URIUsuarios = 'http://localhost:8080/objetos'

const getUsuarioByToken = async (token, setUsuario) => {
    try{
        const res = await axios.get(URIUsuarios + "/token/" + token);
        setUsuario(res.data);
        return res;
    }catch(error){
        console.error("Error al obteener el usuario: ", error);
    }
}

export const usuarioServices = {getUsuarioByToken};