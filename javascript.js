const listaCanciones = ["Normal", "Mi Luz", "Guerrera", "Cangrinaje", "Ingobernable"];
const listaArtistas = ["Feid", "Rels B", "DELLAFUENTE", "Cruz Cafuné", "El Madrileño"];
const divCanciones = document.querySelector("#ListaCanciones")

// Defino botones
const btnCancion3 = document.querySelector("#BtnCancion3")
const btnAnterior = document.querySelector("#BtnAnterior")
const btnPlay = document.querySelector("#BtnPlay")
const btnSiguiente = document.querySelector("#BtnSiguiente")


        
listaCanciones.forEach((cancion,i)=>{
    console.log(`${cancion} - id: ${i}`);
        
        // innerHTML
        divCanciones.innerHTML += `<div id="ListaCanciones" class="Lista">
        ${listaCanciones[i]} - ${listaArtistas[i]}
                                   </div>`   
});

btnCancion3.addEventListener('click', ()=>{
    console.log(`El tema 3 es: ${listaCanciones[3]} de ${listaArtistas[3]}`);
});

let cantCanciones = listaCanciones.length;
let cantArtistas = listaArtistas.length;

btnAnterior.addEventListener('click', (event) => {
    console.log(event.target.id);
    // console.log(cantCanciones);
    // console.log(cantArtistas);
    cantArtistas = cantArtistas-1;
    cantCanciones = cantCanciones-1;
    console.log(`Canción anterior ${listaCanciones[cantCanciones]} de ${listaArtistas[cantArtistas]}`);
});

btnPlay.addEventListener('click', (event) => {
    console.log(event.target.id);
    // console.log(cantCanciones);
    // console.log(cantArtistas);
    // cantArtistas = cantArtistas+1;
    // cantCanciones = cantCanciones+1;
    console.log(`Canción siguiente ${listaCanciones[cantCanciones]} de ${listaArtistas[cantArtistas]}`);
});

btnSiguiente.addEventListener('click', (event) => {
    console.log(event.target.id);
    // console.log(cantCanciones);
    // console.log(cantArtistas);
    cantArtistas = cantArtistas+1;
    cantCanciones = cantCanciones+1;
    console.log(`Canción siguiente ${listaCanciones[cantCanciones]} de ${listaArtistas[cantArtistas]}`);
});











