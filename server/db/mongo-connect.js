//https://blogs.sap.com/2016/09/05/hcp-cloud-foundry-playing-around-with-node-mongodb-and-ui5/#jive_content_id_Create_a_MongoDB_service_instance
//https://kb.objectrocket.com/mongo-db/how-to-connect-to-mongo-using-mongoose-231

let mongoose = require("mongoose");

function MongoConnect(oAppenv) {

    if (oAppenv.isLocal === true) {
        let uri = "mongodb+srv://ebs:68911565@ebsmongo.ogfnk.mongodb.net/EBS-front?retryWrites=true&w=majority";
        //let uri = "mongodb://1f86ebe5e4b0d98c10df7d0685e91bed:477d7084c3ff8497e047634706c883ad@10.11.31.120:27017,10.11.31.121:27017,10.11.31.122:27017/be836664983e8fa3?replicaSet=038b88c331069584fdab34dd661931a7";
        
        mongoose.connect(uri);
        var db = mongoose.connection;
        
        db.on('error', console.error.bind(console, 'connection error:'));
        
        db.once('open', function() {
          console.log("Successfully connected to MongoDB!");
        });

    } 
    else{
        mongoose.connect(oAppenv.services.mongodb[0].credentials.uri);

    }
}

module.exports = MongoConnect;