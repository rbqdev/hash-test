import { useContext } from "react";
import ToastContext from "@contexts/Toast";

export default function useToast() {
  return { ...useContext(ToastContext) };
}
