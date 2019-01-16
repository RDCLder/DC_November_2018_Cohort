-- Pen and Paper Exercises

----------------------------------------------------------------------------------------------------

-- Step 1

-- Pets and Owners
    -- One to Many (usually)
    -- One owner can have multiple pets
    -- One pet usually only has one owner

-- Blog posts and Authors
    -- One to many (usually)
    -- One author can have multiple blog posts
    -- One blog post usually only has one author

-- Teachers and Students
    -- Many to many (usually)
    -- One teacher can have multiple students
    -- One student can have multiple teachers
    -- Joined by something like subject or classroom

-- Parents and Children
    -- Two to many (usually)
    -- One parent can have multiple kids
    -- One kid can have two parents (usually)
    -- Joined by family

-- Classes and Objects
    -- One to many (usually)
    -- One class can have multiple object instances
    -- One object can only have one class (usually, exception is something like multipe inheritance)

-- Projects and Contributors
    -- Many to many (usually)
    -- One contributor can work on multiple projects
    -- One project can have multiple contributors
    -- Joined by something like team or company

----------------------------------------------------------------------------------------------------

-- Step 2

-- Projects and Contributors

-- CREATE TABLE projects (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(30)
-- );

-- CREATE TABLE contributors (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(30),
-- );

-- CREATE TABLE project_contributor (
--     id SERIAL PRIMARY KEY,
--     project_id INTEGER REFERENCES projects (id),
--     contributor_id INTEGER REFERENCES contributors (id)
-- );