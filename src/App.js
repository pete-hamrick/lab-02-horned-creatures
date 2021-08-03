import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';
import images from './data.js'

class App extends Component {
  state = { type: 'All' }
  handleChange = (e) => {
    this.setState({type: e.target.value})
  };
  render() { 
    const filteredCreatures = images.filter(
      (image) => image.keyword === this.state.type 
    );
    return ( 
      <div className='App'>
          <h1>Horned Creatures</h1>
          <select onChange={this.handleChange}>
            <option value='All'>All</option>
            <option value='narwhal'>narwhal</option>
            <option value='rhino'>rhino</option>
            <option value='unicorn'>unicorn</option>
            <option value='unilego'>unilego</option>
            <option value='triceratops'>triceratops</option>
            <option value='markhor'>markhor</option>
            <option value='mouflon'>mouflon</option>
            <option value='addax'>addax</option>
            <option value='chameleon'>chameleon</option>
            <option value='lizard'>lizard</option>
            <option value='dragon'>dragon</option>
          </select>
          <div className='images'>
            <ImageList
              image={this.state.type === 'All' ? images : filteredCreatures}
            />
          </div>
      </div>
     );
  }
}
 
export default App;



