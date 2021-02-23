import React,  { Component } from 'react';
import { SearchBar } from 'react-native';

searchHeader = () => {    
  return (      
    <SearchBar        
      placeholder="Type Here..."        
      lightTheme        
      round        
      onChangeText={text => this.searchFilterFunction(text)}
      autoCorrect={false}             
    />    
  );  
};