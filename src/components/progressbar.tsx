"use client";
import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar({
  color = "#472bb7",
  height = "2px",
}: {
  color?: string;
  height?: string;
}) {
  return (
    <AppProgressBar
      height={height}
      color={color}
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
