import { Link } from "react-router-dom";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = (props) => {
  return (
    <div className="flex h-full">
      <div className="flex-[3] flex-col justify-between">
        <div className="flex items-center gap-2">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="flex-[2] flex flex-col justify-between">
        <div className="w-full h-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col text-right">
          <span
            className="font-bold text-lg"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="text-sm">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
