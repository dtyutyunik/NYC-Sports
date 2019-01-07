import React, { Component } from 'react';
import { Input } from 'antd';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const Search = Input.Search;
const style = {
  width: '25%', height: '25%', position: 'absolute'
};

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class Pool extends Component{
  constructor(props){
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonClicked=this.buttonClicked.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

buttonClicked(e){
  console.log(e.currentTarget.id)
}

  render(){
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
          return  <div key={e.id} className="sportsList">
            <Map className="mapInfo"
                   google={this.props.google}
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
                 <div className="sportdetail">
            <p>Name: {e.name}</p>
          <p>Location: {e.location}</p>






        <button id={e.id} onClick={this.buttonClicked}>More Details</button>
      <button id={e.id} onClick={this.buttonClicked}>Show on Map</button>
    <button id={e.id} onClick={this.buttonClicked}>Reviews</button>
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
