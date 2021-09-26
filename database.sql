-- Database name "solo_project_prime"
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (255) UNIQUE NOT NULL
);

CREATE TABLE "parties" (
    "id" SERIAL PRIMARY KEY,
    "board_game" VARCHAR (255),
    "number_of_players" INTEGER,
    "experience" VARCHAR (20),
    "location" VARCHAR (255),
    "date_time" TIMESTAMP WITHOUT TIME ZONE,
    "image" VARCHAR (1000),
    "description" VARCHAR (5000),
    "owner_id" INT REFERENCES "user"(id)
);

CREATE TABLE "users_parties" (
    "id" SERIAL PRIMARY KEY,
    "users_id" INT REFERENCES "user"(id),
    "parties_id" INT REFERENCES "parties"(id) ON DELETE CASCADE
);

-- DUMMY DATA ---
-----------------
INSERT INTO "user" ("username", "password", "email")
VALUES 
	('tommyboy', 'tommy123', 'tboy'),
	('HappyGilmore', 'happy123', 'hgilmore'),
	('MichaelScott', 'michael123', 'mscott');


INSERT INTO "parties" ("board_game", "number_of_players", "experience", "location", "date_time", "image", "description", "owner_id")
VALUES 
	-- TOMMYBOY
	('Monopoly', 4, 'Novice', 'Address Here', '2022-09-01 20:00', 'https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1543278754636', 'The thrill of bankrupting an opponent, the possibility of playing a 9 hour game, and the absolution between winning and losing, could change with the roll of the dice. Experience the ups and downs by collecting property color''s sets to build houses, and hopefully upgrading to a hotel. But don’t play just for certain colors, or else your opponent may change their strategy. The more properties each player owns, the more rent can be charged, but trading is where the game can help you, or hurt you. So, be wise! Chance cards could be worth money, like $10 for winning second place in a beauty pageant or sending you to “Go” for an extra $200; but you might just get the one that says, “Go To Jail”. Buy, Sell, Dream and Scheme to Win it All!Turn a debt into an ultimate victory!', '1'),
	
	('Sorry!', 4, 'Intermediate', 'Address Here', '2022-10-01 20:00', 'https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1614722155333', 'Slide, collide and score to win the game of Sorry! Draw cards to see how far you get to move one of your pawns on the board. If you land on a Slide you can zip to the end and bump your opponents pawns – or your own! Jump over pawns and hide in your Safety zone while getting powers with the 2 power-up tokens. Keep on moving and bumping until you get all three of your pawns from your color Start to your color Home. But watch out, because if you get bumped, Sorry! It ss all the way back to Start! Sorry! and all related characters are trademarks of Hasbro.', '1'),
	
	-- HAPPYGILMORE
	('UNO', 4, 'Expert', 'Address Here', '2022-09-01 19:30', 'https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1596731709416', 'Now the classic card game of matching colors and numbers comes with customizable Wild Cards for added excitement! Players take turns racing to get rid of all their cards by matching a card in their hand with the current card shown on top of the deck either by color or number. Special Action cards deliver game-changing moments and help defeat opponents! Use the Swap Hands card to change hands with any other opponent and write your own rules using the 3 customizable (and erasable) Wild Cards! If you can''t make a match, you must draw from the central pile! Don''t forget to shout "UNO" when you only have one card remaining! The first player to reach 500 points wins. Includes 112 cards and instructions. You''ll find 19 of each color (red, green, blue, and yellow), plus 8 Draw Two, Reverse and Skip cards in every color, along with 4 Wild Cards, 4 Wild Draw Four cards, 1 Wild Swap Hands Card and 3 Wild Customizable cards.', '2'),
	
	('Monopoly', 4, 'Expert', 'Address Here', '2022-10-01 19:30', 'https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1543278754636', 'The thrill of bankrupting an opponent, the possibility of playing a 9 hour game, and the absolution between winning and losing, could change with the roll of the dice. Experience the ups and downs by collecting property color''s sets to build houses, and hopefully upgrading to a hotel. But don’t play just for certain colors, or else your opponent may change their strategy. The more properties each player owns, the more rent can be charged, but trading is where the game can help you, or hurt you. So, be wise! Chance cards could be worth money, like $10 for winning second place in a beauty pageant or sending you to “Go” for an extra $200; but you might just get the one that says, “Go To Jail”. Buy, Sell, Dream and Scheme to Win it All!Turn a debt into an ultimate victory!', '2'),

	-- Michael Scott
	('Clue', 4, 'Novice', 'Address Here', '2022-10-01 18:00', 'https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1600449593257', 'The classic detective game! In  Clue , players move from room to room in a mansion to solve the mystery of: who done it, with what, and where? Players are dealt character, weapon, and location cards after the top card from each card type is secretly placed in the confidential file in the middle of the board. Players must move to a room and then make an accusation against a character saying they did it in that room with a specific weapon. The player to the left must show one of any cards accused to the accuser if in that player\s hand. Through deductive reasoning each player must figure out which character, weapon, and location are in the secret file. To do this, each player must uncover what cards are in other players hands by making more and more accusations. Once a player knows what cards the other players are holding, they will know what cards are in the secret file. A great game for those who enjoy reasoning and thinking things out.', '3'),
	('Scrabble', 4, 'Expert', 'Address Here', '2022-9-01 17:00', 'https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1599599554926', 'The classic word-on-word showdown. Use your letters to score points and challenge your family and friends. A double or triple letter or word space will let you earn big points. It’s your word against theirs!', '3');

	
INSERT INTO "users_parties" ("users_id", "parties_id")
VALUES
	-- TOMMYBOY id = 1
	('1', '1'), ('1', '2'), -- joins own game
	('1', '3'), ('1', '4'), -- joins other games
	
	-- HAPPYGILMORE id = 2
	('2', '3'), ('2', '4'), -- joins own game
	('2', '5'), ('2', '6'), -- joins other games
	
	-- MICHAEL SCOTT id = 3
	('3', '5'), ('3', '6'), -- joins own game
	('3', '1'), ('3', '4'); -- join other games
	
	
--------------------
-- END DUMMY DATA --
   
   

DROP TABLE "users_parties", "user", "parties";
