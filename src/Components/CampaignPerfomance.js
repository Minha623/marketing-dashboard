import { useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { ChevronDown } from 'lucide-react';
import { performanceData, rangeTabs } from '../data/mockData';

// Custom tooltip (hover par white box)
function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const point = payload[0].payload;

  return (
    <div className="chart-tooltip">
      <p className="tooltip-date">{point.date}, 2024</p>
      <p>
        <span className="t-dot" style={{ background: '#ec4899' }}></span>
        ${point.revenue.toLocaleString()}
      </p>
      <p>
        <span className="t-dot" style={{ background: '#8b5cf6' }}></span>
        {point.conversions.toLocaleString()}
      </p>
    </div>
  );
}

function CampaignPerformance() {
  const [range, setRange] = useState('30D');

  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h3 className="card-title">Campaign Performance</h3>
          <p className="card-sub">Revenue and conversions over time</p>
        </div>

        <div className="card-controls">
          <button className="select-btn">
            Revenue <ChevronDown size={14} />
          </button>

          <div className="range-tabs">
            {rangeTabs.map((tab) => (
              <button
                key={tab}
                className={`range-tab ${range === tab ? 'active' : ''}`}
                onClick={() => setRange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="legend">
        <span><i style={{ background: '#ec4899' }}></i> Revenue</span>
        <span><i style={{ background: '#8b5cf6' }}></i> Conversions</span>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ec4899" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#ec4899" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="convFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ece7f7" />

          <XAxis
            dataKey="date"
            ticks={['Apr 1', 'Apr 7', 'Apr 14', 'Apr 21', 'Apr 30']}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#6b7280' }}
          />

          {/* Left axis: revenue */}
          <YAxis
            yAxisId="left"
            domain={[0, 200000]}
            ticks={[0, 50000, 100000, 150000, 200000]}
            tickFormatter={(v) => (v === 0 ? '0' : `${v / 1000}K`)}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#6b7280' }}
          />

          {/* Right axis: conversions (hidden, bas scale ke liye) */}
          <YAxis yAxisId="right" orientation="right" domain={[0, 10000]} hide />

          <Tooltip content={<CustomTooltip />} />

          <Area
            yAxisId="left"
            type="monotone"
            dataKey="revenue"
            stroke="#ec4899"
            strokeWidth={2.5}
            fill="url(#revFill)"
            activeDot={{ r: 5 }}
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="conversions"
            stroke="#8b5cf6"
            strokeWidth={2.5}
            fill="url(#convFill)"
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CampaignPerformance;