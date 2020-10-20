//https://blogs.sap.com/2016/09/05/hcp-cloud-foundry-playing-around-with-node-mongodb-and-ui5/#jive_content_id_Create_a_MongoDB_service_instance

let mongoose = require("mongoose");

mongoose.Promise = global.Promise();

exports.connect = function(oAppenv) {
    if (oAppenv.isLocal === true) {
        return;
    } 
    else{
        mongoose.connect(oAppenv.services.mongodb[0].credentials.uri);
    }
}