import { CreditPaymentType, TableData, TableDataItem } from "@/types/creditTypes";

export const calculateLoanPayments = (creditSum: number, annualRate: number, creditTerm: number, paymentType: CreditPaymentType) => {
  const resultTable: TableData = [];
  var total: TableDataItem = ["Jami", 0, 0, 0, 0];
  var day = new Date();
  day.setHours(0, 0, 0);

  switch (paymentType) {
    case "differentsial":
      for (let i = 0; i < creditTerm; i++) {
        var data = new Date(day.setHours(day.getHours() + 730.00100002022));
        resultTable[i] = [data, 0, 0, 0, 0];
        if (i == 0) {
          resultTable[i][1] = creditSum;
        } else {
          resultTable[i][1] = resultTable[i - 1][1] - resultTable[i - 1][3];
        }
        resultTable[i][2] =
          (resultTable[i][1] * annualRate) / 100 / 12;
        total[2] += resultTable[i][2];
        if (creditSum > 0) {
          resultTable[i][3] = creditSum / creditTerm;
          total[3] += resultTable[i][3];
        }
        resultTable[i][4] = resultTable[i][2] + resultTable[i][3];
        total[4] += resultTable[i][4];
      }
      break;
    case "annuitet":
      for (let i = 0; i < creditTerm; i++) {
        var data = new Date(day.setHours(day.getHours() + 730.00100002022));
        resultTable[i] = [data, 0, 0, 0, 0];
        if (i == 0) {
          resultTable[i][1] = creditSum;
        } else {
          resultTable[i][1] = resultTable[i - 1][1] - resultTable[i - 1][3];
        }
        resultTable[i][2] =
          (resultTable[i][1] * annualRate) / 100 / 12;
        total[2] += resultTable[i][2];
        if (creditSum > 0) {
          resultTable[i][3] =
            -(((annualRate / 100 / 12) * creditSum * Math.pow(1 + (annualRate / 100 / 12), creditTerm)) / (1 - Math.pow(1 + (annualRate / 100 / 12), creditTerm))) -
            resultTable[i][2];
          total[3] += resultTable[i][3];
        }
        resultTable[i][4] = resultTable[i][2] + resultTable[i][3];
        total[4] += resultTable[i][4];
      }
      break;
  }

  resultTable.push(total)

  return resultTable
}
