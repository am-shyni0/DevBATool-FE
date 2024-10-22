import StoriesIcon from "@/assets/dashboard/StoriesIcon";

const NotificationElementStories = () => {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-100 my-2">
      <div className="flex gap-3 items-center">
        <div className="rounded-full bg-white p-1">
          <StoriesIcon size={20} />
        </div>
        <div>2 stories added to the sprint</div>
      </div>
      <div className="text-sm">30 minutes ago</div>
    </div>
  );
};

export default NotificationElementStories;
