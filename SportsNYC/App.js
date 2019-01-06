/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Image ,TouchableHighlight, Alert, Platform, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);

    this.state={
      bdata: [],
      bdata2: []
    }
  }


  async getPosts() {
     const resp = await axios.get('http://localhost:3000/posts');
     const posts = resp.data;
     this.setState({
       posts: posts
     })
   }

   async componentDidMount() {
     this.getPosts();
   }



  async pulldata(){
    try{
      const resp = await axios.get('http://localhost:3000/basketballs/3');
      const posts= resp.data;

      this.setState({
        bdata: posts
      })
    }
    catch(e){
      // console.warn(e);
    }
  }

  async componentDidMount(){
    this.pulldata();
  }



  onPressButton(e) {


      switch(e){
        case '1' : Alert.alert('first button pressed'); break;
        case '2' : Alert.alert('second button pressed'); break;
        case '3' : Alert.alert('third button pressed'); break;
        default : Alert.alert('error');
      }

    }


    sportPressed(e){
      switch (e) {
        case 'bball': console.warn('basketball pressed'); break;
        case 'bocce': console.warn('bocce pressed'); break;
        case 'cricket': console.warn('cricket pressed'); break;
        case 'handball': console.warn('handball pressed'); break;
        case 'pool': console.warn('pool pressed'); break;
        case 'tennis': console.warn('tennis pressed'); break;

        default:

      }
    }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.buttonContainer}>
           <Button
             onPress={()=>this.onPressButton('1')}
             title="Press Me"
           />

         </View>

              {this.state.bdata.map(p => (
                   <Text key={p.id}>{p.id}</Text>
                 ))}



   <Text style={styles.welcome}>Welcome to React Native!</Text>
             {/* <TouchableHighlight>
               <Image
                 onPress={() =>sportPressed('bball')}
               source={require('./sport-images/basketball.png')}
                 style={{height:50, width:50}} />

             </TouchableHighlight>

             <TouchableHighlight>
               <Image
                 onPress={() =>sportPressed('bocce')}
               source={require('./sport-images/bocce.png')}
                 style={{height:50, width:50}} />

             </TouchableHighlight>

             <TouchableHighlight>
               <Image
                 onPress={() =>sportPressed('cricket')}
               source={require('./sport-images/cricket.png')}
                 style={{height:50, width:50}} />

             </TouchableHighlight>
             <TouchableHighlight>
               <Image
                 onPress={() =>sportPressed('handball')}
               source={require('./sport-images/handball.jpg')}
                 style={{height:50, width:50}} />

             </TouchableHighlight>
             <TouchableHighlight>
               <Image
                 onPress={() =>sportPressed('pool')}
               source={require('./sport-images/swimming.png')}
                 style={{height:50, width:50}} />

             </TouchableHighlight>
             <TouchableHighlight>
               <Image
                 onPress={() =>sportPressed('tennis')}
               source={require('./sport-images/tennis.png')}
                 style={{height:50, width:50}} />

             </TouchableHighlight>
 */}



        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
