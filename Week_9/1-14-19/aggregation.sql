-- Aggregation and Sorting Queries

------------------------------------------------------------------------------------------

-- 1. list restaurants by the closest distance.

-- SELECT name, distance FROM restaurant ORDER BY distance;

------------------------------------------------------------------------------------------

-- 2. list the top 2 restaurants by distance.

-- SELECT name, distance FROM restaurant ORDER BY distance LIMIT 2;

------------------------------------------------------------------------------------------

-- 3. list the top 2 restaurants by stars.

-- SELECT name, stars AS best FROM restaurant ORDER BY GREATEST(stars) DESC LIMIT 2;

------------------------------------------------------------------------------------------

-- 4. list the top 2 restaurants by stars where the distance is less than 2 miles.


-- SELECT name, stars AS best FROM restaurant WHERE distance < 2 ORDER BY GREATEST(stars) DESC LIMIT 2;

------------------------------------------------------------------------------------------

-- 5. count the number of restaurants in the db.

-- SELECT COUNT(*) FROM restaurant;

------------------------------------------------------------------------------------------

-- 6. count the number of restaurants by category.

-- SELECT COUNT(category), category FROM restaurant GROUP BY category;

------------------------------------------------------------------------------------------

-- 7. get the average stars per restaurant by category.

-- SELECT AVG(stars), category FROM restaurant GROUP BY category;

------------------------------------------------------------------------------------------

-- 8. get the max stars of a restaurant by category.

-- SELECT MAX(stars), category FROM restaurant GROUP BY category;