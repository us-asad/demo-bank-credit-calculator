export interface CreditOption {
  label: string
  value: string
  min: number
  max: number
  minMonth: number
  maxMonth: number
  percent: number
  requestInitialPayment?: boolean
  minInitialPaymentPercent?: number
  maxInitialPaymentPercent?: number
  creditAmount: number
  months: number
  initialPaymentPercent?: number
}

export interface CalculatorProps {
  creditSum: number
  annualRate: number
  creditTerm: number
  paymentType: string
}

export type CreditPaymentType = "annuitet" | "differentsial"

export interface CreditPaymentOption {
  label: string
  value: CreditPaymentType
}

export type TableDataItem = [Date | string, number, number, number, number];
export type TableData = TableDataItem[]