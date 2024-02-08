import { Megusta } from './megusta';
import { useState, useContext } from 'react';
import { TotalMeGustaContext } from '../Context/totalMeGustaContextProvider';
import {ItemProps, TotalMeGustaState} from "../interfaces/interface"

/*
type Animalitos = {
    [url: string] : string;
};
   
const ANIMALITOS:Animalitos = { 
    'https://cdn2.thedogapi.com': 'perros',
    'https://cdn2.thecatapi.com' : 'gatos'
 }; 
 
function parseUrlAnimal(urlPrincipal:string){   

    console.log("---" + ANIMALITOS[urlPrincipal].includes("perros"));
    if (ANIMALITOS[urlPrincipal].includes("perros") || ANIMALITOS[urlPrincipal].includes("gatos")) {
        return ANIMALITOS[urlPrincipal]; 
    
    } else {
        // Si no coincide con ninguna, podrías devolver un valor predeterminado o lanzar un error
        throw new Error('No se pudo determinar el animal.');
    } 
          
}*/

/*function getAnimal(url:string):string{
    // Encontrar la posición de "/images"
    const indiceImages = url.indexOf("/images");
    const urlPrincipal = url.substring(0, indiceImages);
    console.log(urlPrincipal);
    return parseUrlAnimal(urlPrincipal);
}*/

export function Item({item}:ItemProps){
   
   
    //const animal: keyof typeof totalMegusta = getAnimal(item.url);
    const animal = item.url == 'https://cdn2.thedogapi.com' ? 'perros' : 'gatos';

    const [megusta, setMegusta] = useState<boolean>(false);
 
    const {totalMegusta, setTotalMegusta} = useContext(TotalMeGustaContext);
  

    const clickMegusta = () => {   
              
        setMegusta(!megusta); 

        const totalMegustaCopia:TotalMeGustaState = {...totalMegusta}; 
        console.log(totalMegustaCopia);
        console.log(totalMegustaCopia[animal]);
        if (totalMegustaCopia[animal] !== undefined && typeof totalMegustaCopia[animal] === "number") {
            if(!megusta == true){    
                totalMegustaCopia[animal] += 1; 
            }
            else{
                totalMegustaCopia[animal] -= 1; 
            } 
        }

        setTotalMegusta(totalMegustaCopia); 
    }


    return (
        <li key={item.id}>
           <img src={item.url} width="100%"/>
            <Megusta megusta={megusta} clickMegusta={clickMegusta}/>
        </li>
    );
}