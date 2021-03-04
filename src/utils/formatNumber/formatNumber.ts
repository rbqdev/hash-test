import getOnlyDigits from "../getOnlyDigits";
interface FormatNumber {
  value: string;
  style: string;
  customOptions?: object;
}

export const currencyConfigs = {
  style: "currency",
  customOptions: {
    currency: "BRL"
  }
};

export const percentConfigs = {
  style: "percent",
  customOptions: {
    maximumFractionDigits: 2
  }
};

export default function formatNumber({
  value,
  style,
  customOptions
}: FormatNumber): string {
  const formatter = Intl.NumberFormat("pt-BR", {
    style,
    ...customOptions
  });

  return formatter.format(getOnlyDigits(value) / 100);
}
