import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { EyeIcon, MoreVertical } from "lucide-react";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const BrowseCard = () => {
  return (
    <>
      <Card className="flex items-center my-2">
        <div className="flex items-center mx-3">
          <Checkbox />
        </div>
        <div className="flex items-center justify-between flex-auto ml-3 mr-12 py-1">
          <div className="flex items-center gap-4 flex-1">
            <div>Admin | Login and Registration Feature</div>
          </div>

          <div className="flex justify-center items-center gap-2 flex-1">
            <Avatar className="border-2 border-primary">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-light">willsmith@gmail.com</p>
          </div>

          <div className="flex-1  flex justify-center">2nd April 2022</div>

          <div className="flex-1 flex justify-center">1 MB</div>
        </div>

        <div className="mr-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 px-1">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <span>Download</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Delete</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Share</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>
    </>
  );
};

export default BrowseCard;
