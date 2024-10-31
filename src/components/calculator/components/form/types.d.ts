import { CreditOption, CreditPaymentType } from "@/types/creditTypes";
import { Dispatch, SetStateAction } from "react";

export interface Props {
  selectedCreditOption: CreditOption
  setSelectedCreditOption: Dispatch<SetStateAction<CreditOption>>
  paymentType: CreditPaymentType
  setPaymentType: Dispatch<SetStateAction<CreditPaymentType>>
}