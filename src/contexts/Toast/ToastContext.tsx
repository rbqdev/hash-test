import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Toast, { ToastProps } from "@components/Toast";

interface IToastContext {
  dispatchToast: (payload: ToastProps) => void;
  removeToast: (id: number) => void;
}

const ToastContext = React.createContext({} as IToastContext);

let idCounter = 1;

export const ToastProvider: React.FunctionComponent = ({ children }) => {
  const [toasts, setToasts] = useState([] as ToastProps[]);

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
    ({ message, duration, type }: ToastProps) => {
      setToasts(oldToasts => [
        ...oldToasts,
        { id: idCounter, message, duration, type }
      ]);

      incrementIdCounter();

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
    <ToastContext.Provider value={{ dispatchToast, removeToast }}>
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