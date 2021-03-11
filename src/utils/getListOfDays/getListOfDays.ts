import getParamsFromUrl from "@utils/getParamsFromUrl";

export const KEY_PARAM_CUSTOM_DAYS = "customDays";
export const DEFAULT_DAYS = [1, 15, 30, 90];

export default function getListOfDays(): number[] {
  try {
    const urlParams = getParamsFromUrl();
    const customDays = urlParams.get(KEY_PARAM_CUSTOM_DAYS)!;
    return [...JSON.parse(customDays)].map(day => Number(day));
  } catch {
    return DEFAULT_DAYS;
  }
}
