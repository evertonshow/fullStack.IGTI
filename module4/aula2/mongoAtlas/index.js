const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://evertonshow:pedro404392@account.ursoy.mongodb.net/account?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(async (err) => {
  // obtendo o banco e a coleção bank
  const collection = client.db("account").collection("bank");
  // trazendo os dados e transformando em array
  const documents = await collection.find().toArray();
  // console.log(documents);

  //obter as listas do banco
  const dataList = await client.db().admin().listDatabases();

  dataList.databases.forEach((db) => console.log(db.name));
  console.log(dataList);

  client.close();
});
