import { DotSeparator, Separator } from "@/app/_components/ui";
import { Button } from "@/app/_components/ui/buttons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/cards";
import { BotIcon, Calendar } from "lucide-react";

import { UseTemplateDTO } from "../../dtos/use-template-dto";
import { formatFileSize } from "../../utils";

import { FileTypeIcon } from "./FileTypeIcon";
import { dateFormatter } from "@/utils";

export function TemplateMetaAside({ template }: { template: UseTemplateDTO }) {
  return (
    <aside className="space-y-4">
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="grid grid-cols-3 gap-2">
            <span className="text-muted-foreground">Type</span>
            <span className="col-span-2">{template?.type}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="text-muted-foreground">Version</span>
            <span className="col-span-2">{template?.schemaVersion}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" /> Created
            </span>
            <span className="col-span-2">
              {dateFormatter(template?.createdOn || new Date())}{" "}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" /> Updated
            </span>
            <span className="col-span-2">
              {dateFormatter(template?.lastModifiedOn || new Date())}{" "}
            </span>
          </div>
          <Separator />
          <div className="flex flex-wrap gap-2">
            {template.icons?.length ? (
              template.icons.map((icon, idx) => (
                <div key={icon || idx} className="rounded-lg bg-accent p-2">
                  <img src={icon} alt="icon" className="h-6 w-6" />
                </div>
              ))
            ) : (
              // Fallback icon
              <div className="rounded-lg bg-accent p-2">
                <BotIcon className="h-6 w-6" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {(template?.resources ?? []).length !== 0 ? (
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Resources</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2">
              {template.resources!.map((item) => (
                <li key={item.path} className="flex items-center gap-1">
                  <FileTypeIcon fileType={item.extension} />
                  <div className="flex flex-col">
                    <Button
                      // onClick={() => {
                      //   downloadFile(item);
                      // }}
                      variant={"link"}
                      className="text-wrap text-start">
                      <span>{item.name}</span>
                    </Button>

                    {item.size ? (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>{item.size}</span>
                        {/* <span>{formatFileSize(item.size)}</span> */}
                        <DotSeparator />
                        <span>{item.extension ?? "PDF"}</span>
                      </div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}
    </aside>
  );
}
