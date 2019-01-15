-- PostgreSQL Exercises

------------------------------------------------------------------------------------------------------------

-- Create Database Table

-- CREATE TABLE restaurant (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name VARCHAR,
--     distance NUMERIC,
--     stars INTEGER,
--     category VARCHAR,
--     favorite_dish VARCHAR,
--     takeout BOOLEAN,
--     last_time DATE
-- );

------------------------------------------------------------------------------------------------------------

-- Insert Data

-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Wonton Gourmet', '1800', 4, 'Chinese', 'Twice-Cooked Pork', TRUE, '2017-05-30'
-- );

-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Tiger Noodle House', '1', 4, 'Chinese', 'Spicy Salted Fish', TRUE, '2019-01-02'
-- );

-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Saltgrass Steakhouse', '5', 5, 'Steakhouse', 'Prime Rib Roast', TRUE, '2018-05-25'
-- );

-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'TaDs Louisiana Cooking', '2', 2, 'American', 'Everything there sucks', FALSE, '2018-06-17'
-- );

-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Los Cucos', '3.5', 3, 'Mexican', 'Parillada', FALSE, '2018-08-10'
-- );

-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'E-Star Chinese Buffet', '8', 3, 'Chinese', 'Beef Cutlet', TRUE, '2018-08-19'
-- );

-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Rudys BBQ', '5', 4, 'BBQ', 'Pork Ribs', TRUE, '2018-10-28'
-- );

------------------------------------------------------------------------------------------------------------

--  Writing Queries

-- 1. The names of the restaurants that you gave a 5 stars to

-- SELECT name FROM restaurant WHERE stars = 5;

-- 2. The favorite dishes of all 5-star restaurants

-- SELECT favorite_dish FROM restaurant WHERE stars = 5;

-- 3. The id of a restaurant by a specific restaurant name, say 'Moon Tower'

-- SELECT id, name FROM restaurant GROUP BY id;

-- 4. restaurants in the category of 'BBQ'

-- SELECT * FROM restaurant WHERE category = 'BBQ';

-- 5. restaurants that do take out

-- SELECT * FROM restaurant WHERE takeout = TRUE;

-- 6. restaurants that do take out and is in the category of 'BBQ'

-- SELECT * FROM restaurant WHERE takeout = TRUE AND category = 'BBQ';

-- 7. restaurants within 2 miles

-- SELECT * FROM restaurant WHERE distance < 2;

-- 8. restaurants you haven't ate at in the last week

-- SELECT * FROM restaurant WHERE last_time > '2019-01-07';

-- 9. restaurants you haven't ate at in the last week and has 5 stars

-- SELECT * FROM restaurant WHERE last_time > '2019-01-07' AND stars = 5;