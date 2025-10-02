import React from "react";
import { Toaster } from "react-hot-toast";

import { useColorGenerator } from "./hooks/useColorGenerator";
import { ColorInput } from "./components/ColorGenerator/ColorInput";
import { ColorPalette } from "./components/ColorGenerator/ColorPalette";
import { ErrorMessage } from "./components/ColorGenerator/ErrorMessage";
import { Footer } from "./components/Footer/Footer";
import "./App.scss";

const App: React.FC = () => {
  const {
    baseColor,
    shades,
    quantity,
    error,
    handleColorChange,
    handleQuantityChange,
  } = useColorGenerator();

  return (
    <div className="contenedor-body">
      <main>
        <div className="titulo">
          <h1 className="titulo-del-proyecto" style={{ color: baseColor }}>
            Generador de colores
          </h1>
        </div>

        <div className="subtitulo">
          <h3 className="subtitulo-del-proyecto">Explorá la paleta perfecta</h3>
        </div>

        <ColorInput
          baseColor={baseColor}
          quantity={quantity}
          onColorChange={handleColorChange}
          onQuantityChange={handleQuantityChange}
        />

        <ErrorMessage message={error} />

        <ColorPalette shades={shades} onShadeClick={handleColorChange} />

        <Toaster />
      </main>

      <Footer accentColor={baseColor} />
    </div>
  );
};

export default App;
