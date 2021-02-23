import React, {Component} from 'react';
import { Text,TextInput,View,Button, Image } from 'react-native';


export default class Loading extends Component<Props> {

//render loader for page load

  render() {
  	const { imageStyle, viewStyle, textStyle } = styles;
  	let loading_url = "./images/loading.gif"
    return (
    	<View style={viewStyle}>
	        <Image
				style={imageStyle}
				source={require('../images/loading.gif')}
			/>
        </View>
    )
  }

}

 const styles = {
	viewStyle: {
		padding: 20,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageStyle: {
		height: 48,
		width: 48
	},
	textStyle: {
		fontFamily: "lineto-circular-pro-medium",
		fontSize: 18
	}
};

