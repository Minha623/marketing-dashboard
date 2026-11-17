import { funnelData } from '../data/mockData';

function ConversionFunnel() {
  return (
    <div className="card">
      <h3 className="card-title">Conversion Funnel</h3>
      <p className="card-sub">From visitor to customer</p>

      <div className="funnel">
        {funnelData.map((step) => {
          const Icon = step.icon;
          return (
            <div className="funnel-row" key={step.label}>
              <div className="funnel-bar" style={{ width: `${step.width}%`, background: step.bg }}>
                <span className="funnel-icon" style={{ color: step.color }}>
                  <Icon size={18} />
                </span>
                <div>
                  <small>{step.label}</small>
                  <strong>{step.value}</strong>
                </div>
              </div>
              <span className="funnel-percent">{step.percent}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ConversionFunnel;