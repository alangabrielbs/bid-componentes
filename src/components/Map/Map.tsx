import { MapContainer, TileLayer, Circle } from 'react-leaflet'

import { LatLngTuple } from 'leaflet'

const center = [-27.6145079, -48.5735349] as LatLngTuple

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
      zoom={11}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      doubleClickZoom={false}
    >
      <Circle
        center={[-27.593844, -48.622991]}
        radius={1000}
        pathOptions={{
          stroke: true,
          fillColor: '#329DFF',
          fillOpacity: 1,
          color: '#fff',
          opacity: 0.6,
          className: 'circle'
        }}
      />
      <Circle
        center={[-27.589684, -48.552837]}
        radius={1000}
        pathOptions={{
          stroke: true,
          fillColor: '#329DFF',
          fillOpacity: 1,
          color: '#fff',
          opacity: 0.6,
          className: 'circle'
        }}
      />
      <TileLayer
        attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/${user}/${styleid}/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
      />
    </MapContainer>
  )
}

export default Map
