const mongoose = require("mongoose");
let connection = undefined;

const getConnection = async () => {
  if (connection) {
    console.log("returning existing connection");
    return connection;
  } else {
    console.log("creating new connection");
    connection = await mongoose.connect(
      "mongodb+srv://danimashton:oAjHXesVPgmFp2r1@cluster0.odqunjl.mongodb.net/dbboutique?retryWrites=true&w=majority/"
    );
    return connection;
  }
};

module.exports = {
  getConnection,
  mongoose,
  Schema: mongoose.Schema,
};
