"use client";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import WorcLibraryTemplates from "./WorcLibraryTemplates";
import { Input } from "@/app/_components/ui";
import { Button } from "@/app/_components/ui/buttons";
import { cn } from "@/lib";
import { useSearchParams } from "next/navigation";
import { TemplateDetail } from "./template-details/TemplateDetails";



const WorcLibrary = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("t");

  // State to track the currently selected template category filter
  const [selectedCategory, setSelectedCategory] = useState("All templates");

  // List of available template categories for filtering
  const categories = [
    "All templates",
    "AI Model",
    "Agent",
    "Inferencing",
    "Conversation",
    "Generative",
    "Block",
  ];
  if (id) return <TemplateDetail id={id} />
  // else
  return (
    <div>
      {/* Header section with title and subtitle */}
      <div className="">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mx-auto mb-6 max-w-3xl text-center">
            <h1 className="!text-6xl font-semibold tracking-wide mb-2">
              Worc <span className="text-primary">Library</span>
            </h1>
            <p className="text-base text-muted-foreground">
              The Library of Worc brings together a rich catalog of ready-to-use
              automations and AI blueprints, empowering teams to build faster,
              smarter, and at scale — no need to start from scratch.
            </p>
          </div>

          {/* Search Bar for filtering templates */}
          <div className="relative mx-auto mb-8 max-w-2xl">
            <Input
              className="rounded-lg pe-9 ps-3.5 text-[0.86rem]"
              placeholder="Search..."
              type="text"
            // Uncomment and implement search functionality as needed
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              variant="ghost"
              size="icon10"
              className="absolute inset-y-0 end-0 rounded-none rounded-e-lg focus-visible:ring-[3px]"
              aria-label="Search">
              <SearchIcon size={18} aria-hidden="true" />
            </Button>
          </div>

          {/* Category Filters to select templates by category */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant="outline"
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium ring-1 ring-white",
                  {
                    "border-primary text-primary ring-primary":
                      selectedCategory === category,
                  }
                )}>
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Displays templates filtered by the selected category */}
      <WorcLibraryTemplates selectedCategory={selectedCategory} />
    </div>
  );
};

export default WorcLibrary;
