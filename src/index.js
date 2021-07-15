
import {registerImage} from '../src/lazy'

console.log('hola mundo')
const minimum= 1;
const maximum= 122;
const random = () => Math.floor(Math.random() * (maximum- minimum))+ minimum;
const createImageNode = () => {
    const container = document.createElement("div");
    container.className ="p-4";
    
    const imagen = document.createElement("img");
    imagen.className= "mx-auto" ;
    imagen.width="320";
    imagen.dataset.src=`https://randomfox.ca/images/${random()}.jpg`
      
    container.appendChild(imagen);


    return container;

};

const nuevaImagen = createImageNode();
const mountNode =document.getElementById("images");

const addButton = document.querySelector('button');
const cleanButton = document.querySelector('#clean');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};
    const cleanImages = () => {

        console.log(mountNode.childNodes);
    
        [...mountNode.childNodes].forEach(child => {
            child.remove();
        }) 
    
    };
   
 addButton.addEventListener("click",addImage);
 cleanButton.addEventListener("click", cleanImages);    
