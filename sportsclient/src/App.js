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
import decode from 'jwt-decode';

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
      signup: '',
      userlogin: [],
      register_signin: '',

    }

    this.sportPull = this.sportPull.bind(this);
    this.whichSport = this.whichSport.bind(this);
    this.whichScreen = this.whichScreen.bind(this);



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


whichScreen(e){
  console.log(e.target.id);
  switch(e.target.id){
    case 'login': this.setState({register_signin: <Login
        email={this.state.login.email}
        password={this.state.login.password}
        handleChange={this.handleLogin}
        handleSubmit={this.userSubmit}
      />}); break;
      case 'register': this.setState({register_signin:   <Register
          handleChange={this.registerChange}
          handleSubmit={this.handleRegister}
          email={this.state.user.email}
          password={this.state.user.password}
          password_confirmation={this.state.user.password_confirmation}/>
      }); break;
        default: break;
  }
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
              this.setState({view: <LandingPage click={this.sportPull}/>});    break;

      default: this.setState({view: <LandingPage click={this.sportPull}/>});
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

    //
    console.log(data.data);
    // temporily storing user
    this.setState({
      userlogin: data.data
    })

    console.log(this.state.userlogin);

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
      console.log(data.data);
      localStorage.setItem('token', data.data.jwt);
      const token= decode(localStorage.getItem('token'));
      console.log(token);
    // console.log(tokenData);
    // localStorage.setItem('token', tokenData.jwt);
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


// view = () => {
//   switch (this.state.view) {
//     case 'basketball':
//     return  < Basketball />
//
//     default:
//
//   }
// }
//
// setView = (view) => {
//   this.setState({
//
//   })
// }



  render() {

    let {view} = this.state;
    let {register_signin}= this.state;

    return (<div className="App">
      <div>
        <h1>Welcome TO NYC Sports</h1>

      <button id='register' onClick={this.whichScreen}>Register</button>
      <button id='login' onClick={this.whichScreen}>Login</button>
    <button id='LandingPage' onClick={this.whichSport}>sport</button>
      <LandingPage click={this.sportPull}/>
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
