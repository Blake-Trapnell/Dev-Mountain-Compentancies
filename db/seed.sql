drop table orders;
drop table users_orders;

Create TABLE orders (
order_id serial primary key,
order_number INT,
customer_id INT,
Order_items text
);

CREATE TABLE users_orders (
order_id serial primary key,
customer_id INT,
customer_name text,
shipping_address TEXT
);


Insert INTO orders (order_number, customer_id, order_items)
VALUES (223, 1, 'Blanket, Pokemon lets go, sleeping-bag');

INSERT INTO users_orders (customer_id, customer_name, shipping_address)
values (1, 'Blake', '602 w 2925 s mapleton ut')