import React from 'react';


export default function useEscapeKey(action) {
  React.useEffect(() => {
    function onKeyDown(event) {
      if (event.key !== 'Escape') return
      action()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [action])
}

