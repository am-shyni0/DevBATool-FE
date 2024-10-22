import TasksIcon from "@/assets/dashboard/TasksIcon";

const NotificationElementTask = () => {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-100 my-2">
      <div className="flex gap-3 items-center">
        <div className="rounded-full bg-white p-1">
          <TasksIcon size={20} />
        </div>
        <div>5 tasks added to the sprint</div>
      </div>
      <div className="text-sm">10 minutes ago</div>
    </div>
  );
};

export default NotificationElementTask;
