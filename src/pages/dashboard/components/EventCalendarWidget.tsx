import React, { useState } from "react";
import Calendar from "react-calendar";
import { isSameDay, parseISO } from "date-fns";
import "react-calendar/dist/Calendar.css";

interface Event {
  date: string;
  count: number;
}

const EventCalendarWidget: React.FC = () => {
  const events: Event[] = [
    { date: "2024-09-23", count: 3 },
    { date: "2024-09-25", count: 1 },
    { date: "2024-09-28", count: 2 },
  ];

  const [value, setValue] = useState<Date>(new Date());

  const onChangeDateValue = () => {};

  const getEventCount = (date: Date): number => {
    const event = events.find((event) => isSameDay(parseISO(event.date), date));
    return event ? event.count : 0;
  };

  const renderTileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const eventCount = getEventCount(date);
      if (eventCount > 0) {
        return (
          <div>
            {Array.from({ length: eventCount }, (_, index) => (
              <div
                key={index}
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "blue",
                  marginBottom: "2px",
                }}
              />
            ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <>
      <Calendar
        onChange={onChangeDateValue}
        value={value}
        tileContent={renderTileContent}
        className="w-full border-none rounded-lg"
      />
    </>
  );
};

export default EventCalendarWidget;
