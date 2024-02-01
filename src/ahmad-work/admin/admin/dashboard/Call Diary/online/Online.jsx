import styled from "@emotion/styled";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import style from "./online.module.css";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#f1effb", "pink", "lightBlue"];

const Online = () => {
  return (
    <div className={style.main}>
      <div className={style.section}>

        <div className={style.head} >
            <p className={style.title} >Online</p>
            <p className={style.value} >Customers Activity</p>
        </div>
        <div className={style.chart}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                <Label
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    fontFamily: "Poppins",
                    whiteSpace:'wrap',
                    color:'black'
                  }}
                  value="65%
Total Online Member"
                  position="center"
                />
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Online;
