/*const Airtable = require('airtable')
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyX4ugTRmF0cbHdc'
});
const bases = {
  venues : { id :  "appJwsNdmaVcnKLIS", tables : ["OetTestVenues","NavLinks"]}
}


const getAll = function(base=bases.venues,tableIndex=0,view="Grid view",gotRecords=(recs) => {recs.forEach(r => console.log("retreived", r))},gotAll= err => console.log("Completed, Error is" + err)){
  let myBase = Airtable.base(base.id);
  let table = myBase(base.tables[tableIndex])
  table.select({view:view}).eachPage((records, fetchNextPage) =>{
    gotRecords(records)
    fetchNextPage();
},gotAll);
}

const getFirstPage = function(base=bases.venues,tableIndex=0,view="Grid view",max=3,gotRecords=(recs) => {recs.forEach(r => console.log("retreived", r))}){
  let myBase = Airtable.base(base.id);
  let table = myBase(base.tables[tableIndex])
  table.select({maxRecords:max,view:view}).firstPage((err, records) => {
    if (err) { console.error(err); return; }
    gotRecords(records)
});
}

const find = function(base=bases.venues,tableIndex=0,id,found=(rec) => console.log("Found record",rec)){
  let myBase = Airtable.base(base.id);
  let table = myBase(base.tables[tableIndex])
  table.find(id,(err, record) =>{
    if (err) { console.error(err); return; }
   found(record)
});
}

const create = function(base=bases.venues,tableIndex=0,records=[],created=(err,recs) => console.log("Created")){
  let myBase = Airtable.base(base.id);
  let table = myBase(base.tables[tableIndex])
  table.create(records, {typecast: true},created)
}

const update = function(base=bases.venues,tableIndex=0,recordsWithIds=[],created=(err,recs) => console.log("Updated")){
  let myBase = Airtable.base(base.id);
  let table = myBase(base.tables[tableIndex])
  table.update(recordsWithIds,created)
}

const del = function(base=bases.venues,tableIndex=0,recordIDs=[],created=(err,recs) => console.log("Deleted")){
  let myBase = Airtable.base(base.id);
  let table = myBase(base.tables[tableIndex])
  table.destroy(recordIDs,created)
}
let obj = {
  bases, getAll,getFirstPage,find,create,update,del
}*/
const a = function(){
  console.log("hello")
}
let routes = ["Hi","Hello"]
module.exports = {
  routes,a
}

