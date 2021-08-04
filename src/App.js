import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';
import images from './data.js'
import Dropdown from './Dropdown';

class App extends Component {
  state = { 
    type: 'All',
    horns: 'All'
  }
  keywordOptions = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'addax', 'chameleon', 'lizard', 'dragon']
  hornsOptions = ['All', 1, 2, 3, 100]
  
  handleChange = (e) => {
    this.setState({type: e.target.value})
  };
  handleHornsChange = (e) => {
    const numHorns = e.target.value;
    this.setState({ horns: numHorns });
  };

  render() { 
    const filteredCreatures = images.filter(
      (image) => this.state.type === 'All' || image.keyword === this.state.type
    );
    const filteredHorns = filteredCreatures.filter (
      (image) => this.state.horns === 'All' || image.horns === Number(this.state.horns)
    );
    return ( 
      <div className='App'>
          <h1>Horned Creatures</h1>
          <Dropdown
              label='Type'
              options={this.keywordOptions}
              changeEvent={this.handleChange}
          />
          <Dropdown
              label='Horns'
              options={this.hornsOptions}
              changeEvent={this.handleHornsChange}
          />
          <div className='images'>
            <ImageList
              image={filteredHorns}
            />
          </div>
      </div>
     );
  }
}
 
export default App;



