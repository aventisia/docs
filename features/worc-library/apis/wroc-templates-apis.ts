"use client"
import { WorcTemplatesDto } from "../dtos/worc-templates-dtos";

/**
 * Retrieves list of templates.
 */
const getAgentTemplates = async (): Promise<WorcTemplatesDto[]> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_WORKSPACE_API_URL + "/template/trending"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const result = await response.json();
  return result?.data;
};


export { getAgentTemplates };
