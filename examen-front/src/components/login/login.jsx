import React from "react";
import { auth, provider, signInWithPopup } from "../../config/firebase";

const Login = ({setUsuario}) => {

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuario logueado:", user);
      // TODO CAMBIAR EL ENDPOINT PARA EL INICIO DE GOOGLE
      const response = await fetch('http://localhost:8080/objetos/inicio-google', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            accessToken: user.accessToken,
            email: user.email,
            displayName: user.displayName
        }),
    });

    const data = await response.json();
    console.log("Respuesta del backend:", data);
    setUsuario(user.accessToken);

    //window.location.href = "/";

    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
    </div>
  );
};

export default Login;
