import { Label } from "@/components/common";
import { Button } from "@/ui/button";
import React, { useMemo, useState } from "react";
import { Props } from "./types";
import { PaymentsTableModal } from "./components";
import { calculateLoanPayments, parseAmount } from "@/utils";

export const Result: React.FC<Props> = ({ selectedCreditOption, paymentType }) => {
  const [openPaymentsModal, setPaymentsModal] = useState(false);
  const parsedCreditAmount = useMemo(() => parseAmount(selectedCreditOption.creditAmount), [selectedCreditOption.creditAmount]);
  const tableData = useMemo(() => calculateLoanPayments(selectedCreditOption.creditAmount, selectedCreditOption.percent, selectedCreditOption.months, paymentType), [selectedCreditOption, paymentType])
  const parsedLowestPaymentAmount = useMemo(() => parseAmount(Math.abs(tableData[tableData.length - 1][4])), [tableData,])

  return (
    <div className="w-1/2">
      <div className="bg-[#ecf9f5] p-8 rounded-2xl">
        <div>
          <Label className="mb-4">Kredit miqdori</Label>
          <h3 className="text-[32px] font-semibold leading-[1]">{parsedCreditAmount} so'm</h3>
        </div>
        <div className="flex items-center gap-4 my-6">
          <div className="w-2/3">
            <Label className="mb-4">Jami oylik to‘lov (dan boshlab)</Label>
            <h3 className="text-[32px] font-semibold leading-[1]">{parsedLowestPaymentAmount} so'm</h3>
          </div>
          <div className="w-1/3">
            <Label className="mb-4">Foiz stavkasi</Label>
            <h3 className="text-[32px] font-semibold leading-[1]">{selectedCreditOption.percent}%</h3>
          </div>
        </div>
        <Button size="lg" onClick={() => setPaymentsModal(true)} className="mt-5">Hisob-kitob haqida batafsil</Button>
      </div>
      <PaymentsTableModal open={openPaymentsModal} close={() => setPaymentsModal(false)} selectedCreditOption={selectedCreditOption} tableData={tableData} />
    </div>
  )
}