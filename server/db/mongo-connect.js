//https://blogs.sap.com/2016/09/05/hcp-cloud-foundry-playing-around-with-node-mongodb-and-ui5/#jive_content_id_Create_a_MongoDB_service_instance
//https://kb.objectrocket.com/mongo-db/how-to-connect-to-mongo-using-mongoose-231

let mongoose = require("mongoose");

function MongoConnect(oAppenv) {

    if (oAppenv.isLocal === true) {
        let uri = "mongodb+srv://ebs:68911565@ebsmongo.ogfnk.mongodb.net/EBS-front?retryWrites=true&w=majority";
        
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