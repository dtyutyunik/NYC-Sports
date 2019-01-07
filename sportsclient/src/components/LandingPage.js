import React, { Component } from 'react';
import { Input } from 'antd';

export default class LandingPage extends Component{


  render(){
    return(

      <div className="surroundingsports">

      <div className="sportType" id="basketballs" onClick={this.props.click}>
          <p>Basketball</p>
        <img src={require('../sport-images/basketball.png')}/>
        </div>
        <div className="sportType" id="bocces" onClick={this.props.click}>
          <p>Bocce</p>
        <img src={require('../sport-images/bocce.png')}/>
        </div>
        <div className="sportType" id="crickets" onClick={this.props.click}>
          <p>Cricket</p>
        <img src={require('../sport-images/cricket.png')}/>
        </div>
        <div className="sportType" id="handballs" onClick={this.props.click}>
          <p>handball</p>
        <img src={require('../sport-images/handball.jpg')}/>
        </div>
        <div className="sportType" id="pools" onClick={this.props.click}>
          <p>swimming</p>
        <img src={require('../sport-images/swimming.png')}/>
        </div>
        <div className="sportType" id="tennis" onClick={this.props.click}>
          <p>tennis</p>
        <img src={require('../sport-images/tennis.png')}/>
        </div>
      </div>
    )
  }


}
