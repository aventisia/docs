
import { TemplateDetail } from "@/features/worc-library/components/template-details/TemplateDetails";
import { use } from "react";


export default  function TemplateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return <TemplateDetail id={id} />;
}
