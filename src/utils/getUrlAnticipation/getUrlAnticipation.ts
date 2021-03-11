import api from "@configs/api";
import getParamsFromUrl from "@utils/getParamsFromUrl";

export const LIST_PARAMS_SIMULATIONS_API = [
  "internalError",
  "timeout",
  "delay"
];

export default function getUrlAnticipation(): string {
  const urlParams = getParamsFromUrl();
  const { value } = urlParams.keys().next();
  const url = `${api.baseUrl}`;

  if (verififyIfExistsParamsForSimulationsOfApi(value)) {
    return `${url}?${urlParams.toString()}`;
  }

  return `${url}`;
}

function verififyIfExistsParamsForSimulationsOfApi(param: string): boolean {
  return LIST_PARAMS_SIMULATIONS_API.includes(param);
}
