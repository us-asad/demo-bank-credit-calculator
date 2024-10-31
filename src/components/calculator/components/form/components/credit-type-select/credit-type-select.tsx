import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import { Props } from "./types";
import { CREDIT_OPTIONS } from "@/components/calculator/constants";
import { CreditOption } from "@/types/creditTypes";
import { Label } from "@/components/common";

export const CreditTypeSelect: React.FC<Props> = ({ value, onChange }) => (
  <div>
    <Label className="mb-4">Kredit nomi</Label>
    <Select value={value} onValueChange={selectedValue => onChange({ ...CREDIT_OPTIONS.find(el => el.value === selectedValue) as CreditOption })}>
      <SelectContent>
        {CREDIT_OPTIONS.map(option => <SelectItem key={option.value} value={option.value} className="text-base" selected={value === option.value}>{option.label}</SelectItem>)}
      </SelectContent>
      <SelectTrigger className="w-full px-4 h-14 text-base focus:border-main duration-300">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
    </Select>
  </div>
)