import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import style from "./advanceSrd.module.css";
const AdvanceSrd = () => {
  const data = [
    { name: "Page A", sale: 4000, purchase: 2400, amt: 2400 },
    { name: "Page B", sale: 3000, purchase: 1398, amt: 2210 },
    { name: "Page C", sale: 2000, purchase: 9800, amt: 2290 },
    { name: "Page D", sale: 2780, purchase: 3908, amt: 2000 },
    { name: "Page E", sale: 1890, purchase: 4800, amt: 2181 },
    { name: "Page F", sale: 2390, purchase: 3800, amt: 2500 },
    { name: "Page G", sale: 3490, purchase: 4300, amt: 2100 },
  ];

  return (
    <div className={style.main}>
      <div className={style.head}>
        <p className={style.title}>Advance Of SRD Funds</p>
        <div className={style.inner}>
          <span>8:00</span>
          <span>12:00</span>
          <span>16:00</span>
          <span>20:00</span>
        </div>
      </div>
      <ResponsiveContainer width={300} height={300}>
        <LineChart
          width={200}
          height={300}
          data={data}
            // margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="purchase"
            stroke="#04e762"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="sale" stroke="#ff715b" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdvanceSrd;
