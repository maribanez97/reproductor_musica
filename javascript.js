const listaCanciones = ["Normal", "Mi Luz", "Guerrera", "Cangrinaje", "Ingobernable"];
const listaArtistas = ["Feid", "Rels B", "DELLAFUENTE", "Cruz Cafuné", "El Madrileño"];
const divCanciones = document.querySelector("#ListaCanciones")

// Defino botones
const btnCancion3 = document.querySelector("#BtnCancion3")
const btnAnterior = document.querySelector("#BtnAnterior")
const btnPlayPausa = document.querySelector("#BtnPlayPausa")
// const btnPausa = document.querySelector("#BtnPausa")
const btnSiguiente = document.querySelector("#BtnSiguiente")

let idCancionActual = 0; // pimera cancion

        
listaCanciones.forEach((cancion,i)=>{
    console.log(`${cancion} - id: ${i}`);
        
        // innerHTML
        divCanciones.innerHTML += `<div id="Cancion_${i}" class="Lista-cancion">
                                   ${i+1}. ${listaCanciones[i]} - ${listaArtistas[i]}
                                   </div>`   
});



// btnCancion3.addEventListener('click', ()=>{
//     console.log(`El tema 3 es: ${listaCanciones[2]} de ${listaArtistas[2]}`); // índice 2 porque lalista empieza en índice 0

//     imprimiReproduciendo(2);
// });

// document.addEventListener('click', (event) => {
//     console.log(event.target.id);
// });

// Buscamos en nuestro HTML todos los divs con class Lista
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById("PlayingSong");

divsCanciones.forEach((divCancion, i) => {
    divCancion.addEventListener("click", () => {
        
        idCancionActual = i;
        imprimiReproduciendo();
    });
});

//-------------------------------------------
// Defino la función paraimprimir la canción en pantalla
//-------------------------------------------
function imprimiReproduciendo(){
    console.log(`${listaCanciones[idCancionActual]} - ${listaArtistas[idCancionActual]}`);
        // canción reproduciendose
        divPlayingSong.innerHTML =  `<div> 
                                    ${listaCanciones[idCancionActual]}<br>
                                    ${listaArtistas[idCancionActual]}
                                   </div>`;
};



btnAnterior.addEventListener('click', () => {
    if (idCancionActual>0){
            idCancionActual--;
            imprimiReproduciendo ();
    } else{
            idCancionActual=4;
            console.log(idCancionActual);
            imprimiReproduciendo ();
    }
});

btnPlayPausa.addEventListener('click', () => {

    btnPlayPausa.classList.toggle('fa-play');
    

    // imprimiReproduciendo ();
});

// btnPausa.addEventListener('click', () => {
//     imprimiReproduciendo ();
// });

btnSiguiente.addEventListener('click', () => {
        if (idCancionActual<4){
            idCancionActual++;
            imprimiReproduciendo ();
    } else{
            idCancionActual=0;
            console.log(idCancionActual);
            imprimiReproduciendo ();
    }
});











