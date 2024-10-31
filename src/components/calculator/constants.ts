import { CreditOption, CreditPaymentOption } from "@/types/creditTypes"

export const CREDIT_OPTIONS: CreditOption[] = [
  {
    "label": "Ta’lim krediti",
    value: "talim",
    min: 1e6,
    max: 50e6,
    minMonth: 12,
    maxMonth: 84,
    percent: 13.5,
    creditAmount: 255e5,
    months: 84,
  },
  {
    "label": "Auto light avtokrediti",
    value: "auto",
    requestInitialPayment: true,
    minInitialPaymentPercent: 30,
    maxInitialPaymentPercent: 70,
    min: 30e6,
    max: 600e6,
    minMonth: 3,
    maxMonth: 60,
    percent: 23.99,
    creditAmount: 315e6,
    initialPaymentPercent: 30,
    months: 60,
  },
  {
    "label": "Iste’mol krediti",
    value: "istemol",
    min: 4e6,
    max: 200e6,
    minMonth: 1,
    maxMonth: 60,
    percent: 29,
    creditAmount: 101875000,
    months: 60,
  },
  {
    "label": "Quyosh panellarini sotib olish va o‘rnatish uchun iste’mol krediti",
    value: "quyosh",
    min: 4e6,
    max: 75e6,
    minMonth: 12,
    maxMonth: 36,
    percent: 19.5,
    creditAmount: 39375000,
    months: 36
  },
  {
    "label": "Xonadon, uy-joyni sotib olish va ta’mirlash uchun kredit",
    value: "uy",
    requestInitialPayment: true,
    minInitialPaymentPercent: 0,
    maxInitialPaymentPercent: 70,
    min: 10e6,
    max: 800e6,
    minMonth: 12,
    maxMonth: 240,
    percent: 21.5,
    creditAmount: 405e6,
    initialPaymentPercent: 0,
    months: 240
  },
  {
    "label": "Yangi qurilgan uylardan uy-joy xaridi uchun ipoteka krediti",
    value: "ipoteka",
    requestInitialPayment: true,
    minInitialPaymentPercent: 15,
    maxInitialPaymentPercent: 70,
    min: 50e6,
    max: 420e6,
    minMonth: 12,
    maxMonth: 120,
    percent: 17.5,
    creditAmount: 235e6,
    initialPaymentPercent: 15,
    months: 120
  },
  {
    "label": "Bank o‘z mablag‘lari hisobidan ipoteka krediti",
    value: "oz-ipoteka",
    requestInitialPayment: true,
    minInitialPaymentPercent: 26,
    maxInitialPaymentPercent: 70,
    min: 50e6,
    max: 600e6,
    minMonth: 12,
    maxMonth: 120,
    percent: 27,
    creditAmount: 325e6,
    initialPaymentPercent: 26,
    months: 120
  }
]

export const PAYMENT_OPTIONS: CreditPaymentOption[] = [
  { label: "Annuitet (teng qismlarda)", value: "annuitet" },
  { label: "Differentsial (pasayib borish)", value: "differentsial" }
]