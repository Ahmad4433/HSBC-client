import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import style from "./reminderOfDay.module.css";
import { IoIosArrowDown } from "react-icons/io";
const ReminderOfDay = () => {
  const data = [
    { month: "Jan", value: 400 },
    { month: "Feb", value: 300 },
    { month: "Mar", value: 600 },
    { month: "Apr", value: 1000 },
    { month: "May", value: 200 },
    { month: "Jun", value: 400 },
    { month: "Jul", value: 700 },
    { month: "Aug", value: 800 },
    { month: "Sep", value: 900 },
    { month: "Oct", value: 600 },
    { month: "Nov", value: 1100 },
    { month: "Dec", value: 400 },
  ];

  return (
    <div className={style.main}>
      <div className={style.section}>
        <div className={style.bar}>
          <div className={style.inner}>
            <p className={style.title}>Reminder Of The Day</p>
            <p className={style.select}>
              <span className={style.range}>Weekly</span>
              <IoIosArrowDown className={style.icon} />
            </p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width="100%"
            height={300}
            data={data}
            // margin={{ bottom: 30 }}
            barCategoryGap={5}
          >
            <XAxis
              tick={{ fill: "black", fontSize: 12 }}
              dataKey="month"
              interval={0}
              textAnchor="end"
              axisLine={false}
            />
            <Tooltip />
            <Bar dataKey="value" fill="#39DE5D" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReminderOfDay;
