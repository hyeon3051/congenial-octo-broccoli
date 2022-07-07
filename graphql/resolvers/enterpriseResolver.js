import { EnterPriseTable } from "../../model/entire.js";

const resolver = {
  Query: {
    async list() {
      return await EnterPriseTable.find();
    },
  },
  Mutation: {
    async createEnterprise(root, { input }) {
      return await EnterPriseTable.create(input);
    },
  },
};

export default resolver;
