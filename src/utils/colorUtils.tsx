import chroma from "chroma-js";

export const isValidColor = (color: string): boolean => {
  return !!color && chroma.valid(color);
};

export const generateColorShades = (
  color: string,
  quantity: number
): string[] => {
  if (!isValidColor(color)) {
    return [];
  }

  return chroma
    .scale([chroma(color).brighten(1), chroma(color).darken(2)])
    .mode("lab")
    .colors(quantity);
};

export const copyToClipboard = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text);
};
