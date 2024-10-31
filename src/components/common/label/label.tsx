import { Label as UILabel } from "@/ui/label"
import React from "react"
import { Props } from "./types"
import { cn } from "@/lib/utils"

export const Label: React.FC<Props> = ({ children, htmlFor, className }) => <UILabel htmlFor={htmlFor} className={cn("block text-[#5e666e] font-normal text-base", className)}>{children}</UILabel>