import React from 'react';

export default function Favorites(props) {
  return (<div>
    <div className="favSportAll">
      <div className="favSportList">
        {props.favData.basketballs && props.favData.basketballs.length<1?null:<p className="sportName">Basketball</p>}

        {
          props.favData.basketballs && props.favData.basketballs.map(i => {
            return (<div className="favSportsBreakdown">
              <p>{i.name}</p>
              <p>{i.location}</p>
            <button onClick={() => props.deleteThis(i.id, 'basketball')}>Remove From Favorites</button>
            </div>)
          })
        }
      </div>

      <div className="favSportList">
        {props.favData.bocces && props.favData.bocces.length<1?null:<p className="sportName">Bocce</p>}
        {
          props.favData.bocces && props.favData.bocces.map(i => {
            return (<div className="favSportsBreakdown">
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'bocce')}>Remove From Favorites</button>
            </div>)
          })
        }
      </div>

      <div className="favSportList">
        {props.favData.crickets && props.favData.crickets.length<1?null:<p className="sportName">Cricket</p>}
        {
          props.favData.crickets && props.favData.crickets.map(i => {
            return (<div className="favSportsBreakdown">
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'cricket')}>Remove From Favorites</button>
            </div>)
          })
        }
      </div>

      <div className="favSportList">
        {props.favData.handballs && props.favData.handballs.length<1?null:<p className="sportName">Handball</p>}
        {
          props.favData.handballs && props.favData.handballs.map(i => {
            return (<div className="favSportsBreakdown">
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'handball')}>Remove From Favorites</button>
            </div>)
          })
        }
      </div>

      <div className="favSportList">
        {props.favData.pools && props.favData.pools.length<1?null:<p className="sportName">Pool</p>}
        {
          props.favData.pools && props.favData.pools.map(i => {
            return (<div className="favSportsBreakdown">
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'pool')}>Remove From Favorites</button>
            </div>)
          })
        }
      </div>

      <div className="favSportList">
        {props.favData.tennis && props.favData.tennis.length<1?null:<p className="sportName">Tennis</p>}
        {
          props.favData.tennis && props.favData.tennis.map(i => {
            return (<div className="favSportsBreakdown">
              <p>{i.name}</p>
              <p>{i.location}</p>
              <button onClick={() => props.deleteThis(i.id, 'tenni')}>Remove From Favorites</button>
            </div>)
          })
        }
      </div>

    </div>

  </div>)
}
