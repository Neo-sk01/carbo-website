import type React from "react"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeaturesProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  alignment?: "center" | "left"
  bordered?: boolean
}

export function Features2({
  title,
  subtitle,
  description,
  features,
  columns = 3,
  alignment = "left",
  bordered = false,
  className,
  ...props
}: FeaturesProps) {
  return (
    <div id="features" className={cn("container py-16 md:py-24 lg:py-32", className)} {...props}>
      <div className={cn("mx-auto mb-12 md:mb-16 max-w-[58rem]", alignment === "center" ? "text-center" : "")}>
        {subtitle && <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">{subtitle}</p>}
        {title && <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>}
        {description && <p className="mt-4 text-muted-foreground max-w-prose mx-auto">{description}</p>}
      </div>
      <div
        className={cn(
          "grid gap-4 sm:gap-6 lg:gap-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          columns === 2 && "grid-cols-1 sm:grid-cols-2",
          columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        )}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div 
              key={index} 
              className={cn(
                "flex flex-col gap-3 p-5 sm:p-6 transition-all duration-200 h-full", 
                bordered && "rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700"
              )}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground flex-grow">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

