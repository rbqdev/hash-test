import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import formatNumber, { currencyConfigs } from "@utils/formatNumber";
import getListOfDays from "@utils/getListOfDays";
import getTextDay from "@utils/getTextDay";
import { _commonColors } from "@styles/themes";
import * as Styled from "./CalculatorDetailsValues.styles";

export interface ICalculatorDetailsValues {
  values: { [key: number]: number | string };
  isLoading: boolean;
}

export default function CalculatorDetailsValues({
  values = {},
  isLoading = false
}: ICalculatorDetailsValues) {
  const keysValues = Object.keys(values);
  const hasValues = keysValues.length > 0;
  const newListOfDays = keysValues.map(value => Number(value));
  const listOfDays = hasValues ? newListOfDays : getListOfDays();

  return (
    <Styled.List>
      {listOfDays.map(day => (
        <Styled.ListItem key={day}>
          {isLoading ? (
            <SkeletonTheme
              color={_commonColors.info}
              highlightColor={_commonColors.grey}
            >
              <Skeleton width={140} />
            </SkeletonTheme>
          ) : (
            <>
              <h3>{getTextDay(day)}:</h3>
              <strong>
                {formatNumber({
                  value: `${values?.[day] ?? "0"}`,
                  ...currencyConfigs
                })}
              </strong>
            </>
          )}
        </Styled.ListItem>
      ))}
    </Styled.List>
  );
}
