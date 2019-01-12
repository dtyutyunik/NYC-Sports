import React, {Component} from 'react';
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';


export default function Login(props){
  return(


<Form className="formDesign" onSubmit={props.handleSubmit}>
  <h5>Email</h5>
    <Input
      prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
      placeholder="input email"
      onChange={props.handleChange}
      name='email'
      value={props.email}
    />
  <h5>Password</h5>
    <Input
      type="password"
      prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
      placeholder="enter pw"
      onChange={props.handleChange}
      name='password'
      value={props.password}
    />
  <br></br>
  <Button type="primary" htmlType="submit"  >
               Log In
             </Button>
  </Form>




  )
}
