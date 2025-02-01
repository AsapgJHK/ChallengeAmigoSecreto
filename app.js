const listaAmigos = [];
let nombreAmigoAgregado;

console.log(listaAmigos);
console.log(listaAmigos.length);



function agregarAmigo() {

    nombreAmigoAgregado = document.querySelector('.input-name').value.trim();
    document.querySelector('.input-name').value ='';
    document.querySelector('.result-list').innerHTML = '';
     
    if (nombreAmigoAgregado < 1) {
        alert ('Por favor ingresar un nombre válido');
        listaAmigos.pop(); 
        return;  

    } else {
        if (listaAmigos.includes(nombreAmigoAgregado)) {
            alert('No se puede repetir');
            
        }

        else {
                listaAmigos.push(nombreAmigoAgregado);
                mostrarLista();
        }
    }

    console.log(nombreAmigoAgregado);
    let verAmigo = listaAmigos.indexOf(nombreAmigoAgregado);
    console.log(verAmigo);
  
    
}

function sortearAmigo (){
    let random = Math.floor(Math.random()*listaAmigos.length);
    let esteEstuAmigosecreto = document.querySelector('.result-list');
    let amigoSorteado = listaAmigos[random];
    
    if (amigoSorteado == undefined ){
        alert('No hay amigos en la lista');
    } else {
    esteEstuAmigosecreto.innerHTML = `Este es tu amigo secreto <span style= "color : aqua;"> ${amigoSorteado}</span>`;
    
    actualizarLista();
    listaAmigos.length = 0;
    }
}    

function mostrarLista () {

    
    const listaDesplegable = document.querySelector(".name-list");
    const subLista = document.createElement("li");
    subLista.textContent = nombreAmigoAgregado;
    listaDesplegable.appendChild(subLista);

        
}

function actualizarLista () {

    const listaDesplegable = document.querySelector(".name-list");
    listaDesplegable.innerHTML = '';
    

}
