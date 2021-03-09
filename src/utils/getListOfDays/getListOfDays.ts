export const KEY_PARAM_CUSTOM_DAYS = "customDays";
export const DEFAULT_DAYS = [1, 15, 30, 90];

function getDayParam(): URLSearchParams {
  const queryString = window.location.search;
  return new URLSearchParams(queryString);
}

export default function getListOfDays(): number[] {
  try {
    const urlParams = getDayParam();
    const customDays = urlParams.get(KEY_PARAM_CUSTOM_DAYS)!;
    return [...JSON.parse(customDays)].map(day => Number(day));
  } catch {
    return DEFAULT_DAYS;
  }
}
