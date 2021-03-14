export default function getTextDay(day: number): string {
  return day === 1 ? "Amanhã" : `Em ${day} dias`;
}
