import {gql} from 'apollo-server-express'

const typeDefs=gql`
        type detail{
            id:ID
            name:String
            place:String
            age:Int
        }

        type Query{
            hello:String
            getAllData:[detail]
            getDataById(id: ID):detail
           

        }
        input indetail{
            name:String
            place:String
            age:Int
        }
        type Mutation{
            createDetail(Data:indetail):detail
            deleteData(id:ID):String
            updateData(id:ID,data:indetail):detail
        }
`;

export default typeDefs