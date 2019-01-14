import React, {Component} from 'react';

import { Card, Icon, Image,Dropdown } from 'semantic-ui-react';
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Rate, Checkbox,
  Row, Col, Input,
} from 'antd';



const { Option } = Select;

export default class ProfileInfo extends Component{

  constructor(props){
    super(props);

    this.state = {
    loading: false,
    visible: false,
    sports: [],
  }


  }



render(){

const sportData=[

 { label: 'Bocce', value: 'Bocce', name: 'Bocce'},
 { label: 'Basketball', value: 'Basketball', name: 'Basketball'},
 { label: 'Cricket', value: 'Cricket', name: 'Cricket'},
 { label: 'Handball', value: 'Handball', name: 'Handball'},
 { label: 'Swimming', value: 'Swimming', name: 'Swimming'},
 { label: 'Tennis', value: 'Tennis', name: 'Tennis'}
];

const CheckboxGroup = Checkbox.Group;

const formItemLayout = {
   labelCol: { span: 6 },
   wrapperCol: { span: 14 },
 };

  return(


<div>
  {this.props.editIt?
<div>
  <Card className='profileDisplay'>
    {this.props.info.profile_pic?<Image alt="Profile Pic" src={this.props.info.profile_pic} />:<Image alt="Profile Pic" src='https://img.itch.zone/aW1hZ2UvMjE2NjcxLzEwMjIzNTIucG5n/original/ppV04I.png' />}
   <Card.Content>
     <Card.Header>Name: {this.props.info.name}</Card.Header>
   <Card.Description>Email: {this.props.info.email} </Card.Description>
 <Card.Description>Sports: {this.props.info.sport_type}  </Card.Description>

<button type='submit' id='edit' onClick={this.props.changeView}>Edit</button>
 </Card.Content>
</Card>
</div>
 :

 <div>
   <Form className="formDesign" onSubmit={this.props.handleSubmitProfile}>
     <h5>Name</h5>
     <Input type='text'
        style={{color: "rgba(0,0,0,.25)" }}
        name='name'
       placeholder='name'
       onChange={this.props.handleEditProfile}
       value={this.props.info.name}
       >
     </Input>
     <h5>Profile Pic URL</h5>
    <Input.TextArea
      rows={4}
      cols={20}

       placeholder='profile_pic'
       name='profile_pic'
       onChange={this.props.handleEditProfile}
       value={this.props.info.profile_pic}
       >
     </Input.TextArea>
     <Form.Item>
      <CheckboxGroup options={sportData} onChange={this.props.changeSport} />
    </Form.Item>


     <Button type="primary" htmlType="submit"  >
                  Submit
                </Button>
   </Form>




</div>
}




</div>)}
}
