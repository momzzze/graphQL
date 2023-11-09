const graphql = require('graphql');
const _ = require('lodash');


const { GraphQLObjectType, GraphQLString, GraphQLInt ,GraphQLSchema, GraphQLID} = graphql;

const movies = [
    { name: 'Pulp Fiction', genre: 'Crime', id: '1' },
    { name: '1984', genre: 'Sci-Fi', id: '2' },
    { name: 'V for vendetta', genre: 'Sci-Fi-Triller', id: '3' },
    { name: 'Snatch', genre: 'Crime-Comedy', id: '4' },
]
const directors = [
    { name: 'Quentin Tarantino', age: 55, id: '1' },
    { name: 'Michael Radford', age: 72, id: '2' },
    { name: 'James McTeigue', age: 51, id: '3' },
    { name: 'Guy Ritchie', age: 50, id: '4' },
]


const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: graphql.GraphQLInt }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        movie: {
            type: MovieType,
            args: {id: { type: GraphQLID }},
            resolve(parent, args){
                //get data from database
               return _.find(movies, { id: args.id })    
            }
        },
        director:{
            type: DirectorType,
            args:{id:{type: GraphQLID}},
            resolve(parent, args){
                return _.find(directors, { id: args.id })
            }
        }
    })
})

module.exports= new GraphQLSchema({
    query: RootQuery,
})

//schema: define types define relationships between types


