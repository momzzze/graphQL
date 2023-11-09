const graphql = require('graphql');
const _ = require('lodash');
const Movie = require('../models/movie');
const Director = require('../models/director');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

// const movies = [
//     { name: 'Pulp Fiction', genre: 'Crime', id: '1', directorId: '1' },
//     { name: '1984', genre: 'Sci-Fi', id: '2', directorId: '2' },
//     { name: 'V for vendetta', genre: 'Sci-Fi-Triller', id: '3', directorId: '3' },
//     { name: 'Snatch', genre: 'Crime-Comedy', id: '4', directorId: '4' },
//     { name: 'Reservoir Dogs', genre: 'Crime', id: '5', directorId: '1' },
//     { name: 'The Hateful Eight', genre: 'Crime', id: '6', directorId: '1' },
//     { name: 'Inglourious Basterds', genre: 'Crime', id: '7', directorId: '1' },
//     { name: 'Lock, Stock and Two Smoking Barrels', genre: 'Crime-Comedy', id: '8', directorId: '4' },
//     { name: 'Snatch', genre: 'Crime-Comedy', id: '9', directorId: '4' },
//     { name: 'Big Nothing', genre: 'Crime-Comedy', id: '10', directorId: '4' },
//     { name: 'Lucky Number Slevin', genre: 'Crime-Comedy-Drama', id: '11', directorId: '4' },
//     { name: 'Layer Cake', genre: 'Crime-Comedy-Drama', id: '12', directorId: '4' },
//     { name: 'The Postman', genre: 'Drama-Sci-Fi', id: '13', directorId: '2' },


// ]
// const directors = [
//     { name: 'Quentin Tarantino', age: 55, id: '1' },
//     { name: 'Michael Radford', age: 72, id: '2' },
//     { name: 'James McTeigue', age: 51, id: '3' },
//     { name: 'Guy Ritchie', age: 50, id: '4' },
// ]


const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        director: {
            type: DirectorType,
            resolve(parent, args) {
                console.log(parent);
                // return _.find(directors, { id: parent.directorId })
            }
        }
    })
})

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: graphql.GraphQLInt },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                console.log(parent);
                // return _.filter(movies, { directorId: parent.id })
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //get data from database
                // return _.find(movies, { id: args.id })
            }
        },
        director: {
            type: DirectorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return _.find(directors, { id: args.id })
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                // return movies
            }
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve(parent, args) {
                // return directors
            }
        }
    })
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addDirector: {
            type: DirectorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
})

//schema: define types define relationships between types


