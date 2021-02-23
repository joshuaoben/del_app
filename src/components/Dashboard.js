import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView,Button, Dimensions} from 'react-native';
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import Footer from './Footer';
import DeliveredList from './DeliveredList';
import PendingList from './PendingList';
import SearchList from './SearchList';
import Login from './Login';


type Props = {};
export default class Dashboard extends Component<Props> {
  render() {
  	let ScreenHeight = Dimensions.get("window").height;
    return (
	    <><Router cardStyle={{backgroundColor: 'rgba(255,255,255, 1)', marginBottom: 50 }}>
		    <Stack key="main">
		      <Scene key="pending" component={ sceneProps => <PendingList agent={this.props.agent} />}  hideNavBar={true} initial />
		      <Scene key="delivered" component={sceneProps => <DeliveredList agent={this.props.agent} />}  hideNavBar={true}/>
		      <Scene key="search" component={sceneProps => <SearchList agent={this.props.agent} />} hideNavBar={true} />
		      <Scene key="logout" component={Login} hideNavBar={true}/>
		    </Stack>
		  </Router>
		  <Footer /></>
    );
  }
}