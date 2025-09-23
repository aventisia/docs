"use client";
import { DotSeparator, Separator } from "@/app/_components/ui";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/buttons";
import { Clock, Download, Tag, User2 } from "lucide-react";

import { UseTemplateDTO } from "../../dtos/use-template-dto";
import { dateFormatter } from "@/utils";
import { useCloneTemplate } from "../../hooks/useCloneTemplate";

export function TemplateHeader({ template }: { template: UseTemplateDTO }) {
  const handleCloneTemplate = useCloneTemplate();

  return (
    <>
      <div>
        <div className="flex flex-row items-center justify-between gap-6">
          {/* Left side */}
          <div className="flex flex-col gap-4">
            {/* Template Name */}
            <h1 className="text-4xl font-semibold tracking-tight">
              {template.name}
            </h1>

            {/* Metadata: uses, last updated, creator */}
            <div className="flex flex-row items-center gap-1 text-sm text-muted-foreground">
              {/* Usage count */}
              <div className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                <span className="leading-4">
                  {template?.usageCount?.toLocaleString() ?? 0} uses
                </span>
              </div>

              <DotSeparator />

              {/* Last updated */}
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="leading-4">
                  Updated on{" "}
                  {dateFormatter(template?.lastModifiedOn || new Date())}
                </span>
              </div>

              <DotSeparator />

              {/* Created by */}
              <div className="flex items-center gap-1">
                <User2 className="h-4 w-4" />
                <span className="leading-4 capitalize">
                  {template.createdBy || "Unknown"}
                </span>
              </div>
            </div>

            {/* Type and Tags */}
            <div className="flex flex-row flex-wrap items-center gap-2">
              {/* Type Badge */}
              <Badge className="flex text-xs  items-center gap-1 capitalize">
                {template.type}
              </Badge>

              {/* Tags */}
              {template?.tags?.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="flex text-xs border-border capitalize items-center gap-1 bg-slate-100 dark:bg-background">
                  <Tag className="h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right side: Button */}
          <Button
            id="get-started"
            className="flex items-center gap-2"
            onClick={() => handleCloneTemplate(template.id)}>
            Clone this template
          </Button>
        </div>

        {/* Separator */}
        <Separator className="mt-6" />
      </div>
    </>
  );
}
