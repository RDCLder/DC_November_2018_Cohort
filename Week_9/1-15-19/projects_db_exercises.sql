-- Problems

-- What are all projects that use JavaScript?

-- SELECT * FROM project 
-- JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- JOIN tech ON project_uses_tech.tech_id = tech.id WHERE tech.id = 3;

-- What are all technologies used by the Personal Website?

-- SELECT * FROM project 
-- JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- JOIN tech ON project_uses_tech.tech_id = tech.id WHERE project.id = 4;

-- Perform a left outer join from the tech table to the project_uses_tech table - which techs has no associated project?

-- SELECT * FROM tech t
    -- LEFT OUTER JOIN project_uses_tech p ON t.id = p.tech_id 
    -- WHERE p.tech_id IS NULL;

-- Based on the previous query, get the count of the number of techs used by each project.

-- SELECT p.name, COUNT(t.id) FROM project p 
--     JOIN project_uses_tech pt ON p.id = pt.project_id
--     JOIN tech t ON t.id = pt.tech_id
-- GROUP BY p.name;

-- Perform a left outer join from the project table to the project_users_tech table - which projects has no associated tech?

-- SELECT * FROM project p
--     LEFT OUTER JOIN project_uses_tech pt ON p.id = pt.project_id
--     WHERE pt.project_id IS NULL;

-- Based on the previous query, get the count of the number of projects that use each tech.

-- SELECT t.name, COUNT(p.id) FROM project p 
--     JOIN project_uses_tech pt ON p.id = pt.project_id
--     JOIN tech t ON t.id = pt.tech_id
-- GROUP BY t.name;

-- List all projects along with each technology used by it. You will need to do a three-way join.

-- SELECT p.name, string_agg(t.name, ', ') AS tlist FROM project p 
--     JOIN project_uses_tech pt ON p.id = pt.project_id
--     JOIN tech t ON t.id = pt.tech_id
-- GROUP BY p.name;

-- List all the distinct techs that are used by at least one project.

-- SELECT DISTINCT ON (name) tech FROM tech
--     INNER JOIN project_uses_tech pt ON tech.id = pt.tech_id;

-- List all the distinct techs that are not used by any projects.

-- SELECT DISTINCT ON (name) tech FROM tech
--     FULL OUTER JOIN project_uses_tech pt ON tech.id = pt.tech_id 
--     WHERE pt.tech_id IS NULL;

-- List all the distinct projects that use at least one tech.

-- SELECT DISTINCT ON (name) p FROM project p
--     INNER JOIN project_uses_tech pt ON p.id = pt.project_id;

-- List all the distinct projects that use no tech.

-- SELECT DISTINCT ON (name) p FROM project p
--     FULL OUTER JOIN project_uses_tech pt ON p.id = pt.project_id
--     WHERE pt.project_id IS NULL;

-- Order the projects by how many tech it uses.

-- SELECT
--     p.name,
--     COUNT(t.id) AS tc 
-- FROM 
--     project p 
--     FULL OUTER JOIN project_uses_tech pt ON p.id = pt.project_id
--     FULL OUTER JOIN tech t ON t.id = pt.tech_id
-- GROUP BY
--     p.name
-- ORDER BY tc desc;

-- Order the tech by how many projects use it.

-- SELECT
--     t.name,
--     COUNT(p.id) AS pc
-- FROM 
--     project p
--     FULL OUTER JOIN project_uses_tech pt ON p.id = pt.project_id
--     FULL OUTER JOIN tech t ON t.id = pt.tech_id
-- GROUP BY
--     t.name
-- ORDER BY pc desc;

-- What is the average number of techs used by a project?

-- SELECT
--     COUNT(t.id)::decimal / MAX(p.id)
-- FROM 
--     project p
--     FULL OUTER JOIN project_uses_tech pt ON p.id = pt.project_id
--     FULL OUTER JOIN tech t ON t.id = pt.tech_id;