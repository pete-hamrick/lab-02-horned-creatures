import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.image.map((item) => {
                    return <ImageItem key={item.title} image={item} />
                })}
            </div>
         );
    }
}
 
export default ImageList;