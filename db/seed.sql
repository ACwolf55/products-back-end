CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    description VARCHAR(75),
    price INTEGER,
    image_url TEXT
);

INSERT INTO product
(name,description,price, image_url)
VALUES
('N64','Nintendo 64 Gaming system',100,'https://steemitimages.com/DQmNjH4eHGwEJQXaf4z3CakcTcTkU5XtMQMmrKRpnayJY1Q/Capture3.PNG');