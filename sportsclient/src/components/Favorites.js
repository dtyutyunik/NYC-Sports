import React, {Component} from 'react';

export default function Favorites(props) {
  return (<div>
    <div className="favSportAll">
      <div className="favSportList">
        <p>BasketBall</p>

        {
          props.favData.basketballs && props.favData.basketballs.map(i => {
            return (<div>
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'basketball')}>Delete this one</button>
            </div>)
          })
        }
      </div>

      <div className="favSportList">
        <p>bocces</p>
        {
          props.favData.bocces && props.favData.bocces.map(i => {
            return (<div>
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'bocce')}>Delete this one</button>
            </div>)
          })
        }
      </div>

      <div className="favSportList">
        <p>crickets</p>
        {
          props.favData.crickets && props.favData.crickets.map(i => {
            return (<div>
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'cricket')}>Delete this one</button>
            </div>)
          })
        }
      </div>

      <div className="favSportList">
        <p>handballs</p>
        {
          props.favData.handballs && props.favData.handballs.map(i => {
            return (<div>
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'handball')}>Delete this one</button>
            </div>)
          })
        }
      </div>

      <div className="favSportList">
        <p>pools</p>
        {
          props.favData.pools && props.favData.pools.map(i => {
            return (<div>
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'pool')}>Delete this one</button>
            </div>)
          })
        }
      </div>

      <div className="favSportList">
        <p>tennis</p>
        {
          props.favData.tennis && props.favData.tennis.map(i => {
            return (<div>
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'tenni')}>Delete this one</button>
            </div>)
          })
        }
      </div>

    </div>

  </div>)
}
