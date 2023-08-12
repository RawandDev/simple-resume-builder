import { useCallback, useState } from "react";
import { SCALE_VALUES } from "../constants/general";

const useZoom = (initialZoom) => {
  const [zoom, setZoom] = useState(initialZoom);

  const handleZoomOut = useCallback(() => {
    const currentIndex = SCALE_VALUES.indexOf(zoom);
    if (currentIndex === 0) {
      return;
    } else {
      const newZoom = SCALE_VALUES[currentIndex - 1];
      setZoom(newZoom);
    }
  }, [zoom]);

  const handleZoomIn = useCallback(() => {
    const currentIndex = SCALE_VALUES.indexOf(zoom);
    if (currentIndex === SCALE_VALUES.length - 1) {
      return;
    } else {
      const newZoom = SCALE_VALUES[currentIndex + 1];
      setZoom(newZoom);
    }
  }, [zoom]);

  return { zoom, handleZoomIn, handleZoomOut };
};

export default useZoom;
