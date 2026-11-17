import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChevronDown, ArrowUp } from 'lucide-react';
import { socialData, platforms } from '../data/mockData';

function SocialGrowth() {
  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h3 className="card-title">Social Media Growth</h3>
          <p className="card-sub">Followers across all platforms</p>
        </div>
        <button className="select-btn">
          Last 30 Days <ChevronDown size={14} />
        </button>
      </div>

      <div className="big-number">
        <h2>72,420</h2>
        <span className="up">
          <ArrowUp size={13} /> 16.8%
        </span>
      </div>

      <ResponsiveContainer width="100%" height={170}>
        <BarChart data={socialData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#c4a5f7" />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" hide />
          <YAxis
            ticks={[0, 50000, 100000]}
            tickFormatter={(v) => (v === 0 ? '0' : `${v / 1000}K`)}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#6b7280' }}
          />
          <Bar dataKey="followers" fill="url(#barGrad)" radius={[6, 6, 0, 0]} barSize={26} />
        </BarChart>
      </ResponsiveContainer>

      <div className="platforms">
        {platforms.map((p) => (
          <span
            key={p.name}
            className="platform"
            style={{ background: p.color }}
            title={p.name}
          >
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SocialGrowth;