const mysql = require('mysql');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
};







var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속

let test;

var testQuery = "INSERT INTO `menber` (`num`,`name`,`id`,`pw`,`jumin`) VALUES ('12','권예준','sag7000','1234','1234512354');";

connection.query(testQuery, function (err, results, fields) { // testQuery 실행
  if (err) {
    console.log(err);
  }
  console.log(results);

});

testQuery = "SELECT * FROM menber";

connection.query(testQuery, function (err, results, fields) { // testQuery 실행
  if (err) {
    console.log(err);
  }
  console.log(results);
 
test = results;
});



connection.end(); // DB 접속 종료