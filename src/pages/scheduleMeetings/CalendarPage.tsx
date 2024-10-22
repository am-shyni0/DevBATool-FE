import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { default as MAvatar } from "@mui/material/Avatar";
import { AvatarGroup } from "@mui/material";
import {
  CalendarIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  PlusIcon,
  Search,
  XIcon,
} from "lucide-react";
import WeeklyCalendar from "./components/WeeklyCalendar";
import { Card } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, parseISO, isValid } from "date-fns";
import { Textarea } from "@/components/ui/textarea";


interface Event {
  calendarId: number;
  meetingName: string;
  date: string;
  time: string;
  addDescription: string;
}

interface FormattedEvent {
  id: number;
  title: string;
  startTime: string;
}

interface WeeklyCalendarProps {
  events: Record<string, FormattedEvent[]>;
  weekDays: Date[];
}

const CalendarPage: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [formData, setFormData] = useState({
    calendarId: 0,
    meetingName: "",
    date: "",
    time: "",
    addDescription: "",
  });
  const [events, setEvents] = useState<Event[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3001/calendarCreate");
      if (response.ok) {
        const data: Event[] = await response.json();
        console.log("Fetched events:", data);
        setEvents(data);
      } else {
        console.error("Failed to fetch events");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setSelectedDate(selectedDate);
      setFormData((prev) => ({ ...prev, date: format(selectedDate, "yyyy-MM-dd") }));
    }
  };

  const openCreateDialog = () => {
    resetForm();
    setIsEditing(false);
    setIsDialogOpen(true);
  };

  const openEditDialog = (eventId: number) => {
    const eventToEdit = events.find(event => event.calendarId === eventId);
    if (eventToEdit) {
      setFormData(eventToEdit);
      setIsEditing(true);
      setIsDialogOpen(true);
    }
  };

  const handleSubmit = async () => {
    let url = 'http://localhost:3001/calendarCreate';
    let method = 'POST';
    let body: Partial<Event> = { ...formData };

    if (isEditing) {
      url = `${url}/${formData.calendarId}`;
      method = 'PUT';
      // Remove calendarId from the body for PUT requests
      const { calendarId, ...bodyWithoutId } = body;
      body = bodyWithoutId;
    }

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        console.log(isEditing ? 'Meeting updated successfully' : 'Meeting created successfully');
        fetchEvents(); // Refetch events to update the calendar
        setIsDialogOpen(false);
        resetForm();
      } else {
        console.error(isEditing ? 'Failed to update meeting' : 'Failed to create meeting');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setIsDialogOpen(false);
  };
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(selectedDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const formattedEvents = events.reduce((acc, event) => {
    if (!event.date) {
      console.warn(`Event with id ${event.calendarId} has no date`);
      return acc;
    }

    const parsedDate = parseISO(event.date);
    if (!isValid(parsedDate)) {
      console.warn(`Invalid date for event: ${event.date}`);
      return acc;
    }

    const eventDate = parsedDate.toDateString();
    if (!acc[eventDate]) {
      acc[eventDate] = [];
    }
    acc[eventDate].push({
      id: event.calendarId,
      title: event.meetingName,
      startTime: event.time || 'No time specified',
    });
    return acc;
  }, {} as Record<string, FormattedEvent[]>);


  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = direction === 'prev' ? subMonths(selectedDate, 1) : addMonths(selectedDate, 1);
    handleDateSelect(newDate);
  };

  const handleEditEvent = (eventId: number) => {
    const eventToEdit = events.find(event => event.calendarId === eventId);
    if (eventToEdit) {
      setFormData(eventToEdit);
      setIsEditing(true);
      setIsDialogOpen(true);
    }
  };

  const handleDeleteEvent = async (eventId: number) => {
    try {
      const response = await fetch(`http://localhost:3001/calendarCreate/${eventId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setEvents(prevEvents => prevEvents.filter(event => event.calendarId !== eventId));
        console.log(`Event with id ${eventId} deleted successfully`);
      } else {
        console.error('Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      calendarId: 0,
      meetingName: "",
      date: "",
      time: "",
      addDescription: "",
    });
    setIsEditing(false);
  };

  console.log("Formatted events:", formattedEvents);

  return (
    <div className="max-h-[calc(100vh-28vh)]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Calendar</h1>
        <Button
          size="sm"
          className="bg-blue-500 text-white rounded-full px-4 py-2"
          onClick={() => {
            resetForm();
            setIsDialogOpen(true);
          }}
        >
          Create +
        </Button>
      </div>

      <div className="flex gap-4 justify-between mt-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          />
        </div>

        <Button
          variant="outline"
          className="border-2 border-primary rounded-3xl text-primary font-semibold"
          onClick={() => handleDateSelect(new Date())}
        >
          Today
        </Button>

        <div className="flex items-center gap-3">
          <ChevronLeft
            className="text-muted-foreground cursor-pointer"
            onClick={() => navigateMonth('prev')}
          />
          <ChevronRight
            className="text-muted-foreground cursor-pointer"
            onClick={() => navigateMonth('next')}
          />
          <div className="text-xl font-bold text-muted-foreground">
            {format(selectedDate, "MMMM yyyy")}
          </div>
        </div>

        <AvatarGroup max={4}>
          <MAvatar
            alt="Remy Sharp"
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          />
          <MAvatar
            alt="Travis Howard"
            src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
          />
          <MAvatar
            alt="Cindy Baker"
            src="https://avatar.iran.liara.run/public/boy?username=Ash"
          />
          <MAvatar
            alt="Agnes Walker"
            src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk"
          />
          <MAvatar alt="+" />
        </AvatarGroup>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="ml-auto font-semibold text-muted-foreground text-md"
            >
              Date <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              className="mx-auto"
            />
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="link" className="font-semibold text-md">
          Clear Filters
        </Button>
      </div>

      {/* Calendar header */}
      <div className="flex items-center mt-4 ml-12 pl-2">
        {daysInMonth.slice(0, 7).map((date) => (
          <Card
            key={date.toDateString()}
            className="flex-1 p-4 text-center font-semibold rounded-none"
          >
            {format(date, "EEE")}
          </Card>
        ))}
      </div>

      {/* calendar body */}
      <div className="my-2 max-h-full overflow-y-scroll">
        <WeeklyCalendar
          events={formattedEvents}
          weekDays={daysInMonth}
          onEditEvent={handleEditEvent}
          onDeleteEvent={handleDeleteEvent}
        />

        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent className="bg-white rounded-lg overflow-hidden max-w-md p-0">
            <div className="bg-blue-600 p-4 text-white">
              <AlertDialogTitle className="text-xl font-bold">
                {isEditing ? 'Edit Meeting' : 'Create Meeting'}
              </AlertDialogTitle>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="meetingName" className="block text-sm font-medium text-gray-700">
                    Meeting Name
                  </Label>
                  <Input
                    id="meetingName"
                    name="meetingName"
                    value={formData.meetingName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Time
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="addDescription" className="block text-sm font-medium text-gray-700">
                    Description
                  </Label>
                  <Textarea
                    id="addDescription"
                    name="addDescription"
                    value={formData.addDescription}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    rows={3}
                  />
                </div>
              </div>
            </div>
            <AlertDialogFooter className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <Button
                onClick={handleSubmit}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {isEditing ? 'Save Changes' : 'Create'}
              </Button>
              <Button
                onClick={() => setIsDialogOpen(false)}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>



    </div >
  );
};

export default CalendarPage;