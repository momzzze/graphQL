const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema=require('./schema/schema');
const mongoose=require('mongoose');



const app = express();

CONNECTION_URL="mongodb+srv://owner:9208143629q@cluster0.zualrka.mongodb.net/";
mongoose.connect(CONNECTION_URL)

mongoose.connection.once('open',()=>{
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(5000, () => {
    console.log('listening for requests on port 5000')
});