import { CommunicationsIcon } from "@/assets/sidebar/CommunicationsIcon";
import { DashboardIcon } from "@/assets/sidebar/DashboardIcon";
import { MeetingsIcon } from "@/assets/sidebar/MeetingsIcon";
import { RequirementsIcon } from "@/assets/sidebar/RequirementsIcon";
import { MainTab } from "@/types/types";

export const MAIN_TABS: MainTab[] = [
  {
    name: "Dashboard",
    to: "/",
    slug: "",
    sub: [],
    icon: DashboardIcon,
  },
  {
    name: "Requirements",
    to: "/requirements/backlog",
    slug: "requirements",

    icon: RequirementsIcon,
    sub: [
      {
        name: "Backlog",
        to: "/requirements/backlog",
        slug: "backlog",
      },
      {
        name: "Active Sprints",
        to: "/requirements/active-sprints",
        slug: "active-sprints",
      },
      {
        name: "Issues",
        to: "/requirements/issues",
        slug: "issues",
      },
    ],
  },
  {
    name: "Schedule Meetings",
    to: "/schedule-meetings/join-meeting",
    slug: "schedule-meetings",

    icon: MeetingsIcon,
    sub: [
      {
        name: "Join Meetings",
        to: "/schedule-meetings/join-meeting",
        slug: "join-meeting",
      },
      {
        name: "Calendar",
        to: "/schedule-meetings/calendar",
        slug: "calendar",
      },
    ],
  },
  {
    name: "Communication",
    to: "/communication/message",
    slug: "communication",
    icon: CommunicationsIcon,
    sub: [
      {
        name: "Message",
        to: "/communication/message",
        slug: "message",
      },
      {
        name: "Video Call",
        to: "/communication/video-call",
        slug: "video-call",
      },
      {
        name: "Call",
        to: "/communication/call",
        slug: "call",
      },
      {
        name: "Browse",
        to: "/communication/browse",
        slug: "browse",
      },
    ],
  },
];
