import React, { Component } from 'react';

class ImageItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h3>{this.props.image.title}</h3>
                <img
                    alt={this.props.image.title}
                    width='200'
                    src={this.props.image.url}
                />
            </div>
         );
    }
}
 
export default ImageItem;