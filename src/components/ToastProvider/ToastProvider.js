import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const removeToast = React.useCallback((id) => {
    const newList = [...toastList]

    setToastList(newList.filter(toast => toast.id !== id))
  }, [toastList]);

  const clearToasts = React.useCallback(() => {
    setToastList([])
  }, []);


  const addToast = React.useCallback((newToast) => {
    setToastList((list) => [...list, newToast])
  }, []);


  const state = { removeToast, toastList, addToast, clearToasts }

  return <ToastContext.Provider value={state}>
    {children}
  </ToastContext.Provider>;
}

export default React.memo(ToastProvider);
