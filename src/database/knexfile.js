const dotenv=require('dotenv')
dotenv.config()
module.exports={
    development:{
        client:process.env.DATABASE_TYPE,
        connection:process.env.DATABASE_CONNECTION_STRING,
    },
  
}