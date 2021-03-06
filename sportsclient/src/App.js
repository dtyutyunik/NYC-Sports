import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Favorites from './components/Favorites.js';
import {
  Icon,
  message,
  Menu
} from 'antd';  

import Typist from 'react-typist';

import decode from 'jwt-decode';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // sportData: [],
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
      currentView: 'register',
      afterUserLoggedin: [],

      favData: [],
      editIt: true
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.userSubmit = this.userSubmit.bind(this);
    this.registerChange = this.registerChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.favoriteCall = this.favoriteCall.bind(this);
    this.deleteThis = this.deleteThis.bind(this);
    this.handleEditProfile = this.handleEditProfile.bind(this);
    this.handleSubmitProfile = this.handleSubmitProfile.bind(this);
    this.toggleEditView = this.toggleEditView.bind(this);
    this.handleSportProfile = this.handleSportProfile.bind(this);

  }

  handleView(view) {
    this.setState({currentView: view});

    if (view === 'favorites') {
      this.favoriteCall();
    }
    if (view === 'signOut') {
      localStorage.removeItem('token');
      this.setState({currentView: 'register'})
    }

  }

  async favoriteCall() {

    try {
      const data = await axios.get(`/api/favorites/?user_id=${this.state.afterUserLoggedin.id}`);

      this.setState({favData: data.data})
    } catch (e) {}

  }

  async deleteThis(e, nameOfSport) {
    try {

      let sportId = `${nameOfSport}_id`
      const data = await axios.get('/api/favorites/');

      const userFavs = data.data.filter(favorite => this.state.afterUserLoggedin.id === favorite.user_id)
      const favoriteId = userFavs.filter(favorite => favorite[sportId] === e)[0].id
      await axios.delete(`/api/favorites/${favoriteId}`)

      this.favoriteCall();

    } catch (e) {
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
    try {
      const data = await axios.post(`/api/users`, {user: userInfo});
      message.success("You've Registered Successfully");
      this.setState({currentView: 'login'});

    } catch (e) {
      message.error("Invalid email/password incorrect");
    }



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

  }

  userSubmit(e) {
    e.preventDefault();
    this.checkUser(this.state.login);
  }

  async checkUser(login) {

    try {

      const data = await axios.post(`/api/user_token`, {auth: login});

      localStorage.setItem('token', data.data.jwt);
      const token = decode(localStorage.getItem('token'));

      this.setState({afterUserLoggedin: token, currentView: 'LandingPage'})

    } catch (e) {
      message.error('Incorrect credentials');

    }

  }

  toggleEditView() {
    this.setState({editIt: false})
  }

  handleSportProfile(e) {

    const newUser = this.state.afterUserLoggedin;
    newUser.sport_type = e + '';
    this.setState({afterUserLoggedin: newUser})

  }

  handleEditProfile(e) {
    const {name, value} = e.target

    this.setState(prevState => ({
      afterUserLoggedin: {
        ...prevState.afterUserLoggedin,
        [name]: value
      }
    }))

  }

  async handleSubmitProfile(e) {
    e.preventDefault();


    const newUser = this.state.afterUserLoggedin;

    if (this.state.afterUserLoggedin.sport_type === null) {
      newUser.sport_type = " ";
    } else {}

    this.setState({editIt: true, afterUserLoggedin: newUser})
    const data = {
      user: {
        name: this.state.afterUserLoggedin.name,
        sport_type: this.state.afterUserLoggedin.sport_type,
        profile_pic: this.state.afterUserLoggedin.profile_pic
      }
    }
    await axios.put(`/api/users/${this.state.afterUserLoggedin.id}`, data);
  }

  render() {

    let {currentView} = this.state;
    let display;

    switch (currentView) {
      case 'login':
        display = <Login email={this.state.login.email} password={this.state.login.password} handleChange={this.handleLogin} handleSubmit={this.userSubmit}/>;
        break;

      case 'register':
        display = <Register handleRegisterChange={this.registerChange} handleRegisterSubmit={this.handleRegister} email={this.state.user.email} password={this.state.user.password} password_confirmation={this.state.user.password_confirmation}/>;
        break;
      case 'profile':
        display = <Profile info={this.state.afterUserLoggedin} handleEditProfile={this.handleEditProfile} editIt={this.state.editIt} handleSubmitProfile={this.handleSubmitProfile} changeView={this.toggleEditView} changeSport={this.handleSportProfile}/>;
        break;
      case 'favorites':
        display = <Favorites favData={this.state.favData} deleteThis={this.deleteThis}/>;
        break;
      case 'LandingPage':
        display = <LandingPage userId={this.state.afterUserLoggedin}/>;
        break;
      default:
        display = <Register handleRegisterChange={this.registerChange} handleRegisterSubmit={this.handleRegister} email={this.state.user.email} password={this.state.user.password} password_confirmation={this.state.user.password_confirmation}/>;

    }

    return (<div className="App">

      {
        this.state.currentView == 'register' || this.state.currentView == 'login'
          ? <div>
              <Menu mode="horizontal" className="menuBar">
                <Menu.Item id='register' style={{
                    fontSize: "30px",
                    color: "#EE8033"
                  }} onClick={() => this.handleView('register')}><Icon type="user-add" style={{
                fontSize: "30px",
                color: "EE8033"
              }}/>Register</Menu.Item>
                <Menu.Item id='login' style={{
                    fontSize: "30px",
                    color: "#EE8033"
                  }} onClick={() => this.handleView('login')}><Icon type="login" style={{
                fontSize: "30px",
                color: "EE8033"
              }}/>Login</Menu.Item>
              </Menu>
              <div className="welcomeScreen">
                <p className='title'>Welcome To NYC Sports</p>
                <Typist className="intro">
                  Sign In or Register to find local public courts near you
                </Typist>
              </div>
            </div>
          : <Menu mode="horizontal" className="menuBar">
              <Menu.Item id='profile' style={{
                  fontSize: "30px",
                  color: "#EE8033"
                }} onClick={() => this.handleView('profile')}><Icon type="user" style={{
                fontSize: "30px",
                color: "EE8033"
              }}/>Profile</Menu.Item>
              <Menu.Item id='LandingPage' style={{
                  fontSize: "30px",
                  color: "#EE8033"
                }} onClick={() => this.handleView('LandingPage')}><Icon type="team" style={{
                fontSize: "30px",
                color: "EE8033"
              }}/>Sports</Menu.Item>
              <Menu.Item id='favorites' style={{
                  fontSize: "30px",
                  color: "#EE8033"
                }} onClick={() => this.handleView('favorites')}><Icon type="like" style={{
                fontSize: "30px",
                color: "EE8033"
              }}/>Favorites</Menu.Item>
              <Menu.Item style={{
                  fontSize: "30px",
                  color: "#EE8033"
                }} onClick={() => this.handleView('signOut')}>
                <Icon type="signout" style={{
                    fontSize: "30px",
                    color: "EE8033"
                  }}/>SignOut</Menu.Item>
            </Menu>
      }

      <div className='topBar'>

        {display}
      </div>

    </div>);
  }
}

export default App;
