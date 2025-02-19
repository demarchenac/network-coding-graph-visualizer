"use client";

import { JSX } from "react";
import { Laptop, Moon, Sun } from "lucide-react";

import {
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "~/components/ui/context-menu";
import { type Theme, uiStore, useTheme } from "~/store/ui";

const icons: Record<Theme, JSX.Element> = {
  light: <Sun />,
  dark: <Moon />,
  system: <Laptop />,
};

const themes: { newTheme: Theme; text: string }[] = [
  { newTheme: "light", text: "Light" },
  { newTheme: "dark", text: "Dark" },
  { newTheme: "system", text: "System" },
];

export function ThemeToggleMenuItem() {
  const theme = useTheme();
  const themeIcon = icons[theme];

  const setThemeTo = (newTheme: Theme) => setTimeout(() => uiStore.trigger.updateTheme({ to: newTheme }), 150);

  return (
    <ContextMenuSub>
      <ContextMenuSubTrigger inset>{themeIcon} &nbsp; Pick a theme</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        {themes.map(({ text, newTheme }) => (
          <ContextMenuItem key={newTheme} className="cursor-pointer" onSelect={() => setThemeTo(newTheme)}>
            {icons[newTheme]} &nbsp; {text}
          </ContextMenuItem>
        ))}
      </ContextMenuSubContent>
    </ContextMenuSub>
  );
}
