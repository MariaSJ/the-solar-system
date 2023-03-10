import '../styles/core/reset.scss';
import '../styles/core/variables.scss';

import data from '../data/planets.json';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import Landing from './Landing';
import Header from './Header';
import Planet from './Planet';
//import callToApi from '../services/api';
//import ls from '../services/localStorage';


function App() {

  //States
  const [dataPlanets, setDataPlanets] = useState(data);
  console.log(dataPlanets);
  const [showMenu, setShowMenu] = useState(false);
  const [showName, setShowName] = useState(true);

  // USEEFFECT

  // useEffect(() => {
  //   // Dentro de useEffect llamamos a la API
  //   callToApi().then((data) => {
  //     // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente X
  //     setDataPlanets(data);
  //   });
  //   // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  // }, []);


  //Handler functions

  const handlerShowMenu = () => {
    setShowMenu(!showMenu);
    setShowName(!showName);
  };

  //Routes
  const { pathname } = useLocation();
  const routeData = matchPath('solar-system/:planetId', pathname);
  const planetId = routeData !== null ? routeData.params.planetId : '';

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/solar-system" element={
        <>
          <Header handlerShowMenu={handlerShowMenu} showMenu={showMenu} showName={showName} />
          <main className="main"></main>
         </> 
      }/>
      <Route path="/solar-system/:planetId" element={<Planet />} />  
    </Routes>
  </>
  );
}

export default App;