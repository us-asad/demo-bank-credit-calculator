import { CreditPaymentType } from "@/types/creditTypes"

export interface Props {
  value: CreditPaymentType
  onChange: (value: CreditPaymentType) => void
}