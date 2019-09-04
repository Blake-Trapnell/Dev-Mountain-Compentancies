CREATE TABLE favorite_foods (
food_id serial primary key,
food_name text,
user_id INT
);
create Table people (
people_id serial primary key,
person_name text,
person_id int
);


SELECT * FROM favorite_foods f
join people p ON P.person_id = f.user_id;

