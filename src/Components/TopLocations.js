import { locations } from '../data/mockData';

// Map par pins ki position (% mein)
const pins = [
  { top: '30%', left: '22%' },
  { top: '18%', left: '24%' },
  { top: '24%', left: '48%' },
  { top: '28%', left: '53%' },
  { top: '70%', left: '86%' },
];

function TopLocations() {
  return (
    <div className="card">
      <h3 className="card-title">Top Locations</h3>

      <div className="map-box">
        {pins.map((p, i) => (
          <span key={i} className="pin" style={{ top: p.top, left: p.left }}></span>
        ))}
      </div>

      <ul className="location-list">
        {locations.map((loc) => (
          <li key={loc.code}>
            <span className="loc-name">
              <img
                src={`https://flagcdn.com/w40/${loc.code}.png`}
                alt={loc.name}
                width="22"
                height="16"
              />
              {loc.name}
            </span>
            <span className="loc-value">{loc.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopLocations;