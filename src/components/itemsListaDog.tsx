
import { CSSProperties } from 'react';
import { Item } from './item';
import {useFetchApiDog} from "../hooks/useFetchApiDog";

import { Loading } from './loading';
import {useState} from "react";

import {MisTipoLista} from "../interfaces/interface"

const LIMIT_ITEMS = 10;
 

export function ItemsListaDog(){

    const [page, setPage] = useState(0);
    const [items, cargando, error]: [MisTipoLista[], boolean,  boolean | null] = useFetchApiDog(LIMIT_ITEMS, page);

    const getMoreData = () => {
        setPage(page+1);
    };

    const estilo: CSSProperties = {
        color: 'red',
        fontSize: '20px',
        backgroundColor: 'yellow'
    };

    return (
        <>
        { error && <p style={estilo}>{error}</p>}
          <ul>
              {
                  items.map(
                      (item) => (<Item key={item.url} item = {item} /> )
                  )
              }
          </ul>
            { cargando && <Loading/>}
            <button onClick={getMoreData}>Cargar más</button>
        </>
    );
}