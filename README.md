# README

# NYC-Sports

Using data from the https://opendata.cityofnewyork.us/ for locations and informations of all public handball courts, tennis courts, ice skating rink, indoor swimming pool, beaches, cricket courts and bocce courts. Provide the user with the ability to edit their profile with name and image and sports images, as well as let the user add individual sport locations to their favorites. Let user filter based on sport and further sort sort by zip code.

## Technologies to be used
* ruby on backend coding to read json files and write to db
* postgresql for db storage
* javascript for front end coding
* react.js for front end display
* ruby on rails for backend
* google maps api for distance matrix & geocoding


## ERD
Handball courts, tennis courts, ice skating rink, indoor swimming pool, beaches, cricket courts and bocce courts
for each of those will be the data from the json file downloaded from. each of these will be a table of its own

![ERD](erd.png)

# WireFrames
![WireFrames](wireframe.png)

## MVP
* Lets a user create a profile with name and profile pic and to write their favorite sport
* Have user register
* Add mapbox to show location in a map
* render all sports and let user enter address to show distance from the address based on sports
* Lets user add a spot to their favorite list

## Instructions
* rails db:drop db:create db:migrate db:seed
* In order to make the google maps api work, you will need to get a google api key and update env file and on the backend


Link to hosted site: (https://glacial-plateau-18887.herokuapp.com/)

## Post MVP

Let users see others user who have same interest in sport
* Lets user comment once and rate a sport place location
* To order sports by new zip further order based on zip code
