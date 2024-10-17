import { Component } from "react";
import PropTypes from "prop-types";

export default class category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }
  render() {
    return (
      <button className="uppercase p-7 text-lg font-raleway hover:border-b-2 hover:border-b-[#5ECE7B] hover:text-[#5ECE7B]">
        <a href="/">{this.state.name}</a>
      </button>
    );
  }
}

category.propTypes = {
  name: PropTypes.string,
};
