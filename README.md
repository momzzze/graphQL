# graphQL
This will be place to put my code and builds while learning graphql


Give us flexibility to query for data in a more efficient way.


- Rest API end points:
    Get all movies
    domain.com/movies

    Get a single movie:
    domain.com/movies/:id

    Get all directors:
    domain.com/directors

    Get a single director:
    domain.com/directors/:id

When we need it?
 when we need to jump in different points on the graph we can get the data and send it back as part of the quest.
![graph image](https://github.com/momzzze/graphQL/blob/main/images/graphQL.png)


- GraphQL:
    Get all movies
    domain.com/graphql
    query {
        movies {
            name
            genre
            director {
                name
            }
        }
    }

    Get a single movie:
    domain.com/graphql
    query {
        movie(id: "123") {
            name
            genre
            director {
                name
            }
        }
    }

    Get all directors:
    domain.com/graphql
    query {
        directors {
            name
            age
            movies {
                name
            }
        }
    }

    Get a single director:
    domain.com/graphql
    query {
        director(id: "123") {
            name
            age
            movies {
                name
            }
        }
    }

Strong point is that I can take the data I want in example I want all movies but from movies I want only name and genre and don't need the id so I can get only the data I need. we type:
    {
        movies {
            name
            genre
        }
    }

So to start using it with node I need first express server then 2 packages witch are :
**npm i graphql express-graphql** so first graphql interact with javascript  and express-graphql to interact with express.
