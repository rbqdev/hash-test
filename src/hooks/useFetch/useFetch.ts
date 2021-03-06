import React, { useReducer } from "react";

export interface ObjectFetch {
  [key: string]: any;
}

export interface InitialState extends ObjectFetch {
  response: ObjectFetch | null;
  error: ObjectFetch | null;
  isLoading: boolean;
}

interface ResponseFetch extends InitialState {
  dispatchRequest: ({ url, method, body }: DispatchRequestProps) => void;
  resetFetchValues: () => void;
  stateDispatch: React.Dispatch<ReducerAction<ObjectFetch>>;
}

interface DispatchRequestProps {
  url: string;
  method: string;
  body: any;
}

enum EnumActionTypes {
  reset = "reset",
  isLoading = "isLoading",
  response = "response",
  error = "error"
}

type ReducerAction<T> =
  | { type: EnumActionTypes.reset; payload?: T }
  | { type: EnumActionTypes.isLoading; payload?: T }
  | { type: EnumActionTypes.response; payload?: T };

export const TIME_TO_AWAIT_API = 10000;

export const ACTIONS: ObjectFetch = {
  RESET_VALUES: EnumActionTypes.reset,
  SET_IS_LOADING: EnumActionTypes.isLoading,
  SET_RESPONSE: EnumActionTypes.response,
  SET_ERROR: EnumActionTypes.error
};

export const initialState: InitialState = {
  response: null,
  error: null,
  isLoading: false
};

function reducer(state: InitialState, action: ReducerAction<ObjectFetch>) {
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchRequest = async ({
    url,
    method,
    body
  }: DispatchRequestProps): Promise<void> => {
    if (state.isLoading) {
      return;
    }

    try {
      dispatch({ type: ACTIONS.SET_IS_LOADING, payload: { value: true } });

      const apiResponse = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        method,
        body: JSON.stringify(body)
      });

      const { ok: isRequestSuccess } = apiResponse;

      if (isRequestSuccess) {
        const responseParsed = await apiResponse.json();

        dispatch({
          type: ACTIONS.SET_RESPONSE,
          payload: { value: responseParsed }
        });
      } else {
        throw Error("Alguma coisa deu errado, tente novamente mais tarde.");
      }
    } catch (err) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: { value: err } });
    } finally {
      dispatch({
        type: ACTIONS.SET_IS_LOADING,
        payload: { value: false }
      });
    }
  };

  const resetFetchValues = (): void => {
    dispatch({ type: ACTIONS.RESET_VALUES });
  };

  const { response, error, isLoading } = state;

  return {
    response,
    error,
    isLoading,
    dispatchRequest,
    resetFetchValues,
    stateDispatch: dispatch
  };
}
