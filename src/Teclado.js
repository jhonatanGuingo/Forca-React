import { useState } from "react";

export default function Teclado (){

    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T", "U","V","W","X","Y","Z"];
    const [clicked, setClicked] = useState([]);


    function letraSelecionada(i){
        
        setClicked([...clicked,i]);
    }

    return (
        <div>
            {alfabeto.map((letras,indice) => (
            <button disabled = {clicked.includes(indice) ? true  :  false} key = {letras} onClick= {() => letraSelecionada(indice)} className={clicked.includes(indice) ? "clicked"  :  "notClicked"} >{letras} </button>
            ))}
            
        </div>
    )
}