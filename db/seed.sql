CREATE TABLE houses
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  address VARCHAR(150) NOT NULL,
  city VARCHAR(150) NOT NULL,
  state VARCHAR (20) NOT NULL,
  zip  DECIMAL NOT NULL,
  image_url VARCHAR(300),
  mortgage DECIMAL,
  rent DECIMAL
);

-- I would have used the following to add new columns, but I had added them from the beginning and did not use NOT NULL so that I would not have
-- to worry about them at first

-- ALTER TABLE houses
-- ADD COLUMN image_url VARCHAR(300) NOT NULL,
-- ADD COLUMN mortgage DECIMAL NOT NULL,
-- ADD COLUMN rent DECIMAL NOT NULL;