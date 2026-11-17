import { useState } from 'react';
import { BarChart, Bar, XAxis, Cell, LabelList, ResponsiveContainer } from 'recharts';
import { User } from 'lucide-react';
import { ageData, demoTabs } from '../data/mockData';

function AudienceDemographics() {
  const [tab, setTab] = useState('Age');

  return (
    <div className="card">
      <h3 className="card-title">Audience Demographics</h3>
      <p className="card-sub">Your total audience</p>

      <div className="demo-tabs">
        {demoTabs.map((t) => (
          <button
            key={t}
            className={`demo-tab ${tab === t ? 'active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={190}>
        <BarChart data={ageData} margin={{ top: 22, right: 0, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#6b7280' }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={30}>
            {ageData.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              formatter={(v) => `${v}%`}
              style={{ fontSize: 12, fontWeight: 600, fill: '#1e1b4b' }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="gender-row">
        <div className="gender-box">
          <span className="g-icon" style={{ background: '#fce7f3', color: '#ec4899' }}>
            <User size={18} />
          </span>
          <div>
            <strong>62%</strong>
            <small>Female</small>
          </div>
        </div>
        <div className="gender-box">
          <span className="g-icon" style={{ background: '#ede9fe', color: '#7c3aed' }}>
            <User size={18} />
          </span>
          <div>
            <strong>38%</strong>
            <small>Male</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudienceDemographics;