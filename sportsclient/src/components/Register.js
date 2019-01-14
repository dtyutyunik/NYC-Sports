import React, {Component} from 'react';
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';


export default function Register(props){
  return(

// onSubmit={this.handleSearch}
<Form className="formDesign" onSubmit={props.handleRegisterSubmit}>
  <h5>Email</h5>
    <Input

      placeholder="input email"
      onChange={props.handleRegisterChange}
      name='email'
      value={props.email}
    />
  <h5>Password</h5>
    <Input
      type="password"

      placeholder="enter pw"
      onChange={props.handleRegisterChange}
      name='password'
      value={props.password}
    />
  <h5>Password Confirmation</h5>
    <Input
      type="password"
    
      placeholder="renenter pw"
      onChange={props.handleRegisterChange}
      name='password_confirmation'
      value={props.password_confirmation}
    />

<Button type="primary" htmlType="submit"  >
             Register
           </Button>
  </Form>




  )
}
