import React, {Component} from 'react';
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';


export default class Profile extends Component{

  constructor(props){
    super(props);
  }

render(){


  return(


<div>

<p>  profile page</p>
<p>Email:{this.props.info.email}</p>
<p>Name:{this.props.info.name}</p>
<p>Pic: {this.props.info.profile_pic}</p>
<button id='edit'>Edit</button>



</div>




  )
  }
}
