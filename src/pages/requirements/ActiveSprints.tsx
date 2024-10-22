import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuPortal,
  // DropdownMenuSeparator,
  // DropdownMenuShortcut,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { default as MAvatar } from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Card } from "@/components/ui/card";
import SprintCard from "./components/SprintCard";

const ActiveSprints = () => {
  return (
    <div className="max-h-[calc(100vh-35vh)]">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold md:text-2xl text-slate-500">
          Ox Sprint 13
        </h1>
        <Button className="text-lg font-medium rounded-3xl">Create +</Button>
      </div>

      {/* search and filters */}
      <div className="flex gap-4 justify-between mr-10">
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
      </div>

      <div className=" my-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-md text-primary font-medium rounded-3xl border-primary border-2"
        >
          Complete Sprint
        </Button>
      </div>

      {/* header */}
      <div className="flex items-center my-4">
        <Card className="flex-1 p-4 text-center font-semibold">
          <div>To Do 20</div>
        </Card>
        <Card className="flex-1 p-4 text-center font-semibold">
          <div>In Progress 16</div>
        </Card>
        <Card className="flex-1 p-4 text-center font-semibold">
          <div>Reviewing 4</div>
        </Card>
        <Card className="flex-1 p-4 text-center font-semibold">
          <div>Dev Completed</div>
        </Card>
        <Card className="flex-1 p-4 text-center font-semibold">
          <div>Ready For Testing 2</div>
        </Card>
        <Card className="flex-1 p-4 text-center font-semibold">
          <div>Testing In Progress 20</div>
        </Card>
        <Card className="flex-1 p-4 text-center font-semibold">
          <div>Done 40</div>
        </Card>
      </div>

      <main className="max-h-full overflow-y-scroll py-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-primary">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  Jhon Smith
                  <span className="text-muted-foreground"> (3 issues)</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-stretch">
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div>
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div className="space-y-3">
                    <SprintCard />
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div>
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-primary">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  Jhon Smith
                  <span className="text-muted-foreground"> (3 issues)</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-stretch">
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div>
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div className="space-y-3">
                    <SprintCard />
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div>
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-primary">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  Jhon Smith
                  <span className="text-muted-foreground"> (3 issues)</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-stretch">
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div>
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div className="space-y-3">
                    <SprintCard />
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div>
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-primary">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  Jhon Smith
                  <span className="text-muted-foreground"> (3 issues)</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-stretch">
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div>
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div className="space-y-3">
                    <SprintCard />
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div>
                    <SprintCard />
                  </div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
                <Card className="flex-1 p-4 text-center font-semibold">
                  <div></div>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
};

export default ActiveSprints;
