import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EditEpicForm = ({ issue, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    backlogId: issue.backlogId,
    projectName: issue.projectName,
    issueType: issue.issueType,
    status: issue.status,
    epicName: issue.epicName
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="projectName">Project Name</Label>
        <Input
          id="projectName"
          name="projectName"
          value={formData.projectName}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="issueType">Issue Type</Label>
        <Select
          name="issueType"
          value={formData.issueType}
          onValueChange={(value) => handleSelectChange("issueType", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select issue type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Epic">Epic</SelectItem>
            <SelectItem value="Bug">Bug</SelectItem>
            <SelectItem value="Story">Story</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="status">Status</Label>
        <Select
          name="status"
          value={formData.status}
          onValueChange={(value) => handleSelectChange("status", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Open">Open</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="epicName">Epic Name</Label>
        <Input
          id="epicName"
          name="epicName"
          value={formData.epicName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Update
        </Button>
      </div>
    </form>
  );
};

export default EditEpicForm;