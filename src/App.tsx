// import { useState, useEffect } from 'react';
// import chroma from 'chroma-js';
// import toast, { Toaster } from 'react-hot-toast';

// const App = () => {
//   const [baseColor, setBaseColor] = useState('violet');
//   const [shades, setShades] = useState([]);
//   const [quantity, setQuantity] = useState(18);
//   const [error, setError] = useState('');

//   const generateShades = (color = baseColor) => {
//     if (color && chroma.valid(color)) {
//       const newShades = chroma
//         .scale([chroma(color).brighten(1), chroma(color).darken(2)])
//         .mode('lab')
//         .colors(quantity);
//       setShades(newShades);
//       setError('');
//     } else {
//       setError('Color inválido. Intente con otro color.');
//       setShades([]);
//     }
//   };

//   const handleShadeClick = (shade) => {
//     setBaseColor(shade);
//     generateShades(shade);
//   };

//   useEffect(() => {
//     generateShades();
//   }, [baseColor, quantity]);

//   const copiarColor = (color) => {
//     navigator.clipboard.writeText(color);
//     toast.success('Color copiado');
//   }

//   return (
//     <div className='contenedor-body'>
//       <main>
//         <div className="titulo">
//           <h1 className="titulo-del-proyecto" style={{ color: baseColor }}>Generador de colores</h1>
//         </div>

//         <div className="subtitulo">
//           <h3 className="subtitulo-del-proyecto"> Explorá la paleta perfecta </h3>
//         </div>

//         <form onSubmit={(e) => e.preventDefault()} className="entrada">
//           <div className="cont-input-text">
//             <input
//               className='input-color'
//               type="text"
//               value={baseColor}
//               onChange={(e) => setBaseColor(e.target.value)}
//               placeholder="#3498db"
//             />
//             <input
//               className='input-type-color'
//               type="color"
//               value={baseColor}
//               onChange={(e) => setBaseColor(e.target.value)}
//               placeholder="#3498db"
//             />
//             <select
//               name="quantity"
//               onChange={(e) => setQuantity(Number(e.target.value))}
//               value={quantity}
//               className="cont-select"
//               id="quantity"
//             >
//               <option value="12">12</option>
//               <option value="18">18</option>
//               <option value="24">24</option>
//               <option value="30">30</option>
//             </select>
//           </div>

//           {error &&
//             <div className='error-error'>
//               <div className="texto-error">
//                 <p className="error"> {error} </p>
//               </div>
//               <div className="imagen">
//                 <img src="/img/error-generador-colores.gif" alt="Error 500" className='imagen-error' />
//               </div>
//             </div>
//           }

//         </form>

//         <div className='array-de-colores'>
//           {shades.map((shade, index) => (
//             <div
//               key={index}
//               className="colores-filtrados"
//               style={{ backgroundColor: shade }}
//               onClick={() => { handleShadeClick(shade), copiarColor(shade) }}
//             />
//           ))}
//         </div>

//         <Toaster />
//       </main>
//       <footer>
//         <p className="texto-footer">
//           Designed and handcrafted by <a className='link-redes' style={{ color: baseColor }} href="https://github.com/Lucascabral95" target="_blank" rel="noreferrer">Lucas Cabral</a> 🚀🚀🚀👩‍💻
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default App;
import React from "react";
import { Toaster } from "react-hot-toast";

import { useColorGenerator } from "./hooks/useColorGenerator";
import { ColorInput } from "./components/ColorGenerator/ColorInput";
import { ColorPalette } from "./components/ColorGenerator/ColorPalette";
import { ErrorMessage } from "./components/ColorGenerator/ErrorMessage";
import { Footer } from "./components/Footer/Footer";

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
