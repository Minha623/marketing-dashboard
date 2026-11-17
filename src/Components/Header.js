import { Calendar, ChevronDown } from 'lucide-react';

function Header() {
  return (
    <div className="page-header">
      <div>
        <p className="welcome">Welcome back, Jessica 👋</p>
        <h1 className="page-title">Marketing Dashboard</h1>
        <p className="subtitle">
          Track performance, optimize campaigns, and grow your brand — all in one place.
        </p>
      </div>

      <button className="date-picker">
        <Calendar size={16} />
        <span>Nov 16, 2026 – Dec 31, 2026</span>
        <ChevronDown size={16} />
      </button>
    </div>
  );
}

export default Header;