import React, {Component} from 'react';



export default function Favorites(props){
  return(


<div>
  Favorites page
  <p>BasketBall</p>
{console.log(props.favData)}
{console.log(props.favData.basketballs)}
{console.log(props.favData.bocces)}
{console.log(props.favData.crickets)}
{console.log(props.favData.handballs)}


{props.favData.basketballs && props.favData.basketballs.map(i=>{
  return(
  <div>
    <p>{i.name}</p>
  <p>{i.location}</p>
<button onClick={()=>props.deleteThis(i.id, 'basketball')}>Delete this one</button>
    </div>
  )
})}


</div>




  )
}
