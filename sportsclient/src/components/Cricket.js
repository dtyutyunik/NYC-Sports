import React, {Component} from 'react';
import {Input} from 'antd';
import {Map, InfoWindow, Marker, DistanceMatrixService, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';

const Search = Input.Search;

const style = {
  width: '20%',
  height: '25%',
  position: 'absolute',
  zindex: '-1'
};

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class Cricket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      searchedAddress: '',
      time: [],
      distance: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.favoriteIt = this.favoriteIt.bind(this);
    this.showLocation = this.showLocation.bind(this);

  }

  async showLocation(fromLocation, toLocation) {

    try {
      const data = await axios.get(`/api/map/${fromLocation}/${toLocation}`);

      const distances = data.data.rows[0].elements[0].distance.text;
      const times = data.data.rows[0].elements[0].duration.text;

      this.setState({
        time: [times, ...this.state.time],
        distance: [distances, ...this.state.distance]
      })

    } catch (e) {
      console.log(e)
    }

  }

  async checkdirection(name) {

    try {
      const data = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=${googleClientId}`);
      const address = data.data.results[0].formatted_address;

      this.setState({searchedAddress: address})

    } catch (e) {
      console.log(e)
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.checkdirection(this.state.value);
    await this.props.info.map(e => {
      this.showLocation(this.state.searchedAddress, e.name);
    })
  }

  async favoriteIt(e) {
    const data= await axios.post(`/api/favorites/`,{'user_id' : this.props.userId.id, 'sport': 'cricket', 'sportid': e});
  }

  render() {
    const {google} = this.props;

    return (<div>
      <h1>Cricket</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter an address:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>

      <div className="sportsContainer">
        {
          this.props.info.map((e, index) => {
            return <div className="sportsItem" key={e.id}>
              <div className="sportsList">
                <Map className='mapName' google={google}  initialCenter={{
                    lat: e.lat,
                    lng: e.long
                  }} zoom={15}>
                  <Marker title={'The marker`s title will appear as a tooltip.'} name={'SOMA'} position={{
                      lat: e.lat,
                      lng: e.long
                    }}/>
                </Map>
              </div>
              <div className="sportdetail">
                            <button id={e.id} name={e.name} onClick={()=>this.favoriteIt(e.id)}>Favorite it</button>

                <p>Name: {e.name}</p>
                <p>Location: {e.location}</p>
                <p>Destination Address:{this.state.searchedAddress}</p>
                <p>Distance from destination: {this.state.distance[index]}</p>
                <p>Time from destionation: {this.state.time[index]}</p>

              </div>

            </div>

          })
        }
      </div>
    </div>);
  }

}

export default GoogleApiWrapper({apiKey: googleClientId})(Cricket)
