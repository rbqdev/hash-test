export default function getOnlyDigits(value: string): number {
  return Number(value.replace(/[^0-9]/g, ""));
}
