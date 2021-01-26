import React from 'react'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import {connect} from "react-redux";
import {initializeApp} from './redux/app-reducer';
import Preloader from "./components/common/Preloader/Preloader";
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {withSuspense} from "./components/HOC/LazyLoadingWithSuspense";
import Header from "./components/Header/Header";

const Auth = React.lazy(() => import('./components/Auth/Auth'));


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
                        <Header />
                    </div>
                    <div className='body'>
                        <Navbar/>
                        <Route path='/dialogs'
                               render={() => <Dialogs />}/>
                        <Route path='/profile/:userId?'
                               render={() => <Profile/>}/>
                        <Route path='/users'
                               render={() => <Users/>}/>
                        <Route path='/settings'
                               render={() => <Settings/>}/>
                        <Route path='/login'
                               render={ withSuspense(Auth) }/>
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
