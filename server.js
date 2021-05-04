const mongodb = require( 'mongodb' )
const mongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

mongoClient.connect( connectionURL , { useNewUrlParser : true , useUnifiedTopology: true } , ( error , client ) => {//CALLBACK
    if( error ) {
        return console.log( 'Unable to connect to database' );
    }
    const db = client.db( databaseName )

    db.collection( 'users' ).insertOne({
        name : 'Eduardo',
        age : 25
    } , ( error , result ) => {
        if( error ) {
            return console.log( 'Unable to insert user' )
        }
        console.log( result.ops )
    })
    
})