import { useEffect, useState, useMemo } from "react";
export function useModalState(opened = false) {
  const [isOpened, setIsOpened] = useState(opened);
  useEffect(() => {
    if (opened === isOpened) return;
    setIsOpened(opened);
  }, [opened, isOpened]);

  const value = useMemo(
    () => ({ isOpened, setIsOpened }),
    [isOpened, setIsOpened]
  );
  return value;
}
