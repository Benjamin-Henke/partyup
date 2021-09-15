const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const createPartyRouter = require('./routes/createParty.router');
const myPartiesRouter = require('./routes/myParties.router');
const upcomingRouter = require('./routes/upcoming.router');
const joinPartyRouter = require('./routes/joinParty.router');
const currentPlayersRouter = require('./routes/currentPlayers.router');
const searchBoardGame = require('./routes/searchBoardGame.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/create_party', createPartyRouter);
app.use('/api/my_parties', myPartiesRouter);
app.use('/api/upcoming', upcomingRouter);
app.use('/api/join_party', joinPartyRouter);
app.use('/api/current_players', currentPlayersRouter);
app.use('/api/search_game', searchBoardGame);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
