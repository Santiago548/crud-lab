import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props)

    this.state= {
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
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <h3>Review</h3>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleOnChange} value={this.state.text} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
