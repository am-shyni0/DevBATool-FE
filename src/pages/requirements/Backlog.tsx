import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState, useEffect } from "react";
import { ChevronDown, MoreVertical, PlusIcon, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import IssueCard from "./components/IssueCard";
import EditEpicForm from "./components/EditEpicForm";
import { default as MAvatar } from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from 'axios'; // Import Axios to handle API requests
import Notiflix from 'notiflix'; // For notifications

const Backlog = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    issueType: '',
    status: '',
    epicName: ''
  });

  const [issues, setIssues] = useState([]);
  const [editingIssue, setEditingIssue] = useState(null);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const response = await axios.get('http://localhost:3001/backlogCreate');
      console.log(response.data)
      setIssues(response.data);
    } catch (error) {
      console.error('Error fetching issues:', error);
      Notiflix.Notify.failure('Failed to fetch backlog items');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/backlogCreate', formData);
      Notiflix.Notify.success('Backlog item added successfully');
      setFormData({
        projectName: '',
        issueType: '',
        status: '',
        epicName: ''
      });
      const refreshedIssues = await axios.get('http://localhost:3001/backlogCreate');
      setIssues(refreshedIssues.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      Notiflix.Notify.failure('Failed to add backlog item');
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error('Attempted to delete issue with undefined id');
      Notiflix.Notify.failure('Failed to delete backlog item: Invalid ID');
      return;
    }
    try {
      await axios.delete(`http://localhost:3001/backlogCreate/${id}`);
      Notiflix.Notify.success('Backlog item deleted successfully');
      fetchIssues();
    } catch (error) {
      console.error('Error deleting issue:', error);
      Notiflix.Notify.failure('Failed to delete backlog item');
    }
  };

  const handleEdit = (issue) => {
    setEditingIssue(issue);
  };

  const handleUpdate = async (updatedIssue) => {
    try {
      const response = await axios.put(`http://localhost:3001/backlogCreate/${updatedIssue.backlogId}`, updatedIssue);
      Notiflix.Notify.success('Backlog item updated successfully');
      setEditingIssue(null);
      fetchIssues(); // Refresh the issues list after update
    } catch (error) {
      console.error('Error updating issue:', error);
      Notiflix.Notify.failure('Failed to update backlog item');
    }
  };

  const handleCancelEdit = () => {
    setEditingIssue(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-h-[calc(100vh-22vh)]">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold md:text-2xl text-slate-500">
          Backlog
        </h1>

        {/* Create POP UP modal */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="sm" className="text-lg font-medium rounded-3xl">
              Create +
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent className="border-primary border-2">
            <div className="w-full bg-primary py-2 pl-6 rounded-3xl text-lg text-white font-bold m-0">
              New Epic
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 px-4">
                <div className="grid gap-2">
                  <Label className="text-md" htmlFor="project_name">
                    Project <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="project_name"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="OverX (Ox)"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex-1">
                    <Label className="text-md">
                      Issue Type <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      name="issueType"
                      value={formData.issueType}
                      onValueChange={(value) => setFormData({ ...formData, issueType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Epic">Epic</SelectItem>
                        <SelectItem value="Sprint">Sprint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Label className="text-md">
                      Status <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      name="status"
                      value={formData.status}
                      onValueChange={(value) => setFormData({ ...formData, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="to-do">To Do</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="complete">Complete</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label className="text-md">
                    Epic Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="epic_name"
                    name="epicName"
                    value={formData.epicName}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Epic One"
                    required
                  />
                </div>

                <div className=" flex flex-col space-y-5">
                  <div className="flex justify-between items-center px-12">
                    <div className="flex-col">
                      <div>Assignee</div>
                      <Button
                        variant="link"
                        className="text-primary text-sm font-semibold p-0 m-0 h-1"
                      >
                        Assign to me
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <Button variant="ghost" className="flex items-center">
                        <Avatar className="border-2 border-muted-foreground">
                          <PlusIcon className="m-auto" size={30} />
                        </Avatar>
                      </Button>
                      <div className="text-muted-foreground">unassigned</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center px-12">
                    <div>Reporter</div>
                    <div className="flex items-center gap-2">
                      <Avatar className="border-2 border-primary">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="text-muted-foreground">Jack Sparrow</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="text-md">Sprint Priority</div>
                </div>
              </div>

              <AlertDialogFooter className="gap-3 px-3 py-3">
                <AlertDialogCancel className="rounded-2xl py-1">
                  Cancel
                </AlertDialogCancel>
                <Button
                  type="submit"
                  className="border-primary border-2 rounded-2xl hover:bg-primary hover:text-white py-1"
                  variant="outline"
                >
                  Add
                </Button>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="flex items-center gap-4 justify-between my-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          />
        </div>
        <div>
          <AvatarGroup max={4}>
            <MAvatar
              alt="Remy Sharp"
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            />
            <MAvatar
              alt="Travis Howard"
              src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
            />
            <MAvatar
              alt="Cindy Baker"
              src="https://avatar.iran.liara.run/public/boy?username=Ash"
            />
            <MAvatar
              alt="Agnes Walker"
              src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk"
            />
            <MAvatar alt="+" />
          </AvatarGroup>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="ml-auto font-semibold text-muted-foreground text-md"
              >
                Version <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <span>version 1</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>version 2</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="ml-auto font-semibold text-muted-foreground text-md"
              >
                Epic <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <span>epic 1</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>epic 2</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="ml-auto font-semibold text-muted-foreground text-md"
              >
                Type <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <span>type 1</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>type 2</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button variant="link" className="font-semibold text-md">
          Clear Filters
        </Button>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="ml-auto font-semibold text-muted-foreground text-md"
              >
                <MoreVertical className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(issue.id)}>
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {editingIssue ? (
        <EditEpicForm
          issue={editingIssue}
          onUpdate={handleUpdate}
          onCancel={handleCancelEdit}
        />
      ) : (
      <section className="max-h-full overflow-scroll py-2">
        {issues.map((issue) => (
          <IssueCard
            key={issue.backlogId}
            issue={issue}
            onDelete={handleDelete} // Pass the entire function
            onEdit={() => handleEdit(issue)}
          />
        ))}
      </section>
      )}
    </div>
  );
};

export default Backlog;
