import { useState } from "react"
function Validar({random}){
    const[numero,setNumero]=useState("");
    const[resultado,setResultado]=useState("")
    const[intentos,setIntentos]=useState(0)

    function VerificarNumero(){
        let numeroIngresado=parseInt(numero)
        
        if(numeroIngresado===random){
            setResultado("Felicitaciones ganaste el numero a adivinar era el "+random)
        }else if(numeroIngresado>100 || numeroIngresado<0 || numero===""){
            //setResultado("Por Favor ingresa un numero valido entre el 0 al 100")
            setIntentos(intentos+1);
            alert("Por favor ingresa un numero valido del 0 al 100")
        }else if(numeroIngresado<random){
            setIntentos(intentos+1)
            setResultado("El numero "+numeroIngresado+" es menor al numero a adivinar")
        }else if(numeroIngresado>random){
            setIntentos(intentos+1)
            setResultado("El numero "+numeroIngresado+" es mayor al numero a adivinar")
        }
        console.log(ganador);
    }
    function Rendirce(){
            setResultado("El numero a adivinar es "+random)
    }
    return(
        <div className="contenedorValidar">
            <div>
                <h2>Por Favor Ingresa un numero del 0 al 100</h2>
            </div >
                <div>
                <input type="number"
                value={numero}
                onChange={(e)=> setNumero(e.target.value)}
                placeholder="Ingresa Un numero"
                />
                </div>
                <div className="botonesValidar">
                    <button onClick={VerificarNumero} >Ingresar Numero</button>
                    <button onClick={Rendirce}>Rendirce</button>
                </div>
            <div>
                <h2>{resultado}</h2>
                <h2>Cantidad de intento :{intentos}</h2>
            </div>
        </div>
    )
}
export default Validar