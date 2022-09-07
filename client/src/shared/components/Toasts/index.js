import toast from "react-hot-toast";

/*
  API: https://react-hot-toast.com/docs/toast
*/

const defaultOptions = {
  position: "top-right",
  style: {
    background: "#333",
    color: "#fff",
  },
};

export function toastInfo(text, options = defaultOptions) {
  return toast(text, options);
}

export function toastSuccess(text, options = defaultOptions) {
  return toast.success(text, options);
}

export function toastError(text, options = defaultOptions) {
  return toast.error(text, options);
}

export function toastWarning(text, options = defaultOptions) {
  return toast(text, options);
}

export function toastPromise(promise, { loading, success, error }, options) {
  return toast.promise(
    promise,
    {
      loading,
      success,
      error,
    },
    options
  );
}

export function dismissToast(toastId) {
  toast.dismiss(toastId);
}
