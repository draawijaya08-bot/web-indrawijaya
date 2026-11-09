import type { ReactNode } from "react";

export type IconName = "arrow" | "arrow-up" | "chart" | "shield" | "spark" | "user" | "close" | "menu" | "check" | "globe" | "play" | "pause";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    play: <path d="m8 4 12 8-12 8V4Z"/>,
    pause: <><path d="M8 5v14M16 5v14"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    "arrow-up": <><path d="M6 18 18 6M6 6h12v12" /></>,
    chart: <><path d="m3 16 5-9 5 11 4-13 4 7" /></>,
    shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/></>,
    spark: <><path d="m12 3 2.3 6.7L21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3L12 3Z"/><path d="m20 2 .7 2.3L23 5l-2.3.7L20 8l-.7-2.3L17 5l2.3-.7L20 2Z"/></>,
    user: <><circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></>,
    close: <path d="m6 6 12 12M6 18 18 6"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    globe: <><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></>,
  };
  return <svg className={`icon ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
