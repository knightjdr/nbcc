import React, { PureComponent } from 'react';

import imageList from './facilities__hri-image-list';
import Images from './facilities__hri-images';

class ImagesContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: Math.floor(Math.random() * imageList.length),
    };
  }

  handleClick = (index) => {
    this.setState({
      selected: index,
    });
  }

  render() {
    const { selected } = this.state;
    return (
      <Images
        handleClick={this.handleClick}
        images={imageList}
        selected={selected}
      />
    );
  }
}

export default ImagesContainer;
