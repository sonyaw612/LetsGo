import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

class EventCoord extends React.Component{
    state = {
        // insert starting variables
    }

    render(){
        return(
            <div style = {{ textAlign: 'center' }} >
                <h1>Event Coordinator's Page</h1>
            </div>
        );
    }
    const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
/*
const responsivePopup = {
  medium: {
      display: 'anchored',
      width: 510,
      fullScreen: false,
      touchUi: false
  }
};
*/

// Manuel Event creation these will always pop out when the calendar is booted up
// Array where the events would be stored there are 4 example in the array
const events = [
  {
    title: "Marketing Business Meeting",
    allDay: true,
    start: new Date(2022, 4, 2),
    end: new Date(2022, 4, 4)
  },
  {
    title: "Logan and Cinthia's Wedding",
    start: new Date(2022, 4, 12),
    end: new Date(2022, 4, 12)
  },
  {
    title: "Latio Concert",
    start: new Date(2022, 4, 20),
    end: new Date(2022, 4, 25)
  },
  {
    title: "T-Mobile Technical Interview",
    start: new Date(2022, 4, 13),
    end: new Date(2022, 4, 13)
  }
]

function App() {

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
  const [allEvents, setallEvents] = useState(events)
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }

  function handleAddEvent() {
    setallEvents([...allEvents, newEvent])
  }
  //pop-up currently disable
  /*
  const [popupEventTitle, setTitle] = React.useState('');
  const [popupEventDescription, setDescription] = React.useState('');
  const [popupEventAllDay, setAllDay] = React.useState(true);
  const [popupEventDate, setDate] = React.useState([]);
  const [popupEventStatus, setStatus] = React.useState('busy');
  */

  // Display the buttons to add title, start and end time of the event
  return (
    <div className="App">
      <header> 
      <h1>Events Scheduler</h1>
      <h2>Add New Event</h2>
      </header>

      <div>
        <input type="text" placeholder="Add Title" style={{ width: "12%", marginRight: "0px" }}
          value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }}
          selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
        <DatePicker placeholderText="End Date"
          selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />

        <button style={{ marginTop: "20px" }} onClick={handleAddEvent}>
          Add Event
        </button>

      </div>

      <Calendar
        value={dateState}
        onChange={changeDate}
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }} />
    </div>
  );
}

}

export default EventCoord;
