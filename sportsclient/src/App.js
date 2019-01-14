import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

import LandingPage from './components/LandingPage';
import Login from './components/Login';

import Register from './components/Register';
import Profile from './components/Profile';
import Favorites from './components/Favorites.js';
import {
  Form, Input, Tooltip, Icon, Cascader, message, Select, Row, Col, Checkbox, Button, AutoComplete,Avatar, Menu,
} from 'antd';






import Typist from 'react-typist';

import {Card} from 'antd';
import decode from 'jwt-decode';

const {Meta} = Card;

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
      editIt: true,
      activeItem: 'register',

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
    this.handleMenuClick=this.handleMenuClick.bind(this);
      this.handleSportProfile = this.handleSportProfile.bind(this);




  }

handleMenuClick = (e, { name }) => this.setState({ activeItem: name })

  handleView(view) {
    this.setState({currentView: view});
    // console.log('view is', view);
    if(view==='favorites'){
      this.favoriteCall();
    }
    if(view==='signOut'){
       localStorage.removeItem('token');
       this.setState({currentView: 'register'})
    }

  }

  async favoriteCall(){
    // http://localhost:3000/favorites/?user_id=6
    // console.log('favorite call called');
    try{
      const data= await axios.get(`/api/favorites/?user_id=${this.state.afterUserLoggedin.id}`);
      // console.log(data.data)

      this.setState({
        favData: data.data
      })


      // console.log('favdata is', this.state.favData.basketballs);
    }
    catch(e){
      // console.log(e);
    }



  }



  async deleteThis(e, nameOfSport){
    try{

      let sportId = `${nameOfSport}_id`
      const data= await axios.get('/api/favorites/');
      // console.log(data.data);
      const userFavs = data.data.filter(favorite => this.state.afterUserLoggedin.id=== favorite.user_id)
      const favoriteId = userFavs.filter(favorite => favorite[sportId]===e)[0].id
      // console.log(favoriteId);
      await axios.delete(`/api/favorites/${favoriteId}`)

      this.favoriteCall();

    }
    catch(e){
      // console.log(e)
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
    try{
      const data = await axios.post(`/api/users`, {user: userInfo});
      message.success("You've registered Successfully");
      this.setState({currentView: 'login'});

    }catch(e){
      message.error("User taken");
    }


    // console.log(data.data);

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
    // console.log('user submitted');
    this.checkUser(this.state.login);
  }

  async checkUser(login) {

    try {

      const data = await axios.post(`/api/user_token`, {auth: login});

      localStorage.setItem('token', data.data.jwt);
      const token = decode(localStorage.getItem('token'));

      this.setState({
        afterUserLoggedin: token,
        currentView: 'LandingPage'
    })

    } catch (e) {
      // console.log(e);
      message.error('Incorrect credentials');

    }

  }

  toggleEditView(){
    this.setState({
      editIt: false
    })
  }

  handleSportProfile(e){

    console.log(e);

    const newUser = this.state.afterUserLoggedin;

    newUser.sport_type = e+ '';



    this.setState({
      afterUserLoggedin: newUser
    })

  }

handleEditProfile(e){
  const { name, value }= e.target

    this.setState(prevState=>({
      afterUserLoggedin: {
        ...prevState.afterUserLoggedin,
        [name]: value
      }
    }))



}

async handleSubmitProfile(e){
   e.preventDefault();
  console.log(this.state.afterUserLoggedin.sport_type);

  const newUser = this.state.afterUserLoggedin;


    if(this.state.afterUserLoggedin.sport_type===null){
        newUser.sport_type= " ";
    }else{

    }

  this.setState({
    editIt: true,
    afterUserLoggedin: newUser
  })
  const data={
    user:{
      name: this.state.afterUserLoggedin.name,
      sport_type: this.state.afterUserLoggedin.sport_type,
      profile_pic: this.state.afterUserLoggedin.profile_pic
    }
  }
  await axios.put(`/api/users/${this.state.afterUserLoggedin.id}`, data);
}


  render() {

    let {currentView} = this.state;
    let {register_signin} = this.state;
    let display;


    switch (currentView) {
      case 'login':
        display = <Login email={this.state.login.email} password={this.state.login.password} handleChange={this.handleLogin} handleSubmit={this.userSubmit}/>;
        break;

      case 'register':
        display = <Register handleRegisterChange={this.registerChange}
           handleRegisterSubmit={this.handleRegister}
           email={this.state.user.email}
           password={this.state.user.password}
           password_confirmation={this.state.user.password_confirmation}/>;
        break;
      case 'profile':
        display = <Profile info={this.state.afterUserLoggedin}
        handleEditProfile={this.handleEditProfile}
        editIt={this.state.editIt}
        handleSubmitProfile={this.handleSubmitProfile}
        changeView={this.toggleEditView}
        changeSport={this.handleSportProfile}
      />;
        break;
        case 'favorites':
          display = <Favorites favData={this.state.favData}
          deleteThis={this.deleteThis}/>;
          break;
        case 'LandingPage':
          display = <LandingPage userId={this.state.afterUserLoggedin}

        />;
          break;
      default:
        display = <Register handleRegisterChange={this.registerChange} handleRegisterSubmit={this.handleRegister} email={this.state.user.email} password={this.state.user.password} password_confirmation={this.state.user.password_confirmation}/>;

    }

    return (
      <div className="App">



      {this.state.currentView=='register' || this.state.currentView=='login' ?   <div> <Menu mode="horizontal" className="menuBar">
                 <Menu.Item id='register' style={{ fontSize: "30px", color: "orange" }} onClick={() => this.handleView('register')}><Icon type="user-add" style={{ fontSize: "30px", color: "orange" }}/>Register</Menu.Item>
               <Menu.Item id='login' style={{ fontSize: "30px", color: "orange" }} onClick={() => this.handleView('login')}><Icon type="login" style={{ fontSize: "30px", color: "orange" }}/>Login</Menu.Item></Menu>
             <div className="welcomeScreen">   <p className='title'>Welcome TO NYC Sports</p>
                     <Typist className="intro">
                    Sign In or Register to find local public courts near you
                  </Typist></div>
                </div>
              :
         <Menu mode="horizontal" className="menuBar">
                <Menu.Item id='profile'  style={{ fontSize: "30px", color: "orange" }} onClick={() => this.handleView('profile')}><Icon type="user" style={{ fontSize: "30px", color: "orange" }}/>Profile</Menu.Item>
              <Menu.Item id='LandingPage' style={{ fontSize: "30px", color: "orange" }} onClick={() => this.handleView('LandingPage')}><Icon type="team" style={{ fontSize: "30px", color: "orange" }}/>Sports</Menu.Item>
            <Menu.Item id='favorites' style={{ fontSize: "30px", color: "orange" }} onClick={() => this.handleView('favorites')}><Icon type="like" style={{ fontSize: "30px", color: "orange" }}/>Favorites</Menu.Item>
              <Menu.Item  style={{ fontSize: "30px", color: "orange" }} onClick={() => this.handleView('signOut')}> <Icon type="signout" style={{ fontSize: "30px", color: "orange" }} />SignOut</Menu.Item></Menu>}



    <div className='topBar'>



        {display}
      </div>


    </div>);
  }
}

export default App;
