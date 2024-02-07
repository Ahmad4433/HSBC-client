import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import style from './reminderOfDay.module.css'
import { IoIosArrowDown } from "react-icons/io";
const ReminderOfDay = () => {
  const data = [
    { month: "January", value: 400 },
    { month: "February", value: 300 },
    { month: "March", value: 600 },
    { month: "April", value: 1000 },
    { month: "May", value: 200 },
    { month: "June", value: 400 },
    { month: "July", value: 700 },
    { month: "August", value: 800 },
    { month: "September", value: 900 },
    { month: "October", value: 600 },
    { month: "November", value: 1100 },
    { month: "December", value: 400 },
  ];

  return (
<div className={style.main} >
<div className={style.section} >
<div className={style.bar} >

    <div className={style.inner} >
        <p className={style.title} >Reminder Of The Day</p>
        <p className={style.select} ><span className={style.range} >Weekly</span>
            <IoIosArrowDown className={style.icon} />
        </p>
    </div>
</div>

<ResponsiveContainer width='100%' height={300}>
      <BarChart
        data={data}
      >
     
        <XAxis dataKey="month" />
  
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#39DE5D" />
      </BarChart>
    </ResponsiveContainer>
</div>
</div>
  );
};

export default ReminderOfDay;
