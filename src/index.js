// Before ------------------------------------------------
/**
import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';
import './index.css';
const divRoot = document.querySelector('#app');
//ReactDOM.render( <PrimeraApp saludo='Hola' subtitulo='Subtitulo enviado desde Index' />  , divRoot );
ReactDOM.render(<CounterApp value={10} />, divRoot);
*/

// After React 18 ------------------------------------------------
import React from 'react';
import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
import './index.css';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<CounterApp />);
