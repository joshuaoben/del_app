import React,  { Component } from 'react';
import { Modal, Alert, ScrollView, Text,Button, View, TouchableOpacity, TouchableHighlight, Picker } from 'react-native';
import axios from 'axios';

class OrderDetail extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
		    modalVisible: false,
		    status: '',
		    message: ''
		  };

		this.showUpdateModal = this.showUpdateModal.bind(this);
		this.updateModal = this.updateModal.bind(this);
	}

	showUpdateModal = (visible) => {
		
		this.setState({modalVisible: visible});
	}
//consume api to post update
	updateModal = (id) => {

		axios.post('http://healthnigeria.info/back/api/order/update.php',
		  {
		     'id': id,
		     'status': this.state.status
		  },{
		      "headers": {
		        'Content-Type': 'application/json',
		      }
		  }).then((response ) => {
		     console.log("reactNativeDemo","response get details:"+response.data.message);
		     this.setState({message: response.data.message})
		     Alert.alert(this.state.message);
		     this.showUpdateModal(false);
		  })
		  .catch((error) => {
		     console.log("axios error:",error);
		     Alert.alert("axios error:",error);
		  });

		
	}

	
render(){

		const {  id, name, number, address, delivery_status, status, pref_delivery_date, delivery_date } = this.props.order;
		const { orderCardStyle, nameStyle, numberStyle, addressStyle, statusStyle, updateStyle, redBox, greenBox, controlViewStyle, textViewStyle} = styles;

	return (
			
			status != "Delivered" ?

			<><Modal
	          animationType="slide"
	          transparent={false}
	          visible={this.state.modalVisible}
	          >
	          <View style={{marginTop: 100, paddingLeft: 20, paddingRight: 20, padingTop: 40}}>
	          	<View style={textViewStyle}>
					<Text style={nameStyle}>{name}</Text>
					<Text style={numberStyle}>{number}</Text>
					<Text style={addressStyle}>{address}</Text>
					{ 
						pref_delivery_date ? <Text style={numberStyle}>Expected on {pref_delivery_date}</Text> : <></> 
					}
					<Picker
					  selectedValue={this.state.status}
					  style={{height: 50, width: '100%', borderWidth: 1, borderRadius: 10, borderColor: 'rgba(100,100,100,0.4)', marginTop: 10 }}
					  onValueChange={(itemValue, itemIndex) =>
					    this.setState({status: itemValue})
					  }>
					  <Picker.Item label="-- Select  --" value="" />
					  <Picker.Item label="Delivered" value="Delivered" />
					  <Picker.Item label="Failed" value="Failed" />
					</Picker>

					<TouchableHighlight style={{ width: '100%', alignItems: 'center', height: 40,  backgroundColor:'rgba(230,230,240,1)', flexDirection: 'column', justifyContent: 'space-around', marginTop: 10, shadowColor: '#000', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 0.8,  shadowRadius: 5, elevation: 1 }}
	                onPress={() => {
		                  this.updateModal(id);
		                }}>
		                <Text style={{ fontFamily: "lineto-circular-pro-medium" }}>UPDATE</Text>
		              </TouchableHighlight>
		              <TouchableHighlight style={{ width: '100%', alignItems: 'center', height: 40,  backgroundColor:'rgba(200,200,210,1)', flexDirection: 'column', justifyContent: 'space-around', marginTop: 10, shadowColor: '#000', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 0.8,  shadowRadius: 5, elevation: 1 }}
	                onPress={() => {
		                  this.showUpdateModal(false);
		                }}>
		                <Text style={{ fontFamily: "lineto-circular-pro-medium" }}>CANCEL</Text>
		              </TouchableHighlight>
				</View>

	          </View>
	        </Modal>
			<TouchableOpacity style={orderCardStyle} onPress={() => {  this.showUpdateModal(true);  }}>
				<View style={controlViewStyle}>
					<View style={redBox}></View> 
				</View>
				<View style={textViewStyle}>
					<Text style={nameStyle}>{name}</Text>
					<Text style={numberStyle}>{number}</Text>
					<Text style={addressStyle}>{address}</Text>
					{ 
						pref_delivery_date ? <Text style={numberStyle}>Expected on {pref_delivery_date}</Text> : <></> 
					}
					
				</View>
			</TouchableOpacity></>
			:
			<View style={orderCardStyle}>
				<View style={controlViewStyle}>
					<View style={greenBox}></View>
				</View>
				<View style={textViewStyle}>
					<Text style={nameStyle}>{name}</Text>
					<Text style={numberStyle}>{number}</Text>
					<Text style={addressStyle}>{address}</Text>
					{ 
						delivery_date ? <Text style={numberStyle}>Delivered on {delivery_date}</Text> : <></> 
					}
					
				</View>
			</View>

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

export default OrderDetail;
