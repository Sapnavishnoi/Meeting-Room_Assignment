import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

const meetingrooms = [
  {
    id: 1,
    room: "Meeting Room 1",
  },
  {
    id: 2,
    room: "Meeting Room 2",
  },
  {
    id: 3,
    room: "Meeting Room 3",
  },
  {
    id: 4,
    room: "Meeting Room 4",
  },
];

export const MeetingRooms = () => {
  const [meetingroom, setMeetingroom] = useState("");

  const handleChange = (e) => {
    setMeetingroom(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="container-meetingroom">
          <h1>Meeting Room Booking</h1>
          <div>
            <TextField
              id="outlined-select-meetingroom"
              select
              label="Traning Room"
              value={meetingroom}
              onChange={handleChange}
              SelectProps={{
                meetingroom: true,
              }}
              helperText="Please select your training room"
              defaultValue="Training Room"
              variant="outlined"
            >
              {meetingrooms.map((option) => (
                <MenuItem key={option.id} value={option.room}>
                  {option.room}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <br />
          <div>
            <TextField
              id="outlined-helperText"
              label="Name"
              defaultValue="Enter your name"
              variant="outlined"
            />
          </div>
          <br />
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Meeting Description"
              multiline
              rows={4}
              defaultValue="Enter Meeting Description"
              variant="outlined"
            />
          </div>
          <br />
          <div>
            <CalendarComponent></CalendarComponent>{" "}
          </div>
          <div>
            <button className="container-btn">Book Appointment</button>
          </div>
        </div>
      </div>
    </>
  );
};
