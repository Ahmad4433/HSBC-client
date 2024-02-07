import React from "react";
import NewCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./custom.css";
const Calendar = () => {

    const tileClassName = ({ view }) => {
        if (view === 'month') {
          return 'custom-title'; // Custom class for styling the title
        }
        return null;
      };
    

  return (
    <div className="calender-main">
        <div className='calendar-action' >
            <button className="clnd1" >Month</button>
            <button className="clnd2" >Week</button>
        </div>
      <div className="custom-calendar">
        <NewCalendar tileClassName={tileClassName}  />
      </div>
    </div>
  );
};

export default Calendar;
