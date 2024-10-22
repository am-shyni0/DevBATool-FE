import BugsIcon from "@/assets/dashboard/BugsIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const AccordianContentElement = () => {
  return (
    <div className="flex items-center justify-center w-full gap-12 py-2">
      <div className="flex items-center gap-2">
        <div className="border-2 p-1 border-primary/50 rounded-md">
          <BugsIcon size={20} />
        </div>
        <div className="text-muted-foreground text-sm">
          <span className="px-2">Ox </span> Admin | Login and Registrat...
        </div>
      </div>

      <Avatar className="border-2 border-primary size-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <Badge className="bg-green-500 rounded-[3px] font-semibold">Done</Badge>
      </div>
    </div>
  );
};

export default AccordianContentElement;
