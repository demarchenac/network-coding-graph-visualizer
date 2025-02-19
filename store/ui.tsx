import { createStore } from "@xstate/store";
import { useSelector } from "@xstate/store/react";

export type Theme = "light" | "dark" | "system";

type UIContext = {
  showTools: boolean;
  theme: Theme;
};

const uiContext: UIContext = {
  showTools: true,
  theme: "system",
};

export const uiStore = createStore({
  context: uiContext,
  on: {
    updateTheme: (ctx, event: { to: Theme }) => {
      localStorage.setItem("theme", event.to);
      return { ...ctx, theme: event.to };
    },
    toggleToolsVisibility: (ctx) => ({ ...ctx, showTools: !ctx.showTools }),
  },
});

export const useShowTools = () => useSelector(uiStore, (state) => state.context.showTools);
export const useTheme = () =>
  useSelector(uiStore, (state) =>
    typeof window !== "undefined"
      ? ((localStorage.getItem("theme") as Theme | null) ?? state.context.theme)
      : state.context.theme
  );
