import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      text: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <h3>Restaurant</h3>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleOnChange} value={this.state.text} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
