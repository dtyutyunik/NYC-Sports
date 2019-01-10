import React, {Component} from 'react';

import { Card, Icon, Image } from 'semantic-ui-react'

export default class Profile extends Component{

  constructor(props){
    super(props);
  }

render(){


  return(


<div>
  {this.props.editIt?
<div>
  <Card className='profileDisplay'>
    {this.props.info.profile_pic?<Image alt="Profile Pic" src={this.props.info.profile_pic} />:<Image alt="Profile Pic" src='https://media.tenor.com/images/f9c584640df7b73c76c8a4325cfc47da/tenor.gif' />}
   <Card.Content>
     <Card.Header>Name: {this.props.info.name}</Card.Header>
   <Card.Description>Email:{this.props.info.email} </Card.Description>
 <Card.Description>sport_type: {this.props.info.sport_type} </Card.Description>
<button id='edit' onClick={this.props.changeView}>Edit</button>
 </Card.Content>
</Card>
</div>
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
