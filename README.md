
## P4-Server

## Contents

* [Project Description](#project-Description)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)


## Project Description

This project allows users to view their sleep patterns, receive help to improve them and also schedule meetings with professional Cognitive Behavioral Therapist to speak about resolving sleep-related issues.

## Features
* Full crud capabilities with Sleep Record data 
* Able to view a chart of with Sleep Record data to identify patterns
* Able to schedule/add appointment times inside of account

## Client Technologies
The technologies used within this app:
* React.js
* React-router-dom 5.2.0

## Client Setup
To run locally:
```
$ cd p5-project
$ npm install webpack@4.44.2
$ npm start --prefix client
```


## Server Technologies
The technologies used within this app:
Ruby Gems: Bcrypt, Active Record, SQLite3, Rails, Thin

## Setup
To run locally:
```
$ cd p5-project
$ bundle install
$ bundle exec rails db:migrate
$ bundle exec rails db:seed
$ bundle exec rails server

```