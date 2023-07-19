import React, {useState} from 'react';
import './App.css';
import {Settings} from "./component/settingsComponent/Settings";
import {Counter} from "./component/counter/counter";


function App() {
    const [settings, setSettings] = useState(true)
    return (
        <div className="App">
            <h1>Counter with Redux</h1>
            <div className='containers'>{settings &&
                <div className='container'>
                    <Settings setSettings={setSettings} settings={settings}/>
                </div>}
                <div className='container'>
                    <Counter setSettings={setSettings} settings={settings}/>
                </div>
            </div>
        </div>
    );
}

export default App;
