import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
    className={cn("animate-pulse bg-muted-foreground/30 rounded-sm", className)}
      {...props}
    />
  )
}

export { Skeleton }
