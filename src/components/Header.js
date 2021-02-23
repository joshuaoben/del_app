import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

const styles = {
	viewStyle: {
		backgroundColor:'rgba(255,255,255, 1)',
		justifyContent: 'center',
		alignItems: 'center',
		flex:1,
		position: 'absolute',
		left:0,
		right:0,
		top:0,
		zIndex: -1,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.5, 
		elevation: 1,
		borderBottomColor: ' rgba(100,100,100,0.1)',
		borderBottomWidth: 1
		
	},
	textStyle:{
		fontFamily: "lineto-circular-pro-medium",
		fontSize: 16,
		paddingTop: 20,
		paddingBottom: 20,
		color: 'rgba(50,50,50, 0.8)',
	}
};

export default class Header extends Component<Props> {
  render() {
  	const { textStyle, viewStyle } = styles;
    return (
    	<View style={viewStyle}>
	    	<Text style={textStyle}> Yanis Dispatch Management </Text>
	    </View>
    );
  }
}

