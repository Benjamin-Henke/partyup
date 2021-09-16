-- Database name "solo_project_prime"
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- DUMMY DATA ---
-----------------
INSERT INTO "user" ("username", "password", "email")
VALUES 
	('tommyboy', 'tommyboy123', 'tboy'),
	('HappyGilmore', 'happy123', 'hgilmore'),
	('christucker', 'chris123', 'ctucker'),
	('patrickmahomes', 'chieds123', 'pmahomes'),
	('tswift', 'tswift123', 'tswift'),
	('LeslieKnope', 'lknope123', 'lknope'),
	('the_scarlet_witch', 'witch123', 'switch'),
	('miahamm', 'soccer123', 'mhamm');

INSERT INTO "parties" ("board_game", "number_of_players", "experience", "location", "date_time", "owner_id")
VALUES 
	-- TOMMYBOY
	('Takaido', 4, 'Novice', '9156 Metcalf Ave, Overland Park, KS 66212', '2021-09-24 20:00', '1'),
	('Takaido', 4, 'Intermediate', '9156 Metcalf Ave, Overland Park, KS 66212', '2021-10-01 20:00', '1'),
	('Takaido', 4, 'Novice', '9156 Metcalf Ave, Overland Park, KS 66212', '2021-10-08 20:00', '1'),
	
	-- HAPPYGILMORE
	('Risk', 4, 'Expert', '2425 Grand Blvd, Kansas City, MO 64108', '2021-10-01 19:30', '2'),
	('Strat-O-Matic Hockey (1978)', 2, 'Expert', '2425 Grand Blvd, Kansas City, MO 64108', '2021-10-02 19:30', '2'),
	('Cribbage', 4, 'Expert', '2425 Grand Blvd, Kansas City, MO 64108', '2021-10-03 19:30', '2'),
	
	-- CHRIS TUCKER
	('Apples to Apples', 8, 'Novice', '50 E 13th St Ste 200, Kansas City, MO 64106', '2021-09-25 18:45', '3'),
	('Catch Phrase', 8, 'Novice', '50 E 13th St Ste 200, Kansas City, MO 64106', '2021-10-02 18:45', '3'),

	-- PATRICK MAHOMES
	('Monoply', 4, 'Novice', '1 Arrowhead Dr, Kansas City, MO 64129', '2021-09-23 18:00', '4'),
	('Scrabble', 4, 'Expert', '1 Arrowhead Dr, Kansas City, MO 64129', '2021-10-07 17:00', '4'),
	
	-- TSWIFT -- She can just be a user that doesn't make any games id 5
	
	
	-- LESLIE KNOPE
	('Ticket To Ride', 4, 'Intermediate', '414 E 12th St, Kansas City, MO 64106', '2021-09-22 18:45', '6'),
	('Pandamic', 4, 'Novice', '414 E 12th St, Kansas City, MO 64106', '2021-09-26 18:45', '6'),
	('Pokemon Master Quests', 4, 'Expert', '414 E 12th St, Kansas City, MO 64106', '2021-09-29 18:45', '6'),
	('Forbidden Island', 4, 'Novice', '414 E 12th St, Kansas City, MO 64106', '2021-10-01 18:45', '6'),
	('Life', 4, 'Expert', '414 E 12th St, Kansas City, MO 64106', '2021-10-02 18:45', '6'),
	('Monopoly', 4, 'Novice', '414 E 12th St, Kansas City, MO 64106', '2021-10-06 18:45', '6'),
	
	-- SCARLET WITCH
	('Chess', 2, 'Expert', '13354 College Blvd, Lenexa, KS 66210', '2021-10-15 18:00', '7'),
	('Magic the Gathering', 2, 'Expert', '13354 College Blvd, Lenexa, KS 66210', '2021-10-22 17:00', '7'),
	('Chess', 2, 'Expert', '13354 College Blvd, Lenexa, KS 66210', '2021-10-29 18:00', '7'),

	-- MIA HAMM
	('Risk', 4, 'Intermediate', '1 Sporting Way, Kansas City, KS 66111', '2021-09-25 18:45', '8'),
	('Cribbage', 4, 'Intermediate', '1 Sporting Way, Kansas City, KS 66111', '2021-10-02 18:45', '8');
	
INSERT INTO "users_parties" ("users_id", "parties_id")
VALUES
	-- TOMMYBOY id = 1
	('1', '1'), ('1', '2'), ('1', '3'), -- joins own game
	('1', '5'), ('1', '7'), ('1', '20'), -- join games
	
	-- HAPPYGILMORE id = 2
	('2', '4'), ('2', '5'), ('2', '5'), -- joins own game
	('2', '14'), ('2', '15'), ('2', '7'), -- join games
	
	-- CHIRS TUCKER id = 3
	('3', '7'), ('3', '7'), -- joins own game
	('3', '6'), ('3', '18'), -- join games
	
	-- PATRICK MAHOMES id = 4.  -- game 19 chess is full
	('4', '9'), ('4', '10'), -- joins own game
	('4', '12'), ('4', '19'),
	
	-- TSWIFT id = 5
		-- Created 0 games
	('5', '1'), ('5', '2'), ('5', '10'), -- join game
	
	-- LESLIE KNOPE id = 6
	('6', '11'), ('6', '12'), ('6', '13'), ('6', '14'), ('6', '15'), ('6', '16'), -- joins own game
	('6', '1'), -- join games
	
	-- SCARLET WITCH id = 7
	('7', '17'), ('7', '18'), ('7', '19'), -- joins own game
	('7', '14'), ('7', '11'), -- join games
	
	-- MIA HAMM = 8
	('8', '20'), ('8', '21'), -- joins own game
	('8', '6'), ('8', '13'); -- join games
	
--------------------
-- END DUMMY DATA --