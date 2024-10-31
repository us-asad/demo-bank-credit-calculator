import { CreditOption } from "@/types/creditTypes"

export interface Props {
  value: string
  onChange: (option: CreditOption) => void
}