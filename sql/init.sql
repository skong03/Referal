set transaction read write; /* dataclips only */
CREATE TYPE user_status AS ENUM ('new', 'accept', 'paid');
CREATE TABLE refer_user (
    ID  SERIAL PRIMARY KEY,
    companyId BIGINT,
    name text,
    status user_status,
    referenceId VARCHAR(36) NOT NULL,
    email VARCHAR(256) NOT NULL,
    balance decimal(10,2)
);

INSERT INTO refer_user(companyId, name, status, referenceId, email) 
VALUES ('1', 'bob', 'new', '123e4567-e89b-12d3-a456-426655440000', 'a@b.com');

select * from refer_user;