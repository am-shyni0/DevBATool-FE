import StoriesIcon from "@/assets/dashboard/StoriesIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import AccordianContentElement from "./AccordianContentElement";

const SprintProgressAccordianElement = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full gap-12">
              <div className="flex items-center gap-2">
                <div className="border-2 p-1 border-primary/50 rounded-md">
                  <StoriesIcon size={20} />
                </div>
                <div className="text-muted-foreground text-sm">
                  <span>Ox </span>Admin | Login and Registrat...
                </div>
              </div>
              <div className="text-muted-foreground font-semibold">2</div>
              <Progress value={33} className="w-40" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <AccordianContentElement />
            <AccordianContentElement />
            <AccordianContentElement />
            <AccordianContentElement />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SprintProgressAccordianElement;
