# Ravn-Challenge-Backend-Edson-Lipa

Part 1: SQL
You’ve been asked to write some SQL queries to report on data in a typical relational database (for example, Postgres). Write statements to answer each of the following questions. See the Tables section below for CREATE statements describing the schema of each table. Please provide seed data and include instructions on seeding the database in your Readme.

Tables
(Note that these statements are intended for use with Postgres -- if you choose a different database you may have to update them accordingly!)				
CREATE TABLE authors (
  id serial PRIMARY KEY,
  name text,
  date_of_birth timestamp
);
						
CREATE TABLE books (
  id serial PRIMARY KEY,
  author_id integer REFERENCES authors (id),
  isbn text,
);
						
CREATE TABLE sale_items (
  id serial PRIMARY KEY,
  book_id integer REFERENCES books (id),
  customer_name text,
  item_price money,			
  quantity integer
);					

1. Who are the first 10 authors ordered by date_of_birth?
    Select * from authors ORDER BY date_of_birth limit 10;
2. What is the sales total for the author named “Lorelai Gilmore”?
    Select authors.name , sum(sale_items.item_price * sale_items.quantity) as sales_total from sale_items 
        join books on sale_items.book_id=books.id 
        join authors on authors.id = books.author_id where authors.name ='Lorelai Gilmore' group by authors.name
        
3. What are the top 10 performing authors, ranked by sales revenue?	
    Select authors.name , sum(sale_items.item_price * sale_items.quantity) as sales_total from sale_items 
        join books on sale_items.book_id=books.id 
        join authors on authors.id = books.author_id 
        group by authors.name order by sales_total desc limit 10;
        
Part 2: Basic API Endpoint
You’ve been asked to write a simple API endpoint that optionally accepts a count and returns a JSON response using the query from part one question three (top 10 performing authors). We use NodeJS, but please use a language of your choice such as NodeJS, python, or Go.
The endpoint itself should be a GET operation that takes a query parameter called count. You are free to choose any URL or route name you wish.
If a call to the endpoint is invalid the API should return an error with an HTTP status code indicating what went wrong. IF no count is provided, the default count should be 10 results.

Part 3: API Performance
Please refactor your endpoint code from part 2A for performance, perhaps adding a caching layer or messaging queue.				
Part 4: Build Docker Container and steps to deploy

You’ve been asked to containerize and deploy this API to GCP Kubernetes Engine. Please attach the Dockerfile and provide a written step-by-step guide on how you would build the docker image and deploy this to Kubernetes or AWS ECS.
