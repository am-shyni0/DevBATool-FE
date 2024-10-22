import BugsIcon from "@/assets/dashboard/BugsIcon";

const NotificationElement = () => {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-100 my-2">
      <div className="flex gap-3 items-center">
        <div className="rounded-full bg-white p-1">
          <BugsIcon size={20} />
        </div>
        <div>3 bugs added to the sprint</div>
      </div>
      <div className="text-sm">2 minutes ago</div>
    </div>
  );
};

export default NotificationElement;
