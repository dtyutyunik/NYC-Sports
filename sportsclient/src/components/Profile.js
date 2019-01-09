import React, {Component} from 'react';
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';


export default function Profile(props){
  return(


<div>

  PRofile page

  {props.data.map(e=>{
    return (<div>
      <p>{e.name}</p>
      <p>{e.profile_pic}</p>
    <p>{e.sport_type}</p>
    </div>)
  })}



</div>




  )
}
