import { ToastOptions } from "react-toastify";

export const toastConfig: Record<string, ToastOptions> = {
  warnTopLeft: {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  },
};