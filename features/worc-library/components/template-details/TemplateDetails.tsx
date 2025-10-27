"use client"
import { LoadingSpinner } from "@/app/_components/ui";

import { TemplateHeader } from "./TemplateHeader";
import TemplateMarkdown from "./TemplateMarkdown";
import { TemplateMetaAside } from "./TemplateMetaAside";
import { useFetch } from "../../hooks/useFetch";
import { getAgentTemplateById } from "../../apis/wroc-templates-apis";


export function TemplateDetail({ id }: { id: string }) {

  const { data, loading } = useFetch(() => getAgentTemplateById(id));

  return (
    <div className="py-6">
      {loading ? (
        <div className="flex h-[90vh] w-full items-center justify-center">
          <LoadingSpinner className="h-10 w-10 text-primary" />
        </div>
      ) : (
        data && (
          <div className="space-y-6">
            <TemplateHeader template={data?.data} />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-8">
                <TemplateMarkdown content={data?.data?.instruction} />
              </div>
              <div className="lg:col-span-4">
                <TemplateMetaAside template={data?.data} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
