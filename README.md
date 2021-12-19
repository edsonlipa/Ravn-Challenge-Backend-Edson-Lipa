# Ravn-Challenge-Backend-Edson-Lipa


>## About The Project
This is a simple api endpoint project to get specifics queries about books authors and his sales.

## Technologies
### Needed
    NodeJs
    Docker
    docker-compose

### Main Project Packages
    "express": "^4.17.2",
    "sequelize": "^6.12.0"
### Database Manager
    PostgreSQL v14.1

## Before Install

### Local
Before making queries to the database, check that your credentials are correct in the dbconfig file on

    src/database/dbconfig.js

Make sure to check the following variables

    HOST: "localhost",
    USER: "edson_siscaja",
    PASSWORD: "",
    DB: "development_db",
## Installation
### Local
    $ npm install
### Docker
    $ docker-compose build -t edsonlipa/node-ravn-challenge-api .
>## Running the app
### Local
    # production
    $ npm run prod

    # development
    $ npm run dev
### Docker
    $ docker-compose up


>## Challenges and Solutions
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
    #### **Request**

        GET http://localhost:3000/get_authors_by_birth
    #### **Params**
    default **"count"** values is 10
    
        {count:<limit-number>}
    #### **Response**
        
        {
            "status": 200,
            "message": "OK",
            "body": [ //return a list of authors
                {
                    "id": 32,
                    "name": "Roxanne Reinger",
                    "date_of_birth": "2020-12-25T18:24:31.554Z",
                }
            ]
        }
2. Get the total sales of an author by their name

    
    #### **Request**

        GET http://localhost:3000/apis/get_total_sales_by_author
    #### **Params**

        {name:<author-name>}
    #### **Response**
        
        {
            "status": 200,
            "message": "OK",
            "body": [ //return name and the total sales
                {
                    "name": "Lorelai Gilmore",
                    "total_sales": "652.00"
                }
            ]
        }

3. Get the top n performing authors ranked by sales revenue
    #### **Request**

        GET http://localhost:3000/get_top_n_performing_authors
    #### **Params**
    default **"count"** values is 10
    
        {count:<limit-number>}
    #### **Response**
        
        {
            "status": 200,
            "message": "OK",
            "body": [ //return a list of author ordered by their total sales
                {
                    "name": "Lorelai Gilmore",
                    "total_sales": "654654.00"
                }
            ]
        }



### Part 4: Build Docker Container and steps to deploy
#### Building the Docker Image:
we can start building our docker image

    $ docker build -t edsonlipa/node-ravn-challenge-api .

<!-- You’ve been asked to containerize and deploy this API to GCP Kubernetes Engine. Please attach the Dockerfile and provide a written step-by-step guide on how you would build the docker image and deploy this to Kubernetes or AWS ECS. -->
