import React, { memo, useCallback } from "react";
import toast from "react-hot-toast";
import { copyToClipboard } from "../../utils/colorUtils";
import { SUCCESS_COPY_MESSAGE } from "../../constants/colorConfig";

interface ColorPaletteProps {
  shades: string[];
  onShadeClick: (shade: string) => void;
}

interface ColorTileProps {
  shade: string;
  index: number;
  onClick: () => void;
}

const ColorTile = memo<ColorTileProps>(({ shade, index, onClick }) => (
  <div
    className="colores-filtrados"
    style={{ backgroundColor: shade }}
    onClick={onClick}
    role="button"
    tabIndex={0}
    aria-label={`Color ${shade}`}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
  />
));

ColorTile.displayName = "ColorTile";

export const ColorPalette = memo<ColorPaletteProps>(
  ({ shades, onShadeClick }) => {
    const handleShadeClick = useCallback(
      async (shade: string) => {
        try {
          await copyToClipboard(shade);
          onShadeClick(shade);
          toast.success(SUCCESS_COPY_MESSAGE);
        } catch (error) {
          console.error("Error copying color:", error);
        }
      },
      [onShadeClick]
    );

    return (
      <div className="array-de-colores">
        {shades.map((shade, index) => (
          <ColorTile
            key={`${shade}-${index}`}
            shade={shade}
            index={index}
            onClick={() => handleShadeClick(shade)}
          />
        ))}
      </div>
    );
  }
);

ColorPalette.displayName = "ColorPalette";
