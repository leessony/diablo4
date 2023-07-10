import React from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom";
import Area from "./Area";
import Summary from "./dungeon/Summary";

import './App.scss';

const router = createHashRouter([
    {
        path: '/',
        element: <Summary/>
    },
    {
        path: '/area',
        element: <Area/>
    }
])

function App() {
    return (
        <div className="App">
            <header id="header" className="App-header">
                {/*    <p>*/}
                {/*        Edit <code>src/App.tsx</code> and save to reload.*/}
                {/*    </p>*/}
                {/*    <a*/}
                {/*        className="App-link"*/}
                {/*        href="https://reactjs.org"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*    >*/}
                {/*        Learn React*/}
                {/*    </a>*/}
            </header>
            <div id="content">
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;
