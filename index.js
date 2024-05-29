/* setting up our apollo server*/
import { ApolloServer } from "@apollo/server";  /* this is to set up our server,configure it and 
tell apollos how to handle all our diifferent type of data and responses to query*/
import { startStandaloneServer } from "@apollo/server/standalone"; /* to start up the server so that we can start listen to req*/

//server setup

const server = new ApolloServer({
    //typedefs
    //resolvers

})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000}
})

console.log('serveer ready at port', 4000)
