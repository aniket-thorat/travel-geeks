const mongoose = require('mongoose') ;

const CitySchema = mongoose.Schema(
  {
    city_name: {
      type: String,
      required: true,
    },
    short_desc : {
        type:String,
    },
    img:{
        type:String ,
    }
    
  },
  {
    timestamps: true,
  }
);

const City = mongoose.model("City", CitySchema);

module.exports = City;