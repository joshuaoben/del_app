import React,  { Component } from 'react';
import { Modal, Alert, ScrollView, Text, Button, View, TouchableOpacity, TouchableHighlight } from 'react-native';

export default class DeliveredList extends Component {
	  constructor(props) {
	    super(props);

	    this.state = {
	    	  
			};  	
	}


	render() {
		const {  id, name, number, address, delivery_status, status, pref_delivery_date, delivery_date } = this.props.prop;
		const { orderCardStyle, nameStyle, numberStyle, addressStyle, statusStyle, updateStyle, redBox, greenBox, controlViewStyle, textViewStyle} = styles;
	    return (
	      <Modal
	          animationType="slide"
	          transparent={false}
	          visible={this.state.modalVisible}
	          onRequestClose={() => {
	            Alert.alert('Order Updated.');
	          }}>
	          <View style={{marginTop: 22}}>
	          	<View style={textViewStyle}>
					<Text style={nameStyle}>{name}</Text>
					<Text style={numberStyle}>{number}</Text>
					<Text style={addressStyle}>{address}</Text>
					{ 
						pref_delivery_date ? <Text style={numberStyle}>Expected on {pref_delivery_date}</Text> : <></> 
					}
					<TouchableHighlight
	                onPress={() => {
		                  this.showUpdateModal(false);
		                }}>
		                <Text>Hide Modal</Text>
		              </TouchableHighlight>
				</View>

	          </View>
	        </Modal>
	    );
	}
}

const styles = {
	orderCardStyle: {
		backgroundColor:'rgba(255,255,255,1)',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '100%',
		padding: 15,
		borderBottomColor: ' rgba(100,100,100,0.09)',
		borderBottomWidth: 1
	},
	textViewStyle:{
		width: '95%'
	},
	controlViewStyle:{
		width: '1%',
		marginRight: '4%',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	nameStyle: {
		fontSize: 16,
		flexDirection: 'column',
		justifyContent: 'space-around',
		fontFamily: "lineto-circular-pro-medium",
		width: '100%',
		color: 'rgba(10,10,10,0.9)'
	},
	numberStyle:{
		fontSize: 14,
		marginTop: 0,
		flexDirection: 'column',
		justifyContent: 'space-around',
		fontFamily: "lineto-circular-pro-book",
		color: 'rgba(100,100,250,1)',
	},
	addressStyle:{
		fontSize: 14,
		fontFamily: "lineto-circular-pro-book",
		width: '100%',
		color: 'rgba(10,10,10,0.7)'
	},
	statusStyle: {
		justifyContent: 'center',
		marginLeft: 10,
		marginRight: 10,
		width: '20%',
		flexDirection: 'column',
	},
	updateStyle: {
		width: '20%',
		flexDirection: 'column',
	},
	redBox: {
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(250,120,120,0.9)',
		borderRadius: 5
	},
	greenBox: {
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(120,250,120,0.9)',
		borderRadius: 5
	}
};
