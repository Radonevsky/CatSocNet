import React from 'react';

import './App.css';
import Header from "./Components/Header/Header";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import NavbarContainer from "./Components/Navbar/NavbarContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Route /*exact*/ path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
