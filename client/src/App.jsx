import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    const getGraphQLData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/graphql", {
          query: `
          {
            products {
              id
              name
            }
          }`,
        });

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getGraphQLData();
  }

  counterIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.counterIncrement}>Increment</button>
      </div>
    );
  }
}

export default App;
