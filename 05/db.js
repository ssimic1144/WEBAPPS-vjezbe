import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = <URI_FROM_MONGO_CLOUD>
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let db = null

export default () => { return new Promise((resolve, reject) => {
    if (db && client.isConnected()) {
        resolve(db)
    }
    else {
        client.connect(err => {
    if (err) {
        reject("Failed" + err);
    }
    else {
        console.log("Database connected successfully!");
        db = client.db("test");
        resolve(db);
    }
    });
    }
    });
}
