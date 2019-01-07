import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Basketball from './components/Basketball';
import Handball from './components/Handball';
import Tennis from './components/Tennis';
import Pool from './components/Pool';
import Bocce from './components/Bocce';
import Cricket from './components/Cricket';
import LandingPage from './components/LandingPage';
import {Card} from 'antd';

const {Meta} = Card;




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sportData: [],
      view: "",
    }

    this.sportPull = this.sportPull.bind(this);
    this.whichSport = this.whichSport.bind(this);

  }


  async sportPull(e){
    const sport= e.currentTarget.id;

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
                  this.setState({view: <Tennis info={this.state.sportData}/>})
                  break;

      default: this.setState({view: <LandingPage/>})
        break;
    }

  }

  render() {

    let {view} = this.state

    return (<div className="App">
      <div>
        <h1>Welcome TO NYC Sports</h1>

      <LandingPage click={this.sportPull}/>
        {view}

      </div>

    </div>);
  }
}

export default App;
