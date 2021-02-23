import React, {Component} from 'react';
import { Text,TextInput,View,Button, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Loading from './Loading';
import md5 from 'md5';

type Props = {};


export default class Login extends Component {
	constructor(props) {
    super(props);

    this.state = {
     username: null, 
     password: null,
     loading: false,
     data: {},
     login: false,
     error: ''
  	};
  }

  	checkCredentials() {

  		if (this.state.data.name !== "") {
  			if ( this.state.username === this.state.data.username && md5(this.state.password) === this.state.data.password) {
				// alert('Correct Details');
				Actions.Dashboard({agent: this.state.data.id});
			}
			else {
				alert('Wrong Details');
			}
  		}
  		
		else {
			alert('User does not exist');
		}
  	}

  	userLogin() {
  		that = this
  			this.setState({ loading: true });

  			let api_url = 'http://healthnigeria.info/back/api/user/read_one.php?username=' + this.state.username;
			axios.get(api_url)
			.then(response => {this.setState({data: response.data, error: response.error || null,  loading: false }); 
			})
			.then(setTimeout(function() {
			      that.checkCredentials()
			     }, 2000) )
			.catch(error => {        
		     this.setState({ error: error.message, loading: false });      
		   });

		}
	  


  render() {
  	const { inputStyle, textStyle, bodyStyle, buttonStyle, viewStyle, headerStyle, headingStyle } = styles;

  	if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    
    return (
    	<View style={bodyStyle}>
    		<View style={viewStyle}>
    			<View style={headingStyle}>
	    			<Text style={ headerStyle }> Yanis </Text>
	    			<Text style={textStyle}> LOGISTICS </Text>
	    		</View>
		        <TextInput style={inputStyle} placeholderTextColor={'#fff'} placeholder='Username' ref='username' onChangeText={(username) => this.setState({username})} value={this.state.username} />
		        <TextInput style={inputStyle} secureTextEntry={true} placeholderTextColor={'#fff'} ref='password' placeholder='Password' onChangeText={(password) => this.setState({password})} value={this.state.password} />
		        <TouchableHighlight style={buttonStyle} onPress={this.userLogin.bind(this)} >  
		        	<Text style={{ fontFamily: "lineto-circular-pro-medium" }}> LOGIN </Text> 
		        </TouchableHighlight>
		    </View>
        </View>
    )
	
  }
}

const styles = {
	bodyStyle: {
		backgroundColor:'rgb(45,45,55)',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	},
	viewStyle: {
		width: '80%',
		color: 'rgba(255,255,255,0.9)',
		flexDirection: 'column',
		
	},
	headingStyle: {
		justifyContent: 'space-around',
		alignItems: 'center'

	},
	headerStyle: {
		fontSize: 48,
		fontFamily: "lineto-circular-pro-medium",
		color: 'rgba(255,255,255,0.8)',
		margin: 0,
		padding: 0
	},
	inputStyle:{
		fontSize: 16,
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomColor: 'rgba(255,255,255,0.5)',
		borderBottomWidth: 1.5,
		color: 'rgba(255,255,255,0.8)',
		fontFamily: "lineto-circular-pro-book"
	},
	textStyle:{
		fontSize: 12,
		margin: 0,
		padding: 0,
		color: 'rgba(255,255,255,0.8)'
	},
	buttonStyle:{
		backgroundColor: 'rgba(255,255,255,0.9)',
		marginTop: 20,
		width: '100%', 
		alignItems: 'center',
		padding: 10,
	}
};

