import { useState,useEffect } from "react";
function Botones(){
  const [boton, setBoton] = useState(Array(5).fill("#ffffffff"));
  const [intento, setIntento] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const colores = ["#0CA589", "#7FC82C", "#C82C31"
    , "#5507CA","#5BF613","#AE13F6","#1414B1","#F56CDA","#6C95F5"
    ,"#77000A"];

  const colorAleatorio = () => {
    let randomColor = Math.floor(Math.random() * colores.length);
    return colores[randomColor];
  };

  const cambiarColor = () => {
    const nuevoColor = boton.map(() => colorAleatorio());
    setBoton(nuevoColor);
    setIntento(intento + 1);
  };

  useEffect(() => {
    const contador = {};

    boton.forEach((color) => {
      contador[color] = (contador[color] || 0) + 1;
    });

    const repetido = Object.values(contador).some(
      (cantidad) => cantidad >= 3
    );

    if (repetido && intento>0) {
      setMensaje("¡Ganaste!");
    } else {
      setMensaje("");
    }
  }, [boton]);
        return(
            <div className="contenedorBoton">
                
                <div className="botones">
                    {boton.map((color,index)=>(
                    <button
                    key={index}
                    onClick={cambiarColor}
                    style={{backgroundColor:color}}
                    >boton {index+1}</button>
                ))}
                </div>
                <div>
                    <h2>{mensaje}</h2>
                </div>
                <div>
                    <h2>Cantidad de Intentos : {intento}</h2>
                </div>
            
            </div>
        )
    }
    export default Botones