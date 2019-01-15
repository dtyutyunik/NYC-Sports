import React from 'react';
import {
  Form, Input, Button
} from 'antd';


export default function Login(props){
  return(


<Form className="formDesign" onSubmit={props.handleSubmit}>
  <h5>Email</h5>
    <Input

      placeholder="input email"
      onChange={props.handleChange}
      name='email'
      value={props.email}
    />
  <h5>Password</h5>
    <Input
      type="password"
      placeholder="enter pw"
      onChange={props.handleChange}
      name='password'
      value={props.password}
    />

  <Button type="primary" htmlType="submit"  >
               Log In
             </Button>
  </Form>




  )
}
