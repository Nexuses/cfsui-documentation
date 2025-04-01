import * as React from "react"
import { cn } from "@/lib/utils"

interface KeymapProps extends React.HTMLAttributes<HTMLDivElement> {
  keymap: string
  size?: "sm" | "md"
}

export function Keymap({
  keymap,
  size = "md",
  className,
  ...props
}: KeymapProps) {
  const keys = keymap.split("+")
  
  return (
    <div
      className={cn(
        "flex items-center gap-0.5",
        className
      )}
      {...props}
    >
      {keys.map((key, i) => (
        <React.Fragment key={i}>
          <kbd
            className={cn(
              "inline-flex items-center justify-center rounded border border-border bg-background px-1 font-mono text-muted-foreground",
              size === "sm" ? "h-5 text-xs" : "h-6 text-sm"
            )}
          >
            {formatKey(key)}
          </kbd>
          {i < keys.length - 1 && <span className="text-muted-foreground">+</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

function formatKey(key: string): string {
  // Special case for command key
  if (key.toLowerCase() === "cmd" || key.toLowerCase() === "command") {
    return "⌘"
  }

  // Convert other common keys
  const keyMap: Record<string, string> = {
    ctrl: "Ctrl",
    alt: "Alt",
    shift: "Shift",
    meta: "⌘",
    esc: "Esc",
    tab: "Tab",
    enter: "Enter",
    backspace: "⌫",
    delete: "⌦",
    space: "Space",
    up: "↑",
    down: "↓",
    left: "←",
    right: "→",
  }

  return keyMap[key.toLowerCase()] || key.toUpperCase()
} 