import { CreditOption, TableData } from "@/types/creditTypes"

export interface Props {
  open: boolean
  close: () => void
  selectedCreditOption: CreditOption
  tableData: TableData
}