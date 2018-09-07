import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import DepositComponent from "./components/Deposit";
import SampleComponent from "./components/Sample";
import Cart from './components/Cart'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>

                    <Route path="/register" component={Signup} />
                    <Route path="/login" component={Login}/>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/deposit" component={DepositComponent} />
                    <Route path="/sample/:name?" component={SampleComponent} />
                    <Route path="/cart" component={Cart} />

                    <Route path="/" component={Home}/>

                </Switch>
            </div>
        );
    }

    componentDidMount(){
        console.log(this.state)
    }

}

export default App;
