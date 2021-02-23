import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Footer extends Component<Props> {
	state = { count: 0 }
 
	onPressSearch = () => {
	    Actions.search()
	  }

	onPressDelivered = () => {
	    Actions.delivered()
	  }

	onPressPending = () => {
	    Actions.pending()
	  }

	onPressLogout = () => {
	    // Actions.reset('logout')
	  }

  render() {

  	const { footerStyle, mainLinkStyle, linkImageStyle, linkTextStyle} = styles;

    return (
      <View style={footerStyle}>
      <Text>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
		<TouchableOpacity style={mainLinkStyle} onPress={this.onPressPending}>
			<Image
				style={linkImageStyle}
				source={require('../images/undelivered.png')}
			/>
			<Text style={linkTextStyle}>PENDING</Text>
		</TouchableOpacity>
		<TouchableOpacity style={mainLinkStyle} onPress={this.onPressDelivered}>
			<Image
				style={linkImageStyle}
				source={require('../images/delivered.png')}
			/>
			<Text style={linkTextStyle}>DELIVERED</Text>
		</TouchableOpacity>
		<TouchableOpacity style={mainLinkStyle} onPress={this.onPressSearch}>
			<Image
				style={linkImageStyle}
				source={require('../images/failed.png')}
			/>
			<Text style={linkTextStyle}>FAILED</Text>
		</TouchableOpacity>
		<TouchableOpacity style={mainLinkStyle} onPress={this.onPressLogout}>
			<Image
				style={linkImageStyle}
				source={require('../images/logout.png')}
			/>
			<Text style={linkTextStyle}>LOGOUT</Text>
		</TouchableOpacity>
	</View>
    );
  }

}

const styles = {
	footerStyle: {
		backgroundColor:'rgba(245,245,255,1)',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
		borderTopColor: ' rgba(100,100,100,0.2)',
		borderTopWidth: 1,
		position: 'absolute',
		left:0,
		right:0,
		bottom: 0,
		zIndex: 1,
		height: 60,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 5},
		shadowOpacity: 0.9, 
		elevation: 1,
	},
	mainLinkStyle:{
		width: '25%',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: 10,
	},
	linkImageStyle:{
		height: 24,
		width: 24,
		marginBottom: 5
	},
	linkTextStyle: {
		fontSize: 11,
		fontFamily: "lineto-circular-pro-book",
		color: 'rgba(100,100,100, 1)'
	}
};


