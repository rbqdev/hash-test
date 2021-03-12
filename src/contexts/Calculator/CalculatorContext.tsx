import React, { createContext } from "react";
import useFetch, { IInitialState } from "@hooks/useFetch/useFetch";
import getUrlAnticipation from "@utils/getUrlAnticipation";

interface IRequestBody {
  amount: number;
  installments: number;
  mdr: number;
  days: number[];
}

interface ICalculatorContext extends IInitialState {
  requestAnticipation: (payload: IRequestBody) => void;
  resetFetchValues: () => void;
}

const CalculatorContext = createContext({} as ICalculatorContext);

export const CalculatorProvider: React.FunctionComponent = ({ children }) => {
  const {
    response,
    error,
    isLoading,
    requestTakeToLong,
    dispatchRequest,
    resetFetchValues
  } = useFetch();

  const requestAnticipation = async (payload: IRequestBody): Promise<void> => {
    const url = getUrlAnticipation();

    await dispatchRequest({
      url,
      method: "POST",
      body: payload
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        response,
        error,
        isLoading,
        requestTakeToLong,
        requestAnticipation,
        resetFetchValues
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
