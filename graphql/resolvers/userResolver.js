const db = require("./db")
const schema = require("../../schema/index.js")

const {addResolversToSchema}=require("@graphql-tools/schema")


const resolvers = {
    Query: {
       async users(){
            return await user
        }
    }
}

const schemaWithuserResolvers = addResolversToSchema({schema, resolvers})