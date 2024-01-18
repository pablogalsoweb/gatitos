

import { Item } from './item';
import {useFetchApiDog} from "../hooks/useFetchApiDog";

import { Loading } from './loading';
import {useState} from "react";

const LIMIT_ITEMS = 2;

export function ItemsListaDog(){

    const [page, setPage] = useState(0);
    const [items, cargando, error] = useFetchApiDog(LIMIT_ITEMS, page);

    const getMoreData = () => {
        setPage(page+1);
    };

    return (
        <>
        { error && <p Style="color:red">{error}</p>}
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