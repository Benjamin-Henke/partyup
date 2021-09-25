
# PARTYUP

## Description

*Duration: Two Weeks*

PartyUp is a social media platform that allows board game enthusiasts to connect with one another and a new game or their favorite game.

PartyUp allows you to create new events for other players to join. Or, you can search for other parties by title of a game or by a specific date.


## Screenshots

[![Screen-Shot-2021-09-25-at-6-13-36-PM.png](https://i.postimg.cc/15rX4tXh/Screen-Shot-2021-09-25-at-6-13-36-PM.png)](https://postimg.cc/nCMpPnq0)

[![Screen-Shot-2021-09-25-at-6-14-46-PM.png](https://i.postimg.cc/j2QxWgsQ/Screen-Shot-2021-09-25-at-6-14-46-PM.png)](https://postimg.cc/YL0KZxLh)

[![Screen-Shot-2021-09-25-at-6-12-11-PM.png](https://i.postimg.cc/ZqRCGSTk/Screen-Shot-2021-09-25-at-6-12-11-PM.png)](https://postimg.cc/3ks8Gz49)

## Built With

* JavaScript
* Express
* Node
* React
* React-Redux
* Redux-Saga
* PosgreSQL
* Bootstrap
* Nodemailer
* BoardGameAtlas API

## Getting Started

### Prerequisites

* [Node.js][1]
* [PostgreSQL][2]
* [Nodemon][3]
* [React.js][4]

[1]: https://nodejs.org/en/
[2]: https://www.postgresql.org/
[3]: https://nodemon.io/
[4]: https://reactjs.org/

### Installing 

1. Create a database named `partyup`
2. Queries in `database.sql` are set up to create all the necessary tables and generate the needed data to run the application correctly. This project is built on [Postgres][1], be sure that is installed first before proceeding. I used [Postico][2] to execute my queries but other options will work too.
3. Open your editor of choice and run `npm install`
4. Run `npm run server` in one terminal
5. Run `npm run client` in a second terminal. This will open a new browser tab with the project.

[1]: https://www.postgresql.org/]
[2]: https://eggerapps.at/postico/

### Completed Features

- [x] Create a new party
- [x] Edit a previously made party and it's members
- [x] Browse parties via Upcoming Events, by title, or by date
- [x] Join a players game and app will automatically send email (previous setup required)

### Future Features


### Author

Benjamin Henke