import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import {Card} from 'antd';
import decode from 'jwt-decode';

const {Meta} = Card;




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // sportData: [],
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
      currentView: '',
      afterUserLoggedin: []

    }

    // this.sportPull = this.sportPull.bind(this);
    // this.whichSport = this.whichSport.bind(this);




    this.handleLogin=this.handleLogin.bind(this);
    this.checkUser=this.checkUser.bind(this);
    this.userSubmit=this.userSubmit.bind(this);

    this.registerChange=this.registerChange.bind(this);
    this.handleRegister=this.handleRegister.bind(this);
    this.registerUser=this.registerUser.bind(this);



  }


  // async sportPull(e){
  //   const sport= e.currentTarget.id;
  //   const info = await axios.get(`${sport}/`);
  //   this.setState({sportData: info.data});
  //   this.whichSport(sport);
  // }


handleView(view){
  this.setState({currentView: view});
}



  // whichSport(e) {
  //   console.log(e);
  //
  //   switch (e) {
  //     case 'basketballs':
  //       this.setState({view: <Basketball info={this.state.sportData}/>})
  //       break;
  //
  //       case 'handballs':
  //       this.setState({view: <Handball info={this.state.sportData}/>})
  //         break;
  //
  //         case 'bocces':
  //           this.setState({view: <Bocce info={this.state.sportData}/>})
  //           break;
  //
  //           case 'crickets':
  //           this.setState({view: <Cricket info={this.state.sportData}/>})
  //             break;
  //
  //             case 'pools':
  //               this.setState({view: <Pool info={this.state.sportData}/>})
  //               break;
  //
  //               case 'tennis':
  //                 this.setState({view: <Tennis info={this.state.sportData}/>});
  //                 break;
  //
  //                 case 'LandingPage':
  //             this.setState({view: <LandingPage click={this.sportPull}/>});    break;
  //
  //     default: this.setState({view: <LandingPage click={this.sportPull}/>});
  //   }
  //
  // }

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

    this.registerUser(this.state.user);
  }

  async registerUser(userInfo){
    const data = await axios.post(`/users`,{user: userInfo});

    console.log(data.data);

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
    // console.log('login', this.state.login)
  }

  userSubmit(e){
      e.preventDefault();
      console.log('user submitted');
      this.checkUser(this.state.login)
  }

  async checkUser(login){

    // console.log(login);
    try{

      const data=await axios.post(`/user_token`, {auth:login});
      // console.log('jwt data',data.data);
      localStorage.setItem('token', data.data.jwt);
      const token= decode(localStorage.getItem('token'));
      // console.log('token data' ,token);
      this.setState({
        afterUserLoggedin: token
      })

      this.handleView('LandingPage')
    // console.log(tokenData);
    // localStorage.setItem('token', tokenData.jwt);
      // console.log('you are a user congrats' );
    }
    catch(e){
      console.log(e);
      console.warn('not a user');

    }


  }






  render() {

    let {currentView} = this.state;
    let {register_signin}= this.state;
    let display;
    // register_signin=this.whichScreen();


      switch(currentView){
        case 'login': display = <Login
            email={this.state.login.email}
            password={this.state.login.password}
            handleChange={this.handleLogin}
            handleSubmit={this.userSubmit}/>; break;

          case 'register':
            display = <Register
              handleRegisterChange={this.registerChange}
              handleRegisterSubmit={this.handleRegister}
              email={this.state.user.email}
              password={this.state.user.password}
              password_confirmation={this.state.user.password_confirmation}/>; break;
          case 'LandingPage':display=<LandingPage click={this.sportPull}/>; break;
            default: display=<Register
              handleRegisterChange={this.registerChange}
              handleRegisterSubmit={this.handleRegister}
              email={this.state.user.email}
              password={this.state.user.password}
              password_confirmation={this.state.user.password_confirmation}/>;

      }

    return (<div className="App">
      <div>
        <h1>Welcome TO NYC Sports</h1>
        <button id='register' onClick={() => this.handleView('register')}>Register</button>
        <button id='login' onClick={() => this.handleView('login')}>Login</button>
        {display}


      </div>

    </div>);
  }
}

export default App;
