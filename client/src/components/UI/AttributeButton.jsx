import { Component } from "react";
import propTypes from "prop-types"

export default class AttributeButton extends Component {

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
          className="inline-flex justify-center text-center items-center w-20 h-12 mr-6
                     cursor-pointer border-black border-2 text-semibold uppercase
                     hover:bg-black hover:text-white peer-checked:bg-black
                     peer-checked:text-white">
          {this.state.item.displayValue}
        </label>
    );
  }
}

AttributeButton.propTypes = {
  item: propTypes.object
}