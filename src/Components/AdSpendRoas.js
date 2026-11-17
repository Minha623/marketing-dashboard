import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import { ChevronDown } from 'lucide-react';
import { adData } from '../data/mockData';

function AdSpendRoas() {
  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h3 className="card-title">Ad Spend vs ROAS</h3>
          <p className="card-sub">Performance by spend</p>
        </div>
        <button className="select-btn">
          Last 30 Days <ChevronDown size={14} />
        </button>
      </div>

      <div className="legend">
        <span><i style={{ background: '#8b5cf6' }}></i> Ad Spend</span>
        <span><i style={{ background: '#ec4899' }}></i> ROAS</span>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart data={adData} margin={{ top: 5, right: -10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="adBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#c4b5fd" />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ece7f7" />

          <XAxis
            dataKey="date"
            ticks={['Apr 1', 'Apr 7', 'Apr 15', 'Apr 21', 'Apr 29']}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#6b7280' }}
          />

          <YAxis
            yAxisId="left"
            domain={[0, 20000]}
            ticks={[0, 5000, 10000, 15000, 20000]}
            tickFormatter={(v) => (v === 0 ? '$0' : `$${v / 1000}K`)}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#6b7280' }}
          />

          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 6]}
            ticks={[0, 2, 4, 6]}
            tickFormatter={(v) => `${v}x`}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#6b7280' }}
          />

          <Bar yAxisId="left" dataKey="spend" fill="url(#adBar)" radius={[5, 5, 0, 0]} barSize={14} />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="roas"
            stroke="#ec4899"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdSpendRoas;