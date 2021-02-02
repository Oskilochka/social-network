import React from 'react'
import "./App.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter, Switch, Redirect} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import {connect} from "react-redux";
import {initializeApp} from './redux/app-reducer';
import {Preloader} from "./components/common/Preloader/Preloader";
import Dialogs from "./components/Dialogs/Dialogs";
import {withSuspense} from "./components/HOC/LazyLoadingWithSuspense";
import {Header} from "./components/Header/Header";
import {compose} from "redux";
import {NotFound} from "./components/404/NotFound";
import Users from "./components/Users/Users";
import {AppStateType} from "./redux/redux-store";
import Profile from "./components/Profile/Profile";

const Auth = React.lazy(() => import('./components/Auth/Auth'));

type MapStateToProps = ReturnType<typeof mapStateToProps>

type DispatchToProps = {
    initializeApp: () => void
}

class App extends React.Component<MapStateToProps & DispatchToProps> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='appWrap'>
                    <div className='header'>
                        <Header/>
                    </div>
                    <div className='body'>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/profile"/>
                            </Route>

                            <Route path='/dialogs'
                                   render={() => <Dialogs/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <Profile />}/>
                            <Route path='/users'
                                   render={() => <Users/>}/>
                            <Route path='/settings'
                                   render={() => <Settings/>}/>
                            <Route path='/login'
                                   render={withSuspense(Auth)}/>
                            <Route path='*'
                                   render={() => <NotFound/>}/>
                        </Switch>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App) as React.ElementType;
