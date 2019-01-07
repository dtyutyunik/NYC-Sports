import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

export default class Basketball extends Component{
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
        <h1>Basketball</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Zip Code:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className="sportsList">
          {this.props.info.map(e=>{
          return  <div key={e.id} className="sportdetail">
            <p>Name: {e.name}</p>
          <p>Location: {e.location}</p>
          <p>Lat: {e.lat?e.lat:'N/A'}</p>
        <p>Long: {e.long?e.long:'N/A'}</p>
        <button id={e.id} onClick={this.buttonClicked}>More Details</button>
      <button id={e.id} onClick={this.buttonClicked}>Show on Map</button>
    <button id={e.id} onClick={this.buttonClicked}>Reviews</button>
            </div>

          })}
        </div>
    </div>
    );
  }
}
