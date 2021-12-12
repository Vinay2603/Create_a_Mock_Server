const mongoose = require("mongoose")

const connect = ()=>{
    return  mongoose.connect("mongodb://localhost/27170")
  }

  module.exports = connect 
