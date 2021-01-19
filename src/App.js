import React from 'react'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Auth from "./components/Auth/Auth";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from './redux/app-reducer';
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } else
        return (
            <BrowserRouter>
                <div className='appWrap'>
                    <div className='header'>
                        <HeaderContainer/>
                    </div>
                    <div className='body'>
                        <Navbar/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/settings'
                               render={() => <Settings/>}/>
                        <Route path='/login'
                               render={() => <Auth/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
/*
export default App;
*/
