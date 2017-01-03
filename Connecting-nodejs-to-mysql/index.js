/* var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end(); **/


var mysql  = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'my_db'
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
	
  }
});


var record= { value : "firstname: 'rajat1234', lastname: 'Kumar', email: 'afdsdfsomain.com'" };

dbconn.query('INSERT INTO test SET ?', record, function(err,res){
  if(err) throw err;

  console.log('Last record insert id:', res.insertId);
}); 

dbconn.query('SELECT * FROM test',function(err, records){
  if(err) throw err;

  console.log('Data received from Db');
  
        records = records.toString();
		console.log(records);

  
});
/* 
var queryString = 'SELECT * FROM te';
 
dbconn.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (var i in rows) {
        console.log(fields);
    }
});**/



dbconn.end(function(err) {
  //Function to close database connection
});