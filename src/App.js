import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import SettingsScreen from './pages/SettingsScreen';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ LoginScreen } />
        <Route path="/settings" component={ SettingsScreen } />
        {/* <Route path="/playGame" /> */}
      </Switch>
    </div>
  );
}
