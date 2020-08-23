import React, {Component} from 'react';
import './app.css';
import {Route, BrowserRouter, Link} from "react-router-dom";
import Home from "./Home";
import Calculator from "../component/Calculator";
import Timer from "../component/Timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/calculator">在线计数器</Link></li>
                    <li><Link to="timer">在线倒计时器</Link></li>
                </ul>
            </nav>
            <h1>在线实用工具</h1>
          <Route exact path='/' component={Home}/>
          <Route path='/calculator' component={Calculator}/>
          <Route path='/timer' component={Timer}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
