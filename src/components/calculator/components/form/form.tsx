import React, { useState } from "react"
import { CreditTypeSelect, FormField, PaymentTypeRadio } from "./components"
import { Props } from "./types"

export const Form: React.FC<Props> = ({ selectedCreditOption, setSelectedCreditOption, paymentType, setPaymentType }) => {
  const [month, setMonth] = useState(selectedCreditOption.months)

  return (
    <div className="px-4 flex flex-col gap-8 w-1/2">
      <CreditTypeSelect value={selectedCreditOption.value} onChange={setSelectedCreditOption} />
      <FormField
        max={selectedCreditOption.max}
        min={selectedCreditOption.min}
        value={selectedCreditOption.creditAmount}
        setValue={(value: number) => setSelectedCreditOption(prev => ({ ...prev, creditAmount: value }))}
        label="Umumiy summa"
        prefix=" so'm"
      />
      {selectedCreditOption.requestInitialPayment && (
        <FormField
          max={Math.ceil(((selectedCreditOption.maxInitialPaymentPercent as number) / 100) * selectedCreditOption.creditAmount)}
          min={Math.ceil(((selectedCreditOption.minInitialPaymentPercent as number) / 100) * selectedCreditOption.creditAmount)}
          value={((selectedCreditOption.initialPaymentPercent as number) / 100) * selectedCreditOption.creditAmount}
          setValue={(value: number) => setSelectedCreditOption(prev => ({ ...prev, initialPaymentPercent: (value / selectedCreditOption.creditAmount) * 100 }))}
          label="Boshlang‘ich to‘lov"
          prefix=" so'm"
        />
      )}
      <FormField
        max={selectedCreditOption.maxMonth}
        min={selectedCreditOption.minMonth}
        value={month}
        setValue={setMonth}
        label="Kredit muddati"
        prefix=" oy"
      />
      <PaymentTypeRadio value={paymentType} onChange={setPaymentType} />
    </div>
  )
}