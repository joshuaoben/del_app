import React,  { Component } from 'react';
import { ScrollView, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SearchBar, SocialIcon } from 'react-native-elements';
import axios from 'axios';
import OrderDetail from './OrderDetail';
import Loading from './Loading';

export default class SearchList extends Component {
	  constructor(props) {
	    super(props);

	    this.state = {
	    	  data: [],
			  agent_id: 2,
			  loading: false,
			  error: null
			};  

	    this.arrayholder = [];
	}

	componentWillMount() {
		this.setState({agent_id: this.props.agent})
	}

	componentDidMount() {
		   this.makeRequest();
	}
//consume api to get orders based on agent
	makeRequest = () => {
		this.setState({ loading: true });
		let api_url = 'http://healthnigeria.info/back/api/order/read.php?status=Failed&agent=' + this.state.agent_id;
		axios.get(api_url)
		.then(response => {this.setState({data: response.data.records, error: response.error || null,  loading: false });
			this.arrayholder = response.data.records;  
		})
		.catch(error => {        
	     this.setState({ error, loading: false });      
	   });
	};

//function to search through orders
	searchFilterFunction = text => {
	    this.setState({
	      value: text,
	    });

	    const newData = this.arrayholder.filter(item => {
	      const itemData = `${item.name.toUpperCase()} ${item.number.toUpperCase()} ${item.address.toUpperCase()}`;
	      const textData = text.toUpperCase();

	      return itemData.indexOf(textData) > -1;
	    });
	    this.setState({
	      data: newData,
	    });
	};

	renderHeader = () => {
	    return (
	    <>
	      <SearchBar
	      	lightTheme
	      	noIcon
	        placeholder="Search Order..."
	        underlineColorAndroid="transparent"
	        inputContainerStyle={{backgroundColor:'transparent', padding: 0, width: '100%', margin: 0, shadowColor: '#000', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 0.8,  shadowRadius: 5, elevation: 1}}
            inputStyle={{backgroundColor:'transparent', height: 40, fontSize: 16, margin: 0, fontFamily: "lineto-circular-pro-book"}}
			containerStyle={{ backgroundColor: 'white', padding: 0, width: '92%',  height: 40, flex: 1, marginLeft: '4%', marginRight: '4%', marginTop:20, borderRadius: 10 }}
			placeholderTextColor='rgba(100,100,100,0.9)'
	        onChangeText={text => this.searchFilterFunction(text)}
	        autoCorrect={false}
	        value={this.state.value}
	        onClear={text => this.SearchFilterFunction('')}
	      />
	      <Text style={{paddingLeft: 10, paddingTop: 10}}> FAILED ({this.state.data.length}) </Text>
	      </>
	    );
	};


	
	render() {

	    if (this.state.loading) {
	      return (
	        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	          <ActivityIndicator />
	        </View>
	      );
	    }
	    return (
	      <View style={{ flex: 1 }}>
	        <FlatList
	          data={this.state.data}
	          renderItem={({ item }) => (
	            <OrderDetail key={item.id} order={item} />
	          )}
	          keyExtractor={item => item.id}
	          ListHeaderComponent={this.renderHeader}
	        />
	      </View>
	    );
	}

}





