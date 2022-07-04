import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";

function App() {
    return (
        <>
            <Header headerTitle={"So here's the Header!"}/>
            <Body titleForBody={"Hi, this is the BODY"}/>
        </>
    );
}

export default App;
