import { PAYMENT_OPTIONS } from "@/components/calculator/constants";
import { RadioGroup, RadioGroupItem } from "@/ui/radio-group";
import React from "react";
import { Props } from "./types";
import { Label } from "@/components/common";

export const PaymentTypeRadio: React.FC<Props> = ({ value, onChange }) => (
  <div>
    <Label className="mb-4">So’ndirish shakli</Label>
    <RadioGroup defaultValue="comfortable" className="flex items-center gap-8 cursor-pointer group" value={value} onValueChange={onChange}>
      {PAYMENT_OPTIONS.map(opt => (
        <div key={opt.value} className="flex items-center space-x-2">
          <RadioGroupItem value={opt.value} id={opt.value} selected={opt.value === value} />
          <Label htmlFor={opt.value}>{opt.label}</Label>
        </div>
      ))}
    </RadioGroup>
  </div>
)