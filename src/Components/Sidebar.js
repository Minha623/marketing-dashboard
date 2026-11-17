import { useState } from "react";
import {
  Home,
  Megaphone,
  BarChart3,
  Users,
  FileText,
  MousePointerClick,
  Mail,
  ClipboardList,
  Puzzle,
  Settings,
  Crown,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: Home,
  },
  {
    name: "Campaigns",
    icon: Megaphone,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Audience",
    icon: Users,
  },
  {
    name: "Content",
    icon: FileText,
  },
  {
    name: "Ads",
    icon: MousePointerClick,
  },
  {
    name: "Email",
    icon: Mail,
  },
  {
    name: "Reports",
    icon: ClipboardList,
  },
  {
    name: "Integrations",
    icon: Puzzle,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="sidebar">
      <div className="logo">
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="logoPink" x1="3" y1="4" x2="16" y2="28">
              <stop offset="0" stopColor="#f472b6" />
              <stop offset="1" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="logoPurple" x1="29" y1="4" x2="16" y2="28">
              <stop offset="0" stopColor="#a78bfa" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <path
            d="M3 8C3 4.5 7.5 3.5 9.5 6.5L16 17.5V27.5C9 23 3 16 3 8Z"
            fill="url(#logoPink)"
          />
          <path
            d="M29 8C29 4.5 24.5 3.5 22.5 6.5L16 17.5V27.5C23 23 29 16 29 8Z"
            fill="url(#logoPurple)"
          />
        </svg>
        <span className="logo-text">Nexa</span>
      </div>

      <nav className="menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className={`menu-item ${active === item.name ? "active" : ""}`}
              onClick={() => setActive(item.name)}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="upgrade-card">
        <div className="upgrade-icon">
          <Crown size={18} />
        </div>
        <h4>Upgrade to Pro</h4>
        <p>Unlock advanced insights and growth tools.</p>
        <button className="upgrade-btn">Upgrade</button>
      </div>

      <div className="sidebar-footer">
        <p>Smarter Marketing</p>
        <p>Brighter Growth</p>
      </div>
    </aside>
  );
}

export default Sidebar;
