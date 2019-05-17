import React, { Component } from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash.js';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends Component {
    
    state = {
        images: []
    }
    // async/await syntax as opposed to .then promise statement
    // 1. ASYNC keyword in front of method name/ move to in from of arg when using arrow function
    // 2. AWAIT keyword on what is waiting to get resolved/network request/get
    // 3. whatever gets returned is assigned to 'response' variable
    
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        });
        this.setState({images: response.data.results})
    }
    render(){
        return (
        <div className="ui container" style={{marginTop: "10px"}}>
            <SearchBar
                onSubmit={this.onSearchSubmit} 
            />
           <ImageList 
                images= {this.state.images}
                />
        </div>
        )
    }
}
export default App;