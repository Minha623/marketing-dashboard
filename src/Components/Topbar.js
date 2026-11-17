import { Search, Bell, ChevronDown } from "lucide-react";

function Topbar(){
    return(
        <header className="topbar">
            <div className="search-box">
                <Search size={18} />
                <input type="text" placeholder="Search campaigns, reports, or anything..."/>
                <span className="shortcut">⌘ K</span>
            </div>
            <div className="topbar-right">
                <button className="bell">
                    <Bell size={18} />
                    <span className="dot"></span>
                </button>

                <div className="profile">
                    <div className="avatar">JD</div>
                    <div className="profile-info">
                        <strong>Jessica Doe</strong>
                        <small>Marketing Leads</small>
                    </div>
                    <ChevronDown size={16}/>
                </div>
            </div>
        </header>
    )
}

export default Topbar;