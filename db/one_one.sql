CREATE TABLE passwords (
passwords_id SERIAL PRIMARY KEY,
customer_id INT,
password TEXT
);

INSERT INTO passwords (customer_id, password)
VALUES (1, 'supersecret');

select * from passwords p
JOIN users_orders u on p.customer_id = u.customer_id;