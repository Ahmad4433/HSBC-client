import React from 'react';
import style from './table.module.css'


const StockTable = () => {

  const personData = [
    { id: 1, name: 'John Doe', age: 25, occupation: 'Software Engineer', country: 'USA', salary: 80000 },
    { id: 2, name: 'Jane Smith', age: 30, occupation: 'Data Scientist', country: 'Canada', salary: 90000 },
    { id: 3, name: 'Bob Johnson', age: 35, occupation: 'UX Designer', country: 'UK', salary: 75000 },
    { id: 4, name: 'Alice Williams', age: 28, occupation: 'Marketing Specialist', country: 'Australia', salary: 85000 },
    { id: 5, name: 'Charlie Brown', age: 32, occupation: 'Product Manager', country: 'Germany', salary: 95000 },
  ];

  return (
   <div className={style.main} >

      <table>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>age</th>
      <th>occupation</th>
      <th>country</th>
      <th>salary</th>
    </tr>

    {personData.map((data,index)=>{
      return <tr key={index} >
        <td data-name='id' >{data.id}</td>
        <td data-name='name' >{data.name}</td>
        <td data-name='age' >{data.age}</td>
        <td data-name='occupation' >{data.occupation}</td>
        <td data-name='country' >{data.country}</td>
        <td data-name='salary' >{data.salary}</td>
      </tr>
    })}

      </table>


   </div>
  );
};

export default StockTable;
