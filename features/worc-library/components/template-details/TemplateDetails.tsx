import { LoadingSpinner } from "@/app/_components/ui";

import { TemplateHeader } from "./TemplateHeader";
import TemplateMarkdown from "./TemplateMarkdown";
import { TemplateMetaAside } from "./TemplateMetaAside";
import { UseTemplateDTO } from "../../dtos/use-template-dto";
import { toast } from "sonner";

const getAgentTemplateById = async (
  id: string
): Promise<{ data: UseTemplateDTO }> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_WORKSPACE_API_URL + "/template?ptid=" + id
  );

  if (!response.ok) {
    toast.error("Failed to fetch template");
  }
  return response.json();
};

export async function TemplateDetail({ id }: { id: string }) {

  const data = getAgentTemplateById(id);

  const tempData = (await data)?.data

  const isAgentDataLoading = false;
  return (
    <div className="py-6">
      {isAgentDataLoading ? (
        <div className="flex h-[90vh] w-full items-center justify-center">
          <LoadingSpinner className="h-10 w-10 text-primary" />
        </div>
      ) : (
        tempData && (
          <div className="space-y-6">
            <TemplateHeader template={tempData} />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-8">
                <TemplateMarkdown content={tempData.instruction} />
              </div>
              <div className="lg:col-span-4">
                <TemplateMetaAside template={tempData} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
