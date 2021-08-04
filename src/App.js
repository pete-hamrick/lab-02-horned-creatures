import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';
import images from './data.js'
import Dropdown from './Dropdown';

class App extends Component {
  state = { 
    type: 'All',
    horns: 'All',
    // sortOption: 'type'
  }
  // keywordOptions = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'addax', 'chameleon', 'lizard', 'dragon']
  // keywordOptions = [...new Set(images.map(image => image.keyword)), 'All']

  // hornsOptions = [...new Set(images.map(image => image.horns)), 'All']
  
  handleChange = (e) => {
    this.setState({type: e.target.value})
  };
  handleHornsChange = (e) => {
    const numHorns = e.target.value;
    this.setState({ horns: numHorns });
  };
  // filter keyword options based on state horns
  // defaults to all, only want to show what can have correct number of horns
  // accomplished by looking through the static data(images)
  
  render() {
    const filteredKeywordOptions = images.filter(image => image.horns === +this.state.horns || this.state.horns === 'All')
    console.log(filteredKeywordOptions)
    const keywordOptions = ['All', ...new Set(filteredKeywordOptions.map((item) => item.keyword))]
    
    const filteredHornsOptions = images.filter(image => image.keyword === this.state.type || this.state.type === 'All')
    const hornsOptions = ['All', ...new Set(filteredHornsOptions.map((item) => item.horns))]
    
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
              options={keywordOptions}
              changeEvent={this.handleChange}
          />
          <Dropdown
              label='Horns'
              options={hornsOptions}
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



