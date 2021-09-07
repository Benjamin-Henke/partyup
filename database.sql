-- Database name "solo_project_prime"
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "avatar" VARCHAR (1000),
    "location" VARCHAR (255)
);

CREATE TABLE "parties" (
    "id" SERIAL PRIMARY KEY,
    "board_game" VARCHAR (255),
    "number_of_players" INTEGER,
    "date_time" TIMESTAMP WITHOUT TIME ZONE,
    "latitude" INTEGER,
    "longitude" INTEGER,
    "place" VARCHAR (255)
);

CREATE TABLE "my_parties" (
    "id" SERIAL PRIMARY KEY,
    "users_id" INT REFERENCES "user",
    "parties_id" INT REFERENCES "parties"
);

