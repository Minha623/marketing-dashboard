import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { trafficData } from "../data/mockData";

function TrafficChannels(){
    return(
        <div className="card">
            <h3 className="card-title">Traffic Channels</h3>
            <p className="card-sub">Share of website traffic</p>

            <div className="traffic-body">
                <div className="donut-wrap">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={trafficData} dataKey="value" innerRadius="62%" outerRadius="95%" cornerRadius={6} paddingAngle={3} startAngle={90} endAngle={-270} stroke="none">
                                {trafficData.map((item)=>(
                                    <Cell key={item.name} fill={item.color} />
                                ))}
                                </Pie> 
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="donut-center">
                        <strong>256,890</strong>
                        <span>Total Visitors</span>
                    </div>
                </div>

                <ul className="traffic-legend">
                    {trafficData.map((item) =>(
                        <li key={item.name}>
                            <span className="l-name">
                                <i style={{background:item.color}}></i>
                                {item.name}
                            </span>
                            <span className="l-value">{item.value}%</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TrafficChannels;