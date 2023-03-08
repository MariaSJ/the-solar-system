import '../styles/core/reset.scss';
import '../styles/core/variables.scss';

import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Header from './Header';
import Planet from './Planet';
//import callToApi from '../services/api';
//import ls from '../services/localStorage';
//import PropTypes from 'prop-types';

// STATES

// USEEFFECT

// useEffect(() => {
//   // Dentro de useEffect llamamos a la API
//   callToApi().then((data) => {
//     // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente X
//     X(data);
//   });
//   // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
// }, []);

function App() {

  //States
  const [showMenu, setShowMenu] = useState(false);
  const [showName, setShowName] = useState(true);

  //Handler functions

  const handlerShowMenu = () => {
    setShowMenu(!showMenu);
    setShowName(!showName);
  };

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/solar-system" element={
        <>
        <Header
          handlerShowMenu={handlerShowMenu}
          showMenu={showMenu}
          showName={showName} />
        <main className="main"></main>
        </> 
      } />
      <Route path="/solar-system/:planet" element={<Planet/>} /> 
    </Routes>
  </>
  );
}

export default App;
