# Ravn-Challenge-Backend-Edson-Lipa


## About The Project
This is a simple api endpoint project to get specifics queries about books authors and his sales.

## Technologies
### Main Packages
    "express": "^4.17.2",
    "sequelize": "^6.12.0"
### Database Manager
    PostgreSQL v14.1

## Installation
### Local
    $ npm install
### Docker
    $ docker-compose build -t ravn_challenge .

## Challenges and Solutions
### Part 1: SQL

1. Who are the first 10 authors ordered by date_of_birth?
~~~~sql
    Select * from authors ORDER BY date_of_birth limit 10;
~~~~
2. What is the sales total for the author named “Lorelai Gilmore”
~~~~sql
Select authors.name , sum(sale_items.item_price * sale_items.quantity) as sales_total from sale_items 
        join books on sale_items.book_id=books.id 
        join authors on authors.id = books.author_id where authors.name ='Lorelai Gilmore' group by authors.name
~~~~
    
3. What are the top 10 performing authors, ranked by sales revenue?	
~~~~sql
Select authors.name , sum(sale_items.item_price * sale_items.quantity) as sales_total from sale_items 
        join books on sale_items.book_id=books.id 
        join authors on authors.id = books.author_id 
        group by authors.name order by sales_total desc limit 10;
~~~~
    
        
### Part 2: Basic API Endpoint
1. Get authors ordered by birth
    
2. Get the total sales of an author by their name
    GET: http://localhost:3000/apis/get_total_sales_by_author
3. Get the top n performing authors ranked by sales revenue



### Part 3: API Performance

### Part 4: Build Docker Container and steps to deploy

<!-- You’ve been asked to containerize and deploy this API to GCP Kubernetes Engine. Please attach the Dockerfile and provide a written step-by-step guide on how you would build the docker image and deploy this to Kubernetes or AWS ECS. -->
