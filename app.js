import express from 'express';
import{ApolloServer,gql} from 'apollo-server-express';
import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js';
import mongoose from 'mongoose'
import connectionDB from './db/connectDB.js'
import connectDB from './db/connectDB.js';
const DATABASE_URL="mongodb+srv://sudhanshu:sudhanshu@cluster0.sucui.mongodb.net/apollographql?retryWrites=true&w=majority"
const port = 3000

 const startServer = async()=>{
   


   // async function startServer(){
 const app = express();
 const apolloServer = new ApolloServer({
     typeDefs:typeDefs,
     resolvers:resolvers,
 })

 await apolloServer.start()
 apolloServer.applyMiddleware({app:app})

 app.use((req,res)=>{
     res.send("Welcome  in graphql world with express and mongodb..")
 })

 connectDB(DATABASE_URL)

 app.listen(port,()=>{
     console.log(`server is running at http://localhost:${port}`)
 })

}
startServer()