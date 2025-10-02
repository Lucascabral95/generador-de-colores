import { useState, useCallback, useMemo } from "react";
import { generateColorShades, isValidColor } from "../utils/colorUtils";
import {
  DEFAULT_COLOR,
  DEFAULT_QUANTITY,
  ERROR_MESSAGE,
} from "../constants/colorConfig";
import type { QuantityOption } from "../types/color.types";

export const useColorGenerator = () => {
  const [baseColor, setBaseColor] = useState<string>(DEFAULT_COLOR);
  const [quantity, setQuantity] = useState<QuantityOption>(DEFAULT_QUANTITY);

  const shades = useMemo(
    () => generateColorShades(baseColor, quantity),
    [baseColor, quantity]
  );

  const error = useMemo(
    () => (!isValidColor(baseColor) && baseColor ? ERROR_MESSAGE : ""),
    [baseColor]
  );

  const handleColorChange = useCallback((color: string) => {
    setBaseColor(color);
  }, []);

  const handleQuantityChange = useCallback((newQuantity: QuantityOption) => {
    setQuantity(newQuantity);
  }, []);

  return {
    baseColor,
    shades,
    quantity,
    error,
    handleColorChange,
    handleQuantityChange,
  };
};
