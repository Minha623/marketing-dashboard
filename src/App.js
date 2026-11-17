import "./App.css";
import CampaignPerformance from "./Components/CampaignPerfomance";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import StatCard from "./Components/StatCard";
import Topbar from "./Components/Topbar";
import TrafficChannels from "./Components/TrafficChannels";
import SocialGrowth from "./Components/SocialGrowth";
import EmailPerformance from "./Components/Emailperfomance";
import AdSpendRoas from "./Components/AdSpendRoas";
import ConversionFunnel from "./Components/ConversionFunnel";
import AudienceDemographics from "./Components/AudienceDemoGraphics";
import TopLocations from "./Components/TopLocations";
import { stats } from "./data/mockData";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="main">
          <Header />

          <div className="stats-grid">
            {stats.map((item) => (
              <StatCard
                key={item.id}
                title={item.title}
                value={item.value}
                change={item.change}
                icon={item.icon}
                bg={item.bg}
                color={item.color}
              />
            ))}
          </div>
          <div className="row-two">
            <CampaignPerformance />
            <TrafficChannels />
          </div>
          <div className="row-three">
            <SocialGrowth />
            <EmailPerformance />
            <AdSpendRoas />
          </div>
          <div className="row-four">
  <ConversionFunnel />
  <AudienceDemographics />
  <TopLocations />
</div>
        </div>
      </div>
    </div>
  );
}

export default App;
