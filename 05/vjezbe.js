import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = <URI_FROM_MONGO_CLOUD>
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("OK")
  client.close();
});

