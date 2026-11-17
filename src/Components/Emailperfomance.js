import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';
import { emailData } from '../data/mockData';

function EmailTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0].payload;
  return (
    <div className="chart-tooltip">
      <p>{p.clicks.toLocaleString()} clicks</p>
      <p className="tooltip-date">{p.date}</p>
    </div>
  );
}

function EmailPerformance() {
  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h3 className="card-title">Email Performance</h3>
          <p className="card-sub">Campaign metrics</p>
        </div>
        <button className="select-btn">
          Last 30 Days <ChevronDown size={14} />
        </button>
      </div>

      <div className="email-stats">
        <div>
          <small>Sent</small>
          <strong>48,200</strong>
        </div>
        <div>
          <small>Open Rate</small>
          <strong>32.4%</strong>
        </div>
        <div>
          <small>Click Rate</small>
          <strong>6.8%</strong>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={170}>
        <AreaChart data={emailData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="emailFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" hide />
          <Tooltip content={<EmailTooltip />} />
          <Area
            type="monotone"
            dataKey="clicks"
            stroke="#8b5cf6"
            strokeWidth={2.5}
            fill="url(#emailFill)"
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EmailPerformance;