import mongoose from "mongoose";
let Schema = mongoose.Schema;

let User = new Schema({
  EnterPrise: {
    type: Schema.Types.ObjectId,
  },
  permission: {
    type: String,
  },
  id: {
    type: String,
  },
  password: {
    type: String,
  },
});

let items = new Schema({
  EnterPrise: {
    type: Schema.Types.ObjectId,
    ref: "EnterPrise",
  },
  Name: {
    type: String,
  },
  Code: {
    type: String,
  },
  amount: {
    type: String,
  },
});

let Ordering = new Schema({
  amount: {
    type: Number,
  },
  Customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Customer",
  },
});

let Request = new Schema({
  amount: {
    type: Number,
  },
  Customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Customer",
  },
});

let Estimate = new Schema({
  amount: {
    type: Number,
  },
  Customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Customer",
  },
});

let bom = new Schema({
  Name: {
    type: String,
  },
  Code: {
    type: String,
  },
  Plan: {
    type: String,
  },
  EnterPrise: {
    type: Schema.Types.ObjectId,
    ref: "EnterPrise",
  },
});

let Process = new Schema({
  bom: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "bom",
  },
  amount: {
    type: String,
  },
  status: {
    type: String,
  },
});

let sensor = new Schema({
  Model: {
    type: String,
  },
  status: {
    type: String,
  },
  Process: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Process",
  },
});

let subProcess = new Schema({
  Process: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Process",
  },
  amount: {
    type: String,
  },
  status: {
    type: String,
  },
});

let Monitoring = new Schema({
  sensor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "sensor",
  },
});

let orderAtItem = new Schema({
  items: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "items",
  },
  amount: {
    type: Number,
  },
  price: {
    type: String,
  },
});

let requestAtItem = new Schema({
  items: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "items",
  },
  id: {
    type: Schema.Types.ObjectId,
  },
  amount: {
    type: String,
  },
  price: {
    type: String,
  },
});

let estimateAtItem = new Schema({
  items: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "items",
  },
  amount: {
    type: String,
  },
  price: {
    type: String,
  },
});

let facility = new Schema({
  Name: {
    type: String,
  },
  Code: {
    type: String,
  },
  EnterPrise: {
    type: Schema.Types.ObjectId,
    ref: "EnterPrise",
  },
});

let EnterPrise = new Schema({
  name: {
    type: String,
  },
  permission: {
    type: String,
  },
});

let Rental = new Schema({
  code: {
    type: String,
  },
  name: {
    type: String,
  },
  serial: {
    type: String,
  },
  EnterPrise: {
    type: Schema.Types.ObjectId,
    ref: "EnterPrise",
  },
});

let Tags = new Schema({
  EnterPrise: {
    type: Schema.Types.ObjectId,
    ref: "EnterPrise",
  },
  name: {
    type: String,
  },
  code: {
    type: String,
  },
});
let Customer = new Schema({
  EnterPrise_id: {
    type: Schema.Types.ObjectId,
    ref: "EnterPrise",
  },
  Ordering: [Ordering],
  Request: [Request],
  Estimate: [Estimate],
  Name: {
    type: String,
  },
  Code: {
    type: String,
  },
});
let UserTable = mongoose.model("User", User);
let CustomerTable = mongoose.model("Customer", Customer);
let itemsTable = mongoose.model("items", items);
let OrderingTable = mongoose.model("Ordering", Ordering);
let RequestTable = mongoose.model("Request", Request);
let EstimateTable = mongoose.model("Estimate", Estimate);
let bomTable = mongoose.model("bom", bom);
let ProcessTable = mongoose.model("Process", Process);
let sensorTable = mongoose.model("sensor", sensor);
let subProcessTable = mongoose.model("subProcess", subProcess);
let MonitoringTable = mongoose.model("Monitoring", Monitoring);
let orderAtItemTable = mongoose.model("orderAtItem", orderAtItem);
let requestAtItemTable = mongoose.model("requestAtItem", requestAtItem);
let estimateAtItemTable = mongoose.model("estimateAtItem", estimateAtItem);
let facilityTable = mongoose.model("facility", facility);
let EnterPriseTable = mongoose.model("EnterPrise", EnterPrise);
let RentalTable = mongoose.model("Rental", Rental);
let TagsTable = mongoose.model("Tags", Tags);
export {
  UserTable,
  CustomerTable,
  itemsTable,
  OrderingTable,
  RequestTable,
  EstimateTable,
  bomTable,
  ProcessTable,
  sensorTable,
  subProcessTable,
  MonitoringTable,
  orderAtItemTable,
  requestAtItemTable,
  estimateAtItemTable,
  facilityTable,
  EnterPriseTable,
  RentalTable,
  TagsTable,
};
