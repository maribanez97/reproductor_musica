const listaCanciones = ["Normal", "Mi Luz", "Guerrera", "Cangrinaje", "Ingobernable"];
const listaArtistas = ["Feid", "Rels B", "DELLAFUENTE", "Cruz Cafuné", "El Madrileño"];
const divCanciones = document.querySelector("#ListaCanciones")
const pArtistas = document.querySelector("#ListaArtistas")

        
listaCanciones.forEach((cancion,i)=>{
    console.log(`${cancion} - id: ${i}`);
        
        // innerHTML
        divCanciones.innerHTML += `<div id="ListaCanciones" class="Lista">
        ${listaCanciones[i]} - ${listaArtistas[i]}
                                   </div>`   
});








