import { useState } from "react"
import { Form, Result } from "./components"
import { CREDIT_OPTIONS, PAYMENT_OPTIONS } from "./constants"

export const Calculator = () => {
  const [selectedCreditOption, setSelectedCreditOption] = useState(CREDIT_OPTIONS[0])
  const [paymentType, setPaymentType] = useState(PAYMENT_OPTIONS[0].value);

  return (
    <div className="container mx-auto my-10">
      <h2 className="mb-4 text-4xl font-bold">Kreditni hisoblash</h2>
      <div className="bg-white rounded-lg p-8 flex gap-4">
        <Form selectedCreditOption={selectedCreditOption} setSelectedCreditOption={setSelectedCreditOption} paymentType={paymentType} setPaymentType={setPaymentType} />
        <Result selectedCreditOption={selectedCreditOption} paymentType={paymentType} />
      </div>
    </div>
  )
}