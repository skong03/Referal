CREATE TYPE user_status AS ENUM ('new', 'accept', 'paid');
/*
id: auto increase Id
companyId: org/companyId
name: name
status: userStatus
externalId: id mapping
email: email
balance: current balance
referalId: referalId
contribution: contribution from current user to referalId
*/
CREATE TABLE refer_user (ID  SERIAL PRIMARY KEY, companyId BIGINT, name text, status user_status, externalId VARCHAR(36), email VARCHAR(256) NOT NULL, balance decimal(10,2), referalId BIGINT, contribution decimal(10,2));


psql 'postgres://lfkvqpotyzxbzh:73b94a1d0e9068c35989ed8fe0873f394cf75ca3796d87a30c62063d1ce06de3@ec2-44-206-11-200.compute-1.amazonaws.com:5432/df6be3uva5dtsc'
--show table
\dt
DROP TABLE refer_user



INSERT INTO refer_user(companyId, name, status, externalId, email, balance) VALUES ('1', 'bob', 'new', '123e4567-e89b-12d3-a456-426655440000', 'a@b.com', 0);

select * from refer_user;