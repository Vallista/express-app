var express = require('express')
var path = require('path')
var router = express.Router()

/* GET home page. */

// RESTful API

// GET -> 데이터를 얻어오는거
// POST -> 데이터를 삽입
// PUT -> 데이터를 수정
// DELETE -> 데이터를 삭제

router.get('/', function(req, res, next) {
  // req = request => 요청
  // res => response => 응답 (반환)

  // response = 응답 (반환)
  // sendFile = 파일을 보낸다.
  // path.resolve('public', 'build', 'index.html') 이 경로에 있는
  // path = Node.js 모듈 => 현재 폴더를 가져와.
  // path = /MyApp/public/build/index.html
  // resolve = 문자열 params를 받아서 경로로 만들어준다. public/build/index.html
  res.sendFile(path.resolve('public', 'index.html'))
})

router.get('/sub', function(req, res, next) {
  res.sendFile(path.resolve('public', 'index.html'))
})

module.exports = router
