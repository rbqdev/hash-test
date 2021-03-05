export default function getTextDay(day: number | string): string {
  return day === 1 ? "Amanhã" : `Em ${day} dias`;
}
