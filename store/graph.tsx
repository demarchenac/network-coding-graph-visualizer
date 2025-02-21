import { createStore } from "@xstate/store";
import { useSelector } from "@xstate/store/react";

type Graph = number[][];

export const algorithms = {
  pushRelabel: "push-relabel",
} as const;

export type Algorithm = (typeof algorithms)[keyof typeof algorithms];

type GraphContext = {
  weights?: Graph;
  algorithm: Algorithm;
  showUploadDialog: boolean;
};

const graphContext: GraphContext = {
  weights: undefined,
  algorithm: algorithms.pushRelabel,
  showUploadDialog: false,
};

export const graphStore = createStore({
  context: graphContext,
  on: {
    toggleUploadDialog: (ctx) => ({ ...ctx, showUploadDialog: !ctx.showUploadDialog }),
  },
});

export const useWeights = () => useSelector(graphStore, (state) => state.context.weights);
export const useShowUploadDialog = () => useSelector(graphStore, (state) => state.context.showUploadDialog);
