import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table"

import { Props } from "./types";
import { MONTHS } from "./constants";
import { parseAmount } from "@/utils";
import { Label } from "@/components/common";

export const PaymentsTableModal: React.FC<Props> = ({ open, close, tableData, selectedCreditOption }) => {
  if (!open) {
    return <></>
  }

  console.log(tableData, "tableData");


  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="max-w-[90%] h-[calc(100vh-100px)]">
        <DialogHeader>
          <DialogTitle className="text-3xl">To‘lov jadvali</DialogTitle>
        </DialogHeader>
        <div className="flex items-center p-5 rounded-2xl bg-[#f0f2f5]">
          <div className="w-[32.1%]">
            <Label className="mb-4">Kredit nomi</Label>
            <h3 className="text-[#2b2e38] text-xl font-semibold">{selectedCreditOption.label}</h3>
          </div>
          <div className="w-[16.975%]">
            <Label className="mb-4">Foiz stavkasi</Label>
            <h3 className="text-[#2b2e38] text-xl font-semibold">{selectedCreditOption.percent}%</h3>
          </div>
          <div className="w-[16.975%]">
            <Label className="mb-4">Kredit muddati</Label>
            <h3 className="text-[#2b2e38] text-xl font-semibold">{selectedCreditOption.months} oy</h3>
          </div>
          <div className="w-[16.975%]">
            <Label className="mb-4">Kredit miqdori</Label>
            <h3 className="text-[#2b2e38] text-xl font-semibold">{parseAmount(selectedCreditOption.creditAmount)} soʻm</h3>
          </div>
          <div className="w-[16.975%]">
            <Label className="mb-4">Kredit to‘liq qiymati</Label>
            <h3 className="text-[#2b2e38] text-xl font-semibold">{selectedCreditOption.percent}%</h3>
          </div>
        </div>
        <Table>
          <TableHeader className="w-full">
            <TableRow className="w-full">
              <TableHead className="w-[32.1%]">Oy</TableHead>
              <TableHead className="w-[16.975%] text-start">To'lov</TableHead>
              <TableHead className="w-[16.975%] text-start">Foizlar</TableHead>
              <TableHead className="w-[16.975%] text-start">Asosiy qarz</TableHead>
              <TableHead className="w-[16.975%] text-start">Qolgan qarz</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{typeof data[0] === "string" ? data[0] : `${MONTHS[data[0].getMonth()]} ${data[0].getFullYear()}`}</TableCell>
                <TableCell>{parseAmount(data[4], true)}</TableCell>
                <TableCell>{parseAmount(data[2], true)}</TableCell>
                <TableCell className="text-start">{parseAmount(data[3], true)} </TableCell>
                <TableCell className="text-start">{data[1] ? parseAmount(data[1], true) : ""}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  )
}