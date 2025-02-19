import { ContextMenu as UiContextMenu, ContextMenuContent, ContextMenuTrigger } from "~/components/ui/context-menu";

import { ThemeToggleMenuItem } from "./menu-item/theme-toggle";
import { ToolsToggleMenuItem } from "./menu-item/tools-toggle";

export function ContextMenu({ children }: { children?: React.ReactNode }) {
  return (
    <UiContextMenu dir="ltr">
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent loop>
        <ToolsToggleMenuItem />
        <ThemeToggleMenuItem />
      </ContextMenuContent>
    </UiContextMenu>
  );
}
