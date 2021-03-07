import { useContext } from "react";
import ToastContext from "@contexts/Toast";

export default function useToast() {
  const { dispatchToast, removeToast } = useContext(ToastContext);
  return { dispatchToast, removeToast };
}
