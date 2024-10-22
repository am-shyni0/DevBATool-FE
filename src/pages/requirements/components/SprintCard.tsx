import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";

const SprintCard = () => {
  return (
    <Card className="flex items-stretch justify-start gap-4 shadow-md bg-zinc-100">
      <div className="w-2 min-h-full bg-green-500 ml-2"></div>
      <div className="flex-col flex-auto space-y-2">
        <div className="flex items-center justify-between mt-2 mr-2">
          <div>Bug Fix (2)</div>
          <div>
            <Avatar className="border-2 border-primary">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex items-center justify-between pb-2 mr-2">
          <div>Progress</div>
          <div className="text-primary/70">
            <Eye />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SprintCard;
