import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Dashboard from './src/components/Dashboard';
import Login from './src/components/Login';
import {name as appName} from './app.json';
import {Router, Scene} from 'react-native-router-flux';

class App extends Component {

  render() {
    return(
      <Router>
        <Scene key='root'>
          <Scene
            component={Login}
            hideNavBar={true}
            initial={true}
            key='Authentication'
            title='Authentication'
          />
          <Scene
            component={Dashboard}
            hideNavBar={true}
            key='Dashboard'
            title='Dashboard'
          />
        </Scene>
      </Router>
    )
  }

}

AppRegistry.registerComponent(appName, () => App);
