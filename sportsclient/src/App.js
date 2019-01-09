import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Favorites from './components/Favorites.js';

import {Card} from 'antd';
import decode from 'jwt-decode';

const {Meta} = Card;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // sportData: [],
      view: "",
      user: {
        email: '',
        password: '',
        password_confirmation: ''
      },
      login: {
        email: '',
        password: ''
      },
      signup: '',
      userlogin: [],
      currentView: '',
      afterUserLoggedin: [],
      favData: []

    }

    this.handleLogin = this.handleLogin.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.userSubmit = this.userSubmit.bind(this);

    this.registerChange = this.registerChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.favoriteCall = this.favoriteCall.bind(this);
    this.deleteThis = this.deleteThis.bind(this);


  }

  handleView(view) {
    this.setState({currentView: view});
    console.log('view is', view);
    if(view==='favorites'){
      this.favoriteCall();
    }
  }

  async favoriteCall(){
    // http://localhost:3000/favorites/?user_id=6
    console.log('favorite call called');
    try{
      const data= await axios.get(`favorites/?user_id=${this.state.afterUserLoggedin.id}`);
      console.log(data.data)

      this.setState({
        favData: data.data
      })


      console.log('favdata is', this.state.favData.basketballs);
    }
    catch(e){
      console.log(e);
    }



  }

  async getAllFavs(){
    // try{
    //   const data= await axios.get('favorites/');
    //
    // }
  }

  async deleteThis(e, nameOfSport){
    try{
      // console.log()
      let sportId = `${nameOfSport}_id`
      const data= await axios.get('favorites/');
      console.log(data.data);
      const userFavs = data.data.filter(favorite => this.state.afterUserLoggedin.id=== favorite.user_id)
      const favoriteId = userFavs.filter(favorite => favorite[sportId]===e)[0].id
      console.log(favoriteId);
      await axios.delete(`favorites/${favoriteId}`)
      // console.log(userFavs);
      // if(e===userFavs[sportId]){
      //   console.log('correct');
      // }
      // userfavs.filter(favorite=> favorite)
      // await axios.delete(`/favorites/${e}`);
    }
    catch(e){
      console.log(e)
    }
  }

  //register
  registerChange(e) {
    const {name, value} = e.target;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }))
  }

  handleRegister(e) {
    e.preventDefault();

    this.registerUser(this.state.user);
  }

  async registerUser(userInfo) {
    const data = await axios.post(`/users`, {user: userInfo});

    console.log(data.data);

  }

  //Login

  handleLogin(e) {
    const {name, value} = e.target;
    this.setState(prevState => ({
      login: {
        ...prevState.login,
        [name]: value
      }
    }))
    // console.log('login', this.state.login)
  }

  userSubmit(e) {
    e.preventDefault();
    console.log('user submitted');
    this.checkUser(this.state.login)
  }

  async checkUser(login) {

    // console.log(login);
    try {

      const data = await axios.post(`/user_token`, {auth: login});
      // console.log('jwt data',data.data);
      localStorage.setItem('token', data.data.jwt);
      const token = decode(localStorage.getItem('token'));
      // console.log('token data' ,token);
      this.setState({afterUserLoggedin: token})

      this.handleView('LandingPage')
      // console.log(tokenData);
      // localStorage.setItem('token', tokenData.jwt);
      // console.log('you are a user congrats' );
    } catch (e) {
      console.log(e);
      console.warn('not a user');

    }

  }

  render() {

    let {currentView} = this.state;
    let {register_signin} = this.state;
    let display;
    // register_signin=this.whichScreen();

    switch (currentView) {
      case 'login':
        display = <Login email={this.state.login.email} password={this.state.login.password} handleChange={this.handleLogin} handleSubmit={this.userSubmit}/>;
        break;

      case 'register':
        display = <Register handleRegisterChange={this.registerChange} handleRegisterSubmit={this.handleRegister} email={this.state.user.email} password={this.state.user.password} password_confirmation={this.state.user.password_confirmation}/>;
        break;
      case 'profile':
        display = <Profile info={this.state.afterUserLoggedin}/>;
        break;
        case 'favorites':
          display = <Favorites favData={this.state.favData}
          deleteThis={this.deleteThis}/>;
          break;
        case 'LandingPage':
          display = <LandingPage userId={this.state.afterUserLoggedin}/>;
          break;
      default:
        display = <Register handleRegisterChange={this.registerChange} handleRegisterSubmit={this.handleRegister} email={this.state.user.email} password={this.state.user.password} password_confirmation={this.state.user.password_confirmation}/>;

    }

    return (<div className="App">
      <div>
        <h1>Welcome TO NYC Sports</h1>
        <button id='register' onClick={() => this.handleView('register')}>Register</button>
        <button id='login' onClick={() => this.handleView('login')}>Login</button>
          <button id='profile' onClick={() => this.handleView('profile')}>Profile</button>
        <button id='favorites' onClick={() => this.handleView('favorites')}>Favorites</button>
        {display}


      </div>

    </div>);
  }
}

export default App;
