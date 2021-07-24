import React from 'react'
import '../assets/styles/App.scss';
import "bootstrap";
import Hola from './Hola'

const App = () => (
    <div>
        <h1>Hola</h1>
        <button className='btn btn-primary'>Adios</button>
        <Hola />
    </div>
    )


export default App;