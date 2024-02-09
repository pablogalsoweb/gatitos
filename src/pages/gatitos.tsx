import gatoLogo from '../assets/img/gato.png'
import {ItemsListaCat} from "../components/itemsListaCat";
import { useContext } from 'react';
import { TotalMeGustaContext } from '../Context/totalMeGustaContextProvider';

export function Gatitos() {
  
  const {totalMegusta} = useContext(TotalMeGustaContext);

    return (
      <>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={gatoLogo} className="logo gato" alt="gato logo" />
          </a>
        </div>
        <h1>Gatitos</h1>
        <p className='barra_contador'>{totalMegusta.gatos} gatitos me gustan</p>
        <div className="card">
              <ItemsListaCat/>
        </div>
  
      </>
    )
  } 