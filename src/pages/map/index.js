import { HeaderMap } from '../../components/header.map';
import { MapComponent } from './map';
import { Store } from './store';
import { useState } from 'react';

export function Map() {

  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const [store, setStore] = useState(null);
  const [isProduct, setIsProduct] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);

  return (
    <div>
      <HeaderMap
        onPosition={(e) => {
          setStore(null)
          setPosition(e)
        }}
        isDelivery={isDelivery}
      />

      <Store 
        full={open} 
        isProduct={isProduct}
        onSetProduct={(e)=>{
          setIsProduct(e)
          e === true && setOpen(true);
        }}
        onDelivery={(e)=>setIsDelivery(e ? true: false)}
      />
      
      <MapComponent position={position} store={store} />
    </div>
  );
}
