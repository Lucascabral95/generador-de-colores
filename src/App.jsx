import { useState, useEffect } from 'react';
import chroma from 'chroma-js';

const App = () => {
  const [baseColor, setBaseColor] = useState('violet');
  const [shades, setShades] = useState([]);
  const [quantity, setQuantity] = useState(18);
  const [error, setError] = useState('');

  const generateShades = (color = baseColor) => {
    if (color && chroma.valid(color)) {
      const newShades = chroma
        .scale([chroma(color).brighten(1), chroma(color).darken(2)])
        .mode('lab')
        .colors(quantity);
      setShades(newShades);
      setError('');
    } else {
      setError('Color inválido. Intente con otro color.');
    }
  };

  const handleShadeClick = (shade) => {
    setBaseColor(shade);
    generateShades(shade);
  };

  useEffect(() => {
    generateShades();
  }, [baseColor, quantity]);

  return (
    <div className='contenedor-body'>
      <main>
        <div className="titulo">
          <h1 className="titulo-del-proyecto" style={{ color: baseColor }}>Generador de colores</h1>
        </div>

        <div className="subtitulo">
          <h3 className="subtitulo-del-proyecto"> Explorá la paleta perfecta </h3>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="entrada">
          <div className="cont-input-text">
            <input
              className='input-color'
              type="text"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              placeholder="#3498db"
            />
            <select
              name="quantity"
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={quantity}
              className="cont-select"
              id="quantity" 
              >
              <option value="12">12</option>
              <option value="18">18</option>
              <option value="24">24</option>
              <option value="30">30</option>
            </select>
          </div>

          {error && <p className="error">{error}</p>}

        </form>

        <div className='array-de-colores'>
          {shades.map((shade, index) => (
            <div
              key={index}
              className="colores-filtrados"
              style={{ backgroundColor: shade }}
              onClick={() => handleShadeClick(shade)}
            />
          ))}
        </div>
      </main>
      <footer>
        <p className="texto-footer">
          Designed and handcrafted by <a className='link-redes' style={{ color: baseColor }} href="https://github.com/Lucascabral95" target="_blank" rel="noreferrer">Lucas Cabral</a> 🚀🚀🚀👩‍💻
        </p>
      </footer>
    </div>
  );
};

export default App;
