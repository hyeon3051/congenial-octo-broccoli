import { buildSchema } from "graphql";

const schema = buildSchema(`
type enterprise {
  _id:ID
  name:String
  permission:String
  boms:[bom]
  users:[user]
  customers:[customer]
  tags:[tag]
  facilitys:[facility]
  rentals:[rental]
  items:[item]
}
type bom {
  id:ID
  name:String
  code:String
  processs:[process]!
  plans:[plan]!
}
type user {
  _id:ID
  permission:String
  id:String
  password:String
}
type customer {
  _id:ID
  name:String
  code:String
  orders:[order]!
  requests:[request]!
  estimates:[estimate]!
}
type tag {
  _id:ID
  name:String
  code:String
}
type facility {
  _id:ID
  name:String
  code:String
}
type rental {
  _id:ID
  code:String
  name:String
  serial:String
}
type order {
  _id:ID
  note:String
  orderAtItems:[orderAtItem]!
}
type request {
  _id:ID
  note:String
  requestAtItems:[requestAtItem]!
}
type estimate {
  _id:ID
  note:String
  estimateAtItems:[estimateAtItem]!
}
type item {
  _id:ID
  name:String
  code:String
  amount:String
}
type process {
  _id:ID
  amount:String
  status:String
  subprocess:[subproces]!
  sensors:[sensor]!
}
type subproces {
  _id:ID
  name:String
}
type sensor {
  _id:ID
  model:String
  status:String
}
type orderAtItem {
  items:[item]!
  amount:String
  _id:String
}
type requestAtItem {
  items:[item]!
  amount:String
  _id:String
}
type estimateAtItem {
  amount:String
  items:[item]!
  _id:String
}
input inputEnterprise {
  name:String
  permission:String
}
input inputBom {
  enterprise:ID
  name:String
  code:String
}
type plan {
  _id:ID
  file:String
  name:String
}
input inputUser {
  enterprise:ID
  name:String
  code:String
  password:String
}
input inputCustomer {
  enterprise:ID
  name:String
  code:String
  password:String
}
input inputTag {
  enterprise:ID
  name:String
  code:String
}
input inputFacility {
  enterprise:ID
  name:String
  code:String
}
input inputRental {
  enterprise:ID
  name:String
  code:String
  serial:String
}
input inputItem {
  enterprise:ID
   name:String
  code:String
  amount:String
}
input inputProcess {
  enterprise:ID
  status:String
  amount:String
}
input inputSubproces {
  process:ID
  name:String
}
input inputSensor {
  process:ID
  name:String
  status:String
}
input InputPlan {
  process:ID
  file:String
  name:String
}
input inputOrderAtItem {
  customer:ID
  itemsInputs:[itemsInput]!
}
input inputRequestAtItem {
  customer:ID
  itemsInputs:[itemsInput]!
}
input inputEstimateAtItem {
  customer:ID
  itemsInputs:[itemsInput]!
}
input itemsInput {
  amount:Int
  item: ID
}

  type Query {
    list: [enterprise]
  }
  type Mutation {
    createEnterprise(input: inputEnterprise): enterprise
  }


`);
export default schema;
