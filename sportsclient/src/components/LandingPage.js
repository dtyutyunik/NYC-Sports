import React, {Component} from 'react';
import {Input} from 'antd';
import axios from 'axios';
import Basketball from './Basketball';
import Handball from './Handball';
import Tennis from './Tennis';
import Pool from './Pool';
import Bocce from './Bocce';
import Cricket from './Cricket';

export default class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sportData: []
    }

    this.sportPull = this.sportPull.bind(this);
    this.whichSport = this.whichSport.bind(this);

  }

  async sportPull(e) {
    const sport = e.currentTarget.id;
    const info = await axios.get(`${sport}/`);
    this.setState({sportData: info.data});
    this.whichSport(sport);
  }

  whichSport(e) {
    console.log(e);

    switch (e) {
      case 'basketballs':
        this.setState({view: <Basketball info={this.state.sportData}/>})
        break;

      case 'handballs':
        this.setState({view: <Handball info={this.state.sportData}/>})
        break;

      case 'bocces':
        this.setState({view: <Bocce info={this.state.sportData}/>})
        break;

      case 'crickets':
        this.setState({view: <Cricket info={this.state.sportData}/>})
        break;

      case 'pools':
        this.setState({view: <Pool info={this.state.sportData}/>})
        break;

      case 'tennis':
        this.setState({view: <Tennis info={this.state.sportData}/>});
        break;

      case 'LandingPage':
        this.setState({view: <LandingPage click={this.sportPull}/>});
        break;

      default:
        this.setState({view: <LandingPage click={this.sportPull}/>});
    }

  }

  render() {
    let {view} = this.state;
    return (
      <div>
      <div className="sportsListing">

      <div className="sportType" id="basketballs" onClick={this.sportPull}>
        <p>Basketball</p>
        <img src={require('../sport-images/basketball.png')}/>
      </div>
      <div className="sportType" id="bocces" onClick={this.sportPull}>
        <p>Bocce</p>
        <img src={require('../sport-images/bocce.png')}/>
      </div>
      <div className="sportType" id="crickets" onClick={this.sportPull}>
        <p>Cricket</p>
        <img src={require('../sport-images/cricket.png')}/>
      </div>
      <div className="sportType" id="handballs" onClick={this.sportPull}>
        <p>handball</p>
        <img src={require('../sport-images/handball.jpg')}/>
      </div>
      <div className="sportType" id="pools" onClick={this.sportPull}>
        <p>swimming</p>
        <img src={require('../sport-images/swimming.png')}/>
      </div>
      <div className="sportType" id="tennis" onClick={this.sportPull}>
        <p>tennis</p>
        <img src={require('../sport-images/tennis.png')}/>
      </div>
    </div>

    <div>{view}</div>


    </div>)
  }

}
