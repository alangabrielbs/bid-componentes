import { MapContainer, TileLayer, Circle } from 'react-leaflet'

import { LatLngTuple } from 'leaflet'

const center = [-31.9828611, -52.380322] as LatLngTuple

type CircleProps = {
  id: number
  position: LatLngTuple
  radius: number
}

const circles = [
  {
    id: 1,
    position: [-32.034391, -52.207287],
    radius: 2300
  },
  {
    id: 2,
    position: [-31.817597, -52.153042],
    radius: 2300
  },
  {
    id: 3,
    position: [-31.92431, -52.438687],
    radius: 3000
  },
  {
    id: 4,
    position: [-31.905075, -52.409161],
    radius: 1500
  },
  {
    id: 5,
    position: [-32.097235, -52.400921],
    radius: 1200
  },
  {
    id: 6,
    position: [-31.8421, -52.43388],
    radius: 1200
  }
] as CircleProps[]

// isso deveria ta em variaveis de ambiente, mas vai ficar aqui a fim de teste
const token =
  'pk.eyJ1IjoiYWxhbmdhYnJpZWwiLCJhIjoiY2ttc3JrcHRnMGtsaDJ2bXBhNGpvNGg2diJ9.j1t0gPVtP76eZ55oDGFaQg'
const styleid = 'ckyvp77hl001r14pwegxjit5i'
const user = 'alangabriel'

const Map = () => {
  return (
    <MapContainer
      attributionControl={false}
      center={center}
      zoom={9.5}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      doubleClickZoom={false}
    >
      {circles.map(({ id, radius, position }) => (
        <Circle
          key={id}
          center={position}
          radius={radius}
          pathOptions={{
            stroke: true,
            fillColor: '#329DFF',
            fillOpacity: 1,
            color: '#fff',
            opacity: 0.6,
            className: 'circle'
          }}
        />
      ))}
      <TileLayer
        attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/${user}/${styleid}/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
      />
    </MapContainer>
  )
}

export default Map
