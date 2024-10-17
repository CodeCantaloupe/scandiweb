import { Component } from "react";
import propTypes from 'prop-types'

export default class ColorButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
    };
  }
  render() {
    return (
        <label
          htmlFor={this.state.item.id}
          className="inline-flex justify-center items-center p-6 mr-6 size-8
                     cursor-pointer hover:opacity-80 peer-checked:ring-[#5ECE7B]
                     peer-checked:ring-2 ring-offset-2 "
          style={{backgroundColor: this.state.item.value}}
        />
    );
  }
}

ColorButton.propTypes = {
  item: propTypes.object,
}