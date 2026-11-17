import { ArrowUp } from "lucide-react";

function StatCard({title, value, change, icon:Icon, bg, color}){
    return(
        <div className="stat-card">
            <div className="stat-icon" style={{backgroundColor:bg, color:color}}>
                <Icon size={22}/>
            </div>

            <div className="stat-info">
                <p className="stat-title">{title}</p>
                <h3 className="stat-value">{value}</h3>
                <p className="stat-change">
                    <ArrowUp size={13}/>
                    <span className="up">{change}</span>
                    <span className="muted">vs last month</span>
                </p>
            </div>
        </div>
    )
}

export default StatCard;