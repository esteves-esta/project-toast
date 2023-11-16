import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const removeToast = React.useCallback((id) => {
    const newList = [...toastList]

    setToastList(newList.filter(toast => toast.id !== id))
  }, [toastList]);


  const addToast = React.useCallback((newToast) => {
    setToastList([...toastList, newToast])
  }, [toastList]);


  const state = { removeToast, toastList, addToast }

  return <ToastContext.Provider value={state}>
    {children}
  </ToastContext.Provider>;
}

export default React.memo(ToastProvider);
