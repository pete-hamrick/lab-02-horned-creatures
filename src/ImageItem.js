import React, { Component } from 'react';

class ImageItem extends Component {
    state = {  }
    render() { 
        return ( 
            <p>
                {this.props.image.title}
                <img
                    alt={this.props.image.title}
                    width='200'
                    src={this.props.image.url}
                />
            </p>
         );
    }
}
 
export default ImageItem;