import React, {Component} from 'react';
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
      view: "",
      sportData: [],
      id: ''
    }

    this.sportPull = this.sportPull.bind(this);
    this.whichSport = this.whichSport.bind(this);

  }

  async sportPull(e) {
    const sport = e.currentTarget.id;
    const info = await axios.get(`/api/${sport}/`);
    this.setState({sportData: info.data});
    this.whichSport(sport);
  }


  handleView(view) {
    this.setState({currentView: view});
  }

  whichSport(e) {
    switch (e) {
      case 'basketballs':
        this.setState({view: <Basketball info={this.state.sportData}
          userId={this.props.userId}
        />})
        break;

      case 'handballs':
        this.setState({view: <Handball info={this.state.sportData}
        userId={this.props.userId}/>})
        break;

      case 'bocces':
        this.setState({view: <Bocce info={this.state.sportData}
        userId={this.props.userId}/>})
        break;

      case 'crickets':
        this.setState({view: <Cricket info={this.state.sportData}
        userId={this.props.userId}/>})
        break;

      case 'pools':
        this.setState({view: <Pool info={this.state.sportData}
        userId={this.props.userId}/>})
        break;

      case 'tennis':
        this.setState({view: <Tennis info={this.state.sportData}
        userId={this.props.userId}/>});
        break;


      default:
    }

  }

  render() {
    let {view} = this.state;
    return (
      <div>
      <div className="sportsListing">

      <div className="sportType" id="basketballs" onClick={this.sportPull}>

          <div className="sportTypeTextContainer">
            <p className="sportText">Basketball</p>
            </div>
          <img alt="basketball" src={require('../sport-images/basketball.png')}/>

      </div>
      <div className="sportType" id="bocces" onClick={this.sportPull}>
        <div className="sportTypeTextContainer">
          <p className="sportText">Bocce</p>
          </div>
        <img alt="bocce" src={require('../sport-images/bocce.png')}/>
      </div>
      <div className="sportType" id="crickets" onClick={this.sportPull}>
        <div className="sportTypeTextContainer">
          <p className="sportText">Cricket</p>
          </div>
        <img alt="cricket" src={require('../sport-images/cricket.png')}/>
      </div>
      <div className="sportType" id="handballs" onClick={this.sportPull}>
        <div className="sportTypeTextContainer">
          <p className="sportText">Handball</p>
          </div>
        <img alt="handball" src={require('../sport-images/handball.jpg')}/>
      </div>
      <div className="sportType" id="pools" onClick={this.sportPull}>
        <div className="sportTypeTextContainer">
          <p className="sportText">Pool</p>
          </div>
        <img alt="pools" src={require('../sport-images/swimming.png')}/>
      </div>
      <div className="sportType" id="tennis" onClick={this.sportPull}>
        <div className="sportTypeTextContainer">
          <p className="sportText">Tennis</p>
          </div>
        <img alt="tennis" src={require('../sport-images/tennis.png')}/>
      </div>
    </div>

    <div>{view}</div>


    </div>)
  }

}
