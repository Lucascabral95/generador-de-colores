import React, { memo, useCallback, ChangeEvent } from "react";
import { QUANTITY_OPTIONS } from "../../types/color.types";
import type { QuantityOption } from "../../types/color.types";

interface ColorInputProps {
  baseColor: string;
  quantity: QuantityOption;
  onColorChange: (color: string) => void;
  onQuantityChange: (quantity: QuantityOption) => void;
}

export const ColorInput = memo<ColorInputProps>(
  ({ baseColor, quantity, onColorChange, onQuantityChange }) => {
    const handleColorInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onColorChange(e.target.value);
      },
      [onColorChange]
    );

    const handleQuantityChange = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        onQuantityChange(Number(e.target.value) as QuantityOption);
      },
      [onQuantityChange]
    );

    return (
      <form onSubmit={(e) => e.preventDefault()} className="entrada">
        <div className="cont-input-text">
          <input
            className="input-color"
            type="text"
            value={baseColor}
            onChange={handleColorInputChange}
            placeholder="#3498db"
            aria-label="Color input"
          />
          <input
            className="input-type-color"
            type="color"
            value={baseColor}
            onChange={handleColorInputChange}
            aria-label="Color picker"
          />
          <select
            name="quantity"
            onChange={handleQuantityChange}
            value={quantity}
            className="cont-select"
            id="quantity"
            aria-label="Quantity selector"
          >
            {QUANTITY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </form>
    );
  }
);

ColorInput.displayName = "ColorInput";
