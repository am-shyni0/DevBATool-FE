import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/_layouts/RootLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Backlog from "./pages/requirements/Backlog";
import ActiveSprints from "./pages/requirements/ActiveSprints";
import Issues from "./pages/requirements/Issues";
import Calendar from "./pages/scheduleMeetings/CalendarPage";
import JoinMeeting from "./pages/scheduleMeetings/JoinMeeting";
import Browse from "./pages/communication/Browse";
import Call from "./pages/communication/Call";
import Message from "./pages/communication/Message";
import VideoCall from "./pages/communication/VideoCall";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="requirements/">
        <Route path="backlog" element={<Backlog />} />
        <Route path="active-sprints" element={<ActiveSprints />} />
        <Route path="issues" element={<Issues />} />
      </Route>
      <Route path="schedule-meetings/">
        <Route path="join-meeting" element={<JoinMeeting />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>
      <Route path="communication/">
        <Route path="message" element={<Message />} />
        <Route path="video-call" element={<VideoCall />} />
        <Route path="call" element={<Call />} />
        <Route path="browse" element={<Browse />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
