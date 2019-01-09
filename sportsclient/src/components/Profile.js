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
  {this.props.editIt?
<div>
<img alt="mystery person" src="https://cdn3.iconfinder.com/data/icons/glyphicon/64/profil-512.png"/>
<p> profile page</p>
<p>Email:{this.props.info.email}</p>
<p>Name:{this.props.info.name}</p>

<p>Pic: {this.props.info.profile_pic}</p>
<p>sport_type: {this.props.info.sport_type}</p>
<button id='edit' onClick={this.props.changeView}>Edit</button></div>
 :






 <div>
   <p>we are editng</p>


 <form onSubmit={this.props.handleSubmitProfile}>
   <input type='text'
     name='name'
     placeholder='name'
     onChange={this.props.handleEditProfile}
     value={this.props.info.name}
     >
   </input>
   <input type='text'
     placeholder='profile_pic'
     name='profile_pic'
     onChange={this.props.handleEditProfile}
     value={this.props.info.profile_pic}
     >
   </input>
   <input type='text'
     placeholder='sport_type'
     name='sport_type'
     onChange={this.props.handleEditProfile}
     value={this.props.info.sport_type}
     >
   </input>

<button type='submit'>Submit</button>
 </form></div>}










</div>




  )
  }
}
