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

const IssueCard = ({ issue, onDelete, onEdit }) => {
  const handleDeleteClick = () => {
    if (issue && issue.backlogId) {
      onDelete(issue.backlogId);
    } else {
      console.error('Attempted to delete issue with no id', issue);
    }
  };

  return (
    <Card className="flex items-stretch my-2">
      <div className={`w-3 min-h-full ml-3 ${issue.status === "Done" ? "bg-green-500" : "bg-yellow-500"}`}></div>
      <div className="flex items-center justify-between flex-auto ml-3 mr-4 py-1">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Checkbox />
          </div>
          <div>
            <span>{issue.projectName} </span>
            {issue.assignee} | {issue.epicName}
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div>
            <Badge className={`rounded-[3px] font-semibold ${issue.status === "Done" ? "bg-green-500" : "bg-yellow-500"}`}>
              {issue.status}
            </Badge>
          </div>
          <div>
            <EyeIcon className="text-gray-500" />
          </div>
          <div>
            <Avatar>
              <AvatarImage src={issue.assigneeAvatar || "https://github.com/shadcn.png"} alt={issue.assignee || "CN"} />
              <AvatarFallback>{issue.assignee ? issue.assignee[0] : "CN"}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 px-1">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
              <DropdownMenuItem onClick={() => onEdit(issue)}>
                  <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDeleteClick}>
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default IssueCard;
