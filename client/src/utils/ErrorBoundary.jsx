
import React, { Component } from 'react' //eslint-disable-line

export default class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
      this.state = {
        errors: []
      }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        this.setState({
            errors: [...this.state.errors, error]
        });
    }

  render() {
    if (this.state.errors.length > 0) {
      return (
        <ul>
          {this.state.errors.map((error, index) => (
            <li key={index}>{error.message}</li>
          ))}
        </ul>
      );
    }
    return this.props.children; //eslint-disable-line
  }
}
