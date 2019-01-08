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
import Login from './components/Login';
import Register from './components/Register';
import {Card} from 'antd';

const {Meta} = Card;




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sportData: [],
      view: "",
      user:{
        email: '',
        password: '',
        password_confirmation: ''
      },
      login:{
        email: '',
        password: '',
      },
      signup: ''

    }

    this.sportPull = this.sportPull.bind(this);
    this.whichSport = this.whichSport.bind(this);


    this.handleLogin=this.handleLogin.bind(this);
    this.checkUser=this.checkUser.bind(this);
    this.userSubmit=this.userSubmit.bind(this);

    this.registerChange=this.registerChange.bind(this);
    this.handleRegister=this.handleRegister.bind(this);
    this.registerUser=this.registerUser.bind(this);



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

//register
  registerChange(e){
    const {name,value} = e.target;
    this.setState(prevState=>(
      {
        user:{
          ...prevState.user,
          [name] : value
        }
      }
    ))
  }

  handleRegister(e){
    e.preventDefault();

    console.log('submitted');
    // console.log(this.state.register);
    this.registerUser(this.state.user);
  }

  async registerUser(userInfo){
    console.log(userInfo);
    // const data = await axios.get(`/users`);
    const data = await axios.post(`/users`,{user: userInfo});
    console.log(data);
  }


//Login

  handleLogin(e){
    const {name,value} = e.target;
    this.setState(prevState=>(
      {
        login:{
          ...prevState.login,
          [name] : value
        }
      }
    ))
  }

  async checkUser(login){
    console.log(login);
    try{
      const data=await axios.post(`/user_token`, {auth:login});
      console.log('you are a user congrats' );
    }
    catch(e){
      console.log(e);
      console.warn('not a user');

    }


  }

userSubmit(e){
    e.preventDefault();
    console.log('user submitted');
    this.checkUser(this.state.login)
}






  render() {

    let {view} = this.state;
    let {signup}= this.state;

    return (<div className="App">
      <div>
        <h1>Welcome TO NYC Sports</h1>

      <button id='Register' onClick={this.}>Register</button>
      <button id='Login'>Login</button>
      {/* <LandingPage click={this.sportPull}/> */}
      <Register
        handleChange={this.registerChange}
        handleSubmit={this.handleRegister}
        email={this.state.user.email}
        password={this.state.user.password}
        password_confirmation={this.state.user.password_confirmation}/>


      <Login
        email={this.state.login.email}
        password={this.state.login.password}
        handleChange={this.handleLogin}
        handleSubmit={this.userSubmit}
      />


        {view}

      </div>

    </div>);
  }
}

export default App;
