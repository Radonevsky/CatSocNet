/* eslint-disable no-unused-vars */
import React, {lazy, Suspense} from 'react';
import './App.css';
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import {Route, Switch} from "react-router-dom";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
//import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer"
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/common/Preloader";

const ProfileContainer = lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./Components/Dialogs/DialogsContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                        <Route /*exact*/ path="/dialogs" component={DialogsContainer}/>
                        <Route path="/users" component={UsersContainer}/>
                        <Route path="/profile/:userId?" component={ProfileContainer}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/login" component={LoginContainer}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
