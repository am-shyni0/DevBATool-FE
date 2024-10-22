import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search, MoreVertical, Upload, X, Edit, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BrowseItem {
  id: number;
  name: string;
  owner: string;
  avatar: string;
  lastModified: string;
  fileSize: string;
}

interface BrowseCardProps extends BrowseItem {
  onEdit: (id: number, newName: string) => void;
  onDelete: (id: number) => void;
}

const BrowseCard: React.FC<BrowseCardProps> = ({ id, name, owner, avatar, lastModified, fileSize, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editedName);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center px-4 py-2 border-b hover:bg-gray-50">
      <Checkbox className="mr-4" />
      <div className="flex items-center flex-1 mr-4">
        {isEditing ? (
          <Input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="text-sm font-medium text-blue-600"
          />
        ) : (
          <span className="text-sm font-medium text-blue-600">{name}</span>
        )}
      </div>
      <div className="flex items-center w-64 mr-4">
        <Avatar className="h-6 w-6 mr-2">
          <AvatarImage src={avatar} alt={owner} className="object-cover" />
          <AvatarFallback>{owner.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="text-sm text-gray-600">{owner}</span>
      </div>
      <div className="w-40 mr-4 text-sm text-gray-600">{lastModified}</div>
      <div className="w-20 mr-4 text-sm text-gray-600 text-right">{fileSize}</div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {isEditing ? (
            <DropdownMenuItem onClick={handleSave}>
              <Edit className="mr-2 h-4 w-4" />
              Save
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={handleEdit}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={() => onDelete(id)}>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const Browse: React.FC = () => {
  const [browseData, setBrowseData] = useState<BrowseItem[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/browseCreate');
      const data = await response.json();
      const transformedData: BrowseItem[] = data.map((item: { browseId: number; fileName: string }) => ({
        id: item.browseId,
        name: item.fileName || "Admin | Login and Registration Feature",
        owner: 'willsmith@gmail.com',
        avatar: "https://github.com/shadcn.png",
        lastModified: '2nd April 2022',
        fileSize: '1 MB'
      }));
      setBrowseData(transformedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Save file locally (this is a mock implementation)
    console.log(`File "${file.name}" would be saved locally`);

    // Send file name to API
    try {
      const response = await fetch('http://localhost:3001/browseCreate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName: file.name }),
      });

      if (response.ok) {
        console.log('File name sent to API successfully');
        setIsUploadModalOpen(false);
        fetchData(); // Refresh the file list
      } else {
        console.error('Failed to send file name to API');
      }
    } catch (error) {
      console.error('Error sending file name to API:', error);
    }
  };

  const handleEdit = async (id: number, newName: string) => {
    try {
      const response = await fetch(`http://localhost:3001/browseCreate/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName: newName }),
      });

      if (response.ok) {
        console.log('File name updated successfully');
        fetchData(); // Refresh the file list
      } else {
        console.error('Failed to update file name');
      }
    } catch (error) {
      console.error('Error updating file name:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/browseCreate/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('File deleted successfully');
        fetchData(); // Refresh the file list
      } else {
        console.error('Failed to delete file');
      }
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <div className="max-h-[calc(100vh-22vh)] bg-gray-50">
      <div className="flex items-center py-4 px-6 bg-white border-b">
        <div className="text-xl font-semibold text-gray-800 mr-2">OverX Project</div>
        <ChevronDown className="h-4 w-4 text-gray-500" />
        <div className="text-gray-500 ml-2">Communication</div>
      </div>

      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Documents</h1>
          <Button 
            size="sm" 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4"
            onClick={() => setIsUploadModalOpen(true)}
          >
            Create +
          </Button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300"
            />
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-gray-600">
                  Type <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Type 1</DropdownMenuItem>
                <DropdownMenuItem>Type 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-gray-600">
                  Modified <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Recently Modified</DropdownMenuItem>
                <DropdownMenuItem>Least Recently Modified</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="link" className="text-blue-600">
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center px-4 py-2 bg-gray-100 rounded-t-md">
          <Checkbox className="mr-4" />
          <div className="flex-1 mr-4 font-medium text-sm text-gray-600">Name</div>
          <div className="w-64 mr-4 font-medium text-sm text-gray-600">Owner</div>
          <div className="w-40 mr-4 font-medium text-sm text-gray-600">Last Modified</div>
          <div className="w-20 mr-4 font-medium text-sm text-gray-600">File Size</div>
          <div className="w-8"></div>
        </div>

        {/* Main section */}
        <section className="bg-white rounded-b-md shadow">
          {browseData.map((item) => (
            <BrowseCard
              key={item.id}
              {...item}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </section>

        {/* Custom Modal */}
        {isUploadModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Upload File</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsUploadModalOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center justify-center w-full"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Select File
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;