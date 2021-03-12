import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Toast, { IToast } from "@components/Toast";

interface IToastContext {
  toasts: IToast[];
  dispatchToast: (payload: IToast) => void;
  removeToast: (id: number) => void;
}

const ToastContext = React.createContext({} as IToastContext);

let idCounter = 0;

export const ToastProvider: React.FunctionComponent = ({ children }) => {
  const [toasts, setToasts] = useState([] as IToast[]);

  const incrementIdCounter = () => {
    idCounter += 1;
  };

  const removeToast = useCallback(
    id => {
      setToasts(oldToasts => oldToasts.filter(toast => toast.id !== id));
    },
    [setToasts]
  );

  const dispatchToast = useCallback(
    ({ message, duration, type }: IToast) => {
      incrementIdCounter();

      setToasts(oldToasts => [
        ...oldToasts,
        { id: idCounter, message, duration, type }
      ]);

      const hasDuration = duration !== -1;
      if (hasDuration) {
        setTimeout(() => {
          removeToast(idCounter);
        }, duration);
      }
    },
    [setToasts, removeToast]
  );

  return (
    <ToastContext.Provider value={{ dispatchToast, removeToast, toasts }}>
      {children}
      {createPortal(
        <>
          {toasts.map(({ id, type, message }) => (
            <Toast key={id} id={id} type={type} message={message} />
          ))}
        </>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export default ToastContext;
