import getParamsFromUrl from "@utils/getParamsFromUrl";

export const KEY_PARAM_CUSTOM_DAYS = "customDays";
export const DEFAULT_DAYS = [1, 15, 30, 90];

export default function getListOfDays(): number[] {
  try {
    const urlParams = getParamsFromUrl();
    const customDaysParam = urlParams.get(KEY_PARAM_CUSTOM_DAYS)!;
    const customDays = [...JSON.parse(customDaysParam)].map(day => Number(day));
    return customDays.length > 0 ? customDays : DEFAULT_DAYS;
  } catch {
    return DEFAULT_DAYS;
  }
}
