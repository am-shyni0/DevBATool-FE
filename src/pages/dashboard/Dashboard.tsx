import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import MembersIcon from "@/assets/dashboard/MembersIcon";
import StoriesIcon from "@/assets/dashboard/StoriesIcon";
import BugsIcon from "@/assets/dashboard/BugsIcon";
import TasksIcon from "@/assets/dashboard/TasksIcon";
import SprintProgressAccordianElement from "./components/SprintProgressAccordianElement";
import NotificationElement from "./components/NotificationElement";
import NotificationElementTasks from "./components/NotificationElementTasks";
import NotificationIconStories from "./components/NotificationIconStories";
import EventCalendarWidget from "./components/EventCalendarWidget";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-lg font-semibold md:text-2xl text-slate-500 py-4">
        OverX Project | Ox Sprint 13
      </h1>

      <div className="flex flex-col gap-10">
        <div className="grid gap-4 md:grid-cols-2 md:gap-20 lg:grid-cols-4 px-40">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2">
              <div className="border-2 border-primary rounded-full p-2">
                <MembersIcon size={50} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl text-center font-bold">7</div>
              <p className="text-xs text-muted-foreground text-center">
                Total Members
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2">
              <div className="border-2 border-primary rounded-full p-2">
                <StoriesIcon size={50} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl text-center font-bold">4/18</div>
              <p className="text-xs text-muted-foreground text-center">
                Total Stories
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2">
              <div className="border-2 border-primary rounded-full p-2">
                <BugsIcon size={50} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl text-center font-bold">21/25</div>
              <p className="text-xs text-muted-foreground text-center">
                Total Bugs
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2">
              <div className="border-2 border-primary rounded-full p-2">
                <TasksIcon size={50} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl text-center font-bold">8/12</div>
              <p className="text-xs text-muted-foreground text-center">
                Total Tasks
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-2 md:gap-4 grid-cols-full lg:grid-cols-10">
          {/* Dashboard Calendar */}
          <Card
            className="col-span-full lg:col-span-3 bg-zinc-100 border-none"
            x-chunk="dashboard-01-chunk-4"
          >
            <CardTitle className="bg-primary text-white text-xl p-6 text-center rounded-xl">
              Today You Have{" "}
              <span className="text-yellow-500 text-2xl"> 3</span> Meetings to
              Attend
            </CardTitle>
            <div className="flex items-center justify-center mt-8">
              <EventCalendarWidget />
            </div>
          </Card>

          {/* Dashboard Notifications */}
          <Card
            className="col-span-full lg:col-span-3"
            x-chunk="dashboard-01-chunk-5"
          >
            <CardTitle className="bg-primary text-white text-xl p-6 rounded-t-xl">
              Notifications
            </CardTitle>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger className="font-semibold" value="all">
                  ALL
                </TabsTrigger>
                <TabsTrigger className="font-semibold" value="bugs">
                  BUGS
                </TabsTrigger>
                <TabsTrigger className="font-semibold" value="tasks">
                  TASKS
                </TabsTrigger>
                <TabsTrigger className="font-semibold" value="stories">
                  STORIES
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="p-2">
                <ScrollArea className="h-[450px]">
                  <div className="font-semibold my-1 ml-2">Today</div>
                  <NotificationElement />
                  <NotificationElement />
                  <NotificationElement />
                  <NotificationElementTasks />
                  <NotificationElementTasks />
                  <NotificationElementTasks />
                  <NotificationElement />
                  <div className="font-semibold my-1 ml-2">Yesterday</div>
                  <NotificationElement />
                  <NotificationElement />
                  <NotificationIconStories />
                  <NotificationElement />
                  <NotificationIconStories />
                  <NotificationElement />
                </ScrollArea>
              </TabsContent>
              <TabsContent value="bugs" className="p-2">
                <ScrollArea className="h-[450px]">
                <div className="font-semibold my-1 ml-2">Today</div>
                  <NotificationElement />
                  <NotificationElement />
                  <NotificationElement />
                  <NotificationElement />
                  <NotificationElement />
                  <NotificationElement />
                  <NotificationElement />
                  <div className="font-semibold my-1 ml-2">Yesterday</div>
                  <NotificationElement />
                  <NotificationElement />
                  
                </ScrollArea>
              </TabsContent>
              <TabsContent value="tasks">
                <ScrollArea className="h-[450px]">
                <div className="font-semibold my-1 ml-2">Today</div>
                  <NotificationElementTasks />
                  <NotificationElementTasks />
                  
                
                  <div className="font-semibold my-1 ml-2">Yesterday</div>
                  <NotificationElementTasks />
                  <NotificationElementTasks />
                  <NotificationElementTasks />
                  <NotificationElementTasks />
                  <NotificationElementTasks />
                  <NotificationElementTasks />
                </ScrollArea>
              </TabsContent>
              <TabsContent value="stories">
                <ScrollArea className="h-[450px]">
                <div className="font-semibold my-1 ml-2">Today</div>
                <NotificationIconStories />
                  <NotificationIconStories />
                  
                
                  <div className="font-semibold my-1 ml-2">Yesterday</div>
                  <NotificationIconStories />
                  <NotificationIconStories />
                  <NotificationIconStories />
                  <NotificationIconStories />
                  <NotificationIconStories />
                  <NotificationIconStories />
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </Card>

          {/*Dashboard Sprint Progress  */}
          <Card
            className="col-span-full lg:col-span-4"
            x-chunk="dashboard-01-chunk-5"
          >
            <CardTitle className="bg-primary text-white text-xl p-6 rounded-xl">
              Sprint Progress
            </CardTitle>
            <div className="px-2">
              <div className="flex items-center justify-between px-8">
                <div className="py-2 text-center font-semibold flex-1">
                  Stories
                </div>
                <div className="flex items-center justify-between flex-1">
                  <div className="py-2 text-center font-semibold">
                    Story Points
                  </div>
                  <div className="py-2 text-center font-semibold">Progress</div>
                </div>
              </div>

              <ScrollArea className="h-[450px]">
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
                <SprintProgressAccordianElement />
              </ScrollArea>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
