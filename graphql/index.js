import schema from "../schema/index.js";
import EnterpriseResolver from "./resolvers/enterpriseResolver.js";
import { makeExecutableSchema } from "@graphql-tools/schema";

const resolvers = {
  Query: { ...EnterpriseResolver.Query },
  Mutation: { ...EnterpriseResolver.Mutation },
};

export default makeExecutableSchema({ typeDefs: schema, resolvers });
