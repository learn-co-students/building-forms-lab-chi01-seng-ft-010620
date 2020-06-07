// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {
    state = {
      name: ''
    }
  

   handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);

    this.setState({
      name: '',
    })
  }

   handleInput = (event) => {
    this.setState({
      name: event.target.value
    })      
  }

  render() {



    return(
      <div>
        <form onSubmit={(event) =>  this.handleSubmit(event)}>
          <input type="text" name="text" id=""  value ={this.state.name} onChange={(event) => this.handleInput(event)}/>
          
        <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}


export default BandInput;
