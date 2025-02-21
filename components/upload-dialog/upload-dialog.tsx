"use client";

import { graphStore, useShowUploadDialog, useWeights } from "~/store/graph";

const UploadDialog = () => {
  const showUploadDialog = useShowUploadDialog();

  if (!showUploadDialog) return <></>;
  return <></>;
};

const UploadDialogTrigger = () => {
  const weights = useWeights();

  if (weights) return <></>;
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      To get started upload a &nbsp;
      <span className="text-primary cursor-pointer underline" onClick={() => graphStore.trigger.toggleUploadDialog()}>
        graph file
      </span>
    </h2>
  );
};

export function UploadDialogManager() {
  return (
    <>
      <UploadDialogTrigger />
      <UploadDialog />
    </>
  );
}
