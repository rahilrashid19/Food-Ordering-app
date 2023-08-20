import { useState, useEffect } from "react";

const useStatus = () => {
  function handleOnline() {
    return setStatus(true);
  }

  function handleOffline() {
    return setStatus(false);
  }

  const [status, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return (
      window.removeEventListener("online", handleOnline),
      window.removeEventListener("offline", handleOffline)
    );
  }, []);

  return status;
};

export default useStatus;
