import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XichaItem extends Component {
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  render() { 
    return ( 
      <div onClick={this.handleClick}>{this.props.avname}为你做- {this.props.content}</div>
   );
  }
  handleClick(){
    this.props.deleteItem(this.props.index)
  }
   
}
XichaItem.propTypes={
  content:PropTypes.string,
  deleteItem:PropTypes.func,
  index:PropTypes.number,
  avname:PropTypes.string.isRequired
}
XichaItem.defaultProps = {
  avname:'松岛枫'
}
export default XichaItem;