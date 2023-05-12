import { useState } from "react";

export default function Word() {
    const palavras = [
        "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abrigo", "abrir",
        "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco",
        "caixa", "chantilly", "cachorro", "cuidado", "caneta", "carinho", "cabra", "cesto",
        "dados", "dizer", "danone", "dente", "diamante", "diafragma", "detonar", "dia",
        "elefante", "esmeralda", "esfinge", "esfera", "encontro", "ema", "escola", "economia",
        "formiga", "fama", "festa", "fiador", "ferver", "flauta", "figo", "fiapo", "fotografia",
        "goiaba", "gelo", "grito", "guria", "goleiro", "golfinho", "golfe", "girar",
        "harmonia", "haste", "hectare", "hepatite", "hiena", "hidrante",
        "igreja", "importante", "idoso", "irado", "identidade", "idioma", "idade", "idiota",
        "jantar", "jumento", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco",
        "laranja", "lua", "luz", "lindo", "lacraia", "lactose", "lacrar",
        "manga", "morango", "mico", "matar", "mingau", "moqueca", "mocassin",
        "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nabo",
        "ovo", "ostra", "obstetra", "orangotango", "olhar", "ortodoxo", "ouro", "ornamento",
        "pato", "polvo", "povoar", "pano", "princesa", "pizza", "patroa",
        "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar",
        "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura",
        "salada", "salamandra", "sacola", "siri", "sabre", "sucarose", "sabedoria", "sacerdote",
        "tatu", "tabacaria", "taberneiro", "torrada", "tamanho", "tatuagem", "trem",
        "uva", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir",
        "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa",
        "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale",
        "zebra", "zagueiro", "zero", "zoeira", "zepelim", "zinco", "zumbido"
    ]
    const [arrayPalavra, setArrayPalavra] = useState([]); //usei para poder splitar a palavra em um array
    const [palavra, setPalavra] = useState(""); //salva a palavra
    const [savePosition, setSavePosition] = useState([]); //guarda a posicao da letra na palavra
    const [contadorPosicao, setContadorPosicao] = useState(0);

    function sortearPalavra(){
        palavras.sort(comparador);
        const elemento = palavras[0];
        setPalavra(elemento);
        const arr = elemento.split('');
        setArrayPalavra(arr);

        for(let i = 0; i < arr.length; i++){
            
            if(arr[i] === 'a'){
                let novoArray = [];
                novoArray.length = arr.length-1;
                console.log(arr.length)
                novoArray.splice(i,0,arr[i]);
                setContadorPosicao(i);
                
                setSavePosition(novoArray);
                console.log(novoArray)
            }
        }
        //console.log(arr)
        //console.log(elemento)   
    }

    function verificarLetra(){
        console.log(arrayPalavra)
        
    }
    
    function comparador() { 
        return Math.random() - 0.5; 
    }
    

    return(
        <div className="container-palavra">
            <button onClick={sortearPalavra}>Escolher Palavra</button>
            <h1>{palavra}</h1>
            
        </div>
    )
}