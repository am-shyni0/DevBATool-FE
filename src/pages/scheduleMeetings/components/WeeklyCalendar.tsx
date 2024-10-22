import React, { useState } from 'react';
import { format } from 'date-fns';
import { MoreVertical, Edit, Trash } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FormattedEvent {
  id: number;
  title: string;
  startTime: string;
}

interface WeeklyCalendarProps {
  events: Record<string, FormattedEvent[]>;
  weekDays: Date[];
  onEditEvent: (eventId: number) => void;
  onDeleteEvent: (eventId: number) => void;
}

const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({ events, weekDays, onEditEvent, onDeleteEvent }) => {
  return (
    <div className="grid grid-cols-7 gap-1">
      {weekDays.map((day) => {
        const dayString = day.toDateString();
        const dayEvents = events[dayString] || [];

        return (
          <div key={dayString} className="border p-2 min-h-[120px]">
            <div className="font-bold mb-2">{format(day, 'd')}</div>
            <div className="space-y-2">
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-blue-500 text-white p-2 rounded-md text-sm relative group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{event.title}</div>
                      <div className="text-xs">{event.startTime}</div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => onEditEvent(event.id)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onDeleteEvent(event.id)}>
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyCalendar;