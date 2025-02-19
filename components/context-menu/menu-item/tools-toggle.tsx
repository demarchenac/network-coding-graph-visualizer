"use client";

import { ContextMenuCheckboxItem } from "~/components/ui/context-menu";
import { uiStore, useShowTools } from "~/store/ui";

export function ToolsToggleMenuItem() {
  const showTools = useShowTools();

  return (
    <ContextMenuCheckboxItem
      className="cursor-pointer"
      checked={showTools}
      onSelect={() => setTimeout(() => uiStore.trigger.toggleToolsVisibility(), 150)}
    >
      Show tools
    </ContextMenuCheckboxItem>
  );
}
