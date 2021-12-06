import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import { GOOGLE_API_KEY, STORES } from '../../configs/data';

export function MapComponent(props) {

  return (
    <div className='atom-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={{
          lat: -33.941,
          lng: 151.196
        }}
        center={{
          lat: props.store ? props.store.lat : (props.position ? props.position.lat : -33.941),
          lng: props.store ? props.store.lng : (props.position ? props.position.lng : 151.196)
        }}
        defaultZoom={18}
      >
        {
          STORES.map((item, index) =>
            <CustomMarker
              key={index}
              lat={item.lat}
              lng={item.lng}
              image={item.marker}
              title={item.title}
            />)
        }

      </GoogleMapReact>
    </div>
  );
}

function CustomMarker(props) {

  const { image, title } = props;

  return (
    <Link to={'/storeInfo'} className='atom-map-title'>
      <img src={image} alt={'img'} />
      <span>{title}</span>
    </Link>
  )
}