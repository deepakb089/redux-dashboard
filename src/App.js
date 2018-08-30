import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default App;
