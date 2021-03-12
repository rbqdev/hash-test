import React, { useReducer } from "react";
import useToast from "@hooks/useToast";
import getMessageByApiStatus from "@utils/getMessageByApiStatus";

export interface IObjectFetch {
  [key: string]: any;
}

export interface IInitialState extends IObjectFetch {
  response: IObjectFetch | null;
  error: IObjectFetch | null;
  isLoading: boolean;
  requestTakeToLong: boolean;
}

interface ResponseFetch extends IInitialState {
  dispatchRequest: ({ url, method, body }: DispatchRequestProps) => void;
  resetFetchValues: () => void;
  dispatchState: React.Dispatch<ReducerAction<IObjectFetch>>;
}

interface DispatchRequestProps {
  url: string;
  method: string;
  body: any;
}

enum EnumActionTypes {
  reset = "reset",
  response = "response",
  error = "error",
  isLoading = "isLoading",
  requestTakeToLong = "requestTakeToLong"
}

type ReducerAction<T> =
  | { type: EnumActionTypes.reset; payload?: T }
  | { type: EnumActionTypes.isLoading; payload?: T }
  | { type: EnumActionTypes.response; payload?: T }
  | { type: EnumActionTypes.requestTakeToLong; payload?: T };

export const TIME_TO_AWAIT_API = 10000;

export const ACTIONS: IObjectFetch = {
  RESET_VALUES: EnumActionTypes.reset,
  SET_RESPONSE: EnumActionTypes.response,
  SET_ERROR: EnumActionTypes.error,
  SET_IS_LOADING: EnumActionTypes.isLoading,
  SET_REQUEST_TAKE_TO_LONG: EnumActionTypes.requestTakeToLong
};

export const initialState: IInitialState = {
  response: null,
  error: null,
  isLoading: false,
  requestTakeToLong: false
};

function reducer(state: IInitialState, action: ReducerAction<IObjectFetch>) {
  const isResetAction = action.type === ACTIONS.RESET_VALUES;
  if (isResetAction) {
    return {
      ...initialState
    };
  }

  return {
    ...state,
    [action.type]: action.payload?.value
  };
}

export default function useFetch(): ResponseFetch {
  const [state, dispatchState] = useReducer(reducer, initialState);
  const { dispatchToast } = useToast();

  const dispatchRequest = async ({
    url,
    method,
    body
  }: DispatchRequestProps): Promise<void> => {
    if (state.isLoading) {
      return;
    }

    const timerControl = setTimeout(() => {
      dispatchState({
        type: ACTIONS.SET_REQUEST_TAKE_TO_LONG,
        payload: { value: true }
      });
    }, TIME_TO_AWAIT_API);

    try {
      dispatchState({ type: ACTIONS.SET_IS_LOADING, payload: { value: true } });

      const apiResponse = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        method,
        body: JSON.stringify(body)
      });

      const { ok: isRequestSuccess } = apiResponse;

      if (isRequestSuccess) {
        const responseParsed = await apiResponse.json();

        dispatchState({
          type: ACTIONS.SET_RESPONSE,
          payload: { value: responseParsed }
        });
      } else {
        throw Error(getMessageByApiStatus(apiResponse.status));
      }
    } catch (err) {
      dispatchState({ type: ACTIONS.SET_ERROR, payload: { value: err } });
      dispatchToast({ message: err.message, type: "error", duration: 3000 });
    } finally {
      clearTimeout(timerControl);

      const { SET_IS_LOADING, SET_REQUEST_TAKE_TO_LONG } = ACTIONS;

      [SET_IS_LOADING, SET_REQUEST_TAKE_TO_LONG].forEach(action => {
        dispatchState({
          type: action,
          payload: { value: false }
        });
      });
    }
  };

  const resetFetchValues = (): void => {
    dispatchState({ type: ACTIONS.RESET_VALUES });
  };

  const { response, error, isLoading, requestTakeToLong } = state;

  return {
    response,
    error,
    isLoading,
    requestTakeToLong,
    dispatchRequest,
    resetFetchValues,
    dispatchState
  };
}
