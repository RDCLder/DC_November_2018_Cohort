-- Schemas

-- CREATE TABLE restaurant (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(30),
--     address VARCHAR (60),
--     category VARCHAR(20)
-- );

-- CREATE TABLE reviewer (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(30),
--     email VARCHAR(30),
--     karma INTEGER CHECK (0 <= karma and karma <= 7)
-- );

-- CREATE TABLE reviews (
--     id SERIAL PRIMARY KEY,
--     reviewer_id INTEGER REFERENCES reviewer (id),
--     stars INTEGER CHECK (1 <= stars and stars <= 5),
--     title VARCHAR(30),
--     review VARCHAR(500),
--     restaurant_id INTEGER REFERENCES restaurant (id)
-- );

------------------------------------------------------------------------------------------

-- -- Enter Data

-- INSERT INTO restaurant VALUES
-- (DEFAULT, 'Wonton Gourmet', '3211 Payne Ave, Cleveland, OH 44114', 'Chinese'),
-- (DEFAULT, 'Rudys BBQ', '21799 Katy Fwy, Katy, TX 77450', 'BBQ'),
-- (DEFAULT, 'Saltgrass Steak House', '21855 Katy Fwy, Katy, TX 77450', 'Steakhouse'),
-- (DEFAULT, 'Tiger Noodle House', '21977 Katy Fwy, Katy, TX 77450', 'Chinese'),
-- (DEFAULT, 'The Capital Grille', '5365 Westheimer Ct, Houston, TX 77056', 'Steakhouse'),
-- (DEFAULT, 'Moon Tower Inn', '3004 Canal St, Houston, TX 77003', 'American'),
-- (DEFAULT, 'Champ-Burger', '304 Sampson St, Houston, TX 77003', 'American'),
-- (DEFAULT, 'Spicy Girl', '9730 Gaston Rd, Katy, TX 77494', 'Chinese'),
-- (DEFAULT, 'Rays BBQ', '3929 Old Spanish Trail, Houston, TX 77021', 'BBQ'),
-- (DEFAULT, 'SeaSide Poke', '2118 Lamar St #101, Houston, TX 77003', 'Hawaiian');

-- INSERT INTO reviewer VALUES
-- (DEFAULT, 'Ray', 'riy2@case.edu', 4),
-- (DEFAULT, 'Professional Food Critic', 'foodcritic@email.com', 7);

-- INSERT INTO reviews VALUES
-- (DEFAULT, 1, 5, 'Best Chinese in Cleveland', 'The title says it all.', 1),
-- (DEFAULT, 1, 5, 'Pretty Good', 'Pretty good quality BBQ for the price.  I especially like how juicy and tender the moist beef brisket is.', 2),
-- (DEFAULT, 2, 5, 'Exquisite Taste', 'Generic review.', 3),
-- (DEFAULT, 1, 4, 'Decent', 'I especially like the spicy salted fish.', 4),
-- (DEFAULT, 2, 5, 'Pinnacle of Fine Dining', 'Generic review.', 5),
-- (DEFAULT, 1, 4, 'Good Deal', 'On Wednesdays they have a buy one burger and one drink and get one burger free deal.  It used to be just buy one burger, but I guess they were losing money.', 6),
-- (DEFAULT, 1, 3, 'Okay', 'Its okay I guess.', 7),
-- (DEFAULT, 1, 3, 'Decent But Pricy', 'The title says it all.', 8),
-- (DEFAULT, 1, 4, 'Neat', 'Ive actually never been, but I think its neat theres a BBQ named after me.', 9),
-- (DEFAULT, 2, 4, 'The Rising Tide', 'Generic review.', 10);

------------------------------------------------------------------------------------------

-- Questions

-- List all the reviews for a given restaurant given a specific restaurant ID.

-- SELECT * FROM reviews WHERE reviews.restaurant_id = 2;

-- List all the reviews for a given restaurant, given a specific restaurant name.

-- SELECT * FROM reviews, restaurant WHERE reviews.restaurant_id = restaurant.id and restaurant.name = 'Wonton Gourmet';

-- List all the reviews for a given reviewer, given a specific author name.

-- SELECT * FROM reviews, reviewer WHERE reviews.reviewer_id = reviewer.id AND reviewer.name = 'Professional Food Critic';

-- List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.

-- SELECT * FROM reviews INNER JOIN restaurant ON restaurant.id = reviews.restaurant_id;

-- Get the average stars by restaurant. The result should have the restaurant name and its average star rating.

SELECT AVG(reviews.stars), restaurant.name FROM reviews INNER JOIN restaurant ON reviews.restaurant_id = restaurant.id;

-- Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.
-- List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.
-- Get the average stars given by each reviewer. (reviewer name, average star rating)
-- Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)
-- Get the number of restaurants in each category. (category name, restaurant count)
-- Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)
-- Get the average star rating for a food category. (category name, average star rating)