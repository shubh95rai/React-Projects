import { useEffect } from "react";

function useClickOutsideToCLose(refObj, closeSidebar) {
  function clickOutsideToClose(e) {
    if (!refObj.current.contains(e.target)) {
      closeSidebar();
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", clickOutsideToClose);

    return () => {
      window.removeEventListener("mousedown", clickOutsideToClose);
    };
  }, [refObj, closeSidebar]);
}

export default useClickOutsideToCLose;
