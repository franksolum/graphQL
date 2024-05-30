/* setting up our apollo server*/
import { ApolloServer } from "@apollo/server";  /* this is to set up our server,configure it and 
tell apollos how to handle all our diifferent type of data and responses to query*/
import { startStandaloneServer } from "@apollo/server/standalone"; /* to start up the server so that we can start listen to req*/
//db
import db from "./_db.js";
//types
import { typeDefs } from "./schema.js";

const resolvers ={
    Query: {
        games() {
            return db.games
        },
        authors() {
            return db.authors
        },
        reviews() {
            return db.reviews
        }
    }
}

//server setup

const server = new ApolloServer({
    //typedefs == definitions of types of data eg author with different fields that users can eventually query
    //resolvers --- resolver fn which handle incoming request/querry
    typeDefs,
    resolvers

})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('serveer ready at port', 4000)
