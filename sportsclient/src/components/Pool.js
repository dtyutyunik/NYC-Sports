import React, { Component } from 'react';
import { Input } from 'antd';
import {Map, InfoWindow, Marker,DistanceMatrixService, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';



const Search = Input.Search;

const style = {
  // className:'mapInfo'
  width: '20%', height: '25%',
  position: 'absolute',
  zindex: '-1',
};
// const distance = require('google-distance-matrix');




const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;


class Pool extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: '',
      searchedAddress:'',
      time: '',
      distance: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonClicked=this.buttonClicked.bind(this);
    // this.getLocation=this.getLocation.bind(this);
    this.showLocation=this.showLocation.bind(this);



  var origins = ['San Francisco CA'];
  var destinations = ['New York NY', '41.8337329,-87.7321554'];


  }

async showLocation(fromLocation,toLocation){

  console.log(this.state.value);

  // name.preventDefault();
  try{
    const data= await axios.get(`/map/${fromLocation}/${toLocation}`);
    // const data=await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Vancouver+BC&mode=bicycling&language=fr-FR&key=${googleClientId}`);
    const distances= data.data.rows[0].elements[0].distance.text;
    const times= data.data.rows[0].elements[0].duration.text;

    console.log(data.data.rows[0].elements[0].distance.text);
    console.log(data.data.rows[0].elements[0].duration.text);

    this.setState({
      time: times,
      distance: distances
    })
  }
  catch(e){
    console.log(e)
  }

}

async checkdirection(name){

  console.log(name);
  try{
    const data=await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=${googleClientId}`);
    //this is the address we get
    const address=data.data.results[0].formatted_address;
    // console.log(data.data.results[0].formatted_address);
    this.setState({
      searchedAddress: address
    })


  }
  catch(e){
    console.log(e)
  }
}





  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.checkdirection(this.state.value)
  }

buttonClicked(e){
  console.log(e);
}






  render(){
    const {google}= this.props;

    return(
      <div>
        <h1>Pool</h1>
      <form onSubmit={this.handleSubmit}>
          <label>
            Zip Code:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div>
          {this.props.info.map(e=>{
          return  <div className="sportsItem" key={e.id} >
            <div className="sportsList">
            <Map className='mapName'
                   google={google}


                   style={style}
                   initialCenter={{
                     lat: e.lat,
                     lng: e.long,
                   }}
                   zoom={15}

                 >
            <Marker
              title={'The marker`s title will appear as a tooltip.'}
             name={'SOMA'}
             position = {{ lat: e.lat, lng: e.long }}

           />
                 </Map>
</div>
                 <div className="sportdetail">
                   <button id={e.id} onClick={()=>this.showLocation(this.state.searchedAddress,e.name)}>More Details</button>
                   <button id={e.id} onClick={()=>this.buttonClicked()}>Reviews</button>

                 <p>Name: {e.name}</p>
                  <p>Location: {e.location}</p>
                <p>Distance: {this.state.distance}</p>
              <p>Time: {this.state.time}</p>
            <p>{this.state.searchedAddress}</p>



        </div>

          </div>


          })}
        </div>
    </div>
    );
  }


}


export default GoogleApiWrapper({
 apiKey: googleClientId
})(Pool)
