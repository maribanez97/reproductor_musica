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
        divCanciones.innerHTML += `<div id="Cancion_${i}" class="Lista-cancion">
                                   ${i+1}. ${listaCanciones[i]} - ${listaArtistas[i]}
                                   </div>`   
});



btnCancion3.addEventListener('click', ()=>{
    console.log(`El tema 3 es: ${listaCanciones[2]} de ${listaArtistas[2]}`); // índice 2 porque lalista empieza en índice 0
});

// document.addEventListener('click', (event) => {
//     console.log(event.target.id);
// });

// buscamos en nuestro HTML todos los divs con class Lista
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById("PlayingSong");

divsCanciones.forEach((divCancion, i) => {
    divCancion.addEventListener("click", () => {
        console.log(`${listaCanciones[i]} - ${listaArtistas[i]}`);
        // canción reproduciendose
        divPlayingSong.innerHTML =  `<div> 
                                    ${listaCanciones[i]}<br>
                                    ${listaArtistas[i]}
                                   </div>` 
    });
});

// function inprimiReproduciendose((indice) =>{
//     console.log(`${listaCanciones[indice]} - ${listaArtistas[indice]}`);
//         // canción reproduciendose
//         divPlayingSong.innerHTML =  `<div> 
//                                     ${listaCanciones[i]}<br>
//                                     ${listaArtistas[i]}
//                                    </div>`;
// });

let cantCanciones = listaCanciones.length;
let cantArtistas = listaArtistas.length;
let idCancionActual = 0; // pimera cancion

btnAnterior.addEventListener('click', () => {
    // console.log(event.target.id);
    // console.log(cantCanciones);
    // console.log(cantArtistas);
    cantArtistas = cantArtistas-1;
    cantCanciones = cantCanciones-1;
    console.log(`Canción anterior ${listaCanciones[cantCanciones]} de ${listaArtistas[cantArtistas]}`);
});

btnPlay.addEventListener('click', () => {
    // console.log(event.target.id);
    // console.log(cantCanciones);
    // console.log(cantArtistas);
    // cantArtistas = cantArtistas+1;
    // cantCanciones = cantCanciones+1;
    console.log(`Canción siguiente ${listaCanciones[cantCanciones]} de ${listaArtistas[cantArtistas]}`);
});

btnSiguiente.addEventListener('click', () => {
    // console.log(event.target.id);
    // console.log(cantCanciones);
    // console.log(cantArtistas);
    cantArtistas = cantArtistas+1;
    cantCanciones = cantCanciones+1;
    console.log(`Canción siguiente ${listaCanciones[cantCanciones]} de ${listaArtistas[cantArtistas]}`);
});











