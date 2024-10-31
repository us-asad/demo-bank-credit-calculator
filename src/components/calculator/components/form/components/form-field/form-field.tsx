import { Input } from "@/ui/input";
import { ChangeEvent, useMemo, useState } from "react";

export const FormField = ({ max, min, value, setValue, label, prefix = "" }: any) => {
  const [focused, setFocused] = useState(false);
  const parsedValue = useMemo(() => `${new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(value).replace(/,/g, ' ')}${!focused ? prefix : ""}`, [value, focused]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = +(event.target.value as any).replace(" so'm", "").replaceAll(" ", "")
    if (!isNaN(enteredValue)) {
      setValue(enteredValue)
    }
  }

  return (
    <div>
      <p className="text-[#5e666e] mb-4">{label}</p>
      <div className="group relative mb-4">
        <Input
          className="h-14 px-4 group-focus:border-main focus:border-main duration-300 text-base"
          value={parsedValue}
          onChange={onChange}
          onBlur={() => {
            setFocused(false);
            if (value > max) {
              setValue(max)
            }
          }}
          onFocus={() => setFocused(true)}
        />
        <div className="absolute -bottom-1 w-full">
          <div className="absolute left-0 bottom-1 h-1 bg-main" style={{ width: `${((value - min) / (max - min)) * 100 <= 100 ? ((value - min) / (max - min)) * 100 : 100}%` }} />
          <input type="range" max={max} min={min} onChange={e => setValue(Math.ceil(+parseInt(e.target.value)))} value={value} className=" duration-300" step={1} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => setValue(min)} className=" text-sm text-[#7c858d]">
          {min >= 1e6 ? `${Math.ceil(min / 1e6)} mln` : min}{prefix}
        </button>
        <button type="button" onClick={() => setValue(Math.ceil((max + min) / 2))} className=" text-sm text-[#7c858d]">
          {(max / 2) > 1e6 ? `${Math.ceil(((max + min) / 2) / 1e6)} mln` : Math.ceil((max + min) / 2)}{prefix}
        </button>
        <button type="button" onClick={() => setValue(max)} className=" text-sm text-[#7c858d]">
          {max > 1e6 ? `${Math.ceil(max / 1e6)} mln` : max}{prefix}
        </button>
      </div>
    </div>
  )
}