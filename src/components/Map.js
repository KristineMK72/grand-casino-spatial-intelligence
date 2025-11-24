// components/Map.js
import { MapContainer, TileLayer, CircleMarker, Popup, Circle, LayersControl, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const { Overlay } = LayersControl;

const MapComponent = ({ members, zones }) => {
  return (
    <MapContainer 
      center={[46.165, -93.75]} 
      zoom={9} 
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      <LayersControl position="topright">
        
        {/* Layer 1: Existing Players Club Members */}
        <Overlay checked name="Existing Members">
          <LayerGroup>
            {members.map((member) => (
              <CircleMarker 
                key={member.id}
                center={[member.lat, member.lng]}
                radius={member.spendLevel === 'VIP' ? 6 : 3}
                pathOptions={{ 
                  color: member.spendLevel === 'VIP' ? '#ffd700' : '#ff4d4d', 
                  fillOpacity: 0.6,
                  stroke: false
                }}
              >
                <Popup>
                  <strong>Member #{member.id}</strong><br/>
                  Tier: {member.spendLevel}
                </Popup>
              </CircleMarker>
            ))}
          </LayerGroup>
        </Overlay>

        {/* Layer 2: Proposed Marketing Zones */}
        <Overlay checked name="Expansion Opportunities">
          <LayerGroup>
            {zones.map((zone) => (
              <Circle
                key={zone.id}
                center={[zone.lat, zone.lng]}
                radius={zone.radius}
                pathOptions={{ color: zone.color, fillColor: zone.color, fillOpacity: 0.2 }}
              >
                <Popup>
                  <h3>{zone.name}</h3>
                  <p>Target: {zone.potential}</p>
                </Popup>
              </Circle>
            )}
          </LayerGroup>
        </Overlay>

      </LayersControl>
    </MapContainer>
  );
};

export default MapComponent;
