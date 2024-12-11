import React, { useEffect } from 'react'

function Logout({setUsuario}) {
    useEffect(() => {
        setUsuario();
        window.location.href = "/";
    }, [setUsuario])
  return (
    <div>
        
    </div>
  )
}

export default Logout