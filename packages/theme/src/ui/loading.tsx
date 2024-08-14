import { cn } from "@/lib/utils";
import { LucideProps, RefreshCwIcon } from "lucide-react";
import React from "react";

export const LoadingIcon = React.forwardRef<SVGSVGElement, LucideProps>(
    ({ className, ...props }, ref) => {
        return (
            <RefreshCwIcon
                ref={ref}
                className={cn("h-4 w-4 animate-spin", className)}
                {...props}
            />
        );
    },
);
