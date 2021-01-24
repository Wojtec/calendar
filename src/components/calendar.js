import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
function calendar() {
  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
    />
  );
}

export default calendar;
