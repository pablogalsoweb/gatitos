import gatoLogo from '../assets/img/perro.png'
import {ItemsListaDog} from "../components/itemsListaDog";
import { useContext } from 'react';
import { TotalMeGustaContext } from '../Context/totalMeGustaContextProvider';

export function Perritos() {

  const {totalMegusta} = useContext(TotalMeGustaContext);

  console.log(totalMegusta.perros);
  
    return (
      <>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={gatoLogo} className="logo gato" alt="gato logo" />
          </a>
        </div>
        <h1>Perritos</h1>
        <p>{totalMegusta.perros} perritos me gustan</p>
        <div className="card">
              <ItemsListaDog/>
        </div>
  
      </>
    )
  } 