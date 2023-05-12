import Forca from './Forca.js';
import Teclado from './Teclado.js'
import Word from './Word.js'

export default function App() {
  return (
    <div className='main'>
      <div className="container-cima">
        <Forca />
        <Word />
      </div>
        <Teclado />
    </div>
  );
}
