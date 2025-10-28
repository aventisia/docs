import { Separator } from "@/app/_components/ui";
import { Avatar, AvatarFallback } from "@/app/_components/ui/avatar";
import { Badge } from "@/app/_components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/cards";
import { BotIcon, Copy, Tag } from "lucide-react";

import { WorcTemplatesDto } from "../dtos/worc-templates-dtos";
import { useViewTemplate } from "../hooks/useViewTemplate";

type TemplateCardProps = {
  template: WorcTemplatesDto;
};

/**
 * TemplateCard
 *
 * Reusable component to visually display a Worc template.
 * Shows name, description, icons, usage count, and creator info.
 */
export const TemplateCard = ({ template }: TemplateCardProps) => {
  const handleViewTemplate = useViewTemplate();

  return (
    <Card
      key={template.id}
      className="cursor-pointer rounded-2xl border-primary-50 shadow-none transition-all hover:border-primary-200 dark:hover:border-primary-700 "
      onClick={() => handleViewTemplate(template.id)}>
      <CardHeader className="pb-4">
        {/* Icon area */}
        <div className="flex items-center gap-4">
          {template.icons?.length ? (
            template.icons?.filter(icon => icon !== "/function.png")?.map((icon, idx) => (
              <div key={icon || idx} className="rounded-lg bg-accent p-2">
                <img src={icon} alt="icon" className="h-6 w-6 !border-0" />
              </div>
            ))
          ) : (
            // Fallback icon
            <div className="rounded-lg bg-accent p-2">
              <BotIcon className="h-6 w-6" />
            </div>
          )}
        </div>

        {/* Template title */}
        <CardTitle className="!mt-5 truncate text-[0.9rem] font-semibold capitalize">
          {template.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 pb-1">
        {/* Type badge */}
        <Badge
          variant="outline"
          className="flex w-fit border-border text-xs items-center gap-1 bg-slate-100 dark:bg-background py-1">
          <Tag className="h-3 w-3" />
          <span className="leading-3"> {template.type}</span>
        </Badge>
      </CardContent>

      <Separator className="mx-4 mb-3 mt-2.5 h-[0.5px] w-auto" />

      <CardFooter className="flex items-center justify-between !pb-4">
        {/* Creator badge and name */}
        <div className="flex items-center gap-2">
          <Avatar className="flex h-7 w-7 items-center justify-center">
            <AvatarFallback className="flex items-center justify-center border border-primary-100 bg-accent text-2xs font-medium">
              {template?.createdBy
                ? template?.createdBy
                  ?.split(" ")
                  .map((word) => word[0])
                  .join("")
                : "--"}
            </AvatarFallback>
          </Avatar>
          <p className="text-xs leading-7 text-accent-foreground">
            {template.createdBy}
          </p>
        </div>

        {/* Usage count with clipboard copy button */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Copy className="h-4 w-4" />
          <p>{template.usagesCount}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
