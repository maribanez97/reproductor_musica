// const listaCanciones = ["Normal", "Mi Luz", "Guerrera", "Cangrinaje", "Ingobernable"];
// const listaArtistas = ["Feid", "Rels B", "DELLAFUENTE", "Cruz Cafuné", "El Madrileño"];
// const listaMp3 = ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3","https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3","https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3","https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3","https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"]
// const listaImagenes = ["", "", "", "", ""]

const divCanciones = document.querySelector("#ListaCanciones")

const listaCanciones = [
    {
    artista: "Feid",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    titulo: "Normal",
    img: "./img/portada_feid_normal.jpg"
    }, {
    artista: "Rels B",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    titulo: "Mi Luz",
    img: "./img/portada_mi-luz_relsbjpeg.jpeg"
    }, {
    artista: "Dellafuente",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    titulo: "Guerrera",
    img: "./img/portada-guerrera-delafuente.jpeg"
    }, {
    artista: "Cruz Cafuné",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    titulo: "Cangrinaje",
    img: "./img/portada_cangrinage_cruci.jpeg"
    }, {
    artista: "El Madrileño",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    titulo: "Ingobernable",
    img: "./img/portada_ingobernable_madrileno.jpeg"
    }
]

// Defino botones
const btnCancion3 = document.querySelector("#BtnCancion3")
const btnAnterior = document.querySelector("#BtnAnterior")
const btnPlayPausa = document.querySelector("#BtnPlayPausa")
// const btnPausa = document.querySelector("#BtnPausa")
const btnSiguiente = document.querySelector("#BtnSiguiente")

// Definir audio
const audioPlay = document.querySelector("audio") // agarra la primera etiqueta de audio que encuentre

let idCancionActual = 0; // pimera cancion

        
listaCanciones.forEach((cancion,i)=>{
    console.log(`${cancion} - id: ${i}`);
        
        // innerHTML
        divCanciones.innerHTML += `<div id="Cancion_${i}" class="Lista-cancion">
                                    ${listaCanciones[i].titulo} - ${listaCanciones[i].artista}
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
const divReproductor = document.getElementById("Reproductor");

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
    console.log(`${listaCanciones[idCancionActual].titulo} - ${listaCanciones[idCancionActual].artista}`);
        // canción reproduciendose
        divPlayingSong.innerHTML =  `<div> 
                                    ${listaCanciones[idCancionActual].titulo} - 
                                    ${listaCanciones[idCancionActual].artista}
                                    <img src = "${listaCanciones[idCancionActual].img}" alt = "imagen${idCancionActual}"
                                   </div>`;

        // divReproductor.innerHTML = `<div class="Reproductor-imagen"> 
        //                             <img src = "${listaCanciones[idCancionActual].img}" alt = "imagen${idCancionActual}"
        //                            </div>`;

        // Cambiar el src de nuestro audio HTML
        audioPlay.src = listaCanciones[idCancionActual].url;
};



btnAnterior.addEventListener('click', () => {
    if (idCancionActual>0){
            idCancionActual--;
            imprimiReproduciendo ();
            btnPlayPausa.classList.toggle('fa-play');
    } else{
            idCancionActual=listaCanciones.length-1;
            console.log(idCancionActual);
            imprimiReproduciendo ();
            btnPlayPausa.classList.toggle('fa-play');
    }
});

const reproducir = () =>{
    audioPlay.play();
}
const pausar = () =>{
    audioPlay.pause();
}


btnPlayPausa.addEventListener('click', () => {

    btnPlayPausa.classList.toggle('fa-play');

    if(btnPlayPausa.classList.contains('fa-play')){
        pausar();

    }else {
        reproducir();
    }
    
});

// btnPausa.addEventListener('click', () => {
//     imprimiReproduciendo ();
// });

btnSiguiente.addEventListener('click', () => {
        if (idCancionActual<listaCanciones.length-1){
            idCancionActual++;
            imprimiReproduciendo ();
            btnPlayPausa.classList.toggle('fa-play');
    } else{
            idCancionActual=0;
            console.log(idCancionActual);
            imprimiReproduciendo ();
            btnPlayPausa.classList.toggle('fa-play');
    }
});











