export interface ColorGeneratorState {
  baseColor: string;
  shades: string[];
  quantity: number;
  error: string;
}

export type QuantityOption = 12 | 18 | 24 | 30;

export const QUANTITY_OPTIONS: readonly QuantityOption[] = [
  12, 18, 24, 30,
] as const;
