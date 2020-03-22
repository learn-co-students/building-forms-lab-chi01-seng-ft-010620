import React, { Component } from 'react'
import Bands from '../components/Bands.js'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        {this.props.bands.map((band, index) =>{
          return <Bands key={index} band={band}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

export default connect(mapStateToProps)(BandsContainer)
